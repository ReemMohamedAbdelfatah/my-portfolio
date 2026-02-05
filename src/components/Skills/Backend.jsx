import React from "react";

export default function Backend() {
  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Backend & Tools</h3>

        <div className="skills__box">
          <div className="skills__group">
            {/* Each Skill */}
            <div className="skills__data">
              <i className="bx bxl-nodejs logo"></i>
              <div>
                <h3 className="skills__name">Node Js</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-mongodb logo"></i>
              <div>
                <h3 className="skills__name">POSTGRES</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-git logo"></i>
              <div>
                <h3 className="skills__name">Git</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-graphql logo"></i>
              <div>
                <h3 className="skills__name">REST API</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-adobe logo"></i>
              <div>
                <h3 className="skills__name">Ruby</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>

          {/* DEVIDER */}
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-command logo"></i>
              <div>
                <h3 className="skills__name">Figma</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-barcode logo"></i>
              <div>
                <h3 className="skills__name">EJS</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-github logo"></i>
              <div>
                <h3 className="skills__name">Github</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-repost"></i>
              <div>
                <h3 className="skills__name">Postman</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-figma logo"></i>
              <div>
                <h3 className="skills__name">Ruby On Rails</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}