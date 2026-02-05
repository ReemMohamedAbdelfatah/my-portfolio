import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Reem</h1>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>

            <li>
              <a href="#projects" className="footer__link">
                Projects
              </a>
            </li>

            <li>
              <a href="#qualification" className="footer__link">
                Experience
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/reemmuhammad/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
              href="https://github.com/ReemMohamedAbdelfatah"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-github-alt"></i>
            </a>
          
          </div>

          <span className="footer__copy">
            Copyright © Reem {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </>
  );
}
