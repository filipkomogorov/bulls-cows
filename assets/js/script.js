let numberInputBtn = document.querySelector('#numberInputBtn');
let numberInput = document.querySelector('#numberInput')
let initialNumber;
let numberArray;
let listWithNumbers = document.querySelector('#listWithNumbers')


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
randomNumber = temp.slice(0, 5)

// Triggering the new number gathering

numberInputBtn.addEventListener('click', getNumber);
numberInputBtn.addEventListener('keyup', function (element) {
    if (element.keCode === 13) {
        getNumber();
    }
});
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

