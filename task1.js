// task1.js//

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "Berlin", "Madrid", "Rome"],
    correctAnswer: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: 1
  },
  {
    question: "What is the largest mammal?",
    answers: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    correctAnswer: 1
  },
  {
    question: "What is the square root of 64?",
    answers: ["6", "7", "8", "9"],
    correctAnswer: 2
  }
];

// Function to display the current question and answers
function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").innerText = question.question;
  
  const answerButtons = document.querySelectorAll('.answer-button');
  answerButtons.forEach((button, index) => {
    button.innerText = question.answers[index];
  });
  
  // Reset feedback and enable the next button only after answer is selected
  document.getElementById("feedback").innerText = "";
  document.getElementById("next-button").disabled = true;
}

// Function to check the selected answer
function checkAnswer(selectedIndex) {
  const question = questions[currentQuestionIndex];
  const feedback = document.getElementById("feedback");
  
  if (selectedIndex === question.correctAnswer) {
    score++;
    feedback.innerText = "Correct!";
  } else {
    feedback.innerText = "Wrong!";
  }
  
  document.getElementById("score").innerText = score;
  document.getElementById("next-button").disabled = false;
}

// Function to load the next question
function nextQuestion() {
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML = `
      <h2>Quiz Over!</h2>
      <p>Your final score is ${score} out of ${questions.length}.</p>
      <button onclick="restartQuiz()">Restart Quiz</button>
    `;
  }
}

// Function to restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.querySelector(".quiz-container").innerHTML = `
    <div class="question-container">
      <p id="question"></p>
      <div class="answer-buttons">
        <button class="answer-button" onclick="checkAnswer(0)">Answer 1</button>
        <button class="answer-button" onclick="checkAnswer(1)">Answer 2</button>
        <button class="answer-button" onclick="checkAnswer(2)">Answer 3</button>
        <button class="answer-button" onclick="checkAnswer(3)">Answer 4</button>
      </div>
    </div>
    <div class="feedback-container">
      <p id="feedback"></p>
    </div>
    <div class="score-container">
      <p>Score: <span id="score">0</span></p>
    </div>
    <button id="next-button" onclick="nextQuestion()">Next Question</button>
  `;
  loadQuestion();
}

// Initializing the quiz
loadQuestion();
