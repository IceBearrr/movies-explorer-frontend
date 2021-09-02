import React from 'react';

const CurrentUserContext = React.createContext();

function MoviesCard(props) {


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

    // function handleClick() {
    //     props.onMovieClick(props.movie)
    // }

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
                <p className="moviesCard__movieDuration">{props.movie.duration}</p>
            </div>
            <div className="moviesCard__container ">
                <img src={props.movie.image} alt="Фильм" className="moviesCard__image"/>

                {movieLike
                    ?
                    <button className="moviesCard__btn moviesCard__img-btn moviesCard__btn-delete"
                            onClick={handleDeleteClick}
                    />
                    :

                    <button
                        className="moviesCard__btn moviesCard__img-btn moviesCard__btn-save  moviesCard__btn-save moviesCard__img-btn"
                        onClick={handleLikeClick}/>
                }

                {/*<button className="moviesCard__btn"*/}
                {/*onClick={handleDeleteClick} className={movieDeleteLikeButtonClassName}*/}
                {/*onClick={handleLikeClick} className={movieLikeButtonClassName} /> */}
            </div>
        </li>
    );
}

export default MoviesCard;