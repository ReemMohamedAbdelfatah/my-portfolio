import React from "react";
import logo from "../../assets/images/logo.png";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__title"><img src={logo} alt="logo" /></div>

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
