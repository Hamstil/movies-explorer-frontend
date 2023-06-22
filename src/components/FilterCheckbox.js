import React from "react";

function FilterCheckbox() {
    return (
    <label className="search__form-field-movies">
          <input id="search-movies-toggler" type="checkbox" name="short-films" className="search__form-toggler search__form-toggler_text_short"/>
          <span className="search__form-toggler-text">Короткометражки</span>
    </label>
    )
}

export default FilterCheckbox;