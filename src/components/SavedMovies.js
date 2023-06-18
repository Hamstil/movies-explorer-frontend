import React from "react";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";

function SavedMovies() {
    return (
    <main className="content">       
        <SearchForm/>
        <MoviesCardList/>        
    </main>
    )
}

export default SavedMovies;