console.log("script.js connected!");
let questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach(function(block){

let buttons = block.querySelectorAll(".answer-btn");

buttons.forEach(function(button){

button.addEventListener("click", function(){

buttons.forEach(function(btn){
btn.classList.remove("selected");
});

button.classList.add("selected");

});

});

});
function displayResult(){

let selectedAnswers = document.querySelectorAll(".selected");

let score = 0;

selectedAnswers.forEach(function(answer){

if(answer.dataset.answer === "A"){
score++;
}

});

let result = "";

if(score >= 2){
result = "You are a Night Owl 🦉 You do your best work late at night.";
}
else{
result = "You are an Early Bird 🌅 You are most productive in the morning.";
}

document.getElementById("result-text").textContent = result;

document.getElementById("result-container").style.display = "block";

}

document.getElementById("show-result").addEventListener("click", displayResult);