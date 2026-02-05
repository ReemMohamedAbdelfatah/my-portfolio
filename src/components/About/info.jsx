import React from "react";

export default function Info() {
  return (
    <>
      <div className="about__info grid">
        <div className="about__box ">
          <i className="bx bx-award about__icon"></i>
          <h3 className="about__title">Education</h3>
          <span className="about__subtitle">Computer Science</span>
        </div>

        <div className="about__box">
          <i className="bx bx-briefcase about__icon"></i>
          <h3 className="about__title">Completed</h3>
          <span className="about__subtitle">10+ Projects</span>
        </div>

        <div className="about__box">
          <i className="bx bx-support about__icon"></i>
          <h3 className="about__title">Opportunities</h3>
          <span className="about__subtitle">Open to work</span>
        </div>
      </div>
    </>
  );
}