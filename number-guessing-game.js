/*Generate a random number between 1 and 100. 
Using the browser functions prompt and alert, ask the user to guess the number. 
You should give them 4 tries to guess the number. 
If they guess wrong, tell them if it’s higher or lower. 
If they guess right, congratulate them. 
Otherwise, give them a message saying what the correct number was, 
as well as their list of guesses.*/

//Number guessing game
function guessingGame() {

    //The random number
    var getRandomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);

    //The user guess
    var prompt = require('prompt');
    prompt.start();
    
    var question = [{
    name: 'number',
    description: 'Guess a number between 1 and 100'
            }];

var counter = 0;
var numberOfTries = 3;
var listOfNumbers = [];

function promptNUmber() {
    return prompt.get(question, function(err, result) {
        if(Number(result.number) === getRandomNumber){ //Number is for parsing
            console.log("You guessed the number");
            listOfNumbers.push(Number(result.number));
        } else if(counter < 3 && Number(result.number) > getRandomNumber) {
            console.log("Your number is too high! You have " + numberOfTries + " left!");
            counter++;
            numberOfTries--;
            listOfNumbers.push(Number(result.number));
            promptNUmber();
        } else if(counter < 3 && Number(result.number) < getRandomNumber) {
            console.log("Your number is too low! You have " + numberOfTries + " left!");
            counter++;
            numberOfTries--;
            listOfNumbers.push(Number(result.number));
            promptNUmber();
        } else if (counter === 3) {
            console.log("Sorry, you've lost! The number was " + getRandomNumber + ". You have tried " + listOfNumbers + ".");
        }
    })
}

promptNUmber();
    
}

guessingGame()

