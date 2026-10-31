const welcome = document.querySelector("#welcome")

const question = document.querySelector("#question")
const prompt = question.querySelector("#prompt")
const choices = question.querySelectorAll(".choice")
const inputs = question.querySelectorAll(".choice-input")
const labels = question.querySelectorAll(".choice-label")

const results = document.querySelector("#results")
const result = results.querySelector("#result")

let score = 0
let currentQuestion = 0

let quiz = new Map([
    [
        "What is the mascot for Thaddeus Stevens?",
        {
            choices: ["Bulldog", "Snake", "Knight", "Panther"],
            correctIndex: 0
        }
    ],

    [
        "What is the best major in the school?",
        {
            choices: ["CNSA", "Welding", "CSET", "Business"],
            correctIndex: 2
        }
    ],

    [
        "Who has the record for most Oscars won?",
        {
            choices: ["Morgan Freeman", "Walt Disney", "Clint Eastwood", "Tom Cruise"],
            correctIndex: 1
        }
    ],

    [
        "What is the furthest planet from the sun?",
        {
            choices: ["Jupiter", "Earth", "Neptune", "Mars"],
            correctIndex: 2
        }
    ],

    [
        "How many sides does a quadrilateral have?",
        {
            choices: ["Four", "Three", "Five", "Six"],
            correctIndex: 0
        }
    ],

    [
        "Which fast food chain is the largest in the world?",
        {
            choices: ["McDonalds", "Burger King", "Domino's", "Subway"],
            correctIndex: 3
        }
    ],

    [
        "What is the most common pizza topping?",
        {
            choices: ["Pepperoni", "Mushrooms", "Onions", "Sausage"],
            correctIndex: 0
        }
    ],

    [
        "Who built the first Apple computer?",
        {
            choices: ["Steve Jobs", "Larry Page", "Steve Wozniak", "Dre King"],
            correctIndex: 2
        }
    ],

    [
        "What was the worlds first sport?",
        {
            choices: ["Basketball", "Discus", "Racing", "Wrestling"],
            correctIndex: 3
        }
    ],

    [
        "How much would could a wood chuck chuck?",
        {
            choices: ["If a woodchuck", "Could chuck wood", "Wood", "Chuck"],
            correctIndex: 1
        }
    ],

])

const questions = [...quiz.keys()]
const answers = [...quiz.values()]

function startQuiz() {
    welcome.classList.add("hidden")
    question.classList.remove("hidden")
    results.classList.add("hidden")
    score = 0
    currentQuestion = 0
    setQuestion(0)
}

function endQuiz() {
    question.classList.add("hidden")
    results.classList.remove("hidden")
    result.innerHTML = `Result: ${score}/10`
    
}

function setQuestion(index) {
    prompt.innerHTML = `Question ${currentQuestion + 1}:\n${questions[currentQuestion]}`
    for (let i = 0; i < labels.length; i++) {
        labels[i].innerHTML = answers[currentQuestion].choices[i]
    }
}

function nextQuestion() {
    if (document.querySelector('input[name="choice"]:checked')) {
        checkAnswer()
        currentQuestion++

        if (currentQuestion < questions.length) setQuestion(currentQuestion)
        else endQuiz()
    }
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked')
    if (selectedChoice.value == answers[currentQuestion].correctIndex) {
        score++
    }
    console.log(selectedChoice.value, answers[currentQuestion].correctIndex)
    console.log(selectedChoice.value == answers[currentQuestion].correctIndex)
}

// for (let i = 0; i < quiz.size; i++) {
//     prompt.innerHTML = `Question ${i + 1}:\n${questions[i]}`
//     checkAnswer(answers[i].correctIndex)
//     console.log(questions[i])




// }