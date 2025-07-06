const questions = [
  {
    question: "What does HTML stand for?",
    answers: ["HyperText Markup Language", "HighText Machine Language", "Hyperloop Machine Language"],
    correct: 0
  },
  {
    question: "Which language runs in a web browser?",
    answers: ["Python", "JavaScript", "C++"],
    correct: 1
  },
  {
    question: "CSS stands for?",
    answers: ["Cascade Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
    correct: 1
  }
];

let currentIndex = 0;
let score = 0;

function showQuestion() {
  const qBox = document.getElementById("question-box");
  const aBox = document.getElementById("answers");
  const question = questions[currentIndex];

  qBox.textContent = question.question;
  aBox.innerHTML = "";

  question.answers.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.textContent = ans;
    btn.classList.add("answer");
    btn.onclick = () => checkAnswer(i);
    aBox.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentIndex].correct) {
    score++;
    alert("✅ Correct!");
  } else {
    alert("❌ Wrong!");
  }
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
    document.getElementById("next-btn").style.display = "none";
  } else {
    document.getElementById("question-box").textContent = "Quiz Finished!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("score-box").textContent = `Your Score: ${score} / ${questions.length}`;
  }
}

showQuestion();