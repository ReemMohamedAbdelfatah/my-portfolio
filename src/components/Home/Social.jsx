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
          rel="noreferrer"
        >
          <i className="uil uil-linkedin-alt"></i>
        </a>
        <a
          href="https://github.com/ReemMohamedAbdelfatah"
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-github-alt"></i>
        </a>
        <a
          href="https://www.behance.net/reemhamdia"
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-behance"></i>
        </a>
      </div>
    </>
  );
}
