
let guessedNumber;
let numberArray;



// Generate random number for user to guess. I am using 20 numbers so I can get at least 5 that are not dublicate values

let randomNumber = [];
for (let i = 0; i < 20; i++) {
    randomNumber[i] = Math.floor(Math.random() * 10);
}

// make second array and push all the unique values

let temp = [];

for (let i = 0; i < randomNumber.length; i++) {
    if (temp.indexOf(randomNumber[i]) === -1) {
        temp.push(randomNumber[i])
    }
}

// Copy the first 5 unique values from the temporary array
randomNumber = temp.slice(0, 5);
console.log(randomNumber);

// Triggering the new number gathering

let numberInputBtn = document.querySelector('#numberInputBtn');
let numberInput = document.querySelector('#numberInput')
numberInputBtn.addEventListener('click', getNumber);
numberInput.addEventListener('keyup', function (el) {
    if (el.keyCode === 13) {
        getNumber();
    }
});

// document.getElementById('elementId').value='';

// getting each number input from user 

function getNumber() {
    let listWithNumbers = document.querySelector('#listWithNumbers')
    guessedNumber = document.querySelector('#numberInput').value;
    numberArray = guessedNumber.split("");
    checkNumberLength()
    checkForDublicates();
    // creating new list item and appending the current number
    let newScore = document.createElement('li');
    newScore.innerHTML = guessedNumber;
    listWithNumbers.appendChild(newScore);
    checkResult();
    numberInput.value = '';
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
        alert('Please do not enter duplicate numbers');
    }
    return false;
}

function checkResult() {
    let _temp = [];
    let bull = 0;
    let cow = 0;
    let listWithResults = document.querySelector('#results');

    _temp = guessedNumber.split('').map(function (el) {
        return parseInt(el, 10);
    });

    for (let i = 0; i < 5; i++) {
        if (randomNumber[i] == guessedNumber[i]) {
            bull++;
        }
        if (randomNumber.indexOf(_temp[i]) != -1 && randomNumber[i] != _temp[i]) {
            cow++;
        }
    }
    let currentBulls = document.createElement('li');
    currentBulls.innerHTML = `Bulls: ${bull}`;
    let currentCows = document.createElement('li');
    currentCows.innerHTML = `Cows: ${cow}`;

    listWithResults.appendChild(currentBulls);
    listWithResults.appendChild(currentCows);

    if (currentBulls.innerHTML == 5) {
        alert('you won the game')
    }

}

