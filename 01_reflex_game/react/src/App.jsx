import { useState } from "react";
import Game from "./components/Game";
import Welcome from "./components/Welcome";

function App() {
  const [result, setResult] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleGameEnd(finalResult) {
    setResult(finalResult);
    setIsPlaying(false);
  }

  return (
    <>
      <Welcome setIsPlaying={setIsPlaying} />
      <p>{result}</p>
      {isPlaying ? <Game handleGameEnd={handleGameEnd} /> : <></>}
    </>
  );
}

export default App;
