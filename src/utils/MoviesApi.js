export const MOVIEAPI_URL = 'https://api.nomoreparties.co/beatfilm-movies';

// // const checkResponse = (res) => (res.ok
// //   ? res.json()
// //   : res.json()
// // .then((err) => Promise.reject(new Error(`${err.message} (${res.status} ${res.statusText})`))));

// export const getAllMovies = () => fetch(`${MOVIEAPI_URL}`, {
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
//   .then((res) => checkResponse(res));

// export default getAllMovies;


class MovieApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }


  getMovies() {
    return fetch(this._baseUrl, {
      headers: this._headers
    }
    )
      .then(res => {
        return this._checkResponse(res)
      });
  }

  //
  //
  // putNewFilm(country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId) {
  //
  //   return fetch(this._baseUrl + 'movies', {
  //         method: 'POST',
  //         headers: this._headers,
  //         body: JSON.stringify({
  //           //country: country,
  //           //director: director,
  //           //owner: owner,
  //           //duration: duration,
  //           //year: year,
  //           //description: description,
  //           //nameEN: nameEN,
  //           //thumbnail: thumbnail,
  //           duration: duration,
  //           image: image,
  //           trailer: trailer,
  //           nameRU: nameRU,
  //           movieId: movieId,
  //           //owner: owner,
  //         })
  //
  //       }
  //   )
  //       .then(res => {
  //         return this._checkResponse(res)
  //       })
  //
  // }






  getMoviesSearch() {
    return fetch(this._baseUrl, {
          headers: this._headers
        }
    )
        .then(res => {
          return this._checkResponse(res)
        });
  }

  putNewFilm(country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId) {

    return fetch(this._baseUrl + 'movies', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: image,
        trailer: trailer,
        nameRU: nameRU,
        nameEN: nameEN,
        thumbnail: thumbnail,
        movieId: movieId,
      })

    }
    )
      .then(res => {
        return this._checkResponse(res)
      })

  }


  deleteFilm(moviesId) {
    return fetch(this._baseUrl + 'movies/:' + moviesId, {
      method: 'DELETE',
      headers: this._headers,

    }
    )
      .then(res => {
        return this._checkResponse(res)
      })
  }

  putLike(moviesId, moviesUpdateLike) {
    this.moviesUpdateLike = moviesUpdateLike;
    return fetch(this._baseUrl + 'movies/likes/' + moviesId, {
      method: 'PUT',
      headers: this._headers,
    }
    )
      .then(res => {
        return this._checkResponse(res)
      })
  }


  deleteLike(moviesId, moviesUpdateLike) {
    this.moviesUpdateLike = moviesUpdateLike;
    return fetch(this._baseUrl + 'movies/likes/' + moviesId, {
      method: 'DELETE',
      headers: this._headers,

    }
    )
      .then(res => {
        return this._checkResponse(res)
      })
  }

}

const movieApi = new MovieApi({
  // baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-22/',
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies/',
  headers: {
    // authorization: '31859db2-75be-407c-8c24-8ed9ee09fde1',
    'Content-Type': 'application/json'
  }
});

export default movieApi;