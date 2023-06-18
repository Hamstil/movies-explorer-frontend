import React from "react";

function Techs() {
    return (
    <section className="tech content__tech" id="tech">
        <div className="tech__info">
            <h2 className="section-title">Технологии</h2>
            <h3 className="tech__title">7 технологий</h3>
            <p className="tech__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="tech__menu">
            <li><a href="https://doka.guide/html/" aria-label="HTML" className="tech__link" target="_blanck" >HTML</a></li>
            <li><a href="https://doka.guide/css/" aria-label="CSS" className="tech__link" target="_blanck" >CSS</a></li>
            <li><a href="https://doka.guide/js/" aria-label="JS" className="tech__link" target="_blanck" >JS</a></li>
            <li><a href="https://ru.react.js.org/" aria-label="React" className="tech__link" target="_blanck" >React</a></li>
            <li><a href="https://git-scm.com/" aria-label="Git" className="tech__link" target="_blanck" >Git</a></li>
            <li><a href="https://expressjs.com/ru/" aria-label="Express.js" className="tech__link" target="_blanck" >Express.js</a></li>
            <li><a href="https://www.mongodb.com/" aria-label="mongoDB" className="tech__link" target="_blanck" >mongoDB</a></li>
            </ul>
        </div>
        </section>
    )
}

export default Techs;