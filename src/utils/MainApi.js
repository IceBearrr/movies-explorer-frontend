//export const BASE_URL = 'http://api.icebear-movies.nomoredomains.club';
export const BASE_URL = 'http://localhost:8080';


const checkResponse = (response) => response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status} ${response} `)

export function register(name, email, password) {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
                "name": name,
                "email": email,
                "password": password,
            }
        )
    })
        .then(checkResponse);
};

export const authorize = (email, password) => {

    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
        })
    }).then(checkResponse);
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(checkResponse);
}

class MainApi {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
        console.log("get token " + localStorage.getItem('jwt'));
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getUserInfo(token) {

        return fetch(this._baseUrl + '/users/me', {
                method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,

            }            }
        )
            .then(res => {
                return this._checkResponse(res)
            })
    }

    updateUser(user, token) {
        // updateProfile(user) {
        return fetch(this._baseUrl + '/users/me/', {
                method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,

            }   ,
                body: JSON.stringify({
                    name: user.name,
                    email: user.email
                })
            }
        )
            .then(res => {
                return this._checkResponse(res);
            })

    }


    getMovies(token) {
        console.log("get token " + localStorage.getItem('jwt'));
        return fetch(this._baseUrl + '/movies/', {
                method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
            }
        )
            .then(res => {
                return this._checkResponse(res)
            });
    }


    putNewFilm(movie, token) {

        return fetch(this._baseUrl + '/movies/', {
                method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                    country: movie.country,
                    director: movie.director,
                    duration: movie.duration,
                    year: movie.year,
                    description: movie.description,
                    image: movie.image,
                    trailer: movie.trailer,
                    thumbnail: movie.thumbnail,
                    movieId: movie.id,
                    nameRU: movie.name,
                    nameEN: movie.nameEN
                })

            }
        )
            .then(res => {
                return this._checkResponse(res)
            })

    }


    deleteFilm(moviesId, token) {
        return fetch(this._baseUrl + '/movies/' + moviesId, {
                method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            }
        )
            .then(res => {
                return this._checkResponse(res)
            })
    }

    // putLike(moviesId, moviesUpdateLike) {
    //     this.moviesUpdateLike = moviesUpdateLike;
    //     return fetch(this._baseUrl + 'movies/likes/' + moviesId, {
    //         method: 'PUT',
    //         headers: this._headers,
    //     }
    //     )
    //         .then(res => {
    //             return this._checkResponse(res)
    //         })
    // }


}


const mainApi = new MainApi({
    baseUrl: 'http://localhost:8080',
    //baseUrl: 'http://api.icebear-movies.nomoredomains.club',

});

export default mainApi;