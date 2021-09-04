import React from 'react';
import MoviesCard from "../Movies/MoviesCard";
// import SavedFilm from "../../images/save/save6d.svg";
import {withRouter} from "react-router-dom";


function SavedMoviesCardList(props) {
    let movies;

    if (props.shortMoviesSaved.length > 0) {
        movies = props.shortMoviesSaved;
    } else {
        movies = props.searchMoviesSaved.length > 0 ? props.searchMoviesSaved : props.moviesSaved;
    }

    let nothing = true;
    if (movies === "ничего не найдено") {
        //props.searchMoviesSaved = "";
        movies = [];
        nothing = false;
    }

    return (
        <div className="moviesCardBox">


            {!nothing
                ?
                <ul className="moviesCardList">
                    ничего не найдено
                </ul>
                : null
            }

            {nothing
                ?
                <ul className="moviesCardList">
                    {
                        movies.map((movie, i) => (

                            <MoviesCard movie={movie}
                                        key={"save" + movie.id}
                                // onCardClick={onCardClick}
                                        onMovieLike={props.onMovieLike}
                                //           onMovieLike = {onMovieLike}
                                        onMovieDelete={props.onMovieDelete}
                            />
                        ))

                    }
                </ul>
                : null
            }
            {/*
        <MoviesCard
          childrenImageSave={
            <img
              src={SavedFilm}
              alt="Сохранено"
              className="moviesCard__img-btn"
            />
          }
        />
        <MoviesCard
          childrenButtonDelete={
            <button
              type="button"
              className="moviesCard__btn-delete"
            />

          }
        />
        <MoviesCard
          childrenButtonSave={
            <button
              type="button"
              className="moviesCard__btn-save"
            />
          }
        />
      
        */}
            {/* </section> */}


        </div>


    );
}

export default withRouter(SavedMoviesCardList);