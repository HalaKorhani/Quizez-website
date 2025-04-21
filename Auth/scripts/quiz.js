// questions.js

const allQuestions = [
    // HTML Quiz
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
  
    // CSS Quiz
    [
      {
        question: "What is the correct syntax to apply a background color in CSS?",
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
  
    // JavaScript Quiz
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
          { text: "/* This is a comment */", correct: true },
          { text: "// This is a comment //", correct: false },
          { text: "<-- This is a comment -->", correct: false },
          { text: "<!-- This is a comment -->", correct: false },
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
  