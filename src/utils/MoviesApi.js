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
    constructor({baseUrl, headers}) {
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


    // getMoviesSearch() {
    //     return fetch(this._baseUrl, {
    //             headers: this._headers
    //         }
    //     )
    //         .then(res => {
    //             return this._checkResponse(res)
    //         });
    // }
    //

    //
    // putLike(moviesId, moviesUpdateLike) {
    //     this.moviesUpdateLike = moviesUpdateLike;
    //     return fetch(this._baseUrl + 'movies/likes/' + moviesId, {
    //             method: 'PUT',
    //             headers: this._headers,
    //         }
    //     )
    //         .then(res => {
    //             return this._checkResponse(res)
    //         })
    // }
    //
    //

}

const movieApi = new MovieApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default movieApi;