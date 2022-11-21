const playNowButton = document.getElementById("play-now-btn");
const instructionBox = document.querySelector(".instruction-box");
const firstQuestion = document.querySelector(".first-question-container");
const allQuestionsContainer = document.querySelector("all-questions-container");
const mainContainer = document.getElementById("main-container");
const finalNextButton = document.querySelector(".final-next");
const finalScoreText = document.querySelector(".final-score-results");
const finalScoreCircle = document.querySelector("span.final-score-results-circle");
const questionContainers = document.getElementsByClassName("question-container")
const resultsContainer = document.querySelector(".results-container");
const next = document.getElementsByClassName("next");
const wrong = document.getElementsByClassName("wrong");
const right = document.getElementsByClassName("right");
var choices = document.getElementsByClassName("choices")
var index = 0
var scoreCount = 0

// show instruction box when play now button is clicked
function playNow() {
    if (instructionBox.style.display = "none") {
        instructionBox.style.display = "block";
        instructionBox.classList.add("activeInfo"); //show instruction box
    } else {
        instructionBox.style.display = "none";
    }
}

// showing instruction box when play now button is clicked
function nextButton() {
    if (firstQuestion.style.display = "none") {
        firstQuestion.style.display = "block";
        instructionBox.classList.remove("activeInfo"); //hide info box
        firstQuestion.classList.add("activeQuiz"); //show quiz box
    } else {
        firstQuestion.style.display = "none";
    }
}

// next Question

const nextQuestion = e => {
    questionContainers[index].style.display = 'none';
    index += 1;
    questionContainers[index].style.display = 'block';
    enableBtn()
    console.log(scoreCount)
}

for (let buttons of next) {
    buttons.addEventListener("click", nextQuestion);
}

// if right button pressed

const rightButtonPressed = e => {
    e.target.style.backgroundColor = 'green';
    scoreCount += 1;
    disableBtn()
}

for (let rightbutton of right) {
        rightbutton.addEventListener("click", rightButtonPressed);
    }


// if wrong button pressed
const wrongButtonPressed = e => {
    e.target.style.backgroundColor = 'red';
    disableBtn()
}

for (let wrongbutton of wrong) {
        wrongbutton.addEventListener("click", wrongButtonPressed);
    }


// disable buttons if player already answered
function disableBtn() {
    for(var i = 0; i < choices.length; i++) {
        choices[i].disabled = true;
    }
}

function enableBtn() {
    for(var i = 0; i < choices.length; i++) {
        choices[i].disabled = false;
    }
}

function showResults() {
    if (resultsContainer.style.display = "none") {
        resultsContainer.style.display = "flex";
        resultsContainer.classList.add("activeInfo"); //show results container
        finalScoreText.textContent = scoreCount;
        finalScoreCircle.textContent = scoreCount;
    } else {
        resultsContainer.style.display = "none";
    }
}

finalNextButton.addEventListener("click", showResults)
