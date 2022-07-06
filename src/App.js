import { useContext, useEffect } from "react";
import "./App.css";
import Word from "./components/Word";
import GameContext from "./store/game-context";

function App() {
  let guessCounter = 0;

  const gameCtx = useContext(GameContext);

  useEffect(() => {
    document.addEventListener("keyup", (evt) => {
      if (evt.keyCode >= 65 && evt.keyCode <= 90) {
        if (guessCounter < 5) {
          guessCounter++;
          gameCtx.addLetter(evt.key.toUpperCase());
        };
      };
      if (evt.keyCode === 8) {
        guessCounter--;
        gameCtx.deleteLetter();
      };
      //ENTER is keycode 13
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 mt-5">
            <Word wordId={0} />
            <Word wordId={1} />
            <Word wordId={2} />
            <Word wordId={3} />
            <Word wordId={4} />
            <Word wordId={5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;