import React, { useContext } from "react";
import GameContext from "../store/game-context";
import "./Letter.css";

export default function Letter(props) {

  const gameCtx = useContext(GameContext);

  let content;

  if (props.parentId === gameCtx.activeWord) {
    content = gameCtx.currentGuess[props.letterId];
  } else {
    content = "";
  };

  return (
    <div className="Letter">
      {content}
    </div>
  );
};