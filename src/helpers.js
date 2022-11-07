import { validWords } from "./wordList";

//function to evaluate letters
export function testEvalLetter(answer, letter, index, answerObject) {
    //if the letter is included in the answer and the letters hasn't been seen before or is a duplicate
    if (answer.includes(letter) && answerObject[letter] > 0) {
        //if the letter is in the right spot
        if (answer[index] === letter && answerObject[letter] > 0) {
            //decrement the letter from answerObject
            answerObject[letter]--;
            //return the appropriate class
            return "Letter letter-rightSpot";
            //else if the letter is in the word but not in the right spot
        } else {
            //decrement the letter from answerObject
            answerObject[letter]--;
            //return the appropriate class
            return "Letter letter-rightLetter";
        };
        //if the letter is not in the word
    } else {
        //return the appropriate class
        return "Letter letter-wrongLetter";
    };
};

//function to randomly select a word
export function randomWordSelect() {
    let rand = Math.floor(Math.random() * 345) + 1;
    return [...validWords[rand].toUpperCase()];
};

//binary search helper to determine if guess is valid
function binarySearch(arr, guess) {
    let rightIndex = arr.length - 1;
    let leftIndex = 0;
    let middleIndex = Math.floor((rightIndex + leftIndex) / 2);

    while (leftIndex <= rightIndex) {
        if (arr[middleIndex] === guess) {
            return true;
        };
        if (arr[middleIndex] > guess) {
            rightIndex = middleIndex - 1;
            middleIndex = Math.floor((rightIndex + leftIndex) / 2);
        } else {
            leftIndex = middleIndex + 1;
            middleIndex = Math.floor((rightIndex + leftIndex) / 2);
        };
    };
    return false;
};

//function to determine if guess is valid
export function isValidGuess(arr, guess) {
    const isValid = binarySearch(arr, guess);
    if (isValid) {
        return true;
    } else {
        return false;
    };
};