import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import useFormWithValidation from '../hook/useFormWithValidation';

const Login = ({ onLogin }) => {
    const { values, errors, handleChange, resetForm } =
        useFormWithValidation({});

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("values.email - " + values.email);
        onLogin(values.email, values.password)
        resetForm();
    }

    return (
        <div className="login-register">
            <Link to="/" className="logo-link">
                <Logo
                // onClick={onLogoClick}
                />
            </Link>

            <h2 className="login-register__title">Добро пожаловать!</h2>
            <form className="login-register__form"
                onSubmit={handleSubmit}
            >
                <p className="placeholder">E-mail</p>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=""
                    required value={values.email || ""}
                    onChange={handleChange}
                />
                <p className="login-register__error-text">
                    {errors.email}
                </p>
                <p className="placeholder">Пароль</p>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder=""
                    required
                    minLength="4"
                    maxLength="20"
                    value={values.password || ''}
                    onChange={handleChange} />
                <p className="login-register__error-text">
                    {errors.password}
                </p>
                <button type="submit" className="login-register__btn">Войти</button>
            </form>

            <p className="login-register__footer">
                Еще не зарегистрированы?
                <Link className="login-register__link" to="/signup">Регистрация</Link>
            </p>
        </div>
    );
}

export default Login;