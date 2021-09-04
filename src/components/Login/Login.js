import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import useFormWithValidation from '../hook/useFormWithValidation';

const Login = ({onLogin, isSignInError}) => {
    const formWithValidation = useFormWithValidation();

    const [data, setData] = React.useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.email || !data.password) {
            return;
        }
        const {email, password} = data
        onLogin({email, password})
        formWithValidation.resetForm();
    }

    // const onSubmit = () => {
    //     validate() ? console.log('Submitted') : console.log('Validation Failed');
    //   };

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
                  data={formWithValidation}
                  isSignInError={isSignInError}
            >

                <p className="placeholder">E-mail</p>
                <input id="email" name="email" type="email" placeholder="" required value={data.email}

                       onChange={handleChange}
                       isSignInError={isSignInError}
                />
                <p className="login-register__error-text"
                   isSignInError={isSignInError}
                >
                    {/* {errors.email} */}

                </p>
                <p className="placeholder">Пароль</p>
                <input id="password" name="password" type="password" placeholder="" required minLength="2"
                       maxLength="20" value={data.password} onChange={handleChange}/>
                <p className="login-register__error-text">
                    {/* {errors.password} */}
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