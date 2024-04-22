import React, { useState } from "react";
import "./Card.css";
import heart from "../assets/heart-solid.svg";

export default function Card(props) {
  let favorit = useState("Add to favorite");
  let activeClass = useState("");
  // Destructuring
  let [btnTextState, setBtnTextSate] = favorit;
  let [classState, setClassState] = activeClass;

  // Lets change modify state
  function addTOFavorite(image) {
    setBtnTextSate((prevState) => {
      if (prevState === "Add to favorite") {
        // get fav images
        props.getFavImage(image);
        return "Added to favorite";
      } else {
        return "Add to favorite";
      }
    });

    setClassState((prevClass) => {
      if (prevClass == "") {
        return "active";
      } else {
        return "";
      }
    });
  }

  return (
    (<h1>redt</h1>),
    (
      <div className={`card ${classState}`}>
        <img src={heart} className="icon" />
        <img src={props.cardContant.image} alt="" />
        <h3>{props.cardContant.name}</h3>
        <p>{props.cardContant.about}</p>
        <button
          onClick={() => {
            addTOFavorite(props.cardContant.image);
          }}
        >
          {btnTextState}
        </button>
      </div>
    )
  );
}
