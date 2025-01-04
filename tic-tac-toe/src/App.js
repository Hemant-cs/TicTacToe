// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  return (
    <div className="App">
      <div className="Title">Tic-Tac-Toe</div>
      <div className="table">
        <table>
          <tr>
            <td index="0">h1</td>
            <td index="1">h2</td>
            <td index="2">h3</td>
          </tr>
          <tr>
            <td index="3">h4</td>
            <td index="4">h5</td>
            <td index="5">h6</td>
          </tr>
          <tr>
            <td index="6">h7</td>
            <td index="7">h8</td>
            <td index="8">h9</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
