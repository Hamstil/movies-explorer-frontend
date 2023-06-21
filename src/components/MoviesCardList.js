import React from "react";
import MoviesCard from "./MoviesCard";

function MoviesCardList({moviesSaved}) {
    
    return (
     <section className="cards content__cards">
      <ul className="cards__content">
        <MoviesCard onSavedMovies={moviesSaved} />        
        <MoviesCard onSavedMovies={moviesSaved}/>        
        <MoviesCard onSavedMovies={moviesSaved}/>        
        <MoviesCard onSavedMovies={moviesSaved}/>        
        <MoviesCard onSavedMovies={moviesSaved}/>      
        <MoviesCard onSavedMovies={moviesSaved}/>       
      </ul>
      <button aria-label="кнопка показа следующих фильмов" type="button" className="cards__more">Ещё</button>
    </section>
    )
}

export default MoviesCardList;