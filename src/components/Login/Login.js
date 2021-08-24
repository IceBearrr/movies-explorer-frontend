import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Login() {
  return (
    <div className="login-register">
      <Link to="/" className="logo-link">
        <Logo />
      </Link>

      <h2 className="login-register__title">Рады видеть!</h2>
      
      <form className="login-register__form">
        <p className="placeholder">E-mail</p>
          <input id="email" name="email" type="email" placeholder="" required />
        <p className="placeholder">Пароль</p>
          <input id="password" name="password" type="password" placeholder="" required minlength="2" maxlength="20" />
        
        <button type="submit" className="login-register__btn">Войти</button>
      </form>

      <p className="login-register__footer">
      Еще не зарегистрированы?
        <Link className="login-register__link" to="/sign-up">Регистрация</Link>
      </p>
    </div>
  );
}

export default Login;