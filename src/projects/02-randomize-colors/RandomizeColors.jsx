import React from "react";
import Title from "../components/Title";

export default function RandomizeColors() {
  function handleClick(e) {
    console.log(e);
  }

  const handleSecondClick = (e) => {
    let body = document.querySelector("body");
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  };

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let index = 0; index < 6; index++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="container m-auto text-center">
      <Title text={"Randomize color"} clases={"mb-4"} />
      <button className="btn btn-danger" onClick={(e) => handleClick(e)}>
        Consol the click event!
      </button>
      <button className="btn btn-success" onClick={handleSecondClick}>
        Change colors!
      </button>
      <button className="btn btn-primary" onClick={handleSecondClick}>
        Change colors!
      </button>
      <button className="btn btn-warning" onClick={handleSecondClick}>
        Change colors!
      </button>
    </div>
  );
}
