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


    //тест
    //movies = props.movies;


    let nothing = true;
    if (movies === "ничего не найдено") {
        movies = "";
        nothing = false;
    }

    let more = (movies.length > props.currentCount);
    movies = movies.slice(0, props.currentCount)

    //handleButton();
    console.log("movies.length " +movies.length +  "props.currentCount " + props.currentCount);

    return (
        <div >

            {!nothing
                ?
                <div className="moviesNotFound">
                    <h2> Ничего не найдено </h2>
                </div>
                : null
            }

            {nothing
                ?
                <div className="moviesCardBox">
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
                </div>
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