import { useContext, useEffect } from "react";
import "./App.css";
import Word from "./components/Word";
import GameContext from "./store/game-context";

function App() {

  const gameCtx = useContext(GameContext);

  useEffect(() => {
    const guessListener = evt => {
      if (evt.keyCode >= 65 && evt.keyCode <= 90 && gameCtx.letterCount < 5) {
        gameCtx.letterCount++;
        gameCtx.addLetter(evt.key.toUpperCase());
      };
      if (evt.keyCode === 8) {
        if (gameCtx.letterCount > 0) {
          gameCtx.letterCount--;
          gameCtx.deleteLetter();
        };
      };
      if (evt.keyCode === 13) {
        if (gameCtx.letterCount !== 5) {
          alert('All letters must be filled');
          return;
        };
        gameCtx.submitGuess();
      };
    };

    document.addEventListener('keyup', guessListener);

    return () => {
      document.removeEventListener('keyup', guessListener);
    };

  }, [gameCtx]);

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