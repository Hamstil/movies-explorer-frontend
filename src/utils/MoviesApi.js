class Api {
  #onResponce(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  // Получение списка фильмов
  getMoviesCards() {
    return fetch(`${this._url}`, {
      method: "GET",
      headers: this._headers,
    }).then(this.#onResponce);
  }  
}

const configApi = {
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {    
    "content-type": "application/json",
  },
};

const moviesApi = new Api(configApi);

export default moviesApi;
