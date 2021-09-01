import React from 'react';
import MoviesCard from "../Movies/MoviesCard";
// import SavedFilm from "../../images/save/save6d.svg";
import { withRouter } from "react-router-dom";

function SavedMoviesCardList(props) {




    let movies = props.searchMoviesSaved.length > 0 ? props.searchMoviesSaved : props.moviesSaved;
    let nothing = true;
    if (props.searchMoviesSaved === "ничего не найдено"){
        props.searchMoviesSaved="";
        let nothing = false;
    }
    console.log("props.searchMoviesSaved " + props.searchMoviesSaved);
    console.log("props.moviesSaved " + props.moviesSaved);

    console.log("save save movies " + movies);
//     let movies = props.searchMovies.slice(0, props.currentCount)
//     let more =  (props.searchMovies.length > props.currentCount);
// console.log("props.currentCount " + props.currentCount);
//     //handleButton();

  return (
    <div className="moviesCardBox" >

        { !nothing
            ?
            <ul> ничего не найдено </ul>
            : null
        }

        { nothing
            ?
        <ul className="moviesCardList">
        {/* <ul 
        className="moviesCard"
        > */}
          {


              movies.map((movie, i) => (

            <MoviesCard movie={movie}
              key={movie.id}
              // onCardClick={onCardClick}
              onMovieLike={props.onMovieLike}
              //           onMovieLike = {onMovieLike}
              onMovieDelete={props.onMovieDelete} />
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