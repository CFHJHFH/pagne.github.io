// Quiz data
const quizData = [{
        question: "Quelle est la capitale de la France?",
        options: ["Paris", "Londres", "Berlin", "Rome"],
        correctAnswer: 0
    },
    {
        question: "Quelle est la capitale de la Cote d'Ivoire?",
        options: ["Abidjan", "Yamoussokro", "Man", "Lome"],
        correctAnswer: 0
    },
    {
        question: "Quelle est la capitale du Burkina Faso?",
        options: ["Bobo", "Ouagadougou", "Abuja", "Italy"],
        correctAnswer: 1
    },
    {
        question: "Quelle est la capitale de la Benin?",
        options: ["Nancy", "Cotonou", "Berne", "Maroc"],
        correctAnswer: 1
    },
    {
        question: "Quelle est la capitale du Togo?",
        options: ["Bamako", "Abuja", "Paris", "Lome"],
        correctAnswer: 3
    },
    {
        question: "Quelle est la capitale de la France?",
        options: ["Paris", "Londres", "Berlin", "Rome"],
        correctAnswer: 0
    },
    {
        question: "Quelle est la capitale de la France?",
        options: ["Paris", "Londres", "Berlin", "Rome"],
        correctAnswer: 0
    },
    {
        question: "Quelle est la capitale de la France?",
        options: ["Paris", "Londres", "Berlin", "Rome"],
        correctAnswer: 0
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

// Function to initialize quiz
function initializeQuiz() {
    showQuestion();
}

// Function to display a question
function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionElements = document.getElementsByClassName("option");

    if (currentQuestion < quizData.length) {
        questionElement.textContent = quizData[currentQuestion].question;

        for (let i = 0; i < optionElements.length; i++) {
            optionElements[i].textContent = quizData[currentQuestion].options[i];
        }
    } else {
        questionElement.textContent = "Quiz terminé! Votre score est " + score + "/8";
        optionElements[0].style.display = "none";
        optionElements[1].style.display = "none";
        optionElements[2].style.display = "none";
        optionElements[3].style.display = "none";
        document.getElementById("score").style.display = "inline";
    }
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
        score++;
    }
    currentQuestion++;
    showQuestion();
    updateScore();
}

// Function to update the score display
function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = "Score: " + score;

}

// Initialize the quiz when the page loads
initializeQuiz();