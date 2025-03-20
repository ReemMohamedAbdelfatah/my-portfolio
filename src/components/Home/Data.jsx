import React from "react";
import hand from "../../assets/icons/hand.svg";
import send from "../../assets/icons/send-svgrepo-com.svg";
import "./home.css";

export default function Data() {
  return (
    <>
      <div className="home__data">
        {/* Added  */}
        <div className="home__title-container">
          <h1 className="home__title">Reem Mohamed</h1>
          <img src={hand} alt="hand" className="home__hand" />
        </div>

        <h3 className="home__subtitle">Software Engineer</h3>
        <p className="home__description">
          Frontend Web Developer, driven by passion and
          creativity to build seamless digital experiences.
        </p>

        <a href="#contact" className="button button--flex">
          Say Hello
          {/* <i className="bx bx-paper-plane send__icon" id="svg-icon"></i> */}
          <img
            src={send}
            alt="send icon"
            className="send__icon"
            id="svg-icon"
          />
        </a>
      </div>
    </>
  );
}