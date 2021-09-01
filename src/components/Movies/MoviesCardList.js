import React from 'react';
import MoviesCard from "../Movies/MoviesCard";
// import SavedFilm from "../../images/save/save6d.svg";
import {withRouter} from "react-router-dom";

function MoviesCardList(props) {
    //const {onMovieLike, onMovieDelete} = props;
    // const currentUser = React.useContext(CurrentUserContext);
    //const [currentCount, setMovies] = React.useState([]);

    let nothing = true;
    if (props.searchMovies === "ничего не найдено") {
        props.searchMovies = "";
        let nothing = false;
    }

//     function getCountCard() {
//         const windowSize =  window.innerWidth
//         if (windowSize > 1280) {
//             return { first: 12, step: 3 };
//         } else if (
//             windowSize > 768 &&
//             windowSize <= 1280
//         ) {
//             return { first: 8, step: 2 };
//         } else {
//             return { first: 5, step: 1 };
//         }
//     }
//     let countCard = getCountCard();
//     let currentCount = countCard.first - countCard.step;
//     let more, movies;
// console.log("длина " + countCard.step);
//
//      let handleButton = () => {
//         console.log("вывести кнопку баттон");
//
//
//         currentCount += countCard.step;
//          movies = props.movies.slice(0, currentCount)
//          more =  (props.movies.length > currentCount);
//          console.log("more " + currentCount);
//
//          console.log("длина массива " + movies.length);
//
//          //setMovies(movies);
//         //setPreloader(true);
//     }
    let movies = props.searchMovies.slice(0, props.currentCount)
    let more = (props.searchMovies.length > props.currentCount);
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
                    {/* <ul
        className="moviesCard"
        > */}
                    {


                        movies.map((movie, i) => (

                            <MoviesCard movie={movie}
                                        key={"save" + movie.id}
                                // onCardClick={onCardClick}
                                        onMovieLike={props.onMovieLike}
                                //           onMovieLike = {onMovieLike}
                                        onMovieDelete={props.onMovieDelete}/>
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