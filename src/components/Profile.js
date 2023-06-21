import React from "react";


function Profile() {
    return(      
        <main className="content page__content">
    <section className="account content__account">
      <h2 className="account__title">Привет, Виталий!</h2>
      <form name="account" className="account__from">
        <label className="account__from-field">
          <span className="account__from-description">Имя</span>
          <input id="account-name" type="text" name="name" placeholder="Введите Имя" className="account__from-input account__from-input_text_name" minLength="2" maxLength="40" required/>
        </label>
        <label className="account__from-field">
          <span className="account__from-description">E-mail</span>
          <input id="account-email" type="email" name="email" placeholder="Введите email" className="account__from-input account__from-input_text_email" minLength="2" maxLength="40" required/>
        </label>
        <button className="account__from-button account__from-button_disabled" type="submit">Сохранить</button>
      <ul className="account__links">
        <li><button type="submit" aria-label="Редактировать" className="account__link" >Редактировать</button></li>
        <li><button type="submit" aria-label="Выйти из аккаунта" className="account__link account__link_theme_light" disabled="disabled">Выйти из аккаунта</button></li>
      </ul>
      </form>
    </section>
  </main>  
    )
}

export default Profile;