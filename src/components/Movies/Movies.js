import React from "react";
import SearchForm from "../Movies/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList";
import { withRouter } from "react-router-dom";


function Movies(props) {

  return (
    <div>
      <section className="movies">
        <SearchForm onSubmitSearch={props.onSubmitSearch}
                    movies={props.movies}
                    searchMovies={props.searchMovies}/>
        <MoviesCardList movies={props.movies}
                        searchMovies={props.searchMovies}
                        onHandleButton={props.onHandleButton}
                        searchMovies={props.searchMovies}
                        currentCount={props.currentCount}
                        onMovieLike={props.onMovieLike}
                        onMovieDelete={props.onMovieDelete}/>

      </section>
    </div>
  );
}

export default withRouter(Movies);