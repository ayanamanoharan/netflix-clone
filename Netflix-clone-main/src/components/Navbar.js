import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="leftnav">
        <img
          className="netflix"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <span>Home</span>
        <span>Movies</span>
        <span>Series</span>
      </div>
      <div className="rightnav">
        <img
          className="usericon"
          src="https://external-preview.redd.it/0dTT-3SprPcsNCqo1GTCI-nqGM9EdZYwqyYr_pZ-baE.jpg?auto=webp&s=a1e8532d326f5aa122df2f31694bf142f117fc06"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
