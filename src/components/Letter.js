import React, { useContext } from "react";
import GameContext from "../store/game-context";
import "./Letter.css";

export default function Letter(props) {

  const gameCtx = useContext(GameContext);

  let content;

  if (props.parentId === gameCtx.activeWord) {
    content = gameCtx.currentGuess[props.letterId];
  } else if (props.parentId < gameCtx.activeWord) {
    content = gameCtx.submittedGuesses[props.parentId][props.letterId];
  };

  let letterClasses;

  if (props.parentId < gameCtx.activeWord) {
    if (gameCtx.submittedGuesses[props.parentId][props.letterId] === gameCtx.answer[props.letterId]) {
      letterClasses = "Letter rightSpot";
    } else if (gameCtx.answer.includes(gameCtx.submittedGuesses[props.parentId][props.letterId])) {
      letterClasses = "Letter rightLetter";
    }
    else {
      letterClasses = "Letter wrongLetter";
    }
  } else {
    letterClasses = "Letter";
  };

  return (
    <div className={letterClasses}>
      {content}
    </div>
  );
};