import React from 'react';
import MoviesCard from "../Movies/MoviesCard";
import SavedFilm from "../../images/save/save6d.svg";
// import SaveFilm from "../../images/save/save.svg";
// import Delete from "../../images/save/delete.svg";
import { withRouter } from "react-router-dom";

function MoviesCardList() {
  return (
    <div className="moviesCardBox">
      <section className="moviesCardList">
        <MoviesCard
         childrenImageSave={
          <img
            src={SavedFilm}
            alt="Сохранено"
            className="moviesCard__btn"
          />
         }
        />
        <MoviesCard
          childrenImageSave={
            <img
              src={SavedFilm}
              alt="Сохранено"
              className="moviesCard__btn"
            />
          }
        />
         <MoviesCard
         childrenButtonDelete={
          <button
            type="button"
            className="moviesCard__btn moviesCard__btn-delete"
          />
          }
        /> 
        <MoviesCard
          childrenButtonSave={
            <button
            type="button"
            className="moviesCard__btn moviesCard__btn-save"
          />
          }
        />
         <MoviesCard
          childrenButtonDelete={
            <button
              type="button"
              className="moviesCard__btn moviesCard__btn-delete"
            />
          }
        /> 
        <MoviesCard
          childrenButtonSave={
            <button
            type="button"
            className="moviesCard__btn moviesCard__btn-save"
          />
          }
        />
        <MoviesCard
          childrenImageSave={
            <img
              src={SavedFilm}
              alt="Сохранено"
              className="moviesCard__btn"
            />
          }
        />
        <MoviesCard
          childrenButtonSave={
            <button
            type="button"
            className="moviesCard__btn moviesCard__btn-save"
          />
          }
        />
        <MoviesCard
         childrenButtonSave={
          <button
          type="button"
          className="moviesCard__btn moviesCard__btn-save"
        />
          }
        />
        <MoviesCard
         childrenButtonSave={
          <button
          type="button"
          className="moviesCard__btn moviesCard__btn-save"
        />
          }
        />
        <MoviesCard
         childrenButtonSave={
          <button
          type="button"
          className="moviesCard__btn moviesCard__btn-save"
        />
          }
        />
        <MoviesCard
          childrenImageSave={
            <img
              src={SavedFilm}
              alt="Сохранено"
              className="moviesCard__btn"
            />
          }
        />
      </section>
    </div>
  );
}

export default withRouter(MoviesCardList);