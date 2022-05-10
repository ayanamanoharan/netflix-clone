import React from "react";
import "./Card.css";
import { imageURL } from "../constants/constant";

function Card({ movies }) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${imageURL}${
          movies ? movies.backdrop_path : ""
        })`,
      }}
    >
      <h1>{movies ? movies.title : ""}</h1>
    </div>
  );
}

export default Card;
