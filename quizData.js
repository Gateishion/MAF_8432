// quizData.js
const eq1 = '$$\\text{Sea }  x_{0} \\in\\ X \\text{ y } r>0. \\text{ Definimos:}$$';
const eq2 = '$$B(x_{0};r) = \\{ x \\in\\ X \\, | \\, d(x,x_{0}) < r \\}$$';
const eq3 = '$$B(x_{0};r) = \\{ x \\in\\ X \\, | \\, d(x,x_{0}) \\leq\\ r \\}$$';
const eq4 = '$$B(x_{0};r) = \\{ x \\in\\ X \\, | \\, d(x,x_{0}) = r \\}$$';
const eq5 = '$$\\text{Sea }  A \\subset\\ X \\text{ y } x \\in\\ X, \\text{ tal que }$$';
const eq6 = '$$B(x; \\epsilon) \\cap\\ A \\neq\\ \\emptyset\\ \\, \\forall\\ \\epsilon\\ >0.$$';
const eq7 = '$$\\text{ Entonces se dice que } x$$';
const eq8 = '$$\\text{Sea }  A \\subset\\ X. \\text{ La siguiente definición corresponde a }$$';
const eq9 = '$$\\partial\\ A := \\{ x \\in\\ X \\, | \\, \\text{ es un punto frontera de } A \\}$$';
const eq10 = '$$\\text{Para todo } n \\in\\ \\text{ℕ} \\text{ y } A \\subset\\ \\text{ℝ}^{n} \\text{ con la topología Euclideana. }$$';
const eq11 = '$$A \\text{ es compacto si y sólo si, } A \\text{ es cerrado y acotado.}$$'
var quizQuestions = [
  {
    question: "El siguiente teorema:  "+eq10+" "+eq11+" corresponde a:",
    options: [
        "Teorema espacio métrico segundo numerable",
        "Teorema de Heine-Borel",
        "Teorema continuidad topológica",
        "Teorema continuidad en espacios métricos"
    ],
    correctAnswer: 1,
    feedback2: " El teorema de Heine-Borel habla de subconjuntos compactos sobre campos reales o complejos",
    feedback: " Este teorema fue fundamental en el curso de cálculo vectorial (Cálculo 3)"
  },
    {
      question: " "+eq1+" "+eq2+" ",
      //question:  eq2,
        options: ["Como la Bola abierta con centro en x₀ y radio r", "Como la Bola cerrada con centro en x₀ y radio r", "Como la Esfera con centro en x₀ y radio r", "Como el conjunto vacío ∅"],
        correctAnswer: 0,
        feedback2: " Esa es la definición de Bola abierta", 
        feedback: " Observa bien las desigualdades"
    },
    {
      question: " "+eq1+" "+eq3+" ",
      //question:  eq2,
        options: ["Como la Bola abierta con centro en x₀ y radio r", "Como la Bola cerrada con centro en x₀ y radio r", "Como la Esfera con centro en x₀ y radio r", "Como el conjunto vacío ∅"],
        correctAnswer: 1,
        feedback2: " Esa es la definición de Bola cerrada", 
        feedback: " Observa bien las desigualdades"
    },
    {
      question: " "+eq1+" "+eq4+" ",
      //question:  eq2,
        options: ["Como la Bola abierta con centro en x₀ y radio r", "Como la Bola cerrada con centro en x₀ y radio r", "Como la Esfera con centro en x₀ y radio r", "Como el conjunto vacío ∅"],
        correctAnswer: 2,
        feedback2: " Esa es la definición de esfera", 
        feedback: " Observa bien las desigualdades"
    },
    {
      question: " "+eq5+" "+eq6+" "+eq7+"",
      options: [
          "Es un punto frontera o de acumulación de A",
          "Es la frontera de A",
          "Es la cerradura de A",
          "Es un punto interior de A"
      ],
      correctAnswer: 0,
      feedback2: " Es la definición de punto de acumulación",
      feedback: " :("
    },
    {
      // question: "Definimos una familia de elementos de un conjunto X como todos los elementos tales que: (X_α)_(α ∈ I) con x_α ∈ X la imagen de α ∈ I. En donde I mapea elementos a X. Esto lo vuelve diferente a simplemente tomar un subconjunto de X, dado que",
      question: " "+eq8+" "+eq9+"",
      options: [
          "Punto frontera o de acumulación de A",
          "La frontera de A",
          "Es la cerradura de A",
          "Es un punto interior de A"
      ],
      correctAnswer: 1,
      feedback2: "Es la definición de la frontera de un conjunto",
      feedback: " :("
    },
  {
    question: "Completa la frase: ``Las bolas abiertas son ------------------------- y las bolas cerradas son -------------------''",
    options: [
        "Intervalos",
        "Conjuntos abiertos y conjuntos cerrados",
        "Bolas semi abiertas y semi cerradas",
        "Bases de vecindades"
    ],
    correctAnswer: 1,
    feedback2: " Las bolas heredan propiedades topológicas",
    feedback: " Lee con cuidado"
},
{
    question: "Completa la frase: ``Todos los espacios métricos son --------------, la -------- define la noción de ---------, pero no todos los espacios topológicos son métricos.",
    options: [
        "normados, norma, vector",
        "topológicos, métrica, abierto",
        "vectoriales, topología, intervalo",
        "topológicos, métrica, ángulo"
    ],
    correctAnswer: 1,
    feedback2: " Los espacios métricos son espacios topológicos, aunque no ocurre en sentido contrario",
    feedback: " Lee con cuidado"
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

