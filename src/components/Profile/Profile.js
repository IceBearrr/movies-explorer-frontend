import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import useFormWithValidation from "../hook/useFormWithValidation";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Profile(props) {
    const { onSignOut } = props;
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");

    let changeProfile = false;

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        const user = { name: values.name, email: values.email };
        props.onUpdateUser(
            user
        );
        setName(name);
        setEmail(email);
        changeProfile = true;
    }

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
        values.name = currentUser.name;
        values.email = currentUser.email;
    }, [currentUser, props.isOpen]);

    const { values, errors, isValid, handleChange, resetForm } =
        useFormWithValidation({ name: currentUser.name, email: currentUser.email });

    const [isValuesNotMatched, setisValuesNotMatched] = useState(false);

    function checkValues() {
        if (
            currentUser.name === values.name &&
            currentUser.email === values.email
        ) {
            setisValuesNotMatched(false);
        } else {
            setisValuesNotMatched(true);
        }
    }

    useEffect(() => {
        checkValues();
    }, [handleChange]);


    return (
        <React.Fragment>
            <Header user={props.userData} onLogin={props.onLogin} />

            <div className="profile">

                {changeProfile
                    ?
                    <h2 className="profile__title">Данные изменены!</h2>
                    : null
                }

                {!changeProfile
                    ?
                    <div>
                        <h2 className="profile__title">Привет, {props.user.name}!</h2>
                        <form className="profile__form" onSubmit={handleSubmit} noValidate>
                            <label className="profile__form-label" htmlFor="name">
                                Имя
                                <input
                                    className={`profile__form-input`}
                                    id="name"
                                    name="name"
                                    type="text"
                                    required value={values.name || ''}
                                    placeholder=""
                                    onChange={handleChange}
                                />
                                <span className="profile__input-error">
                                    {errors.name}
                                </span>
                            </label>


                            <label className="profile__form-label" htmlFor="E-mail">
                                E-mail
                                <input
                                    className={`profile__form-input 
                                   
                                    `}
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder=""
                                    required value={values.email || ''}
                                    onChange={handleChange}
                                />
                                <span className="profile__input-error">
                                    {errors.email}
                                </span>
                            </label>

                            <button
                                type="submit"
                                className={
                                    isValid && isValuesNotMatched
                                        ? "profile__form-submit"
                                        : "profile__form-submit profile__form-submit_disable"
                                }
                                onClick={handleSubmit}
                                disabled={!isValuesNotMatched || !isValid}
                                hidden={!isValuesNotMatched || !isValid}
                            >
                                {"Редактировать"}
                            </button>
                        </form>
                    </div>
                    : null
                }
                <button type="button" className="profile__logout-btn" onClick={onSignOut}
                >Выйти из аккаунта
                </button>
            </div>
            <Footer />
        </React.Fragment>

    );
}

export default Profile;