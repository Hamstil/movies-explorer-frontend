import { React, useState } from "react";
import WordsForDisain from "../images/33-words-for-disain.jpeg";

function MoviesCard({ onSavedMovies }) {
  const [isSavedMovies, setIsSavedMovies] = useState(true);

  // метод переключения состояния
  function handleClickBookmark() {
    const currentState = isSavedMovies;
    setIsSavedMovies(!currentState);
  }

  if (!onSavedMovies) {
    return (
      <li className="card">
        <div className="card__group">
          <div className="card__group-description">
            <h2 className="card__title">33 слова о дизайне</h2>
            <p className="card__duration">1ч 47м</p>
          </div>
          <button
            onClick={handleClickBookmark}
            aria-label="кнопка сохранения фильма"
            type="button"
            className={`card__bookmark ${
              isSavedMovies ? "card__bookmark_enable" : ""
            }`}
          ></button>
        </div>
        <img
          src={WordsForDisain}
          alt="33 слова о дизайне"
          className="card__image"
        />
      </li>
    );
  } else {
    return (
      <li className="card">
        <div className="card__group">
          <div className="card__group-description">
            <h2 className="card__title">33 слова о дизайне</h2>
            <p className="card__duration">1ч 47м</p>
          </div>
          <button
            aria-label="кнопка сохранения фильма"
            type="button"
            className="card__bookmark-delete"
          ></button>
        </div>
        <img
          src={WordsForDisain}
          alt="33 слова о дизайне"
          className="card__image"
        />
      </li>
    );
  }
}

export default MoviesCard;
