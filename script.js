// Quiz Variables
var currentQuestionIndex = 0;
var score = 0;
var timerValue = 10; // Timer duration in seconds
var timerInterval; // Reference to the timer interval

// DOM Elements
var welcomeContainer = document.getElementById('welcome-container');
var startArea = document.getElementById('start-area');
var nameInput = document.getElementById('name-input');
var startButton = document.getElementById('start-button');
var quizContainer = document.getElementById('quiz-container');
var questionArea = document.getElementById('question-area');
var optionsArea = document.getElementById('options-area');
var feedbackArea = document.getElementById('feedback-area');
var scoreArea = document.getElementById('score-area');
var scoreElement = document.getElementById('score');
var totalQuestionsElement = document.getElementById('total-questions');
var progressBar = document.getElementById('progress-bar');
var userName = ''; // Variable to store the user name

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(updateTimer, 100);
}

// Function to update the timer value and check for timeout
function updateTimer() {
  timerValue -= 0.1;
  var progressPercentage = (timerValue / 10) * 100;
  progressBar.style.width = progressPercentage + '%';

  if (timerValue <= 0) {
    clearInterval(timerInterval);
    checkAnswer(null); // Automatically check the answer as time runs out
  }
}

// Function to display the current question and options
function displayQuestion() {
  // Reset the timer value and start the timer
  timerValue = 10;
  progressBar.style.width = '100%';
  startTimer();

  var currentQuestion = quizQuestions[currentQuestionIndex];
  questionArea.textContent = currentQuestion.question;

  optionsArea.innerHTML = '';
  for (var i = 0; i < currentQuestion.options.length; i++) {
    var option = document.createElement('div');
    option.className = 'option';
    option.innerHTML =
      '<input type="radio" name="answer" id="option' +
      i +
      '" value="option' +
      i +
      '"><label for="option' +
      i +
      '">' +
      currentQuestion.options[i] +
      '</label>';
    option.setAttribute('data-index', i);
    option.querySelector('label').addEventListener('click', checkAnswer);
    optionsArea.appendChild(option);
  }
}

function checkAnswer(event) {
  clearInterval(timerInterval); // Stop the timer
  var selectedOption = event ? event.currentTarget.parentNode : null;
  var selectedAnswerIndex = selectedOption ? parseInt(selectedOption.getAttribute('data-index')) : null;
  var currentQuestion = quizQuestions[currentQuestionIndex];

  if (selectedAnswerIndex !== null && selectedAnswerIndex === currentQuestion.correctAnswer) {
      feedbackArea.textContent = 'Correcto! ' 
      score++;
  } else if (selectedAnswerIndex === null && timerValue <= 0) {
      feedbackArea.textContent = 'Time Out!' + currentQuestion.feedback;
  } else {
      feedbackArea.textContent = 'Incorrecto. ' + currentQuestion.feedback;
  }
  // Disable further interaction with options
  var options = optionsArea.getElementsByClassName('option');
  for (var i = 0; i < options.length; i++) {
    options[i].querySelector('label').removeEventListener('click', checkAnswer);
    options[i].classList.add('disabled');
  }

  // Move to the next question after a brief delay
  setTimeout(nextQuestion, 2000);
}

// Function to move to the next question
function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    // Display the final score when all questions have been answered
    displayScore();
  }
}

// Function to display the final score
function displayScore() {
  questionArea.textContent = '';
  optionsArea.innerHTML = '';
  feedbackArea.textContent = '';

  var percentage = (score / quizQuestions.length) * 100;
  var message = '';

  if (percentage >= 50) {
    message = 'Bien ' + userName + '! , tu puntaje es ' + percentage;
  } else {
    message = 'Puedes mejorar, ' + userName + ', tu puntaje es ' + percentage;
  }

  scoreElement.textContent = score;
  totalQuestionsElement.textContent = quizQuestions.length;
  scoreArea.style.display = 'block';
  scoreArea.innerHTML = '<p>' + message + '</p>';
  progressBar.style.display = 'none';

  // Create restart button
  var restartButton = document.createElement('button');
  restartButton.textContent = 'Another round, ' + userName + ' ?';
  restartButton.className = 'btn btn-primary';
  restartButton.addEventListener('click', restartGame);
  scoreArea.appendChild(restartButton);
  scoreArea.appendChild(document.createElement('br'));

  // Create new game button
  var newGameButton = document.createElement('button');
  newGameButton.textContent = 'New Game';
  newGameButton.className = 'btn btn-secondary';
  newGameButton.addEventListener('click', function() {
    location.reload(); // Refresh the page to start a new game
  });
  scoreArea.appendChild(newGameButton);



}

// Function to restart the game
function restartGame() {
  // Reset the game variables
  currentQuestionIndex = 0;
  score = 0;
  timerValue = 10;

  // Reset the UI
  scoreArea.style.display = 'none';
  progressBar.style.display = 'block';
  nameInput.value = userName; // Pre-fill the name input field with the stored user name

  // Start the quiz by displaying the first question
  displayQuestion();
}

// Event listener for start button click
startButton.addEventListener('click', function() {
  userName = nameInput.value.trim(); // Store the user name
  welcomeContainer.style.display = 'none';
  quizContainer.classList.remove('d-none');
  displayQuestion();
});


var percentage = (score / quizQuestions.length) * 100;
// ... your displayScore function ...

