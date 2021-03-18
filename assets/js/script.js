let numberInputBtn = document.querySelector('#numberInputBtn');
let initialNumber;
let numberArray;
let listWithNumbers = document.querySelector('#listWithNumbers')



// Generate random number for user to guess

let numberToGuess = [1, 2, 3, 4, 5];
let counter = {};
let dublicateRandom = false;
for (let i = 0; i < 5; i++) {
    numberToGuess[i] = Math.floor(Math.random() * 10);
    for (let j = 0; j < numberToGuess.length; i++) {
        if (counter[numberToGuess[j]]) {
            dublicateRandom = true;
        }
        counter[numberToGuess[j]] = true;
    }
    if (dublicateRandom) {
        numberToGuess[i] = Math.floor(Math.random() * 10);
    }
}


console.log(numberToGuess)











// Triggering the new number gathering

numberInputBtn.addEventListener('click', getNumber);
numberInputBtn.addEventListener('keyup', function (element) {
    if (element.keCode === 13) {
        getNumber();
    }
});

// getting each number input from user 

function getNumber() {
    initialNumber = document.querySelector('#numberInput').value;
    numberArray = initialNumber.split("");
    checkNumberLength()
    checkForDublicates();
    // creating new list item and appending the current number
    let newScore = document.createElement('li');
    newScore.innerHTML = initialNumber;
    listWithNumbers.appendChild(newScore);
};

// checking the user input for length

function checkNumberLength() {
    if (numberArray.length < 5 || numberArray.length > 5) {
        alert('Please enter a 5 digit number');
    };
}

// checking user input for duplicate values

function checkForDublicates() {
    let indNumber = {};
    let dublicate = false;
    for (let i = 0; i < numberArray.length; i++) {
        if (indNumber[numberArray[i]]) {
            dublicate = true;
            break;
        }
        indNumber[numberArray[i]] = true;
    }
    if (dublicate) {
        alert('Please do not enter duplicate numbers')
    }
}


function checkResult() {

}

