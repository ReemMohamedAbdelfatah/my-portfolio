import React from "react";
import Slider from "react-slick";
import "./certficates.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ITI from "../../assets/files/iti.jpg";
import Udacity from "../../assets/files/udacity.jpg";
import UIUX from "../../assets/files/uiux.jpeg";
import Tremollo from "../../assets/files/tremolo.png";


export default function Certficates() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="section cert" id="cert">
        <h2 className="section__title">Certificates</h2>
        <span className="section__subtitle">My Achievements</span>
        <div className="cert__container container">
          <Slider {...settings}>
            <div>
              <img
                src={ITI}
                alt="ITI Certificate"
                className="cert__img"
              />
            </div>
            <div>
              <img
                src={Udacity}
                alt="Front End Certificate"
                className="cert__img"
              />
            </div>
            <div>
              <img
                src={UIUX}
                alt="UIUX Certificate"
                className="cert__img"
              />
            </div>
              <div>
              <img
                src={Tremollo}
                alt="UIUX Certificate"
                className="cert__img"
              />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}