import React, { useContext } from "react";
import GameContext from "../../store/game-context";
import "./Letter.css";
import { testEvalLetter } from "../../helpers";

export default function Letter(props) {

  //consume GameContext
  const gameCtx = useContext(GameContext);

  //create content variable
  let content;

  //if the parent Word component is the activeWord, add letters from currentGuess
  if (props.parentId === gameCtx.activeWord) {
    content = gameCtx.currentGuess[props.letterId];
    //else if the parent Word component corresponds to previous guess in submittedGuesses
  } else if (props.parentId < gameCtx.activeWord) {
    content = gameCtx.submittedGuesses[props.parentId][props.letterId];
  };

  //create variable for each Letter's class
  let letterClasses;

  //if parent Word component corresponds to previous guess in submittedGuesses
  if (props.parentId < gameCtx.activeWord) {
    letterClasses = testEvalLetter(gameCtx.answer, gameCtx.submittedGuesses[props.parentId][props.letterId], props.letterId, props.answerObject);
  } else {
    letterClasses = "Letter";
  };

  return (
    <div className={letterClasses}>
      {content}
    </div>
  );
};

// style={{transition: `background-color ${props.letterId}00 ms`}}