let questions = [
    {
        question: "1. What is HTML?",
        options: ["Programming Language", "Markup Language", "Database", "OS"],
        answer: 1
    },
    {
        question: "2. Which is used for styling?",
        options: ["HTML", "Python", "CSS", "C"],
        answer: 2
    },
    {
        question: "3. Which is used for logic?",
        options: ["CSS", "JavaScript", "HTML", "None"],
        answer: 1
    },
    {
        question: "4. Which tag is for paragraph?",
        options: ["h1", "p", "div", "br"],
        answer: 1
    },
    {
        question: "5. Which symbol is for id in CSS?",
        options: [".", "#", "*", "&"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function login() {
    let roll = document.getElementById("rollno").value;
    let pass = document.getElementById("password").value;

    if (roll === "24CS018" && pass === "1234") {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("quizBox").style.display = "block";
        loadQuestion();
    } else {
        alert("Invalid Roll No or Password");
    }
}

function loadQuestion() {
    answered = false;
    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    let optionsHtml = "";
    q.options.forEach((option, index) => {
        optionsHtml += `<div class="option" onclick="checkAnswer(${index}, this)">${option}</div>`;
    });

    document.getElementById("options").innerHTML = optionsHtml;
}

function checkAnswer(selected, element) {
    if (answered) return;

    answered = true;
    let correctAnswer = questions[currentQuestion].answer;

    if (selected === correctAnswer) {
        element.classList.add("correct");
        score++;
    } else {
        element.classList.add("wrong");
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let resultMessage = "";
    let maxMark = 5;
    let passMark = 3;

    if (score >= passMark) {
        resultMessage = "🎉 Congratulations! You are PASS! Superrrr! 🎉";
    } else {
        resultMessage = "😢 FAIL! Better Luck Next Time!";
    }

    document.getElementById("quizBox").innerHTML =
        "<h2>Quiz Completed!</h2>" +
        "<p>Your Score: " + score + " / " + maxMark + "</p>" +
        "<h3>" + resultMessage + "</h3>";
}