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
        <button className="movies__moreButton">Ещё</button>
      </section>
    </div>
  );
}

export default withRouter(Movies);