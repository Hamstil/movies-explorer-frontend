import { React, useState } from "react";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";

function SavedMovies() {
    const [isSavedMovies] = useState(true);

    return (
    <main className="content">       
        <SearchForm/>
        <MoviesCardList moviesSaved={isSavedMovies}/>        
    </main>
    )
}

export default SavedMovies;