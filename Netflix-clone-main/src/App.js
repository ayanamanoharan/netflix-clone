// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Slider from "./components/Slider";
import {
  actionURL,
  animationURL,
  dramaURL,
  horrorURL,
} from "./constants/constant";
import YouTube from "react-youtube";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Slider title="Action" url={actionURL} />
      <YouTube videoId="1Uwqp4y6jC0" />
      <Slider title="Animation" url={animationURL} />
      <Slider title="Drama" url={dramaURL} />
      <Slider title="Horror" url={horrorURL} />
    </div>
  );
}

export default App;
