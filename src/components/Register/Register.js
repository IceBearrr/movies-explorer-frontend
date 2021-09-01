import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
// import useFormWithValidation from '../../hook/useFormWithValidation';

// const Register = ({ onRegister, loginLink, error, isLoading, onLogoClick }) => {
//   const formWithValidation = useFormWithValidation();
//   const { name, email, password } = formWithValidation.values;

//   // const submitHandler = (e) => {
//   //   e.preventDefault();
//   //   signUpHandler(name, email, password);
//   //   formWithValidation.resetForm();
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, password } = data;
//     onRegister({ name, email, password })
//     formWithValidation.resetForm();
//   }

const Register = ({onRegister}) => {
    const [data, setData] = useState({
        name: '',
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
        const {name, email, password} = data;
        onRegister({name, email, password})
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
                // formData={formWithValidation}
                // isSignUpError={isSignUpError}
            >

                <p className="placeholder">Имя</p>
                <input id="name" name="name" type="name" placeholder="" required minLength="2" maxLength="30"
                       value={data.name} onChange={handleChange}/>
                <p className="login-register__error-text">
                    {/* {errors.name} */}
                </p>
                <p className="placeholder">E-mail</p>
                <input id="email" name="email" type="email" placeholder="" required value={data.email}
                       onChange={handleChange}/>
                <p className="login-register__error-text">
                    {/* {errors.email} */}
                </p>
                <p className="placeholder">Пароль</p>
                <input id="password" name="password" type="password" placeholder="" required minLength="2"
                       maxLength="20" value={data.password} onChange={handleChange}/>
                <p className="login-register__error-text">
                    {/* {errors.password} */}
                </p>
                <button type="submit" className="login-register__btn">Зарегистрироваться</button>
            </form>

            <p className="login-register__footer">
                Уже зарегистрированы?
                <Link className="login-register__link" to="/sign-in">Войти</Link>
            </p>
        </div>
    );
}

export default Register;



