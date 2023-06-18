import React from "react";
import { Link } from "react-router-dom";
import headerLogo from '../images/logo.svg';

function Register() {
    return (
   <main className="content page__content">
    <section className="authorization content__authorization">
      <Link to="/"> <img src={headerLogo} alt="Логотип: Movies" className="content__logo"/></Link>
      <h2 className="authorization__title">Добро пожаловать!</h2>
      <form name="register" className="authorization__from">
        <label className="authorization__from-field">
          <span className="authorization__from-description">Имя</span>
          <input id="authorization-name" type="text" name="name" placeholder="Введите Имя" className="authorization__from-input authorization__from-input_text_name" minLength="2" maxLength="40" required=""/>
          <span className="authorization__from-error authorization-name-error authorization__from-error_active"></span>
        </label>
        <label className="authorization__from-field">
          <span className="authorization__from-description">email</span>
          <input id="authorization-email" type="email" name="email" placeholder="Введите email" className="authorization__from-input authorization__from-input_text_email" minLength="2" maxLength="40" required=""/>
          <span className="authorization__from-error authorization-email-error authorization__from-error_active"></span>
        </label>
        <label className="authorization__from-field">
          <span className="authorization__from-description">Пароль</span>
          <input id="authorization-password" type="password" name="password" placeholder="Придумайте пароль" className="authorization__from-input authorization__from-input_text_password" minLength="4" maxLength="40" required=""/>
          <span className="authorization__from-error authorization-password-error authorization__from-error_active"></span>
        </label>
        <button className="authorization__from-button" type="submit" disabled="disabled">Зарегистрироваться</button>
      </form>
      <p className="authorization__redirect">Уже зарегистрированы?<Link className="authorization__redirect-link" to="/signin">Войти</Link></p>
    </section>
  </main>
    )
}

export default Register;