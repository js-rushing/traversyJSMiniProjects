"use strict";

var quizData = [{
  question: 'Which language runs in a web browser?',
  a: 'Java',
  b: 'C',
  c: 'Python',
  d: 'JavaScript',
  correct: 'd'
}, {
  question: 'What does CSS stand for?',
  a: 'Central Style Sheets',
  b: 'Cascading Style Sheets',
  c: 'Cascading Simple Sheets',
  d: 'Cars SUVs Sailboats',
  correct: 'b'
}, {
  question: 'What does HTML stand for?',
  a: 'Hypertext Markup Language',
  b: 'Hypertext Markdown Language',
  c: 'Hyperloop Machine Language',
  d: 'Helicopters Terminals Motorboats Lamborginis',
  correct: 'a'
}, {
  question: 'What year was JavaScript launched?',
  a: '1996',
  b: '1995',
  c: '1994',
  d: 'none of the above',
  correct: 'b'
}];
var quiz = document.querySelector('#quiz'),
    answerEls = document.querySelectorAll('.answer'),
    questionEl = document.querySelector('#question'),
    a_text = document.querySelector('#a_text'),
    b_text = document.querySelector('#b_text'),
    c_text = document.querySelector('#c_text'),
    d_text = document.querySelector('#d_text'),
    submitBtn = document.querySelector('#submit');
var currentQuiz = 0,
    score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  var currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(function (answerEl) {
    return answerEl.checked = false;
  });
}

function getSelected() {
  var answer;
  answerEls.forEach(function (answerEl) {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener('click', function () {
  var answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = "\n                <h2>You answered ".concat(score, " of ").concat(quizData.length, " questions correctly</h2>\n\n                <button onclick='location.reload()'>Reload</button>\n            ");
    }
  }
});