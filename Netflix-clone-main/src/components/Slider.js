import React, { useEffect, useState } from "react";
import "./Slider.css";
import Card from "./Card";
import axios from "../Axios";
import { actionURL } from "../constants/constant";

const Slider = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className="slider">
      <h1>{title}</h1>

      <div className="Cardlist">
        {movies.map((singleMovie) => {
          console.log(singleMovie);
          return <Card movies={singleMovie} />;
        })}
      </div>
    </div>
  );
};

export default Slider;
