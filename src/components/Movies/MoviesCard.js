import React from 'react';
import {useLocation} from "react-router-dom";

const CurrentUserContext = React.createContext();

function MoviesCard(props) {
    let location = (useLocation().pathname === "/saved-movies");

    const deleteButtonClassName = (
        `${location ? 'moviesCard__btn moviesCard__img-btn moviesCard__btn-delete' : 'moviesCard__btn moviesCard__img-btn moviesCard__btn-saved'}`
    );

    const currentUser = React.useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущего фильма
    // const isOwn = props.movie.owner._id === currentUser._id;


    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const movieDeleteLikeButtonClassName = (
        `moviesCard__img-btn ${props.movie.like ? 'moviesCard__btn-delete' : ' '}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    //const isLiked = props.movie.like;
    //.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const movieLikeButtonClassName = (
        `moviesCard__btn-save ${props.movie.like ? 'moviesCard__img-btn' : ''}`
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
                        //className='moviesCard__btn moviesCard__img-btn moviesCard__btn-delete'
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