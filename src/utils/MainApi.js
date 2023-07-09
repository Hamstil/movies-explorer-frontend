class Api {
  #onResponce(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  constructor(config) {
    this._url = config.url;
  }

  // Запрос на регистрацию
  regitration(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this.#onResponce);
  }

  // Запрос на авторизацию
  login(password, email) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    }).then(this.#onResponce);
  }

  // Запрос за данными пользователя
  getUser(jwt) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this.#onResponce);
  }

  // Запрос на обновление пользователя
  updateUser(name, email) {
    const token = localStorage.getItem("token");
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    }).then(this.#onResponce);
  }

  // Запрос на получение сохраненных фильмов
  getSavedMovies() {
    const token = localStorage.getItem("token");
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    }).then(this.#onResponce);
  }

  // Запрос на добавление сохраненного фильма
  addSavedMovies(data) {
    const token = localStorage.getItem("token");
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: 'https://api.nomoreparties.co' + data.image.url,
        trailerLink: data.trailerLink,
        thumbnail: 'https://api.nomoreparties.co' + data.image.formats.thumbnail.url,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then(this.#onResponce);
  }

  // Запрос на удаление сохраненного фильма
  removeSavedMovies(movieId) {
    const token = localStorage.getItem("token");
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    }).then(this.#onResponce);
  }
}

const configApi = {
  // url: "http://localhost:3001",
  url: "https://api.hamstildiploma.nomoredomains.monster",
};

const mainApi = new Api(configApi);

export default mainApi;
