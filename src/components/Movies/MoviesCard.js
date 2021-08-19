import React from 'react';
import Kadr from "../../images/card/1.svg";

function MoviesCard({ childrenImageSave, childrenButtonSave, childrenButtonDelete }) {
  return (
    <article className="moviesCard">
      <div className="moviesCard__container">
        {childrenButtonSave}
        {childrenImageSave}
        {childrenButtonDelete}
        <img src={Kadr} alt="Фильм" className="moviesCard__image" />
      </div>
      <div className="moviesCard__movieInfo">
        <p className="moviesCard__movieName">В погоне за Бенкси</p>
        <p className="moviesCard__movieDuration">27 минут</p>
      </div>
    </article>
  );
}

export default MoviesCard;