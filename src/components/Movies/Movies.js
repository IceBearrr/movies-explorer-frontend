import React from "react";
import SearchForm from "../Movies/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList";
import { withRouter } from "react-router-dom";

function Movies() {
  return (
    <div>
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
        <div className="movies__btn-more">
        <button className="movies__more">Ещё</button>
        </div>
      </section>
    </div>
  );
}

export default withRouter(Movies);