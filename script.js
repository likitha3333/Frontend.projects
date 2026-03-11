let questions = [
{
question: "1.What does HTML stand for?",
options: [
"Hyper Text Markup Language",
"High Text Machine Language",
"Home Tool Mark Language",
"Hyper Tool Mark Language"
],
answer: 0
},

{
question: "2.Which CSS property is used to change text color?",
options: ["text-style", "font-color", "color", "text-color"],
answer: 2
},
{
question: "3.Which language is used to add interactivity to a webpage?",
options: ["HTML", "Java-Script", "CSS", "python"],
answer: 1
},
{
  question: "4.Which CSS property controls layout using rows and columns?",
options: ["flexbox", "Grid", "Layout", "structure"],
answer: 1  
},
{
  question: "5.Which CSS property makes a website responsive?",
options: ["margin", "padding", "media queries", "border"],
answer: 2
}
]

let current = 0
let score = 0

let question = document.getElementById("question")
let buttons = document.querySelectorAll(".btn")
let feedback = document.getElementById("feedback")
let nextBtn = document.getElementById("nextBtn")

function loadQuestion(){

let q = questions[current]

question.innerText = q.question

buttons.forEach(function(button,index){

button.innerText = q.options[index]

button.onclick = function(){

if(index === q.answer){
feedback.innerText = "Correct Answer"
score++
}
else{
feedback.innerText = "Wrong Answer"
score
}

}

})

}

nextBtn.onclick = function(){

current++

if(current < questions.length){
loadQuestion()
feedback.innerText = ""
}
else{
question.innerText = "Quiz Completed"
feedback.innerText = "Your Score: " + score

buttons.forEach(function(button){
button.style.display = "none"
})

nextBtn.style.display = "none"
}

}

loadQuestion()