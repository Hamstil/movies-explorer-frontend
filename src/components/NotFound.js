import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return(
     <section className="not-faund">
      <div className="not-faund__description">
        <h1 className="not-faund__title">404</h1>
        <p className="not-faund__subtitle">Страница не найдена</p>
      </div>
        <Link className="not-faund__link" to="/">Назад</Link>
    </section>
    )
}

export default NotFound;