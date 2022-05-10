import React, { useEffect, useState } from "react";

import "./Banner.css";
import axios from "../Axios";
import { trendingURL } from "../constants/constant";
let count = 0;
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios.get(trendingURL).then((response) => {
      // console.log(response);
      setInterval(function () {
        setMovie(response.data.results[count]);
        if (count > 20) {
          count = 0;
        } else count++;
      }, 6000);
    });
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${
          movie ? movie.backdrop_path : ""
        })`,
      }}
    >
      <div className="bgdark">
        <div className="left">
          <h1 className="head">{movie ? movie.title : ""}</h1>
          <h1 className="head">{movie ? movie.release_date : ""}</h1>
          {/* <h2 className="sub">97% liked 2018 season 3</h2> */}
          <p className="para">{movie ? movie.overview : ""}</p>
          <div className="btns">
            <button className="btn">Play Now</button>
            <button className="btn">More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
