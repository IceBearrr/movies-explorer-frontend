import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Login() {
  return (
    <div className="login">
      <Link to="/" className="logo-link">
        <Logo />
      </Link>

      <h2 className="register__title">Рады видеть!</h2>
      
      <form className="register__form">
        <p className="placeholder">E-mail</p>
          <input id="email" name="email" type="email" placeholder="E-mail" required />
        <p className="placeholder">Пароль</p>
          <input id="password" name="password" type="password" placeholder="Пароль" required minlength="2" maxlength="20" />
        
        <button type="submit" className="register__btn">Войти</button>
      </form>

      <p className="register__footer">
      Еще не зарегистрированы?
        <Link className="register__link" to="/sign-up">Регистрация</Link>
      </p>
    </div>
  );
}

export default Login;