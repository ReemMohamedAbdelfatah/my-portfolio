import React from "react";
import AboutImg from "../../assets/images/reem_2.jpeg";
import CV from "../../assets/files/CV.pdf";
import files from "../../assets/icons/files.svg";
import Info from "./info";
import "./about.css";

export default function About() {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
          <img src={AboutImg} alt="about-img" className="about__img" />

          <div className="about__data">
            <Info />

            <p className="about__description">
              Front-end developer turning ideas into seamless, interactive web
              experiences. I blend design and code to craft user-friendly
              interfaces that not only look great but feel intuitive. Passionate
              about creating smooth, engaging digital journeys.
            </p>

            <a href={CV} download className="button button--flex">
              Download CV
              <img src={files} alt="file icon" id="svg-icon" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}