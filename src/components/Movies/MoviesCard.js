import React from 'react';
import {useLocation} from "react-router-dom";

const CurrentUserContext = React.createContext();

function MoviesCard(props) {
    let location = (useLocation().pathname === "/saved-movies");

    const deleteButtonClassName = (
        `${location ? 'moviesCard__btn moviesCard__img-btn moviesCard__btn-delete' : 'moviesCard__btn moviesCard__img-btn moviesCard__btn-saved'}`
    );

    const [movieLike, setMovie] = React.useState(props.movie.like);

    function handleLikeClick() {
        props.onMovieLike(props.movie)
        props.movie.like = true;
        setMovie(true);
    }

    function handleDeleteClick() {
        props.onMovieDelete(props.movie.id);
        props.movie.like = false;
        setMovie(false);
    }


    return (
        <li className="moviesCard">
            <div className="moviesCard__movieInfo">
                <p className="moviesCard__movieName">{props.movie.name}</p>
                <p className="moviesCard__movieDuration">{props.movie.duration} минут</p>
            </div>
            <div className="moviesCard__container ">
                <a href={props.movie.trailer} target="_blank" rel="noopener noreferrer">
                    <img src={props.movie.image} alt="Фильм" className="moviesCard__image"/>
                </a>
                {movieLike
                    ?
                    <button
                        className={deleteButtonClassName}
                        onClick={handleDeleteClick}
                    />
                    :
                    <button
                        className="moviesCard__btn moviesCard__img-btn moviesCard__btn-save "
                        onClick={handleLikeClick}/>
                }

            </div>
        </li>
    );
}

export default MoviesCard;