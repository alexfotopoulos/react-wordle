import React, { useContext } from "react";
import GameContext from "../../store/game-context";
import "./Key.css";

export default function Key(props) {

    const gameCtx = useContext(GameContext);

    function handleClick() {
        if (gameCtx.gameover === false && gameCtx.isPaused === false && (props.letter !== "EN" && props.letter !== "BS") && gameCtx.letterCount < 5) {
            gameCtx.addLetter(props.letter);
        } else if (gameCtx.gameover === false && gameCtx.isPaused === false && props.letter === "BS" && gameCtx.letterCount > 0) {
            gameCtx.deleteLetter();
        } else if (gameCtx.gameover === false && gameCtx.isPaused === false && props.letter === "EN") {
            if (gameCtx.letterCount !== 5) {
                alert('All letters must be filled');
                return;
            } else {
                gameCtx.submitGuess();
            };
        };
    };

    let keyTheme;

    if (gameCtx.guessedLetters.rightSpot.includes(props.letter)) {
        keyTheme = "Key key-rightSpot";
    } else if (gameCtx.guessedLetters.rightLetter.includes(props.letter)) {
        keyTheme = "Key key-rightLetter";
    } else if (gameCtx.guessedLetters.wrongLetter.includes(props.letter)) {
        keyTheme = "Key key-wrongLetter";
    } else {
        keyTheme = "Key";
    };

    return (
        <div className={keyTheme} onClick={handleClick}>{props.letter}</div>
    );
};