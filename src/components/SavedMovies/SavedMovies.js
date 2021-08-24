import React from 'react';
import SearchForm from "../Movies/SearchForm.js";
import MoviesCardList from "../Movies/MoviesCardList.js";
import { withRouter } from "react-router-dom";

function SavedMovies() {
  return (
    <div>
      <section className="savedMovies">
        <div className="savedMovies__search">
          <SearchForm />
        </div>
        <MoviesCardList />
      </section>
    </div>
  );
}

export default withRouter(SavedMovies);