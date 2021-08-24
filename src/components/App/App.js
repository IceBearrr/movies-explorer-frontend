import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from './../Main/Main';
import Footer from '../Footer/Footer';
import PageNotFound from '../Error/Error';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

function App() {
    return (
        <div className="App">
            <div className="page">

                <Switch>
                    <Route exact path="/">
                        <Header />
                        <Main />
                        <Footer />
                    </Route>

                    <Route path="/movies">
                        <Header />
                        <Movies />
                        <Footer />
                    </Route>

                    <Route path="/saved-movies">
                        <Header />
                        <SavedMovies />
                        <Footer />
                    </Route>

                    <Route path="/profile">
                        <Header />
                        <Profile />
                    </Route>

                    <Route path="/sign-up">
                        <Register />
                    </Route>

                    <Route path="/sign-in">
                        <Login />
                    </Route>

                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>

            </div>
        </div>
    );
}

export default App;
