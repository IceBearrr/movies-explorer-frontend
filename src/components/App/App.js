import React, { useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import Header from '../Header/Header';
import Main from './../Main/Main';
import Footer from '../Footer/Footer';
import PageNotFound from '../Error/Error';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

import movieApi from '../../utils/MoviesApi'
import mainApi, * as auth from '../../utils/MainApi'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { CurrentUserContext } from '../../context/CurrentUserContext';


function App() {

    const [currentUser, setCurrentUser] = React.useState({});
    const [movies, setMovies] = React.useState([]);
    const [currentCount, setCurrentCount] = React.useState(0);

    const [searchMovies, setSearchMovies] = React.useState([]);

    const [moviesSaved, setMoviesSaved] = React.useState([]);
    const [searchMoviesSaved, setSearchMoviesSaved] = React.useState([]);

    const [loggedIn, setLoggedIn] = React.useState(false);
    const [userData, setUserData] = React.useState('');
    const [statusApi, setStatusApi] = React.useState('');
    const [shortMoviesSaved, setShortMoviesSaved] = React.useState([]);


    const history = useHistory();
    let location = useLocation().pathname;


    function shortMoviesSearch(data, isShortMovies) {
        const result = data.filter((movie) => {
            return (
                movie.duration <= 40
            );
        })
        return result.length > 0
            ? result
            : "ничего не найдено";
    }

    function onShortMoviesSearch(movies, isShortMovies) {
        const shortMoviesSaved = shortMoviesSearch(movies, isShortMovies);
        if (isShortMovies) {
            setShortMoviesSaved(shortMoviesSaved);
        } else {
            setShortMoviesSaved({});
        }
    }


    function searchMovie(data, keyword) {
        const result = data.filter((movie) => {
            return (
                movie.name.toLowerCase().includes(keyword.toLowerCase()) ||
                movie.nameEN.toLowerCase().includes(keyword.toLowerCase()) ||
                movie.description.toLowerCase().includes(keyword.toLowerCase())
            );
        });

        return result.length > 0
            ? result
            : "ничего не найдено";
    }


    function handleMovieLike(movie) {
        mainApi.putNewFilm(movie, localStorage.getItem('jwt')).then((movie) => {
            getSavedMovies();


            for (let k in movies) //TODO: покрасивее
                if (movies[k].id === movie.id) {
                    movies[k].like = true;
                }

            for (let k in searchMovies) //TODO: покрасивее
                if (searchMovies[k].id === movie.id) {
                    searchMovies[k].like = true;
                }


            setMovies(movies);

            setSearchMovies(searchMovies);
            // movie.like = true;
            // setMovies((state) => state.map((c) => c.id === movie.id ? movie : c));
            //setMoviesSaved(moviesSaved[moviesSaved.length] = movie)
        }).catch((err) => console.log(err))

    }

    function handleMovieSearch(movies, keyword) {
        const searchedMovies = searchMovie(movies, keyword)
        setSearchMovies(searchedMovies);
        console.log("ищем кинчик");
        localStorage.setItem(
            'searchMovies',
            JSON.stringify(searchedMovies)
        );
    }


    function handleSavedMovieSearch(movies, keyword) {
        const searchedMovies = searchMovie(movies, keyword);
        setSearchMoviesSaved(searchedMovies);
    }

    function handleSignOut() {
        setUserData('')
        setLoggedIn(false)
        localStorage.removeItem('jwt')
    }


    function getSavedMovies() {
        mainApi.getMovies(localStorage.getItem('jwt'))
            .then((data) => {
                setMoviesSaved(
                    data.data.map((item) => ({
                        country: item.country,
                        director: item.director,
                        duration: item.duration,
                        year: item.year,
                        description: item.description,
                        image: item.image,
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
    }


    // function getUser() {
    //     mainApi.getUserInfo(localStorage.getItem('jwt'))
    //         .then((result) => {
    //             setCurrentUser(result.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }


    function handleMovieDelete(movie) {
        mainApi.deleteFilm(movie, localStorage.getItem('jwt')).then(() => {

            for (let k in movies) //TODO: покрасивее
                if (movies[k].id === movie.id) {
                    movies[k].like = false;
                }

            for (let k in searchMovies) //TODO: покрасивее
                if (searchMovies[k].id === movie.id) {
                    searchMovies[k].like = false;
                }

            setMovies(movies);

            setSearchMovies(searchMovies);


            console.log("удоли" + movies);

            getSavedMovies();

            //setMoviesSaved(delete moviesSaved[movie.id])
            // movie.like = false;
            // setMovies(movies.filter((item) => item._id !== movie._id));
            //setMovies((state) => state.map((c) => c.id === movie.id ? movie : c));
            console.log("unsave")
        })
            .catch((err) => console.log(err));
    }

    // function handleCardDelete(card) {
    //     api.deleteCard(card._id).then(() => {
    //         setCards(cards.filter((item) => item._id !== card._id));
    //     }).catch((err) => console.log(err));
    // }

    function handleUpdateUser(user) {
        mainApi.updateUser(user, localStorage.getItem('jwt')).then(() => {
            alert("Данные обновленны!");
        })
            .catch((err) => console.log(err));

    }


    useEffect(_ => {
        tokenCheck()
    }, []) //если токен существыует
    // useEffect(() => {
    //     if (loggedIn) {
    //         history.push('/')
    //     }
    // }, [loggedIn])


    function handleButton() {

        let step;
        const windowSize = window.innerWidth;
        console.log("windowSize " + windowSize);

        if (windowSize >= 1280) {
            step = 3 - currentCount % 3;
            console.log("currentCount " + currentCount + " 3 step3 - " + step)
        } else if (windowSize >= 768 && windowSize < 1280) {
            step = 2 - currentCount % 2;
            console.log("currentCount " + currentCount + " 2 step2 - " + step)

        } else {
            step = 1;
        }

        setCurrentCount(currentCount + step)

    }


    useEffect(() => {
        if (loggedIn) {
            getSavedMovies();
            //getUser();

            // mainApi.getMovies()
            //     .then((data) => {
            //         setMoviesSaved(
            //             data.data.map((item) => ({
            //                 country: item.country,
            //                 director: item.director,
            //                 duration: item.duration,
            //                 year: item.year,
            //                 description: item.description,
            //                 image: item.image,
            //                 trailer: item.trailer,
            //                 thumbnail: item.thumbnail,
            //                 name: item.nameRU,
            //                 nameEN: item.nameEN,
            //                 id: item.movieId,
            //                 like: true,
            //             }))
            //         );
            //     })
            //     .catch((err) => {
            //
            //         console.log(err);
            //     });


            mainApi.getUserInfo(localStorage.getItem('jwt'))
                .then((result) => {
                    setCurrentUser(result.data);
                })
                .catch((err) => {
                    console.log(err);
                });

            let first, step;
            const windowSize = window.innerWidth
            if (windowSize >= 1280) {
                first = 12;
            } else if (
                windowSize >= 768 &&
                windowSize < 1280
            ) {
                first = 8;
            } else {
                first = 5;
            }

            setCurrentCount(first);

            const movies = JSON.parse(localStorage.getItem("movies"));
            let anwserApi;
            if (movies) {
                setMovies(movies);
                const searchMovies = JSON.parse(
                    localStorage.getItem("searchMovies")
                );
                if (searchMovies) {
                    setSearchMovies(searchMovies);
                }
            } else {
                movieApi.getMovies()
                    .then((data, baseUrl) => {
                        anwserApi = data.map((item) => ({
                            country: item.country,
                            director: item.director,
                            duration: item.duration,
                            year: item.year,
                            description: item.description,
                            image: 'https://api.nomoreparties.co' + item.image.url,
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
                    .then(() => {
                        if (searchMovies) {
                            for (let i in searchMovies) {
                                for (let k in anwserApi) //TODO: покрасивее
                                    if (searchMovies[i].id === anwserApi[k].id) {
                                        anwserApi[k].like = true;
                                    }
                            }
                            setSearchMovies(searchMovies);
                        }
                        setMovies(anwserApi);
                    })
                    .then(() =>
                        localStorage.setItem('movies', JSON.stringify(anwserApi)))
                    .catch((err) => {
                        console.log(err);
                    });
            }

        }

    }, [loggedIn]);

    const handleResponse = data => {
        if (data.token) {
            const jwt = data.token;
            localStorage.setItem('jwt', jwt)
            console.log("saved token - " + data.token);
            setLoggedIn(true);
        }
    }

    const handleError = (err) => console.error(err)

    function handleLogin(email, password) {
        auth.authorize(email, password)
            .then(handleResponse)
            .then(() => {
                setUserData(email);
                history.push("/movies");

            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            }
            )
    }


    function handleRegister(name, email, password) {
        auth.register(name, email, password)
            //.then(handleResponse)
            .then(() => {
                handleLogin(email, password)
            })
            .then(() => {
                setStatusApi("good");
                setUserData(email);
            })
            .catch((handleError) => {
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
        let loginState;
        console.log("check token");
        // проверяем токен пользователя
        if (jwt) {
            auth.checkToken(jwt)
                .then(data => {
                    const email = data.data.email
                    setUserData(email)
                    loginState = true;
                    setLoggedIn(true);
                    console.log("check token true");
                    history.push(location);

                })
                .catch(handleError)
        } else {
            setLoggedIn(false);
            loginState = false;
            console.log("check token false");
            //history.push("/");

        }
        console.log("check token loginState" + loginState + " loggedIn  - " + loggedIn);

        setLoggedIn(loginState);
        return loginState;
    }


    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                <div className="page">

                    <Switch>

                        <Route exact path="/">
                            <Header onSignOut={handleSignOut} user={userData} onLogin={handleLogin}
                                loggedIn={loggedIn} />
                            <Main />
                            <Footer />
                        </Route>


                        <ProtectedRoute exact path="/"
                            onSignOut={handleSignOut}
                            user={userData}
                            onLogin={handleLogin}
                            onTokenCheck={tokenCheck}
                            loggedIn={loggedIn}
                            component={Main}
                            onMovieLike={handleMovieLike}
                            onMovieDelete={handleMovieDelete}
                            movies={movies}
                            currentCount={currentCount}
                            searchMovies={searchMovies}
                            moviesSaved={moviesSaved}
                            onHandleButton={handleButton}

                        />


                        <ProtectedRoute exact path="/movies"
                            onTokenCheck={tokenCheck}
                            loggedIn={loggedIn}
                            component={Movies}
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
                            shortMoviesSaved={shortMoviesSaved}
                            onShortMoviesSearch={onShortMoviesSearch}
                        />


                        <ProtectedRoute exact path="/saved-movies"
                            onTokenCheck={tokenCheck}
                            loggedIn={loggedIn}
                            component={SavedMovies}
                            onSignOut={handleSignOut}
                            user={userData}
                            onLogin={handleLogin}
                            moviesSaved={moviesSaved}
                            searchMoviesSaved={searchMoviesSaved}
                            onMovieLike={handleMovieLike}
                            onMovieDelete={handleMovieDelete}
                            onHandleSavedMovieSearch={handleSavedMovieSearch}
                            shortMoviesSaved={shortMoviesSaved}
                            onShortMoviesSearch={onShortMoviesSearch}
                        />


                        <ProtectedRoute exact path="/profile"
                            onTokenCheck={tokenCheck}
                            loggedIn={loggedIn} component={Profile}
                            onSignOut={handleSignOut}
                            userData={userData}
                            onLogin={handleLogin}
                            user={currentUser}
                            onUpdateUser={handleUpdateUser}
                        />

                        <Route path="/signup">
                            <Register onRegister={handleRegister} />
                        </Route>

                        <Route path="/signin">
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



