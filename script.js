let questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Uranus"],
        answer: "Jupiter"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Caravaggio"],
        answer: "Leonardo da Vinci"
    }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    $("#question").text(questions[currentQuestion].question);
    $("#options").empty();
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        $("#options").append(`<li><input type="radio" name="option" value="${questions[currentQuestion].options[i]}"><label>${questions[currentQuestion].options[i]}</label></li>`);
    }
}

function checkAnswer() {
    let selectedOption = $("input[name='option']:checked").val();
    if (selectedOption === questions[currentQuestion].answer) {
        score++;
        $("#result").text(`Correct! Your score is ${score} out of ${currentQuestion + 1}`);
    } else {
        $("#result").text(`Incorrect. The correct answer is ${questions[currentQuestion].answer}. Your score is ${score} out of ${currentQuestion + 1}`);
    }
    $("#result-container").show();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        $("#result-container").hide();
        $("#question-container").hide();
        $("#next-btn").hide();
        $("#result").text(`Game over! Your final score is ${score} out of ${questions.length}`);
    } else {
        showQuestion();
        $("#result-container").hide();
    }
}

$(document).ready(function() {
    showQuestion();
    $("#submit-btn").click(function() {
        checkAnswer();
    });
    $("#next-btn").click(function() {
        nextQuestion();
    });
});