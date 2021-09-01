import React from 'react';
import SearchForm from "../Movies/SearchForm.js";
import MoviesCardList from "../Movies/MoviesCardList.js";
import { withRouter } from "react-router-dom";

function SavedMovies(props) {
  console.log("saved moove " + Object.entries(props.moviesSaved));

  return (
    <div>
      <section className="savedMovies">
        <div className="savedMovies__search">
          <SearchForm />
        </div>
          <MoviesCardList movies={props.moviesSaved}
                          onMovieLike={props.onMovieLike}
                          onMovieDelete={props.onMovieDelete}/>      </section>
    </div>
  );
}

export default withRouter(SavedMovies);