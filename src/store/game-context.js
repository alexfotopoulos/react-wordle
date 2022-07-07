import { createContext, useState } from "react";

const GameContext = createContext({
    answer: "",
    submittedGuesses: [],
    currentGuess: [],
    activeWord: 0,
    letterCount: 0,
    addLetter: () => { },
    deleteLetter: () => { },
    submitGuess: () => { },
});

export function GameContextProvider(props) {

    //state to store the answer
    const [answer, setAnswer] = useState([]);
    //state to store the current guess
    const [currentGuess, setCurrentGuess] = useState([]);
    //state to store the submitted guesses
    const [submittedGuesses, setSubmittedGuesses] = useState([]);
    //state to track which Word component is active
    const [activeWord, setActiveWord] = useState(0);

    const [letterCount, setLetterCount] = useState(0)


    function handleAddLetter(newLetter) {
        setCurrentGuess(prevCurrentGuess => {
            return [...prevCurrentGuess, newLetter];
        });
        setLetterCount(prevLetterCount => {
            return prevLetterCount + 1;
        });
    };

    function handleDeleteLetter() {
        setCurrentGuess(prevCurrentGuess => {
            prevCurrentGuess.pop();
            return [...prevCurrentGuess];
        });
        setLetterCount(prevLetterCount => {
            return prevLetterCount - 1;
        });
    };

    function handleSubmitGuess() {
        setSubmittedGuesses(prevSubmittedGuesses => {
            return [...prevSubmittedGuesses, currentGuess];
        });
        setActiveWord(prevActiveWord => {
            return prevActiveWord + 1;
        });
        setCurrentGuess([]);
        setLetterCount(0)
    };

    //context to be provided to children
    const context = {
        answer,
        currentGuess,
        submittedGuesses,
        activeWord,
        letterCount,
        addLetter: handleAddLetter,
        deleteLetter: handleDeleteLetter,
        submitGuess: handleSubmitGuess
    };

    return <GameContext.Provider value={context}>{props.children}</GameContext.Provider>
};

export default GameContext;