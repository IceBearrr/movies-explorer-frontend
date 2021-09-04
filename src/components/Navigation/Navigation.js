import React from 'react';
import {Link, NavLink, Route, Switch} from 'react-router-dom';
import Logo from '../Logo/Logo';

function Navigation(props) {

    return (
        <nav className="navigation">
            <Switch>
                <Route exact path="/">

                    {!props.loggedIn
                        ?
                        <React.Fragment>
                            <Link className="logo-link" src={Logo} alt="логотип"></Link>
                            <Link
                                to="/signup"
                                className="navigation__link navigation__link_login"
                            >
                                Регистрация
                            </Link>
                            <Link
                                to="/signin"
                                className="navigation__link navigation__link_enter navigation__link_login"
                            >
                                Войти
                            </Link>
                        </React.Fragment>
                        :
                        <div>
                            <NavLink
                                to="/movies"
                                className="navigation__link"
                                activeClassName="navigation__link_is-active"
                            >
                                Фильмы
                            </NavLink>

                            <NavLink
                                to="/saved-movies"
                                className="navigation__link"
                                activeClassName="navigation__link_is-active"
                            >
                                Сохранённые фильмы
                            </NavLink>
                            <NavLink
                                to="/profile"
                                className="navigation__link"
                                activeClassName="navigation__link_is-active "
                            >
                                <button
                                    type="button"
                                    className="profile-btn__image"
                                />
                            </NavLink>
                        </div>

                    }
                </Route>

                <Route path={['/movies', '/saved-movies', '/profile']}>
                    <div>
                        <NavLink
                            to="/movies"
                            className="navigation__link"
                            activeClassName="navigation__link_is-active"
                        >
                            Фильмы
                        </NavLink>

                        <NavLink
                            to="/saved-movies"
                            className="navigation__link"
                            activeClassName="navigation__link_is-active"
                        >
                            Сохранённые фильмы
                        </NavLink>
                        <NavLink
                            to="/profile"
                            className="navigation__link"
                            activeClassName="navigation__link_is-active "
                        >
                            <button
                                type="button"
                                className="profile-btn__image"
                            />
                        </NavLink>
                    </div>
                </Route>
            </Switch>

        </nav>
    );
}

export default Navigation;


// {loggedIn ? (
//     <div>
//         <NavLink
//             to="/movies"
//             className="navigation__link"
//             activeClassName="navigation__link_is-active"
//         >
//             Фильмы
//         </NavLink>

//         <NavLink
//             to="/saved-movies"
//             className="navigation__link"
//             activeClassName="navigation__link_is-active"
//         >
//             Сохранённые фильмы
//         </NavLink>
//         <NavLink
//             to="/profile"
//             className="navigation__link"
//             activeClassName="navigation__link_is-active "
//         >
//             <button
//                 type="button"
//                 className="profile-btn__image"
//             />
//         </NavLink>
//     </div>
// ) : (
//     <div>
//         <Link className="logo-link" src={Logo} alt="логотип"></Link>
//         <Link
//             to="/signup"
//             className="navigation__link navigation__link_login"
//         >
//             Регистрация
//         </Link>
//         <Link
//             to="/signin"
//             className="navigation__link navigation__link_enter navigation__link_login"
//         >
//             Войти
//         </Link>
//     </div>
// )}
//         {/* </Route> */}
// </Switch>