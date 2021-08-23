import React from 'react';
import Kadr from "../../images/card/6.svg";

function MoviesCard({ childrenImageSave, childrenButtonSave, childrenButtonDelete }) {
  return (
    <article className="moviesCard">
      <div className="moviesCard__movieInfo">
        <p className="moviesCard__movieName">В погоне за Бенкси</p>
        <p className="moviesCard__movieDuration">27 минут</p>
      </div>
      <div className="moviesCard__container ">
        <img src={Kadr} alt="Фильм" className="moviesCard__image" />
        <button className="moviesCard__btn ">
          {childrenButtonSave}
          {childrenImageSave}
          {childrenButtonDelete}
        </button>
      </div>
    </article>
  );
}

export default MoviesCard;