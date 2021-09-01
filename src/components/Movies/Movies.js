import React from "react";

import SearchForm from "../Movies/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList";
import { withRouter } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function Movies(props) {

  return (
      <React.Fragment>
          <Header onSignOut={props.onSignOut} user={props.user} onLogin={props.onLogin} />

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

        <Footer />


      </React.Fragment>


  );
}

export default withRouter(Movies);