// import logo from "./logo.svg";
import "./App.css";
import winingList from "./WiningList.json";
import { useState } from "react";

function App() {
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
    if (gameState[index] == "") {
      const newArry = [...gameState];
      newArry[index] = currentPlayer;
      setGameState(newArry);
    } else {
      window.alert("You can not over ride the value");
    }
  };

  return (
    <div className="App">
      <div className="Title">Tic-Tac-Toe</div>
      <div className="table">
        <table>
          <tbody>
            <tr>
              <td id="0" onClick={() => handleClick(0)}>
                {gameState[0]}
              </td>
              <td id="1" onClick={() => handleClick(1)}>
                {gameState[1]}
              </td>
              <td id="2" onClick={() => handleClick(2)}>
                {gameState[2]}
              </td>
            </tr>
            <tr>
              <td id="3" onClick={() => handleClick(3)}>
                {gameState[3]}
              </td>
              <td id="4" onClick={() => handleClick(4)}>
                {gameState[4]}
              </td>
              <td id="5" onClick={() => handleClick(5)}>
                {gameState[5]}
              </td>
            </tr>
            <tr>
              <td id="6" onClick={() => handleClick(6)}>
                {gameState[6]}
              </td>
              <td id="7" onClick={() => handleClick(7)}>
                {gameState[7]}
              </td>
              <td id="8" onClick={() => handleClick(8)}>
                {gameState[8]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
