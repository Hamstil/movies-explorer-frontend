import React from "react";
import { Link } from "react-router-dom";
import headerLogo from '../images/logo.svg';

function Login() {
    return (
        <main className="content page__content">
      <section className="authorization content__authorization">
        <Link to="/"> <img src={headerLogo} alt="Логотип: Movies" className="content__logo"/></Link>
        <h2 className="authorization__title">Рады видеть!</h2>
        <form name="register" className="authorization__from">
          <label className="authorization__from-field-login">
            <span className="authorization__from-description">email</span>
            <input id="authorization-email" type="email" name="email" placeholder="Введите email" className="authorization__from-input authorization__from-input_text_email" minLength="2" maxLength="40" required/>
            <span className="authorization__from-error authorization-email-error authorization__from-error_active"></span>
          </label>
          <label className="authorization__from-field-login">
            <span className="authorization__from-description">Пароль</span>
            <input id="authorization-password" type="password" name="password" placeholder="Введите пароль" className="authorization__from-input authorization__from-input_text_password" minLength="4" maxLength="200" required/>
            <span className="authorization__from-error authorization-password-error authorization__from-error_active"></span>
          </label>
          <button className="authorization__from-button" type="submit">Войти</button>
        </form>
        <p className="authorization__redirect">Ещё не зарегистрированы?<Link className="authorization__redirect-link" to="/signup">Регистрация</Link></p>
      </section>
  </main>
    )
}

export default Login;