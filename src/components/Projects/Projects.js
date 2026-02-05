import React from "react";
import "./projects.css";
import Works from "./Works";

export default function Projects() {
  return (
    <>
      <section className="section projects" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My personal projects</span>

        <Works />
      </section>
    </>
  );
}
