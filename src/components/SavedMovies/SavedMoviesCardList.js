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
        <div>
        {
    !nothing
        ?
        <div className="moviesNotFound">
            <h2> Ничего не найдено </h2>
        </div>
        : null
}

    {
        nothing
            ?

                <div className="moviesCardBox">

                    <ul className="moviesCardList">
                        {
                            movies.map((movie, i) => (

                                <MoviesCard movie={movie}
                                            key={"save" + movie.id}
                                            hidden={movie.like}
                                    // onCardClick={onCardClick}
                                            //onMovieLike={props.onMovieLike}
                                    //           onMovieLike = {onMovieLike}
                                            onMovieDelete={props.onMovieDelete}
                                />
                            ))
                        }
                    </ul>
                </div>


            : null
    }
        </div>

    )
}

export default withRouter(SavedMoviesCardList);