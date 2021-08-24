import React, { useState} from "react";
import "./rps.scss";

export default function Rps() {
  const [compscore, setCompscore] = useState(0);
  var [userscore, setUserscore] = useState(0);
  const [userchoice, setUserchoice] = useState("");
  const [compchoice, setCompchoice] = useState("");
  const [result, setResult] = useState("");
  let choicesobject = {
    rock: {
      rock: "draw",
      scissor: "win",
      paper: "lose",
    },
    scissor: {
      rock: "lose",
      scissor: "draw",
      paper: "win",
    },
    paper: {
      rock: "win",
      scissor: "lose",
      paper: "draw",
    },
  };
  const mystyle = {
    backgroundColor: "orange",
    fontSize: "25px",
    fontFamily: "Arial",
    width: "100%",
    textAlign: "center"
  };
  const reset = () => {
    setCompscore(0);
    setUserscore(0);
    setUserchoice("");
    setCompchoice("");
    setResult("");
  };

  function checkResult(input) {
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random() * 3);
    setCompchoice(choices[num]);
    const compans =choices[num];
    
    setUserchoice(input);
    console.log(input)
    console.log(compans)
    switch (choicesobject[input][compans]) {
      case "win":
        // result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
        setResult("YOU WIN");

        setUserscore(userscore + 1);
        break;
      case "lose":
        // result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
        setResult("YOU LOSE");

        setCompscore(compscore + 1);
        break;
      default:
        //  result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
        setResult("DRAW");
        break;
    }
  }

  return (
    <div className="containerr">
      <div className="scores">
        <p>
          Computer :<span>{compscore}</span>
        </p>
        <p>
          You :<span>{userscore}</span>
        </p>
      </div>
      <div className="weapons">
        <button className="b1"
          onClick={() => {
            checkResult("rock");
          }}
        >
          <i class="far fa-hand-rock"></i>
        </button>
        <button className="b2"
          onClick={() => {
            checkResult("paper");
          }}
        >
          <i class="far fa-hand-paper"></i>
        </button>
        <button className="b3"
          onClick={() => {
            checkResult("scissor");
          }}
        >
          <i class="far fa-hand-scissors"></i>
        </button>
      </div>
      <div className="details">
        <span>
          {userchoice && (
            <div
              style={{ color: "black", fontFamily: "Arial", fontSize: "20px" }}
            >
              Your Choice :<strong> {userchoice}</strong>{" "}
            </div>
          )}
        </span>
        <span>
          {compchoice && (
            <div
              style={{ color: "black", fontFamily: "Arial", fontSize: "20px" }}
            >
              Computer Choice :<strong> {compchoice}</strong>{" "}
            </div>
          )}
        </span>
        <span>
          { (
            <div
              style={mystyle}
            >
              {result}{" "}
            </div>
          )}
        </span>
      </div>
      <span className="reset" onClick={reset}>
        Reset
      </span>
    </div>
  );
}
