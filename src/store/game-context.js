import { createContext, useState } from "react";
import { validWords } from "../wordList";
import { randomWordSelect } from "../helpers";

const GameContext = createContext({
    answer: [],
    submittedGuesses: [],
    currentGuess: [],
    activeWord: 0,
    letterCount: 0,
    gameover: null,
    guessedLetters: {},
    isWinner: false,
    isPaused: false,
    isError: false,
    errorMessage: "",
    addLetter: () => { },
    deleteLetter: () => { },
    submitGuess: () => { },
    reset: () => { },
});

export function GameContextProvider(props) {

    //state to store the randomly selected answer
    const [answer, setAnswer] = useState(randomWordSelect());
    //state to store the current guess
    const [currentGuess, setCurrentGuess] = useState([]);
    //state to store the submitted guesses
    const [submittedGuesses, setSubmittedGuesses] = useState([]);
    //state to track which Word component is active
    const [activeWord, setActiveWord] = useState(0);
    //state to track how many letters have been guessed
    const [letterCount, setLetterCount] = useState(0);
    //state to track if game is over
    const [gameover, setGameover] = useState(false);
    //state to track the guessed letters
    const [guessedLetters, setGuessedLetters] = useState({ rightSpot: [], rightLetter: [], wrongLetter: [] });
    //state to track if the user won the game
    const [isWinner, setIsWinner] = useState(false);
    //state to pause entries while guess is evaluated
    const [isPaused, setIsPaused] = useState(false);
    //state to determine if error modal should be visible
    const [isError, setIsError] = useState(false);
    //state to set the error message
    const [errorMessage, setErrorMessage] = useState();

    //function to accept new letters in currentGuess
    function handleAddLetter(newLetter) {
        setCurrentGuess(prevCurrentGuess => {
            return [...prevCurrentGuess, newLetter];
        });
        setLetterCount(prevLetterCount => {
            return prevLetterCount + 1;
        });
    };

    //function to delete letters from current guess
    function handleDeleteLetter() {
        setCurrentGuess(prevCurrentGuess => {
            prevCurrentGuess.pop();
            return [...prevCurrentGuess];
        });
        setLetterCount(prevLetterCount => {
            return prevLetterCount - 1;
        });
    };

    //function to submit currentGuess
    function handleSubmitGuess() {
        //check to see if all letters are filled and set error if not
        if (letterCount !== 5) {
            setIsError(true);
            setErrorMessage("All letters must be filled");
            return;
        };

        //check if the guess is in the word list
        //convert guess from array to string
        let guess = currentGuess.join("");
        //extract the first letter of the guess
        let str1 = guess.slice(0, 1);
        //set remainig letters to lowercase
        let str2 = guess.slice(1, 5).toLowerCase();
        //reassign guess to be with the correct capitalization
        guess = str1 + str2;
        //check the validity of the guess
        // let isValid = isValidGuess(validWords, guess);
        // //if the guess is not valid, set error and message and return
        // if (!isValid) {
        //     setIsError(true);
        //     setErrorMessage("Guess not in word list");
        //     return;
        // };

        //pause entries for guess evaluation
        setIsPaused(true);

        //after each submission, add currentGuess to submittedGuesses and increment activeWord
        setSubmittedGuesses(prevSubmittedGuesses => {
            return [...prevSubmittedGuesses, currentGuess];
        });
        setActiveWord(prevActiveWord => {
            return prevActiveWord + 1;
        });

        //add guessed letters to the guessedLetters array
        setGuessedLetters(prevGuessedLetters => {
            let newObject = prevGuessedLetters
            for (let i = 0; i < 5; i++) {
                if (answer[i] === currentGuess[i]) {
                    newObject.rightSpot = [...prevGuessedLetters.rightSpot, currentGuess[i]];
                } else if (answer.includes(currentGuess[i])) {
                    newObject.rightLetter = [...prevGuessedLetters.rightLetter, currentGuess[i]];
                } else {
                    newObject.wrongLetter = [...prevGuessedLetters.wrongLetter, currentGuess[i]];
                };
            };
            return newObject;
        });

        //set currentGuess to a blank array and letter count to 0 for next guess
        setCurrentGuess([]);
        setLetterCount(0);

        //if submitted guess is the answer
        if (JSON.stringify(answer) === JSON.stringify(currentGuess)) {
            setTimeout(() => { setGameover(true) }, 1900);
            setIsWinner(true);
            setTimeout(() => { setIsPaused(false) }, 1900);
            return;
            //if submitted guess is the last chance
        } else if (activeWord + 1 === 6) {
            setTimeout(() => { setGameover(true) }, 1900);
            setTimeout(() => { setIsPaused(false) }, 1900);
            return;
        };

        //if submitted guess is not the answer and the user has more guesses
        setTimeout(() => { setIsPaused(false) }, 1900);
    };

    //function to reset the game with empty values/new answer
    function handleReset() {
        setSubmittedGuesses([]);
        setActiveWord(0);
        setCurrentGuess([]);
        setLetterCount(0);
        setGameover(false);
        setAnswer(randomWordSelect());
        setGuessedLetters({ rightSpot: [], rightLetter: [], wrongLetter: [] });
        setIsWinner(false);
    };

    //function to clear error
    function handleClearErrorModal() {
        setIsError(false);
        setErrorMessage("");
    };

    //context to be provided to children
    const context = {
        answer,
        currentGuess,
        submittedGuesses,
        activeWord,
        letterCount,
        gameover,
        guessedLetters,
        isWinner,
        isPaused,
        isError,
        errorMessage,
        addLetter: handleAddLetter,
        deleteLetter: handleDeleteLetter,
        submitGuess: handleSubmitGuess,
        reset: handleReset,
        clearErrorModal: handleClearErrorModal
    };

    return <GameContext.Provider value={context}>{props.children}</GameContext.Provider>
};

export default GameContext;