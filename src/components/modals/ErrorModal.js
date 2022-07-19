import React, { useContext } from "react";
import GameContext from "../../store/game-context";
import "./ErrorModal.css";

export default function ErrorModal() {

    //consume GameContext
    const gameCtx = useContext(GameContext);

    return (
        <div>
            <div className="backdrop"></div>
            <div className="ErrorModal">
                <h1 className="text-white mb-4">All letters must be filled</h1>
                <button className="btn btn-secondary" onClick={gameCtx.clearErrorModal}>Okay</button>
            </div>

        </div>
    );
};