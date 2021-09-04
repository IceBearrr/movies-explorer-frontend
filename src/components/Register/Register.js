import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import useFormWithValidation from '../hook/useFormWithValidation';

const Register = ({ onRegister }) => {
    const { values, errors, handleChange, resetForm } =
        useFormWithValidation({});

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(values.name, values.email, values.password)
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

                <p className="placeholder">Имя</p>
                <input
                    id="name"
                    name="name"
                    type="name"
                    placeholder=""
                    required
                    minLength="2" maxLength="30"
                    value={values.name || ''}
                    onChange={handleChange} />
                <p className="login-register__error-text">
                    {errors.name}
                </p>
                <p className="placeholder">E-mail</p>
                <input id="email" name="email" type="email"
                    placeholder=""
                    required value={values.email || ""}
                    onChange={handleChange} />
                <p className="login-register__error-text">
                    {errors.email}
                </p>
                <p className="placeholder">Пароль</p>
                <input id="password" name="password" type="password"
                    ceholder="" required minLength="4"
                    maxLength="20"
                    value={values.password || ''} onChange={handleChange} />
                <p className="login-register__error-text">
                    {errors.password}
                </p>
                <button type="submit" className="login-register__btn">Зарегистрироваться</button>
            </form>

            <p className="login-register__footer">
                Уже зарегистрированы?
                <Link className="login-register__link" to="/signin">Войти</Link>
            </p>
        </div>
    );
}

export default Register;



