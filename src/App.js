import { useContext, useEffect } from "react";
import "./App.css";
import Word from "./components/guesses/Word";
import GameContext from "./store/game-context";
import Keyboard from "./components/keyboard/Keyboard";
import ResetModal from "./components/ResetModal";

function App() {

  //consume GameContext
  const gameCtx = useContext(GameContext);

  //useEffect to add listener for key strokes
  useEffect(() => {
    //function to listen for key strokes
    const guessListener = evt => {
      //if key stroke is in alphabet, add letter to current guess
      if (gameCtx.gameover === false && evt.keyCode >= 65 && evt.keyCode <= 90 && gameCtx.letterCount < 5) {
        gameCtx.letterCount++;
        gameCtx.addLetter(evt.key.toUpperCase());
      };
      //if key stroke is backspace, pop last character off current guess
      if (gameCtx.gameover === false && evt.keyCode === 8) {
        if (gameCtx.letterCount > 0) {
          gameCtx.letterCount--;
          gameCtx.deleteLetter();
        };
      };
      //if key stroke is enter and the word is filled, submit
      if (gameCtx.gameover === false && evt.keyCode === 13) {
        //if word is not filled
        if (gameCtx.letterCount !== 5) {
          alert('All letters must be filled');
          return;
        };
        gameCtx.submitGuess();
      };
    };

    //add event listener
    document.addEventListener('keyup', guessListener);

    //clean up event listener
    return () => {
      document.removeEventListener('keyup', guessListener);
    };
  }, [gameCtx]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="mt-2 text-white fw-bold">Wordle</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="App-gameboard mb-sm-5">
              <Word wordId={0} />
              <Word wordId={1} />
              <Word wordId={2} />
              <Word wordId={3} />
              <Word wordId={4} />
              <Word wordId={5} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4 offset-4 text-center">
            {gameCtx.gameover === true && <ResetModal />}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Keyboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;