import React, {useEffect, useState} from 'react';
import {CurrentUserContext} from '../../context/CurrentUserContext';
import useFormWithValidation from "../hook/useFormWithValidation";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Profile(props) {
    const {onSignOut} = props;
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");

    let changeProfile = false;

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        const user = {name: name, email: email};
        props.onUpdateUser(
            user
        );
        setName(name);
        setEmail(email);
        changeProfile = true;
    }

    function handleChangeName(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        e.preventDefault();
        setEmail(e.target.value);
    }

    // function handleSignOut() {
    //     setUserData('')
    //     setLoggedIn(false)
    //     localStorage.removeItem('jwt')
    // }

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser, props.isOpen]);

    const {values, errors, isValid, handleChange} =
        useFormWithValidation({name: currentUser.name, email: currentUser.email});

    const [isValuesNotMatched, setisValuesNotMatched] = useState(false);

    function checkValues() {
        if (
            currentUser.name === name &&
            currentUser.email === email
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
            <Header user={props.userData} onLogin={props.onLogin}/>

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
                        <form className="profile__form" onSubmit={handleSubmit}>
                            <label className="profile__form-label" htmlFor="name">
                                Имя
                                <input
                                    className={`profile__form-input`}
                                    id="name"
                                    name="name"
                                    type="text"
                                    required value={name || ''}
                                    placeholder=""
                                    onChange={handleChangeName}
                                    //onChange={handleChange}
                                />
                            </label>


                            <label className="profile__form-label" htmlFor="E-mail">
                                E-mail
                                <input
                                    className={`profile__form-input `}
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder=""
                                    required value={email || ''}
                                    onChange={handleChangeEmail}
                                    //onChange={handleChange}
                                />
                                <span className="profile__input-error">
                                    {/* {errors.email} */}
                                    </span>
                            </label>

                            <button
                                // type="submit" className="profile__form-submit">Редактировать
                                type="submit"
                                className={
                                    isValid && isValuesNotMatched
                                        ? "profile__form-submit"
                                        : "profile__form-submit profile__form-submit_disable"
                                }
                                onClick={handleSubmit}

                                disabled={!isValuesNotMatched}
                                hidden={!isValuesNotMatched}

                            >
                                {"Редактировать"}
                            </button>
                        </form>
                    </div>
                    : null
                }
                <button type="button" className="profile__logout-btn" onClick={onSignOut}
                    //  onSignOut={props.onSignOut}
                >Выйти из аккаунта
                </button>
            </div>

            <Footer/>


        </React.Fragment>

    );
}

export default Profile;