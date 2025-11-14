const quizData = [
  {
    question: "What is my name",
    options: ["sanketh", "tejaswi", "Sanzzz", "ramesh"],
    answer: "sanketh",
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "HTML", "Java", "C++"],
    answer: "HTML",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "India"],
    answer: "Japan",
  },
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 0;
let timeInterval = 0;
const timerEl = document.querySelector("time");
const questionEl = document.querySelector(".question");
const resultEl = document.querySelector(".result");
const scoreEl = document.getElementById("score");
const restartBtn = document.querySelector(".restart-btn");

function loadQuestion() {
  if (currentQuestion >= quizData.length) {
    endQuiz();
    return;
  }
  clearInterval(timeInterval);
  timeLeft = 0;
  timerEl.textContent = timeLeft;
  startTimer();
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  optionsEl.innerHTML = "";
  currentQuiz.options.forEach((optionf7) => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsEl.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  if (selectedOption === quizData[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  loadQuestion();
}

// Start the timer
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

// End the quiz and show the results
function endQuiz() {
  clearInterval(timerInterval);
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  resultEl.style.display = "block";
  scoreEl.textContent = score;
  restartBtn.style.display = "block";
}

// Restart the quiz
restartBtn.addEventListener("click", () => {
  // Reset variables
  currentQuestion = 0;
  score = 0;
  timeLeft = 30;
  timerEl.textContent = timeLeft;

  questionEl.style.display = "block";
  optionsEl.style.display = "flex";
  resultEl.style.display = "none";
  restartBtn.style.display = "none";

  loadQuestion();
});

// Initialize the quiz with the first question
loadQuestion();
