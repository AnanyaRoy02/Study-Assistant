// ===============================
// QUIZ SYSTEM
// ===============================

const quizData = {

    javascript: [

        {
            question: "Which keyword is used to declare a variable that cannot be reassigned?",
            options: ["var", "let", "const", "static"],
            answer: "const"
        },

        {
            question: "Which method creates a new array by transforming every element?",
            options: ["filter()", "map()", "find()", "push()"],
            answer: "map()"
        },

        {
            question: "Which method is used to add an element to the end of an array?",
            options: ["pop()", "shift()", "push()", "slice()"],
            answer: "push()"
        },

        {
            question: "Which object is used to store data in the browser?",
            options: ["browserStorage", "localStorage", "dataStorage", "webData"],
            answer: "localStorage"
        },

        {
            question: "Which keyword is commonly used with async functions?",
            options: ["await", "wait", "pause", "asyncWait"],
            answer: "await"
        }

    ],

    html: [

        {
            question: "What does HTML stand for?",
            options: [
                "HyperText Markup Language",
                "HighText Machine Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language"
            ],
            answer: "HyperText Markup Language"
        },

        {
            question: "Which tag is used for the largest heading?",
            options: ["<h6>", "<head>", "<h1>", "<heading>"],
            answer: "<h1>"
        },

        {
            question: "Which tag creates a hyperlink?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            answer: "<a>"
        },

        {
            question: "Which tag is used to display an image?",
            options: ["<image>", "<img>", "<picture>", "<src>"],
            answer: "<img>"
        },

        {
            question: "Which element is used to create a form?",
            options: ["<input>", "<form>", "<submit>", "<field>"],
            answer: "<form>"
        }

    ],

    css: [

        {
            question: "What does CSS stand for?",
            options: [
                "Cascading Style Sheets",
                "Creative Style System",
                "Computer Style Sheets",
                "Colorful Style Sheets"
            ],
            answer: "Cascading Style Sheets"
        },

        {
            question: "Which property changes text color?",
            options: ["font-color", "text-color", "color", "foreground"],
            answer: "color"
        },

        {
            question: "Which property changes the background color?",
            options: ["background", "background-color", "bgcolor", "color-background"],
            answer: "background-color"
        },

        {
            question: "Which CSS property controls the space inside an element?",
            options: ["margin", "padding", "spacing", "border"],
            answer: "padding"
        },

        {
            question: "Which display value is commonly used for flexible layouts?",
            options: ["block", "inline", "flex", "static"],
            answer: "flex"
        }

    ]
};


let questions = [];
let currentQuestion = 0;
let score = 0;


const quizStart = document.getElementById("quizStart");
const quizBox = document.getElementById("quizBox");
const quizResult = document.getElementById("quizResult");

const quizSubject = document.getElementById("quizSubject");
const startQuizBtn = document.getElementById("startQuizBtn");

const questionNumber = document.getElementById("questionNumber");
const scoreDisplay = document.getElementById("scoreDisplay");

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");

const nextQuestionBtn =
    document.getElementById("nextQuestionBtn");

const finalScore =
    document.getElementById("finalScore");

const restartQuizBtn =
    document.getElementById("restartQuizBtn");


// START QUIZ

startQuizBtn.addEventListener("click", function () {

    const subject = quizSubject.value;

    questions = quizData[subject];

    currentQuestion = 0;
    score = 0;

    quizStart.classList.add("hidden");
    quizResult.classList.add("hidden");
    quizBox.classList.remove("hidden");

    showQuestion();

});


// SHOW QUESTION

function showQuestion() {

    const question = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    scoreDisplay.textContent =
        `Score: ${score}`;

    questionText.textContent =
        question.question;

    optionsContainer.innerHTML =
        question.options.map(option => {

            const button = document.createElement("button");

            button.className = "option-button";
            button.textContent = option;

            button.addEventListener("click", function () {
                selectAnswer(button, option);
            });

            return button.outerHTML;

        }).join("");

    document.querySelectorAll(".option-button").forEach(button => {

        button.addEventListener("click", function () {
            selectAnswer(button, button.textContent.trim());
        });

    });

    nextQuestionBtn.disabled = true;
}


// SELECT ANSWER

function selectAnswer(button, selectedAnswer) {

    const question = questions[currentQuestion];

    const allButtons =
        document.querySelectorAll(".option-button");

    allButtons.forEach(btn => {

        btn.disabled = true;

        if (btn.textContent.trim() === question.answer) {
            btn.classList.add("correct");
        }

    });

    if (selectedAnswer === question.answer) {

        if (!button.classList.contains("correct")) {
            button.classList.add("correct");
        }

        score++;

    } else {

        button.classList.add("wrong");

    }

    scoreDisplay.textContent =
        `Score: ${score}`;

    nextQuestionBtn.disabled = false;
}


// NEXT QUESTION

nextQuestionBtn.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

});


// RESULT

function showResult() {

    quizBox.classList.add("hidden");

    quizResult.classList.remove("hidden");

    finalScore.textContent =
        `Your score is ${score}/${questions.length}`;

}


// RESTART

restartQuizBtn.addEventListener("click", function () {

    quizResult.classList.add("hidden");

    quizStart.classList.remove("hidden");

});