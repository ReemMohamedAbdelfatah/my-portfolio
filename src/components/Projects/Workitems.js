import React from "react";

const Workitems = ({ item }) => {
  return (
    <a href={item.demo} target="_blank" className="work__card" key={item.id}>
      <img src={item.image} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p className="work__description">{item.description}</p>

      <div className="hashtags__container">
        {item.hashtags &&
          item.hashtags.map((hashtag, index) => (
            <span key={index} className="work__hashtag">
              #{hashtag}
            </span>
          ))}
      </div>

      <div className="buttons__container">
        <a
          href={item.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="work__button"
        >
          <i className="bx bx-link-external work__button-icon"></i>
          Demo
        </a>

        <a
          href={item.code}
          target="_blank"
          rel="noopener noreferrer"
          className="work__button"
        >
          <i className="uil uil-github-alt work__button-icon"></i>
          Code
        </a>
      </div>
    </a>
  );
};

export default Workitems;
