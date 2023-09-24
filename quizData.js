// quizData.js
const eq1 = '$$\\text{Una sucesión }  (x_{n}) \\text{ en un espacio métrico } (X,d)$$';
const eq2 = '$$ \\text{ ____ o es ____ a } x \\in\\ X \\text{ si } $$';
const eq3 = '$$\\lim_{n \\to\\ \\infty} d(x_n, x) = 0$$';
const eq4 = '$$\\text{Sea } (X, || \\, ||) \\text{ un espacio normado con campo } K. $$';
const eq5 = '$$\\text{¿Cómo se le llama a la siguiente propiedad:} $$';
const eq6 = '$$||x||>0 \\text{ y } ||x||=0 \\iff\\ x=0 \\text{?}$$';
const eq7 = '$$||\\lambda\\ x||= |\\lambda| ||x|| \\, \\forall\\ x \\in\\ X \\text{ y } \\lambda\\ \\in\\ K \\text{?}$$';
const eq8 = '$$||x + y|| \\leq\\ ||x|| + ||y|| \\, \\forall\\ x,y \\in\\ X \\text{?}$$';
const eq9 = '$$p>1 \\text{ y } 1/p + 1/q =1$$';
const eq10 = '$$p \\geq\\ 1$$';
const eq11 = '$$\\sum_{j=1}^{n} |x_j y_j| \\leq\\ \\left( \\sqrt{\\sum_{k=1}^{n} |x_k|^{p} } \\right)^{1/p}  \\left(\\sqrt{\\sum_{m=1}^{n}} |y_m|^{q} \\right)^{1/q} $$';
const eq12 = '$$\\left( \\sum_{j=1}^{n} |x_j + y_j|^{p}\\right)^{1/p} \\leq\\ \\left( \\sqrt{\\sum_{k=1}^{n} |x_k|^{p} } \\right)^{1/p}  + \\left(\\sqrt{\\sum_{m=1}^{n}} |y_m|^{q} \\right)^{1/q}  $$';
const eq13 = '$$\\text{ Cada subespacio de dimensión ____ }$$'
const eq14 = '$$\\text{ de un espacio normado } X \\text{ es completo.}$$'
const eq15 = '$$\\text{ En particular,  }$$'
const eq16 = '$$\\text{ cada espacio normado de dimensión ____ es completo.}$$'
const eq17 = '$$\\text{Sea una sucesión infinita de términos } a_1,a_2,..., $$'
const eq18 = '$$\\text{ y se define su suma parcial como}$$'
const eq19 = '$$S_i = \\sum_{n=1}^{i} a_n.$$'
const eq20 = '$$\\text{Si la suma parcial converge cuando } \\text{i} \\to\\ \\infty\\ \\text{,} $$'
const eq21 = '$$\\text{entonces se dice que la serie es }$$'
var quizQuestions = [
    {
      question: "Completa: "+eq1+" "+eq2+" "+eq3+" ",
      //question:  eq2,
        options: ["Converge, divergente", "Converge, convergente", "Diverge, convergente", "Diverge, divergente"],
        correctAnswer: 1,
        feedback2: " Esa es la definición de convergencia", 
        feedback: " Cuidado con los juegos de palabras"
    },
    {
      question: " La sucesión (1/n) sobre X=ℕ es un buen ejemplo de una sucesión divergente. Sin embargo, existe su límite. ¿Qué condición se necesita para que sea convergente? ",
      //question:  eq2,
        options: ["Para que sea convergente se necesitaría que el límite esté en X", "La sucesión debe ser de Cauchy en X", "La sucesión si converge", "La sucesión siempre diverge"],
        correctAnswer: 0,
        feedback2: " Si el límite está en el espacio, la sucesión es convergente", 
        feedback: " Cuidado, ¿qué debe cumplir el punto límite?"
    },
    {
      question: " "+eq4+" "+eq5+" "+eq6+" ",
      //question:  eq2,
        options: ["Linealidad", "Positividad semidefinida", "Homogeneidad", "Desigualdad del triángulo"],
        correctAnswer: 1,
        feedback2: " La norma por definición debe ser positiva semidefinida", 
        feedback: " Recuerda las propiedades de la norma"
    },
    {
      question: " "+eq4+" "+eq5+" "+eq7+"",
      options: ["Linealidad", "Positividad semidefinida", "Homogeneidad", "Desigualdad del triángulo"],
      correctAnswer: 2,
      feedback2: " La norma por definición debe satisfacer homogeneidad", 
      feedback: " Recuerda las propiedades de la norma"
    },
    {
      question: " "+eq4+" "+eq5+" "+eq8+"",
      options: ["Linealidad", "Positividad semidefinida", "Homogeneidad", "Desigualdad del triángulo"],
      correctAnswer: 3,
      feedback2: " Esta es la desigualdad del triángulo para normas", 
      feedback: " Recuerda las propiedades de la norma"
    },
  { 
    question: "¿Qué condición adicional hay que satisfacer para que un espacio normado sea un espacio de Banach?",
    options: [
        "Que el espacio sea completo",
        "Que el espacio sea compacto",
        "Que el espacio sea métrico y topológico",
        "Que toda sucesión sea Cauchy sea divergente"
    ],
    correctAnswer: 0,
    feedback2: " Es de Banach",
    feedback: " Revise la definición de espacio de Banach"
},
{
    question: "Para "+eq9+" se cumple: "+eq11+" y para "+eq10+" se cumple: "+eq12+" ¿Qué nombre reciben estas desigualdades?",
    options: [
        "Desigualdad de Hölder y Minkowski",
        "Desigualdad de Hölder y Cauchy-Schwarz",
        "Desigualdad de Minkowski y Cauchy-Schwarz",
        "Desiguadad del triangulo generalizada y Cauchy-Schwarz lp"
    ],
    correctAnswer: 0,
    feedback2: " Son esas",
    feedback: " Revisa la tarea"
},
{
  question: "Completa: "+eq13+" "+eq14+" "+eq15+" "+eq16+"",
  options: [
      "finita, finita",
      "infinita, finita",
      "infinita, infinita",
      "finita, infinita"
  ],
  correctAnswer: 0,
  feedback2: " Un espacio normado de dimensión finita es completo",
  feedback: " Lee con cuidado"
},
{
  question: " "+eq17+" "+eq18+" "+eq19+" "+eq20+" "+eq21+" ",
  options: [
      "Convergente y debe cumplir el criterio de Cauchy",
      "Convergente y debe cumplir el criterio de la raíz",
      "Divergente y debe cumplir el criterio de Cauchy",
      "No nos dice nada acerca de la convergencia o divergencia de la serie"
  ],
  correctAnswer: 0,
  feedback2: " La serie tiende a cierto límite pero debe cumplir el criterio de la Cauchy",
  feedback: " Revisa los criterios de convergencia"
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

