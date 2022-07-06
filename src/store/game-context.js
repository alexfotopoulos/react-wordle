import { createContext, useState } from "react";

const GameContext = createContext({
    answer: "",
    submittedGuesses: [],
    currentGuess: [],
    activeWord: 0,
    addLetter: () => { },
    deleteLetter: () => { },
});

export function GameContextProvider(props) {

    //state to store the current guess
    const [answer, setAnswer] = useState([]);
    //state to store the current guess
    const [currentGuess, setCurrentGuess] = useState([]);
    //state to store the submitted guesses
    const [submittedGuesses, setSubmittedGuesses] = useState([]);
    //state to track which Word component is active
    let [activeWord, setActiveWord] = useState(0);

    function handleAddLetter(newLetter) {
        setCurrentGuess(prevCurrentGuess => {
            return [...prevCurrentGuess, newLetter];
        });
    };

    function handleDeleteLetter() {
        setCurrentGuess(prevCurrentGuess => {
            prevCurrentGuess.pop();
            return [...prevCurrentGuess];
        });
    };

    //context to be provided to children
    const context = {
        answer,
        currentGuess,
        submittedGuesses,
        activeWord,
        addLetter: handleAddLetter,
        deleteLetter: handleDeleteLetter
    };

    return <GameContext.Provider value={context}>{props.children}</GameContext.Provider>
};

export default GameContext;