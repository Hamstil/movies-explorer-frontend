import React, { useEffect, useState } from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import Footer from "./Footer";
import { DURATION_FILTR } from "../utils/constants";

function Movies({
  isLoggedIn,
  isLoading,
  onPopupMenu,
  isQueryError,
  savedMovies,
  onMovieAddMark,
  onMovieDelete,
}) {
  const [isCheckbox, setIsCheckbox] = useState(false); // изначальное состояние чекбокса
  const [isFoundMovies, setIsFoundMovies] = useState([]); // искомые фильмы
  const [isFoundCheckboxMovies, setIsFoundCheckboxMovies] = useState([]); // наденые фильмы с параметром продолжительности
  const [isNotFoundMovies, setIsNotFoundMovies] = useState(false); // состояние когда ничего не найдено

  // метод фильтрации фильмов по названию
  function filterMoviesFromSearch(movies, searchMovie) {
    // eslint-disable-next-line array-callback-return
    const searchedFilms = movies.filter((movie) => {
      const movieRU = String(movie.nameRU).toLowerCase().trim();
      const movieEN = String(movie.nameEN).toLowerCase().trim();
      const searchFilm = searchMovie.toLowerCase().trim();
      if (movieRU.indexOf(searchFilm) !== -1) {
        return movieRU;
      } else if (movieEN.indexOf(searchFilm) !== -1) {
        return movieEN;
      }
    });
    return searchedFilms;
  }

  // метод фильтрации по длительности фильма
  function filterDuration(movies) {
    return movies.filter((movie) => movie.duration < DURATION_FILTR);
  }

  // метод фильтрации по параметрам
  function handleSearcFiltrehMovies(movies, searchQuery, isCheckbox) {
    const moviesList = filterMoviesFromSearch(movies, searchQuery, isCheckbox);
    setIsFoundMovies(moviesList);
    setIsFoundCheckboxMovies(
      isCheckbox ? filterDuration(moviesList) : moviesList
    );
    localStorage.setItem("foundMovies", JSON.stringify(moviesList));
    if (moviesList.length === 0) {
      setIsNotFoundMovies(true);
    }
  }

  // метод поиска фильмов по нажатию на поиск
  function handleSearchMovies(searchQuery) {
    localStorage.setItem("searchQuery", searchQuery);
    localStorage.setItem("shortMovies", isCheckbox);
    const movies = JSON.parse(localStorage.getItem("initialMovies"));
    handleSearcFiltrehMovies(movies, searchQuery, isCheckbox);
  }

  // метод отображение найденых фильмов
  useEffect(() => {
    if (localStorage.getItem("foundMovies")) {
      const movies = JSON.parse(localStorage.getItem("foundMovies"));
      setIsFoundMovies(movies);
      if (localStorage.getItem("shortMovies") === "true") {
        setIsFoundCheckboxMovies(filterDuration(movies));
      } else {
        setIsFoundCheckboxMovies(movies);
      }
    } else {
      setIsNotFoundMovies(true);
    }
  }, []);

  // метод изменения checkbox
  function handleCheckbox() {
    setIsCheckbox(!isCheckbox);
    if (!isCheckbox) {
      setIsFoundCheckboxMovies(filterDuration(isFoundMovies));
    } else {
      setIsFoundCheckboxMovies(isFoundMovies);
    }
    localStorage.setItem("shortMovies", !isCheckbox);
  }

  // установка ошибка поиска
  useEffect(() => {
    if (
      localStorage.getItem("foundMovies") &&
      isFoundCheckboxMovies.length === 0
    ) {
      setIsNotFoundMovies(true);
    } else {
      setIsNotFoundMovies(false);
    }
  }, [isFoundMovies, isFoundCheckboxMovies]);

  // изначальное положение checkbox
  useEffect(() => {
    if (localStorage.getItem("shortMovies") === "true") {
      setIsCheckbox(true);
    } else {
      setIsCheckbox(false);
    }
  }, []);

  return (
    <main className="content">
      <Header isLoggedIn={isLoggedIn} onPopupMenu={onPopupMenu} />
      <SearchForm
        onSearchMovies={handleSearchMovies}
        isCheckbox={isCheckbox}
        onCheckbox={handleCheckbox}
      />
      <MoviesCardList
        isSavedFilms={false}
        isLoading={isLoading}
        onMovieAddMark={onMovieAddMark}
        isNotFoundMovies={isNotFoundMovies}
        savedMovies={savedMovies}
        onMovieDelete={onMovieDelete}
        movies={isFoundCheckboxMovies}
        isQueryError={isQueryError}
      />

      <Footer />
    </main>
  );
}

export default Movies;
