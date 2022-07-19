import React, { useContext } from "react";
import GameContext from "../../store/game-context";
import "./ResetModal.css";

export default function ResetModal() {

    //consume the GameContext
    const gameCtx = useContext(GameContext);

    //function to reset game
    function reset() {
        gameCtx.reset();
    };

    //modal content depending if the user won the game
    let content;
    if (gameCtx.isWinner) {
        content = `Congratulations, you won in ${gameCtx.submittedGuesses.length} guess${gameCtx.submittedGuesses.length > 1 ? "es" : ""}!`
    } else {
        content = `Answer: ${gameCtx.answer.toString().replaceAll(",", "")}`
    }


    return (
        <div>
            <div className="backdrop"></div>
            <div className="ResetModal">
                <h1 className="text-white mb-4">{content}</h1>
                <button className="btn btn-secondary" onClick={reset}>New Game</button>
            </div>

        </div>
    );
};