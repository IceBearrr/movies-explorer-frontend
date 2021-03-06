import React from 'react';
import { NavLink, Link, Switch, Route } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Navigation() {

  return (
    <nav className="navigation">
      <Switch>
        <Route exact path="/">
          <Link className="logo-link" src={Logo} alt="логотип"></Link>
          <Link
            to="/sign-up"
            className="navigation__link navigation__link_login"
          >
            Регистрация
          </Link>
          <Link
            to="/sign-in"
            className="navigation__link navigation__link_enter navigation__link_login"
          >
            Войти
          </Link>
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