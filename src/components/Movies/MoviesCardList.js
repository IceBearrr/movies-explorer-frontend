import React from 'react';
import MoviesCard from "../Movies/MoviesCard";
import SaveFilm from "../../images/save/save6d.svg";
import { withRouter } from "react-router-dom";

function MoviesCardList() {
  return (
    <div className="moviesCardBox">
      <section className="moviesCardList">
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_save"
            />
          }
        />
        <MoviesCard
          childrenImageSave={
            <img
              src={SaveFilm}
              alt="Сохранено"
              className="moviesCard__savedImage"
            />
          }
        />
        <MoviesCard
          childrenButtonDelete={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_delete"
            />
          }
        />
        <MoviesCard
          childrenImageSave={
            <img
              src={SaveFilm}
              alt="Сохранено"
              className="moviesCard__savedImage"
            />
          }
        />
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_delete"
            />
          }
        />
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_delete"
            />
          }
        />
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_save"
            />
          }
        />
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_save"
            />
          }
        />
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_save"
            />
          }
        />
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_save"
            />
          }
        />
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_save"
            />
          }
        />
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__button moviesCard__button_save"
            />
          }
        />
      </section>
    </div>
  );
}

export default withRouter(MoviesCardList);