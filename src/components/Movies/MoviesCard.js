import React from 'react';
import Kadr from "../../images/card/6.svg";

const CurrentUserContext = React.createContext();

function MoviesCard(props) {



  const currentUser = React.useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущего фильма
    // const isOwn = props.movie.owner._id === currentUser._id;


// Создаём переменную, которую после зададим в `className` для кнопки удаления
    const movieDeleteLikeButtonClassName = (
        `moviesCard__img-btn ${isLiked ? 'moviesCard__btn-delete' : ' '}`
    );

// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
const isLiked = props.movie.like;
//.some(i => i._id === currentUser._id);

// Создаём переменную, которую после зададим в `className` для кнопки лайка
    const movieLikeButtonClassName = (
        `moviesCard__btn-save ${isLiked ? 'moviesCard__img-btn' : ''}`
    );

    function handleClick() {
        props.onMovieClick(props.movie)
    }

    function handleLikeClick() {
        props.onMovieLike(props.movie)
    }

    function handleDeleteClick() {
        props.onMovieDelete(props.movie);
    }


  return (
    <li  className="moviesCard" >
      <div className="moviesCard__movieInfo">
        <p className="moviesCard__movieName">{props.movie.name}</p>
        <p className="moviesCard__movieDuration">{props.movie.duration}</p>
      </div>
      <div className="moviesCard__container ">
        <img src={props.movie.image} alt="Фильм" className="moviesCard__image" />
        <button className="moviesCard__btn "
        onClick={handleDeleteClick} className={movieDeleteLikeButtonClassName}
        onClick={handleLikeClick} className={movieLikeButtonClassName} /> 
      </div>
    </li>
  );
}

export default MoviesCard;