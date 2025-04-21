let score = 0;
let currentQuestion = 0;
let selectedQuizIndex = -1; 

const quizSelectionArea = document.querySelector(".quiz-selection-area");
const quizCards = document.querySelectorAll(".quiz-card");
const startQuizBtns = document.querySelectorAll(".start-quiz-btn");
const popupInfo = document.querySelector(".popup-info");
const exitPopupBtn = document.querySelector(".exit");
const continuePopupBtn = document.querySelector(".continue");
const quizContainer = document.querySelector(".quiz-container"); // Renamed from .containe
const quizBox = document.querySelector(".quiz-box");
const quizTitle = document.getElementById("quiz-title"); // Title inside quiz box
const questionText = document.querySelector(".question-text");
const optionList = document.querySelector(".option-list"); // Container for options
const options = optionList.querySelectorAll(".option"); // Get options once
const nextButton = document.querySelector(".next-btn");
const scoreDisplay = document.querySelector(".score");
const totalQuestionsDisplay = document.querySelector(".total-questions"); // Span for total num
const questionTotalDisplay = document.querySelector(".question-total"); // e.g., "1 of 5 Question"
const resultBox = document.querySelector(".result-box");
const resultScoreText = document.querySelector(".score-text");
const tryAgainBtn = document.querySelector(".try");
const goToHomeBtn = document.querySelector(".gohome"); // Anchor tag contains the button
const mainNav = document.querySelector("nav");


const allQuestions = [
  [
 
    {
      question: "What does HTML stand for?",
      options: [
        { text: "A. Hyper Type Multi Language", correct: false },
        { text: "B. Hyper Text Multiple Language", correct: false },
        { text: "C. Hyper Text Markup Language", correct: true },
        { text: "D. Home Text Multi Language", correct: false },
      ],
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: [
        { text: "A. <link>", correct: false },
        { text: "B. <a>", correct: true },
        { text: "C. <href>", correct: false },
        { text: "D. <url>", correct: false },
      ],
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: [
        { text: "A. <break>", correct: false },
        { text: "B. <lb>", correct: false },
        { text: "C. <br>", correct: true },
        { text: "D. <line>", correct: false },
      ],
    },
    {
      question: "Which tag is used to define an unordered list?",
      options: [
        { text: "A. <ul>", correct: true },
        { text: "B. <ol>", correct: false },
        { text: "C. <li>", correct: false },
        { text: "D. <list>", correct: false },
      ],
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: [
        { text: "A. style", correct: true },
        { text: "B. class", correct: false },
        { text: "C. font", correct: false },
        { text: "D. styles", correct: false },
      ],
    },
  ],
  [

    {
      question:
        "What is the correct syntax to apply a background color in CSS?",
      options: [
        { text: "background-color: blue;", correct: true },
        { text: "bg-color: blue;", correct: false },
        { text: "color-background: blue;", correct: false },
        { text: "background:color blue;", correct: false },
      ],
    },
    {
      question: "Which property controls the text size?",
      options: [
        { text: "font-style", correct: false },
        { text: "text-size", correct: false },
        { text: "font-size", correct: true },
        { text: "size-text", correct: false },
      ],
    },
    {
      question: "How do you select all <p> elements inside a <div>?",
      options: [
        { text: "div + p", correct: false },
        { text: "div > p", correct: false },
        { text: "div p", correct: true },
        { text: "p div", correct: false },
      ],
    },
    {
      question: "Which CSS property makes text bold?",
      options: [
        { text: "font-weight: bold;", correct: true },
        { text: "text-style: bold;", correct: false },
        { text: "bold: true;", correct: false },
        { text: "font: bold;", correct: false },
      ],
    },
    {
      question: "What does the z-index property control?",
      options: [
        { text: "Text alignment", correct: false },
        { text: "Layer order", correct: true },
        { text: "Font thickness", correct: false },
        { text: "Screen zoom", correct: false },
      ],
    },
  ],
  [
  
    {
      question: "Which of these is a JavaScript data type?",
      options: [
        { text: "Number", correct: true },
        { text: "Style", correct: false },
        { text: "Font", correct: false },
        { text: "Heading", correct: false },
      ],
    },
    {
     
      question: "How do you write a single-line comment in JavaScript?",
      options: [
        { text: "// This is a comment", correct: true },
        { text: "/* This is a comment */", correct: false }, 
        { text: "# This is a comment", correct: false },
        { text: "<!-- This is a comment -->", correct: false },
      ],
    },
    {
    
      question: "How do you write a multi-line comment in JavaScript?",
      options: [
        { text: "// This is a comment //", correct: false },
        { text: "/* This is a comment */", correct: true },
        { text: "/* This is a comment */", correct: true }, 
        { text: "<-- This is a comment -->", correct: false },
      ],
    },
    {
      question: "Which keyword is used to define a constant?",
      options: [
        { text: "const", correct: true },
        { text: "let", correct: false },
        { text: "var", correct: false },
        { text: "define", correct: false },
      ],
    },
    {
      question: "What will typeof null return?",
      options: [
        { text: "'object'", correct: true },
        { text: "'null'", correct: false },
        { text: "'undefined'", correct: false },
        { text: "'boolean'", correct: false },
      ],
    },
    {
      question: "Which operator checks both value and type?",
      options: [
        { text: "==", correct: false },
        { text: "===", correct: true },
        { text: "=", correct: false },
        { text: "!=", correct: false },
      ],
    },
  ],
];

// --- Functions ---


function loadQuestion(quizIndex, questionIndex) {
  const currentQuiz = allQuestions[quizIndex];
  const questionData = currentQuiz[questionIndex];

 

  questionText.textContent = questionData.question;
  questionTotalDisplay.textContent = `${questionIndex + 1} of ${
    currentQuiz.length
  } Questions`;
  totalQuestionsDisplay.textContent = currentQuiz.length; 

 
  options.forEach((option, i) => {
    const optionData = questionData.options[i];
    if (optionData) {
      option.querySelector("span").textContent = optionData.text;
      option.setAttribute("data-correct", optionData.correct);
      option.style.display = "block"; 
    } else {
      option.style.display = "none"; 
    }
 
    option.classList.remove("correct", "incorrect", "disabled");
    option.style.pointerEvents = "auto";
  });

  nextButton.disabled = true; 
}


function handleOptionClick() {
  if (this.classList.contains("disabled")) return; 

  const isCorrect = this.getAttribute("data-correct") === "true";
  const currentQuiz = allQuestions[selectedQuizIndex];

  
  options.forEach((opt) => {
    opt.style.pointerEvents = "none"; 
    opt.classList.add("disabled");
  });

  if (isCorrect) {
    this.classList.add("correct");
    score++;
    updateScore();
  } else {
    this.classList.add("incorrect");
   
    options.forEach((opt) => {
      if (opt.getAttribute("data-correct") === "true") {
        opt.classList.add("correct");
      }
    });
  }

  nextButton.disabled = false; 
}


function updateScore() {
  scoreDisplay.textContent = score;
}


function saveResult() {
  let loggedInUser = null;
  try {
    loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  } catch (e) {
    console.error("Error parsing loggedInUser from sessionStorage:", e);
  }

  if (loggedInUser && loggedInUser.email) {

    let quizResults = [];
    try {
      quizResults = JSON.parse(localStorage.getItem("quizResults")) || [];
    } catch (e) {
      console.error("Error parsing quizResults from localStorage:", e);
      quizResults = []; 
    }

    let resultData = {
   
      fullName: loggedInUser.fullName || "N/A",
      username: loggedInUser.username || "N/A",
      email: loggedInUser.email,
      phone: loggedInUser.phone || "N/A",
      gender: loggedInUser.gender || "N/A",
      quizType: ["HTML", "CSS", "JavaScript"][selectedQuizIndex], 
      score: score,
      total: allQuestions[selectedQuizIndex].length,
      timestamp: new Date().toISOString(), 
    };

    
    let existingIndex = quizResults.findIndex(
      (r) => r.email === resultData.email && r.quizType === resultData.quizType
    );

    if (existingIndex !== -1) {

      if (resultData.score >= quizResults[existingIndex].score) {
        quizResults[existingIndex] = resultData; 
      }
    } else {
      quizResults.push(resultData);
    }

    try {
      localStorage.setItem("quizResults", JSON.stringify(quizResults));
    } catch (e) {
      console.error("Error saving quizResults to localStorage:", e);
    }
  } else {
    console.warn("User not logged in or email missing, cannot save results.");
   
  }
}


function startQuiz() {
  score = 0;
  currentQuestion = 0;
  updateScore();


  const quizName = ["HTML", "CSS", "JavaScript"][selectedQuizIndex];
  quizTitle.textContent = `${quizName} Quiz`;


  quizSelectionArea.style.display = "none"; 
  popupInfo.style.display = "none"; 
  quizContainer.classList.add("show"); 
  resultBox.classList.remove("show");
  mainNav.style.display = "none"; 

  loadQuestion(selectedQuizIndex, currentQuestion);
}


startQuizBtns.forEach((button) => {
  button.addEventListener("click", () => {
    selectedQuizIndex = parseInt(
      button.closest(".quiz-card").getAttribute("data-quiz-index")
    );
    popupInfo.style.display = "block"; 
    quizSelectionArea.classList.add("blur-background"); 
  });
});


exitPopupBtn.addEventListener("click", () => {
  popupInfo.style.display = "none";
  quizSelectionArea.classList.remove("blur-background");
  selectedQuizIndex = -1; 
});


continuePopupBtn.addEventListener("click", (e) => {
  e.preventDefault(); 
  startQuiz();
  quizSelectionArea.classList.remove("blur-background");
});


options.forEach((option) => {
  option.addEventListener("click", handleOptionClick);
});


nextButton.addEventListener("click", () => {
  currentQuestion++;
  const currentQuiz = allQuestions[selectedQuizIndex];

  if (currentQuestion < currentQuiz.length) {
    loadQuestion(selectedQuizIndex, currentQuestion);
  } else {
  
    quizContainer.classList.remove("show"); 
    resultBox.classList.add("show"); 
    resultScoreText.textContent = `Your score ${score} out of ${currentQuiz.length}`;
    saveResult(); 
  }
});


tryAgainBtn.addEventListener("click", () => {
  resultBox.classList.remove("show"); 
  
  startQuiz();
});


const goHomeLink = document.querySelector(".gohome").closest("a");
if (goHomeLink) {
  goHomeLink.addEventListener("click", () => {
    mainNav.style.display = "block";
    quizContainer.classList.remove("show");
    resultBox.classList.remove("show");
    quizSelectionArea.style.display = "flex";

    selectedQuizIndex = -1;
    score = 0;
    currentQuestion = 0;
  });
}


window.addEventListener("scroll", function () {
  if (mainNav.style.display !== "none") {

    if (window.scrollY > 50) {
      mainNav.style.backgroundColor = "rgba(15, 30, 45, 0.9)"; 
    } else {
      mainNav.style.backgroundColor = "rgba(15, 30, 45, 0.9)"; 
    }
  }
});


function initializePage() {
  quizSelectionArea.style.display = "flex"; 
  quizContainer.classList.remove("show"); 
  resultBox.classList.remove("show"); 
  popupInfo.style.display = "none"; 
  mainNav.style.display = "block"; 
  mainNav.style.backgroundColor = "rgba(15, 30, 45, 0.9)"; 
  console.log("Quiz page initialized.");
}


document.addEventListener("DOMContentLoaded", initializePage);