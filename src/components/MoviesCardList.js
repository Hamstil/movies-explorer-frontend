import React from "react";
import MoviesCard from "./MoviesCard";

function MoviesCardList() {
    return (
     <section className="cards content__cards">
      <ul className="cards__content">
        <MoviesCard/>        
        <MoviesCard/>        
        <MoviesCard/>        
        <MoviesCard/>        
        <MoviesCard/>        
        <MoviesCard/>        
      </ul>
      <button aria-label="кнопка показа следующих фильмов" type="button" className="cards__more">Ещё</button>
    </section>
    )
}

export default MoviesCardList;