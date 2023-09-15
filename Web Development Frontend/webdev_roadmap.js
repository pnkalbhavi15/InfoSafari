let minutes = 25;
let seconds = 0;
let timer;
let isRunning = false;

const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

function updateDisplay() {
  minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondsDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

function startTimer() {
  if (!isRunning) {
    timer = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        isRunning = false;
        let notificationSound = new Audio(
          "mixkit-correct-answer-tone-2870.wav"
        );
        notificationSound.play();
      } else {
        if (seconds === 0) {
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }
      }
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  minutes = 25;
  seconds = 0;
  isRunning = false;
  updateDisplay();
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

updateDisplay();

const notificationSound = document.getElementById("notification");

function startTimer() {
  if (!isRunning) {
    timer = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        isRunning = false;
      } else {
        if (seconds === 0) {
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }
      }
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-button");
  const htmlButton = document.getElementById("html-button");
  const cssButton = document.getElementById("css-button");
  const javascriptButton = document.getElementById("javascript-button");

  const sections = ["start", "html", "css", "javascript", "resources"];
  let currentSection = 0;

  function showSection(sectionIndex) {
    sections.forEach((section) => {
      document.getElementById(section).style.display = "none";
    });

    document.getElementById(sections[sectionIndex]).style.display = "block";
  }

  startButton.addEventListener("click", () => {
    currentSection = 1;
    showSection(currentSection);
  });

  htmlButton.addEventListener("click", () => {
    currentSection = 2;
    showSection(currentSection);
  });

  cssButton.addEventListener("click", () => {
    currentSection = 3;
    showSection(currentSection);
  });

  javascriptButton.addEventListener("click", () => {
    currentSection = 4;
    showSection(currentSection);
  });
});
