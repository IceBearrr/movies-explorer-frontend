import React, { useEffect } from 'react';
import { Route, Redirect, Switch, useHistory, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Main from './../Main/Main';
import Footer from '../Footer/Footer';
import PageNotFound from '../Error/Error';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

import MOVIEAPI_URL from '../../utils/MoviesApi'

import movieApi from '../../utils/MoviesApi'
import mainApi from '../../utils/MainApi'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
// import InfoTooltip from './InfoTooltip';
import * as auth from '../../utils/MainApi';

import {CurrentUserContext, currentUser} from '../../context/CurrentUserContext';

// import { CurrentUserContext, currentUser } from '../CurrentUserContext';
//const CurrentUserContext = React.createContext();

function App() {

    // const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    // const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    // const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    // const [isAddTooltipPopupOpen, setIsTooltipPopupOpen] = React.useState(false);

    // const [selectedCard, setSelectedCard] = React.useState(null);


    const [currentUser, setCurrentUser] = React.useState({});
    const [movies, setMovies] = React.useState([]);
    const [currentCount, setCurrentCount] = React.useState(0);

    const [searchMovies, setSearchMovies] = React.useState([]);

    const [moviesSaved, setMoviesSaved] = React.useState([]);
    const [searchMoviesSaved, setSearchMoviesSaved] = React.useState([]);

    const [loggedIn, setLoggedIn] = React.useState(false);
    const [userData, setUserData] = React.useState('');
    const [statusApi, setStatusApi] = React.useState('');

    const history = useHistory();

    //let resultMoviesFilter = movies.filter;



    function searchMovie(data, keyword) {
        const result = data.filter((movie) => {
            console.log("movie.name" +movie.nameEN);
            return (
                movie.name.toLowerCase().includes(keyword.toLowerCase()) ||
                movie.nameEN.toLowerCase().includes(keyword.toLowerCase()) ||
                movie.description.toLowerCase().includes(keyword.toLowerCase())
            );
        });
        // if (result.length === 0 && location === "/movies") {
        //     console.log("ничего не найдено ")
        // }
        // if (result.length === 0 && location === "/saved-movies") {
        //     console.log("ничего не найдено ")
        // }

        return  result
            ? result
            : "ничего не найдено";
    }

    // function sortShortMovies(movies) {
    //     const shortMoviesArray = movies.filter(
    //         (movie) => movie.duration <= 40
    //     );
    //     return shortMoviesArray;
    // }

    // function submitSearch(keyword) {
    //     getBeatMovies();
    //     setTimeout(() => setIsLoading(false), 1000);
    //     setSearchMovies(search(allMovies, keyword));
    //     localStorage.setItem(
    //         "searchResult",
    //         JSON.stringify(search(allMovies, keyword))
    //     );
    // }


    // const handleEditAvatarClick = () => {
    //     setIsEditAvatarPopupOpen(true);
    // }

    // const handleEditProfileClick = () => {
    //     setIsEditProfilePopupOpen(true);
    // }

    // const handleAddPlaceClick = () => {
    //     setIsAddPlacePopupOpen(true);
    // }

    // const handleCardClick = (card) => {
    //     setSelectedCard(card);
    // }

    // const closeAllPopups = () => {
    //     setIsAddPlacePopupOpen(false);
    //     setIsEditProfilePopupOpen(false);
    //     setIsEditAvatarPopupOpen(false);
    //     setSelectedCard(null);
    //     setIsTooltipPopupOpen(false);
    // }

    function  handleMovieLike (movie)  {
        const isLiked = movie.like;
        console.log("localStorage.getItem('jwt')" + localStorage.getItem('jwt'));
        if (!isLiked) {
            console.log("save");
            mainApi.putNewFilm(movie, localStorage.getItem('jwt')).then((movie) => {
                // movie.like = true;
                // setMovies((state) => state.map((c) => c.id === movie.id ? movie : c));
                setMoviesSaved(moviesSaved.push(movie))
                console.log("save")
            }).catch((err) => console.log(err))
        } else {
            movieApi.deleteLike(movie.id).then((movie) => {
                // movie.like = false;
                // setMovies((state) => state.map((c) => c.id === movie.id ? movie : c));
                console.log("unsave")

            }).catch((err) => console.log(err))
        }
        ;
    }

    function handleMovieSearch(movies, keyword) {

        console.log("movies - " + movies );
            const searchedMovies = searchMovie(movies, keyword)
        setSearchMovies(searchedMovies);

        console.log("ищем - " + searchedMovies );

        localStorage.setItem(
            'searchMovies',
            JSON.stringify(searchedMovies)
        );
    }


    function handleSavedMovieSearch(movies, keyword) {
        console.log("movies - " + movies );

        const searchedMovies = searchMovie(movies, keyword);
        console.log("ищем сохороненное - " + searchedMovies );

        setSearchMoviesSaved(searchedMovies);

    }



    function handleMovieDelete(movie) {
        console.log("movie delete" + movie);
        mainApi.deleteFilm(movie).then(() => {
            //setMoviesSaved(delete moviesSaved[movie.id])
            // movie.like = false;
            // setMovies((state) => state.map((c) => c.id === movie.id ? movie : c));
            console.log("unsave")
        })
            .catch((err) => console.log(err));
    }

    function handleUpdateUser(user) {
        mainApi
            .updateProfile(user).then(alert("Данные обновленны!"))
            // .then((res) => {
            //     setCurrentUser(res)
            //     // closeAllPopups();
            // })
            .catch((err) => console.log(err));
    }

    function handleAddMovieSubmit({ name, link }) {
        movieApi.putNewMovie(name, link)
            .then((newMovie) => {
                setMovies([newMovie, ...movies]);
                // closeAllPopups();
            })
            .catch((err) => console.log(err));
    }

    useEffect(_ => {
        tokenCheck()
    }, []) //если токен существыует
    useEffect(() => {
        if (loggedIn) {
            history.push('/movies')
        }
    }, [loggedIn])


    let handleButton = () => {

        let step;
        const windowSize =  window.innerWidth
        if (windowSize > 1280) {
             step = 3 ;
        } else if (
            windowSize > 768 &&
            windowSize <= 1280
        ) {
            step = 2;
        } else {
             step = 1;
        }
        console.log("вывести кнопку баттон");

        console.log("вывести кнопку баттон");
        setCurrentCount( currentCount + step)
        //more =  (movies.length > currentCount);
        console.log("more  функции" + currentCount);

        console.log("длина массива " + movies.length);

        //setMovies(movies);
        //setPreloader(true);
    }



    React.useEffect(() => {
        let first, step;
        const windowSize =  window.innerWidth
        if (windowSize > 1280) {
            first = 12;
        } else if (
            windowSize > 768 &&
            windowSize <= 1280
        ) {
            first =  8;
        } else {
            first =   5;
        }

        console.log("длина массива first" + first);

        setCurrentCount(first);
        console.log("more 222" + currentCount);


        //handleButton();


        console.log("search movie " + searchMovies);

        mainApi.getUserInfo(localStorage.getItem('jwt'))
            .then((result) => {
                setCurrentUser(result.data);
                console.log("текущий пользователь" + Object.entries(result.data))
            })
            .catch((err) => {
                console.log(err);
            });

        console.log("Movie 88");


        const movies = JSON.parse(localStorage.getItem("movies"));
        let anwserApi;
        if (movies) {
            console.log("Movies 88" + searchMovies);

            setMovies(movies);
            const searchMovies = JSON.parse(
                localStorage.getItem("searchMovies")
            );
            if (searchMovies) {
                console.log("searchMovies 88" + searchMovies);
                setSearchMovies(searchMovies);
            }
        } else {
            movieApi.getMovies()
                .then((data, baseUrl) => {
                    console.log("searchMovies 3388" );
                    anwserApi = data.map((item) => ({
                        country: item.country,
                        director: item.director,
                        duration: item.duration,
                        year: item.year,
                        description: item.description,
                        image:  'https://api.nomoreparties.co' + item.image.url,
                        trailer: item.trailerLink ? item.trailerLink : "http://google.com",
                        thumbnail: 'https://api.nomoreparties.co' + item.image.formats.thumbnail.url,
                        name: item.nameRU,
                        nameEN: item.nameEN
                            ? item.nameEN
                            : item.nameRU,
                        id: item.id,
                        like: false,
                    }));

                    setMovies(anwserApi);

                })
                .then(() =>
                    localStorage.setItem('movies', JSON.stringify(anwserApi)))
                .then(() =>{ const movies = JSON.parse(localStorage.getItem('movies'));
                    console.log("mmmmovie" + movies);
                    if (movies) {
                        console.log("Movies 88" + searchMovies);}}
                   )
                .catch((err) => {
                    console.log(err);
                });

            const movies = JSON.parse(localStorage.getItem('movies'));
            if (movies) {
                console.log("Movies 88" + searchMovies);}

        }


        mainApi.getMovies(localStorage.getItem('jwt'))
            .then((data) => {
                console.log(" data saved movies " + Object.entries(data.data));
                setMoviesSaved(
                    data.data.map((item) => ({
                        country: item.country,
                        director: item.director,
                        duration: item.duration,
                        year: item.year,
                        description: item.description,
                        image:  item.image,
                        trailer: item.trailer,
                        thumbnail: item.thumbnail,
                        name: item.nameRU,
                        nameEN: item.nameEN,
                        id: item.movieId,
                        like: true,
                    }))
                );
            })
            .catch((err) => {
                console.log(err);
            });

            console.log("movies2 - " + movies );  

    }, []);

    const handleResponse = data => {
        console.log("auth!!!!" + Object.entries(data))
        if (data.token) {
            const jwt = data.token;
            localStorage.setItem('jwt', jwt)
        }
        if (data.email) {
            const email = data.email
            setUserData(email)
        }

        setLoggedIn(true)
    }

    const handleError = (err) => console.error(err)

    function handleLogin({ email, password }) {
        auth.authorize(email, password)
            .then(handleResponse)
            .then(() => {
                setUserData(email);
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
                // setIsTooltipPopupOpen(true);
            }
            )
    }


    function handleRegister({ name, email, password }) {
        auth.register(name, email, password)
            .then(handleResponse)
            .then(() => {
                setStatusApi("good");
                // setIsTooltipPopupOpen(true);
                setUserData(email);
            })
            .catch((handleError) => {
                // setIsTooltipPopupOpen(true);
                console.log("handleError" + handleError);
            })
    }

    function handleSignOut() {
        setUserData('')
        setLoggedIn(false)
        localStorage.removeItem('jwt')
    }

    function tokenCheck() {
        const jwt = localStorage.getItem('jwt');
        // проверяем токен пользователя
        if (jwt) {
            auth.checkToken(jwt)
                .then(data => {
                    const email = data.data.email
                    setUserData(email)
                    setLoggedIn(true)
                })
                .catch(handleError)
        } else {
            setLoggedIn(false)
        }
    }




    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                <div className="page">

                    <Switch>
                        
                        <Route exact path="/">
                            <Header onSignOut={handleSignOut} user={userData} onLogin={handleLogin} />
                            <Main />
                            <Footer />
                        </Route>


                        <ProtectedRoute exact path="/" loggedIn={loggedIn} component={Main}
                            // onEditProfile={handleEditProfileClick}
                            // onAddMovie={handleAddMovieClick}
                            // onMovieClick={handleMovieClick}
                            onMovieLike={handleMovieLike}
                            onMovieDelete={handleMovieDelete}
                                        movies={movies}
                                        currentCount={currentCount}
                                        searchMovies={searchMovies}
                            moviesSaved={moviesSaved}
                            onLogin={handleLogin}
                                        onHandleButton={handleButton}
                        />


                        <ProtectedRoute exact path="/movies"
                                        loggedIn={loggedIn} component={Movies}
                                        onSignOut={handleSignOut}
                                        user={userData}
                                        onLogin={handleLogin}
                                        movies={movies}
                                        currentCount={currentCount}
                                        searchMovies={searchMovies}
                                        onMovieLike={handleMovieLike}
                                        onMovieDelete={handleMovieDelete}
                                        onSubmitSearch={handleMovieSearch}
                                        onHandleButton={handleButton}

                        />


                        <ProtectedRoute exact path="/saved-movies"
                                        loggedIn={loggedIn} component={SavedMovies}
                                        onSignOut={handleSignOut}
                            onSignOut={handleSignOut} user={userData} onLogin={handleLogin}
                            moviesSaved={moviesSaved}
                                         searchMoviesSaved={searchMoviesSaved}
                                         onMovieLike={handleMovieLike}
                                         onMovieDelete={handleMovieDelete}
                                         onHandleSavedMovieSearch={handleSavedMovieSearch}
                            />


                        <ProtectedRoute exact path="/profile"
                                        loggedIn={loggedIn} component={Profile}
                                        onSignOut={handleSignOut}
                                        userData={userData}
                                        onLogin={handleLogin}
                                        user={currentUser}
                                        onUpdateUser={handleUpdateUser}
                        />



                        <Route path="/sign-up">
                            <Register onRegister={handleRegister} />
                        </Route>

                        <Route path="/sign-in">
                            <Login onLogin={handleLogin} tokenCheck={tokenCheck} />
                        </Route>

                        <Route path="*">
                            <PageNotFound />
                        </Route>
                    </Switch>

                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;




//     return (
//         <CurrentUserContext.Provider value={currentUser}>
//             <div className="App">
//                 <div className="page">
//                     <Switch>
//                         <Header onSignOut={handleSignOut} user={userData} onLogin={handleLogin} />
//                     </Switch>
//                     <Switch>
//                         <ProtectedRoute exact path="/" loggedIn={loggedIn} component={Main}
//                             onEditAvatar={handleEditAvatarClick}
//                             onEditProfile={handleEditProfileClick}
//                             onAddPlace={handleAddPlaceClick}
//                             onCardClick={handleCardClick}
//                             onCardLike={handleCardLike}
//                             onCardDelete={handleCardDelete}
//                             cards={cards}
//                             onLogin={handleLogin}
//                         />
//                         <Route path="/sign-up">
//                             <div className="registerContainer">
//                                 <Register onRegister={handleRegister} />
//                             </div>
//                         </Route>
//                         <Route path="/sign-in">
//                             <div className="loginContainer">
//                                 <Login onLogin={handleLogin} tokenCheck={tokenCheck} />
//                             </div>
//                         </Route>
//                     </Switch>

//                     <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
//                         onUpdateUser={handleUpdateUser} onLogin={handleLogin} />
//                     <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
//                         onUpdateAvatar={handleUpdateAvatar} onLogin={handleLogin} />
//                     <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
//                         onUpdateCards={handleAddPlaceSubmit} cards={cards} setCards={setCards} />
//                     <PopupWithForm title="Вы уверены?" name="remove">
//                     </PopupWithForm>
//                     <ImagePopup card={selectedCard} onClose={closeAllPopups} />

//                     <InfoTooltip status={statusApi} name="info" isOpen={isAddTooltipPopupOpen}
//                         onClose={closeAllPopups} />

//                     <Footer />
//                 </div>
//             </div>
//         </CurrentUserContext.Provider>
//     );
// }

// export default App;


