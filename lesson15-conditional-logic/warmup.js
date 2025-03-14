// Prompt the user for their age
let age = prompt("Please enter your age:", 23);

// Check if the user is eligible to vote. If the user is 18 or older, display "You are eligible to vote!". Otherwise, display "You are not eligible to vote yet."

function getVotersEligibility(age){
    return age > 18 ? "You are eligible to vote!" : "You are not eligible to vote yet.";
}

// Prompt the user for a number
let num = prompt("Please enter anumber:", -7);


// Check if the number is positive, negative, or zero. If the number is positive, display "The number is positive.". If the number is negative, display "The number is negative.". If the number is zero, display "The number is zero."

function getNumber(number){
    return number >= 0 ?  "The number is positive." : "The number is negative.";
}

let number = Math.floor(Math.random() * 100);

// Prompt the user to guess a number between 1 and 100. If the user's guess is correct, display "Congratulations! You guessed the correct number!". If the user's guess is too high, display "Your guess is too high. Please try again.". If the user's guess is too low, display "Your guess is too low. Please try again."

function getCorrectGuess(num){
    if(num === number ){
        return "Congratulations! You guessed the correct number!";
    }else if(num > number ){
        "Your guess is too high. Please try again.";
    }else{
        "Your guess is too low. Please try again.";
    }
}
