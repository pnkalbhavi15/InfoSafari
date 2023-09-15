document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-button");
  const introButton = document.getElementById("intro-button");
  const dataButton = document.getElementById("data-button");
  const modelsButton = document.getElementById("models-button");

  const sections = ["start", "intro", "data", "models", "resources"];
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

  introButton.addEventListener("click", () => {
    currentSection = 2;
    showSection(currentSection);
  });

  dataButton.addEventListener("click", () => {
    currentSection = 3;
    showSection(currentSection);
  });

  modelsButton.addEventListener("click", () => {
    currentSection = 4;
    showSection(currentSection);
  });
});
