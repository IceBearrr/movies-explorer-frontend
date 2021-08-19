import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Register() {
  return (
    <div className="register">
      <Link to="/" className="logo-link">
        <Logo />
      </Link>

      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <p className="placeholder">Имя</p>
        <input id="name" name="name" type="name" placeholder="Имя" required minlength="2" maxlength="30" />
        <p className="placeholder">E-mail</p>
        <input id="email" name="email" type="email" placeholder="E-mail" required />
        <p className="placeholder">Пароль</p>
        <input id="password" name="password" type="password" placeholder="Пароль" required minlength="2" maxlength="20" />

        <button type="submit" className="register__btn">Зарегистрироваться</button>
      </form>

      <p className="register__footer">
        Уже зарегистрированы?
        <Link className="register__link" to="/sign-in">Войти</Link>
      </p>
    </div>
  );
}

export default Register;