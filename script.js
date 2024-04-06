const prompt = require("prompt-sync")();

let correctans = 0;

console.log("Welcome to the Computer Hardware Quiz");

const answer1 = prompt("What is the brain of the computer ? ");
const correctAnswer1 = "CPU"

if(answer1.toUpperCase() === correctAnswer1){
    console.log("You got it correct ")
    correctans++;
}else{
    console.log("You got it Wrong!!")
}
const answer2 = prompt("What is better a 3090ti or 4060 ? ");
const correctAnswer2 = "3090TI"

if(answer2.toUpperCase() === correctAnswer2){
    console.log("You got it correct ")
    correctans++;
}else{
    console.log("You got it Wrong!!")
}

const answer3 = prompt("What is the recommend amount of RAM in 2023 ? ");
const correctAnswer3 = "16GB"

if(answer3.toUpperCase() === correctAnswer3){
    console.log("You got it correct ")
    correctans++;
}else{
    console.log("You got it Wrong!!")
}

console.log("You got ",correctans, " correct answer.")