import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <h2 className="profile__title">Привет, друг!</h2>
      <form className="profile__form">
        <label className="profile__form-label" htmlFor="name">
          Имя
          <input
            className="profile__form-input"
            id="name"
            required
            name="name"
            type="text"
            defaultValue="друг"
            placeholder="Имя"
          />
        </label>

        <label className="profile__form-label" htmlFor="E-mail">
          Почта
          <input
            className="profile__form-input"
            id="email"
            required
            name="email"
            type="email"
            defaultValue="123@ya.ru"
            placeholder="E-mail"
          />
        </label>

        <button type="submit" className="profile__form-submit">Редактировать</button>
      </form>
      <button type="button" className="profile__logout-btn">Выйти из аккаунта</button>
    </div>
  );
}

export default Profile;