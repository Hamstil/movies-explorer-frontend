import React from "react";
import profileImage from '../images/anton_sid.jpg';
import Portfolio from "./Portfolio";

function AboutMe() {
    return (
     <section className="student content__student" id="student">
      <h2 className="section-title">Студент</h2>
      <div className="student__info">
        <div className="student__info-description">
          <h2 className="student__info-title">Антон</h2>
          <h3 className="student__info-subtitle">Фронтенд-разработчик, 33 года</h3>
          <p className="student__info-paragraph">Я живу и работаю в Белгороде. Закончил Харьковский национальный университете радиоэлектоники в 2012 году. Сейчас работаю в библиотечной системе города Белгорода. Я люблю слушать музыку смотреть интересные фильмы, а ещё увлекаюсь игрой на гитаре. Пробовать писать код начал еще в университете, но потом это отошло на 2 план, а сейчас пытаюсь наверстать упущенное. Думаю после защиты диплома сделать несколько pet-проектов и ходить по собеседованиям.</p>
          <a href="https://github.com/Hamstil" target="_blank" className="student__description-link" rel="noreferrer">Github</a>
        </div>
        <img src={profileImage} alt="Изображение студента" className="student__image-avatar"/>
      </div>
      <h2 className="student__title-portfolio">Портфолио</h2>

      <Portfolio/>
      
    </section>
    )
}

export default AboutMe;