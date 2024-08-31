let sortedNumberList = [];
let limitNumber = 10;
let secretNumber = generateRandomNumber();
let title = document.querySelector('h1');
let guesses = 1;

title.innerHTML = 'Secret number game';

let paragraph = document.querySelector('p');
paragraph.innerHTML = 'Guess a number between 1 and 10';

function showTextOnScreen(tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

showStartMessage();

function showStartMessage(){
    showTextOnScreen('h1', 'Secret number game');
    showTextOnScreen('p', 'Guess a number between 1 and 10');
}

function verifyGuess(){
    let guess = document.querySelector ('input').value;
    if(guess == secretNumber){
        showTextOnScreen('h1', 'You guessed right!');
        let wordGuess = guesses > 1 ? 'guesses' : 'guess';
        let messageGuesses = `	You got it in ${guesses} ${wordGuess}!`;
        showTextOnScreen('p', `You got it in ${guesses} guesses!`);
        document.getElementById('restart').disabled = false;

    }else{
        if(guess > secretNumber){
        showTextOnScreen('h1', 'You guessed wrong!');
        showTextOnScreen('p', 'The secret number is lower!');
        cleanField();
        }else{
        showTextOnScreen('h1', 'You guessed wrong!');
        showTextOnScreen('p', 'The secret number is higher!');
        }
        guesses++;
    }
}
function generateRandomNumber (){
    let elementQuantityOnList = sortedNumberList.length;
    let chosenNumber = parseInt(Math.random() * limitNumber + 1);

    if(elementQuantityOnList == limitNumber){
        sortedNumberList = [];
    }

    if(sortedNumberList.includes(chosenNumber)){
        return generateRandomNumber();
    } else{
        sortedNumberList.push(chosenNumber);
        console.log(sortedNumberList);
        return chosenNumber;
         }
}

function cleanField() {
    guess = document.querySelector('input');
    guess.value = '';
}

function restartGame (){
    secretNumber = generateRandomNumber();
    cleanField();
    guesses = 1;
    showStartMessage();
    document.getElementById('restart').setAttribute('disabled', true)
}