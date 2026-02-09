import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
import logoR from "../../assets/images/logoR.png";
export default function Header() {
  /* ======================== Change background header =========================== */
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ======================== Toggle Menu =========================== */
  const [Toggle, showMenu] = useState(false);
  const [ActiveNav, setActiveNav] = useState("#home");

  /* ======================== Dark Mode State =========================== */
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled",
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [darkMode]);

  /* ======================== Intersection Observer =========================== */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }, // Adjusted threshold value
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <header className="header">
        <nav className="nav container">
          {/*Logo*/}
          <a href="#home" className="nav__logo">
            <i>
              <img src={darkMode ? logoR : logo} alt="Logo" />
            </i>
          </a>

          {/*Menu*/}
          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={
                    ActiveNav === "#home"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={
                    ActiveNav === "#about"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-user nav__icon"></i> About
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#skills"
                  onClick={() => setActiveNav("#skills")}
                  className={
                    ActiveNav === "#skills"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-file-alt nav__icon"></i> Skills
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#qualification"
                  onClick={() => setActiveNav("#qualification")}
                  className={
                    ActiveNav === "#qualification"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-briefcase-alt nav__icon"></i> Experience
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#projects"
                  onClick={() => setActiveNav("#projects")}
                  className={
                    ActiveNav === "#projects"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-scenery nav__icon"></i> Projects
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  onClick={() => setActiveNav("#contact")}
                  className={
                    ActiveNav === "#contact"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-message nav__icon"></i> Contact
                </a>
              </li>
            </ul>
            {/* Close */}
            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>
          {/* Dark Mode Toggle */}
          <button
            className="nav__dark-mode"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <i className="uil uil-sun"></i>
            ) : (
              <i className="uil uil-moon"></i>
            )}
          </button>
          {/* Toggle Menu Icon */}
          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
}
