import React from 'react';
import MoviesCard from "../Movies/MoviesCard";
// import SavedFilm from "../../images/save/save6d.svg";
import {withRouter} from "react-router-dom";

function MoviesCardList(props) {
    // const { onMovieDelete} = props;
    // const currentUser = React.useContext(CurrentUserContext);
    //const [currentCount, setMovies] = React.useState([]);

    let movies;
    if (props.shortMoviesSaved.length > 0) {
        movies = props.shortMoviesSaved;
    } else {
        movies = props.searchMovies;

    }

    let nothing = true;
    if (props.searchMovies === "ничего не найдено") {
        props.searchMovies = "";
        nothing = false;
    }

    movies = props.movies.slice(0, props.currentCount)
    let more = (props.movies.length > props.currentCount);
    //handleButton();

    return (
        <div className="moviesCardBox">

            {!nothing
                ?
                <ul> ничего не найдено </ul>
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

            {more
                ?
                <div className="movies__btn-more">
                    <button className="movies__more" type="button" onClick={props.onHandleButton}> Ещё</button>
                </div>
                : null
            }
        </div>


    );
}

export default withRouter(MoviesCardList);