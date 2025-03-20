import React from "react";
import "./home.css";

export default function Social() {
  return (
    <>
      <div className="home__social">
        <a
          href="https://www.linkedin.com/in/reemmuhammad/"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-linkedin-alt"></i>
        </a>
        <a
          href="https://github.com/ReemMohamedAbdelfatah"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-github-alt"></i>
        </a>
       
      </div>
    </>
  );
}