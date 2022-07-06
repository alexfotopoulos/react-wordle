import React, { useContext } from "react";
import GameContext from "../store/game-context";
import Letter from "./Letter";
import "./Word.css";

export default function Word(props) {

  const gameCtx = useContext(GameContext);

  return (
    <div className="Word">
      <Letter parentId={props.wordId} letterId={0} />
      <Letter parentId={props.wordId} letterId={1} />
      <Letter parentId={props.wordId} letterId={2} />
      <Letter parentId={props.wordId} letterId={3} />
      <Letter parentId={props.wordId} letterId={4} />
    </div>
  );
};