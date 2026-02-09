import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import logoR from "../../assets/images/logoR.png";
import "./footer.css";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled",
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.body.classList.contains("dark-theme"));
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__title">
            <img src={darkMode ? logoR : logo} alt="logo" />
          </div>

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
