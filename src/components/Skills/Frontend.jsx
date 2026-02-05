import React from "react";

export default function Frontend() {
  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Frontend Development</h3>

        <div className="skills__box">
          <div className="skills__group">
            {/* Each Skill */}
            <div className="skills__data">
              <i className="bx bxl-html5 logo"></i>
              <div>
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-javascript logo"></i>
              <div>
                <h3 className="skills__name">Javascript</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-react logo"></i>
              <div>
                <h3 className="skills__name">React</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-tailwind-css logo"></i>
              <div>
                <h3 className="skills__name">Tailwind</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-pointer logo"></i>
              <div>
                <h3 className="skills__name">MUI</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>

          {/* DEVIDER */}
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxl-css3 logo"></i>
              <div>
                <h3 className="skills__name">CSS</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-typescript logo"></i>
              <div>
                <h3 className="skills__name">Typescript</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-cloud logo"></i>
              <div>
                <h3 className="skills__name">Next js</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-bootstrap logo"></i>
              <div>
                <h3 className="skills__name">Bootstrap</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-redux logo"></i>
              <div>
                <h3 className="skills__name">Redux</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}