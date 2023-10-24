// quizData.js
const q1_text1 = "La siguiente serie es una aproximación de funciones mediante una serie de potencias o suma de potencias enteras de polinomios de tipo ";
const q1_eq1 = "$$( x - a ) ^n.$$";
const q1_text2 = "Dicha suma se calcula a partir de las derivadas de la función para un determinado valor. Esta serie es ";
const q1_eq2 = "$$C^{\\infty}$$";
const q1_text3 = " o infinitamente derivable: ";
const q1_eq3 = "$$f(a) + \\frac{f'(a)}{1!}(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + ... + \\frac{f(n)(a)}{n!}(x-a)^n +$$";
const q2_text1 = "Si en la serie anterior de una función real o compleja ";
const q2_eq1 = "f(x)";
const q2_text2 = " alrededor de cierto número ";
const q2_eq2 = "a";
const q2_text3 = " ¿qué ocurre si ";
const q2_eq3 = "a = 0 ?";
const q3_text1 = "La serie de Laurent es muy útil para investigar el comportamiento de funciones cerca de singularidades o puntos ordinarios. ¿Qué tipo de singularidades pueden encontrarse?";
const q4_text1 = "Para una serie de Laurent ¿qué ocurre si la serie no tiene potencias negativas?";
const q5_text1 = "Para una serie de Laurent ¿qué ocurre si la serie tiene una cantidad finita de potencias negativas?";
const q6_text1 = "Para una serie de Laurent ¿Qué ocurre si la serie tiene infinitas potencias negativas?";
const eq1 = '$$\\text{Una sucesión }  (x_{n}) \\text{ en un espacio métrico } (X,d)$$';
const q7_text1 = "Completa la frase: ``Un _____ $$T: D(T) \\subset\\ X \\to\\ Y$$ es ____ si existe $$M \\geq\\ 0$$ tal que ";
const q7_text2 = "$$||T x ||_{Y} \\leq\\ M ||x||_{X}, \\forall\\ x \\in\\ D(T)$$";
var quizQuestions = [
    {

      question: q1_text1 + q1_eq1 + q1_text2 + q1_eq2 + q1_text3 + q1_eq3,
      options: [
          "Serie de Taylor",
          "Serie de Maclaurin",
          "Serie hipergeométrica",
          "Serie de Laurent"
      ],
        correctAnswer: 0,
        feedback2: "  ", 
        feedback: "  "
    },
    {
      question: q2_text1 + q2_eq1 + q2_text2 + q2_eq2 + q2_text3 + q2_eq3,
      options: [
          "Se convierte en una serie de Taylor en forma integral",
          "Se convierte en una serie de Maclaurin",
          "No ocurre nada",
          "Se convierte en una serie de Laurent"
      ],
        correctAnswer: 1,
        feedback2: " ", 
        feedback: " "
    },
    {
      question: q3_text1,
      options: [
          "Puntos ordinarios",
          "Singularidades regulares y esenciales",
          "Singularidades ordinarias",
          "Singularidades propias e impropias"
      ],
        correctAnswer: 1,
        feedback2: " ", 
        feedback: " "
    },
    {
      question: q4_text1,
      options: [
          "La singularidad es evitable o regular",
          "La singularidad es un polo",
          "La singularidad es una singularidad esencial",
          "Ninguna de las anteriores"
      ],
      correctAnswer: 0,
      feedback2: " ", 
      feedback: " "
    },
    {
      question: q5_text1,
      options: [
          "La singularidad es evitable o regular",
          "La singularidad es un polo",
          "La singularidad es una singularidad esencial",
          "Ninguna de las anteriores"
      ],
      correctAnswer: 1,
      feedback2: " ", 
      feedback: " "
    },
  { 
    question: q6_text1,
    options: [
        "La singularidad es evitable o regular",
        "La singularidad es un polo",
        "La singularidad es una singularidad esencial",
        "Ninguna de las anteriores"
    ],
    correctAnswer: 2,
    feedback2: " ",
    feedback: " "
},
{
  question: q7_text1 + q7_text2,
  options: [
      "Operador lineal, acotado",
      "Operador diferencial, lineal",
      "Sistema de operadores, lineal",
      "Operador integral, acotado"
  ],
  correctAnswer: 0,
  feedback2: " ",
  feedback: " "
}
  ];
 

  function randomizeOptions(question) {
    let options = [...question.options];
    let correctOption = options[question.correctAnswer];
    let randomizedOptions = [];
    
    while (options.length) {
      let randomIndex = Math.floor(Math.random() * options.length);
      randomizedOptions.push(options[randomIndex]);
      options.splice(randomIndex, 1);
    }
  
    // Find the new index of the correct option after shuffling
    let newCorrectIndex = randomizedOptions.indexOf(correctOption);
  
    return {
      ...question,
      options: randomizedOptions,
      correctAnswer: newCorrectIndex
    };
  }
  

  function addQuestionToDOM(question, qIndex) {
    let questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.setAttribute('data-question', qIndex);

    let questionTitle = document.createElement('h2');
    questionTitle.textContent = question.question;
    questionDiv.appendChild(questionTitle);

    question.options.forEach((option, oIndex) => {
        //... tu código anterior para agregar opciones ...
    });

    container.appendChild(questionDiv);

    // Procesamos el contenido LaTeX de la pregunta recién agregada
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, questionDiv]);
}


  
  for (let i = 0; i < quizQuestions.length; i++) {
    quizQuestions[i] = randomizeOptions(quizQuestions[i]);
  }
   
  let container = document.getElementById('quizContainer');

  quizQuestions.forEach((question, qIndex) => {
    let questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.setAttribute('data-question', qIndex);
  
    let questionTitle = document.createElement('h2');
    questionTitle.textContent = question.question;
    questionDiv.appendChild(questionTitle);
  
    question.options.forEach((option, oIndex) => {
      let optionDiv = document.createElement('div');
      
      let radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'answer' + qIndex;
      radio.value = oIndex;
      
      let label = document.createElement('label');
      label.textContent = option;
      
      optionDiv.appendChild(radio);
      optionDiv.appendChild(label);
      
      let feedback = document.createElement('div');
      feedback.className = 'feedback';
      feedback.setAttribute('data-feedback', oIndex);
      feedback.textContent = (oIndex === question.correctAnswer) ? "Correct!" : "Wrong!";
      optionDiv.appendChild(feedback);
      
      questionDiv.appendChild(optionDiv);
      //MathJax.Hub.Queue(["Typeset", MathJax.Hub, questionDiv]);
      //MathJax.typesetPromise();
      
    });
  
    container.appendChild(questionDiv);
    //MathJax.typesetPromise();
    // Llamamos a MathJax para que procese el contenido
    MathJax.typesetPromise();

  });
  
  let points = 0;

  document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    radio.addEventListener('change', function(e) {
        //... existing code ...

        let selectedQuestion = quizQuestions[e.target.closest('.question').getAttribute('data-question')];
        let selectedOption = parseInt(e.target.value);

        if (selectedOption === selectedQuestion.correctAnswer) {
            points++; // Increment the points
        }

        //... remaining code ...
    });
});

