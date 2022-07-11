import React, { useContext } from "react";
import GameContext from "../store/game-context";
import Letter from "./Letter";
import "./Word.css";

export default function Word(props) {

  //consume GameContext
  const gameCtx = useContext(GameContext);

  //create answerObject to track duplicate/already seen letters in guess
  let answerObject = {};
  for (let i = 0; i < gameCtx.answer.length; i++) {
    if (answerObject[gameCtx.answer[i]]) {
      answerObject[gameCtx.answer[i]]++;
    } else {
      answerObject[gameCtx.answer[i]] = 1;
    };
  };

  return (
    <div className="Word">
      <Letter parentId={props.wordId} letterId={0} answerObject={answerObject}/>
      <Letter parentId={props.wordId} letterId={1} answerObject={answerObject} />
      <Letter parentId={props.wordId} letterId={2} answerObject={answerObject} />
      <Letter parentId={props.wordId} letterId={3} answerObject={answerObject} />
      <Letter parentId={props.wordId} letterId={4} answerObject={answerObject} />
    </div>
  );
};