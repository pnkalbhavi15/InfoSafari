const quizData = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
    ],
    correct: 0,
  },
  {
    question:
      "Which programming language is known as 'the mother of all languages'?",
    choices: ["C++", "Java", "C"],
    correct: 2,
  },
  {
    question: "What does CSS stand for?",
    choices: [
      "Computer Style Sheet",
      "Cascading Style Sheet",
      "Creative Style Sheet",
    ],
    correct: 1,
  },
  {
    question: "What does CPU stand for?",
    choices: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Process Unit",
    ],
    correct: 0,
  },
  {
    question: "What is the binary representation of the decimal number 10?",
    choices: ["0101", "1000", "1010", "1111"],
    correct: 2,
  },
  {
    question: "What does the 'WWW' stand for in a website URL?",
    choices: ["World Wide Web", "Web World Wide", "World Website Web"],
    correct: 0,
  },
  {
    question: "What is the main function of an operating system?",
    choices: [
      "Run applications",
      "Display graphics",
      "Print documents",
      "Manage hardware and software resources",
    ],
    correct: 3,
  },
  {
    question:
      "Which programming language is often used for artificial intelligence and machine learning?",
    choices: ["Python", "C", "JavaScript", "Java"],
    correct: 0,
  },
  {
    question: "What is the primary purpose of a firewall in network security?",
    choices: [
      "To block spam emails",
      "To prevent unauthorized access",
      "To increase internet speed",
      "To clean the network cables",
    ],
    correct: 1,
  },
  {
    question: "What does 'HTML' stand for?",
    choices: [
      "Hyper Text Markup Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
    ],
    correct: 0,
  },
];

let currentQuestion = 0;
let score = 0;

const questionElem = document.getElementById("question");
const choicesElem = document.getElementById("choices");
const scoreElem = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElem.innerText = currentQuizData.question;
  choicesElem.innerHTML = "";

  currentQuizData.choices.forEach((choice, index) => {
    const choiceElem = document.createElement("button");
    choiceElem.innerText = choice;
    choiceElem.classList.add("btn");
    choiceElem.addEventListener("click", () => checkAnswer(index));
    choicesElem.appendChild(choiceElem);
  });

  nextBtn.disabled = true;
}

function checkAnswer(selectedIndex) {
  const currentQuizData = quizData[currentQuestion];
  if (selectedIndex === currentQuizData.correct) {
    score++;
    let mySound = new Audio("mixkit-correct-answer-tone-2870.wav");
    mySound.play();
    showCustomAlert("yes"); // Show the "YAYYYY!!!! CORRECT" pop-up
  } else {
    showCustomAlert("no"); // Show the "TRY AGAIN!!!" pop-up
  }

  currentQuestion++;
  scoreElem.innerText = `Score: ${score}`;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionElem.innerText = "Quiz completed!";
    choicesElem.innerHTML = "";
    nextBtn.disabled = true;
  }
}

function nextQuestion() {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    questionElem.innerText = "Quiz completed!";
    choicesElem.innerHTML = "";
    nextBtn.disabled = true;
  }
}

function showCustomAlert(result) {
  if (result === "yes") {
    document.getElementById("custom-alert-yes").style.display = "block";
  } else if (result === "no") {
    document.getElementById("custom-alert-no").style.display = "block";
  }
}

function closeCustomAlert(result) {
  if (result === "yes") {
    document.getElementById("custom-alert-yes").style.display = "none";
  } else if (result === "no") {
    document.getElementById("custom-alert-no").style.display = "none";
  }
}

loadQuestion();
