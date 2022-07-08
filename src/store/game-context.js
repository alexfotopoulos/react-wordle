import { createContext, useState } from "react";

const GameContext = createContext({
    answer: [],
    submittedGuesses: [],
    currentGuess: [],
    activeWord: 0,
    letterCount: 0,
    gameover: null,
    addLetter: () => { },
    deleteLetter: () => { },
    submitGuess: () => { },
    reset: () => { },
});

export function GameContextProvider(props) {

    //state to store the answer (currently using placeholder)
    const [answer, setAnswer] = useState(["S", "P", "A", "C", "E"]);
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
        //after each submission, add currentGuess to submittedGuesses and increment activeWord
        setSubmittedGuesses(prevSubmittedGuesses => {
            return [...prevSubmittedGuesses, currentGuess];
        });
        setActiveWord(prevActiveWord => {
            return prevActiveWord + 1;
        });
        setCurrentGuess([]);
        setLetterCount(0);

        //if submitted guess is the answer
        if (JSON.stringify(answer) === JSON.stringify(currentGuess)) {
            setGameover(true);
            return;
            //if submitted guess is the last chance
        } else if (activeWord + 1 === 6) {
            setGameover(true);
            return;
            //if submitted guess is not the answer and the user has more guesses
        };
    };

    //function to reset the game with empty values
    function handleReset() {
        setSubmittedGuesses([]);
        setActiveWord(0);
        setCurrentGuess([]);
        setLetterCount(0);
        setGameover(false);
    };

    //context to be provided to children
    const context = {
        answer,
        currentGuess,
        submittedGuesses,
        activeWord,
        letterCount,
        gameover,
        addLetter: handleAddLetter,
        deleteLetter: handleDeleteLetter,
        submitGuess: handleSubmitGuess,
        reset: handleReset
    };

    return <GameContext.Provider value={context}>{props.children}</GameContext.Provider>
};

export default GameContext;