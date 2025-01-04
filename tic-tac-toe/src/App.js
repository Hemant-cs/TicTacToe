// import logo from "./logo.svg";
import "./App.css";
import winingList from "./WiningList.json";
import { useState } from "react";

function App() {
  const [winFlag, setWinFlag] = useState(false);
  const [tiedFlag, setTiedFlag] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameState, setGameState] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleClick = (index) => {
    console.log("log1", index);
    console.log("gameState : " + gameState);
    if (gameState[index] === "") {
      console.log("log2");

      const newArry = [...gameState];
      console.log("newArry " + newArry);

      newArry[index] = currentPlayer;
      console.log("newArry[index] " + newArry);

      setGameState(newArry);
      console.log("setGameState : " + gameState);

      checkWinner(newArry);
      checkDraw(newArry);
      switchPlayer();
    } else {
      console.log("log3");
      window.alert("You can not over ride the value");
    }
  };

  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkDraw = (arry) => {
    if (!arry.includes("")) {
      setTiedFlag(true);
      return;
    }
  };

  const checkWinner = (arry) => {
    for (let i = 0; i < 8; i++) {
      //[0,1,2] -> "X"
      let a = winingList[i][0];
      let b = winingList[i][1];
      let c = winingList[i][2];
      if (
        arry[a] === currentPlayer &&
        arry[b] === currentPlayer &&
        arry[c] === currentPlayer
      ) {
        switchPlayer();
        setWinFlag(true);
        return;
      }
    }
  };

  const handleReset = () => {
    setCurrentPlayer("X");
    setGameState(["", "", "", "", "", "", "", "", ""]);
    setTiedFlag(false);
    setWinFlag(false);
  };

  return (
    <div className="App">
      <div className="Title">Tic-Tac-Toe</div>
      <div className="table">
        <table>
          <tbody>
            <tr>
              {!winFlag ? (
                <td id="0" onClick={() => handleClick(0)}>
                  {gameState[0]}
                </td>
              ) : (
                <td id="0">{gameState[0]}</td>
              )}
              {!winFlag ? (
                <td id="1" onClick={() => handleClick(1)}>
                  {gameState[1]}
                </td>
              ) : (
                <td id="1">{gameState[1]}</td>
              )}
              {!winFlag ? (
                <td id="2" onClick={() => handleClick(2)}>
                  {gameState[2]}
                </td>
              ) : (
                <td id="2">{gameState[2]}</td>
              )}
            </tr>
            <tr>
              {!winFlag ? (
                <td id="3" onClick={() => handleClick(3)}>
                  {gameState[3]}
                </td>
              ) : (
                <td id="3">{gameState[3]}</td>
              )}
              {!winFlag ? (
                <td id="4" onClick={() => handleClick(4)}>
                  {gameState[4]}
                </td>
              ) : (
                <td id="4">{gameState[4]}</td>
              )}
              {!winFlag ? (
                <td id="5" onClick={() => handleClick(5)}>
                  {gameState[5]}
                </td>
              ) : (
                <td id="5">{gameState[5]}</td>
              )}
            </tr>
            <tr>
              {!winFlag ? (
                <td id="6" onClick={() => handleClick(6)}>
                  {gameState[6]}
                </td>
              ) : (
                <td id="6">{gameState[6]}</td>
              )}
              {!winFlag ? (
                <td id="7" onClick={() => handleClick(7)}>
                  {gameState[7]}
                </td>
              ) : (
                <td id="7">{gameState[7]}</td>
              )}
              {!winFlag ? (
                <td id="8" onClick={() => handleClick(8)}>
                  {gameState[8]}
                </td>
              ) : (
                <td id="8">{gameState[8]}</td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
      {winFlag && (
        <h1>{`${currentPlayer === "X" ? "O" : "X"} won the Match`}</h1>
      )}
      {tiedFlag && <h1>{`Match Tied`}</h1>}
      {(winFlag || tiedFlag) && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}

export default App;
