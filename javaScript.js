// Array de objetos contendo as perguntas e a resposta correta, representada pelo índice do objeto.
const questions = [
    {
      question: 'What keyword is used to declare a variable in JavaScript?',
      answers: [
        'let',
        'var',
        'const'
      ],
      correct: 2
    },
    {
      question: 'Which function is used to print content to the console in JavaScript?',
      answers: [
        'console.print()',
        'print()',
        'console.log()'
      ],
      correct: 2
    },
    {
      question: 'What type of language is JavaScript?',
      answers: [
        'Markup language',
        'Programming language',
        'Query language'
      ],
      correct: 1
    },
    {
      question: 'What does DOM stand for in JavaScript?',
      answers: [
        'Document Object Model',
        'Data Object Model',
        'Document Oriented Model'
      ],
      correct: 0
    },
    {
      question: 'What operator is used for strict equality comparison in JavaScript?',
      answers: [
        '==',
        '===',
        '=',
      ],
      correct: 1
    },
    {
      question: 'What method is used to remove the last element from an array in JavaScript?',
      answers: [
        'pop()',
        'removeLast()',
        'deleteLast()'
      ],
      correct: 0
    },
    {
      question: 'Which symbol is used for single-line comments in JavaScript?',
      answers: [
        '//',
        '/* */',
        '<!-- -->'
      ],
      correct: 0
    },
    {
      question: 'What function is used to convert a string to an integer in JavaScript?',
      answers: [
        'parseInt()',
        'stringToInteger()',
        'toInteger()'
      ],
      correct: 0
    },
    {
      question: 'What method is used to add new elements to the end of an array in JavaScript?',
      answers: [
        'push()',
        'append()',
        'addElement()'
      ],
      correct: 0
    },
    {
      question: 'What is the result of 5 + "5" in JavaScript?',
      answers: [
        '10',
        '55',
        'Error'
      ],
      correct: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
  
  for(const item of questions)
  {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector('h3').textContent = item.question;

  for(let answer of item.answers){
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    dt.querySelector('span').textContent = answer;
  
    quizItem.querySelector('dl').appendChild(dt);
  }
  
  quizItem.querySelector('dl dt').remove;
  
  quiz.appendChild(quizItem); // Coloca a pergunta na tela

  
  }