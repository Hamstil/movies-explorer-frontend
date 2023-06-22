import React from "react";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";

function Movies() {
  return (
    <main className="content">
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}

export default Movies;
