import React from 'react';
import SearchForm from "../Movies/SearchForm.js";
import SavedMoviesCardList from "../SavedMovies/SavedMoviesCardList.js";
import {withRouter} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
    return (
        <React.Fragment>
            <Header onSignOut={props.onSignOut} user={props.user} onLogin={props.onLogin}/>

            <div>
                <section className="savedMovies">
                    <div className="savedMovies__search">
                        <SearchForm onSubmitSearch={props.onHandleSavedMovieSearch}
                                    movies={props.moviesSaved}
                                    onShortMoviesSearch={props.onShortMoviesSearch}

                        />
                    </div>
                    <SavedMoviesCardList moviesSaved={props.moviesSaved}
                                         searchMoviesSaved={props.searchMoviesSaved}
                                         onMovieLike={props.onMovieLike}
                                         onMovieDelete={props.onMovieDelete}
                                         shortMoviesSaved={props.shortMoviesSaved}

                    />

                </section>
            </div>

            <Footer/>


        </React.Fragment>

    );
}

export default withRouter(SavedMovies);