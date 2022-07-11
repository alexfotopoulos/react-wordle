import React, {useContext} from "react";
import GameContext from "../../store/game-context";
import "./Key.css";

export default function Key(props) {

    const gameCtx = useContext(GameContext);

    let keyTheme

    if (gameCtx.guessedLetters.rightSpot.includes(props.letter)) {
        keyTheme = "Key key-rightSpot"
    } else if (gameCtx.guessedLetters.rightLetter.includes(props.letter)) {
        keyTheme = "Key key-rightLetter"
    } else if (gameCtx.guessedLetters.wrongLetter.includes(props.letter)) {
        keyTheme = "Key key-wrongLetter"
    } else {
        keyTheme = "Key"
    }

    console.log(gameCtx.guessedLetters.rightSpot.includes("A"))

    return (
        <div className={keyTheme}>{props.letter}</div>
    );
};
