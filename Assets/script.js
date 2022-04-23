siteContentEl = $("#site-content")
// var promptUser = prompt("How many questions would you like?")
//return response
// var questionsArray = []
function getData(){
    fetch(`https://opentdb.com/api.php?amount=10&category=18`)
    .then(function(response) {
        if (response.ok){
            response.json().then(function(data) {
                // questionsArray = data.results
                // questionsArray.concat(data.results)
                // console.log(questionsArray)
                rightQuiz(data.results)
                console.log(data.results)
            })
        } else {
            console.log("API Error")
        }
    })
}



fetch("https://icanhazdadjoke.com/")
.then(response => response.json())
.then(data => console.log(data));

// ---------------------------------------------------------------------
//getting the button to work and start timer

let clockId;
let time = 60;
let banner = document.querySelector('.banner');
let clock = document.querySelector('#time');

function handleStart() {
    clockId = setInterval(handleClock,1000);
    // banner.innerHTML = `<div><h1>${questions[1].question}</h1></div> `
};

function handleClock() {
    clock.innerText = time;
    if (time<1) {
        clock.innerText = 0;
        return clearInterval(clockId);
    };
    time--;
};
// ---------------------------------------------------------------------

// var startBtn = $("#startBtn");

const bannerObj = {
    createObj: function(){
        this.obj = $("<div></div>").addClass("banner")
        this.title = $("<h1></h1>").text("Trivia Game")
        this.content = $("<p></p>").text("Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!")
        this.startBtn = $("<button></button>").text("Start Quiz").attr("id", "startBtn")
        this.obj.append(this.title, this.content, this.startBtn)
        siteContentEl.append(this.obj)
    },
    removeObj: function(){
        this.obj.remove()
        console.log("removed");
    }
} 

bannerObj.createObj()

$("#startBtn").on("click", function(){
    bannerObj.removeObj();
    // console.log(questionsArray)
    // rightQuiz(questionsArray)
    getData()
    handleStart()
});

const createQuestion = function(){

}
var questionIndex = 0;
var mainContainer = document.querySelector("#site-content")
function rightQuiz(data, Q) {
    console.log(data)
    mainContainer.innerHTML=" ";
    // for( var i = 0; i <data.length; i ++){
        var question = document.createElement("h1")
        question.textContent = data[questionIndex].question
        console.log(question)
        mainContainer.append(question)
        var answerList = []
        var correctAnswer = data[questionIndex].correct_answer
        console.log(correctAnswer)
        answerList.push(correctAnswer)
        // incorrectAnswer = data[0].
        var incorrectAnswer = data[questionIndex].incorrect_answers
        console.log(incorrectAnswer)
        incorrectAnswer.forEach(element => {
            answerList.push(element)
        });
        console.log(answerList)
    // }
    answerList.forEach(btn => {
        var answerBtn = document.createElement('button')
        answerBtn.textContent=btn
        console.log(answerBtn)
        mainContainer.append(answerBtn)
        answerBtn.addEventListener("click", function(){
            selectingAnswer(answerBtn.textContent, data)
        })
    })
}
// ---------------------------------------------------------------------
/* 
    Create a function to determine whether the correct or wrong answer was selected.
        if the wrong answer is selected go to next question without adding any points; 
        else, add 1 point, and display next question.
*/

// create a variable to catch the "correct_answer" value

var score = 0
function selectingAnswer(ca, dataArr) {
    var correctAnswer = $("correct_answer")
    console.log(ca)
    if(ca === dataArr[questionIndex].correct_answer)
    {
        //Add score
        score += 5
        console.log(score)
        console.log("correct")
        
    } else {
        console.log("wrong")
    }
    // questionIndex ++ 
    console.log(dataArr.length)
    nextQuestion(dataArr, questionIndex++)
} 

// ---------------------------------------------------------------------

function nextQuestion(D,Q) {
    console.log(D.length)
    if(Q >= D.length){
        console.log("Done")
        end()
    }else{
        rightQuiz(D,Q)
    }
} 

function end() {
    bannerObj.removeObj()
    window.alert(score)
}