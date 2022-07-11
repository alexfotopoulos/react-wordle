//function to evaluate letters
export function testEvalLetter(answer, letter, index, answerObject) {
    //if the letter is included in the answer and the letters hasn't been seen before or is a duplicate
    if (answer.includes(letter) && answerObject[letter] > 0) {
        //if the letter is in the right spot
        if (answer[index] === letter && answerObject[letter] > 0) {
            //decrement the letter from answerObject
            answerObject[letter]--;
            //return the appropriate class
            return "Letter rightSpot";
            //else if the letter is in the word but not in the right spot
        } else {
            //decrement the letter from answerObject
            answerObject[letter]--;
            //return the appropriate class
            return "Letter rightLetter";
        };
        //if the letter is not in the word
    } else {
        //return the appropriate class
        return "Letter wrongLetter";
    };
};