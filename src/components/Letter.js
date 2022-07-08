import React, { useContext } from "react";
import GameContext from "../store/game-context";
import "./Letter.css";

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
    //if the letter is in the word and in the right spot
    if (gameCtx.submittedGuesses[props.parentId][props.letterId] === gameCtx.answer[props.letterId]) {
      letterClasses = "Letter rightSpot";
      //if the letter is in the word but not in the right spot
    } else if (gameCtx.answer.includes(gameCtx.submittedGuesses[props.parentId][props.letterId])) {
      letterClasses = "Letter rightLetter";
    }
    //if the letter is not in the word
    else {
      letterClasses = "Letter wrongLetter";
    }
    //empty box for future letter
  } else {
    letterClasses = "Letter";
  };

  return (
    <div className={letterClasses}>
      {content}
    </div>
  );
};