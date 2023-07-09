import React, { useState } from "react";
import FilterCheckbox from "./FilterCheckbox";
import { useLocation } from "react-router-dom";

function SearchForm({ onSearchMovies, onCheckbox, isCheckbox }) {
  const [isSearchError, setIsSearchError] = useState(false); // ошибка запроса поиска
  const [isTextQuery, setIsTextQuery] = useState(""); // текст запроа на фильм
  const textSearch = localStorage.getItem("searchQuery"); // текст запроса из локального хранилища
  const { pathname } = useLocation();

  // метод отправки формы
  function handleSubmit(e) {
    e.preventDefault();
    if (isTextQuery.length === 0) {
      setIsSearchError(true);
    } else {
      onSearchMovies(isTextQuery);
      setIsSearchError(false);
    }
  }

  // метод получения значения из инпута
  function handleChange(e) {
    setIsTextQuery(e.target.value);
  }

  // метод фокусировки на инпут
  function handleFocusChange() {
    setIsSearchError(false);
  }

  return (
    <section aria-label="Поиск фильмов" className="search content__search">
      <form
        name="movies"
        className="search__form-movies"
        onSubmit={handleSubmit}
      >
        <label className="search__form-field-movies">
          {pathname === "/movies" ? (
            <input
              id="search-movies"
              type="text"
              name="search-movies"
              placeholder={
                isSearchError
                  ? "Введите запрос"
                  : textSearch
                  ? "Вы ввели: " + textSearch
                  : "Название фильма"
              }
              onChange={handleChange}
              onFocus={handleFocusChange}
              value={isTextQuery || ""}
              className={`search__form-input search__form-input_text_movies ${
                isSearchError ? "search__form-input_error" : ""
              }`}
              required
            />
          ) : (
            <input
              id="search-movies"
              type="text"
              name="search-movies"
              placeholder={isSearchError ? "Введите запрос" : "Фильм"}
              onChange={handleChange}
              onFocus={handleFocusChange}
              value={isTextQuery || ""}
              className={`search__form-input search__form-input_text_movies ${
                isSearchError ? "search__form-input_error" : ""
              }`}
              required
            />
          )}
        </label>
        <label className="search__form-field-submit">
          <button className="search__form-button" type="submit"></button>
        </label>
        <FilterCheckbox onCheckbox={onCheckbox} isCheckbox={isCheckbox} />
      </form>
    </section>
  );
}

export default SearchForm;
