import React from "react";
import FilterCheckbox from "./FilterCheckbox";

function SearchForm() {
    return (
     <section aria-label="Поиск фильмов" className="search content__search">
      <form name="movies" className="search__form-movies">
        <label className="search__form-field-movies">
          <input id="search-movies" type="text" name="search-movies" placeholder="Фильм" className="search__form-input search__form-input_text_movies" minLength="2" maxLength="40" required/>
        </label>
        <label className="search__form-field-submit">
          <button className="search__form-button" type="submit"></button>
        </label>
        <FilterCheckbox/>
      </form>
    </section>
    )
}

export default SearchForm;