import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import BurgerMenuBtn from '../BurgerMenuBtn/BurgerMenuBtn';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';

function Header() {

    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    });

    const isMobile = width <= 768;

    const [isOpen, setIsOpen] = useState(false);
    const handleBurgerMenuClick = () => setIsOpen(!isOpen);




    return (
        <header className="header" >

            <Route path={
                ['/movies', '/saved-movies', '/profile']} > {
                    isMobile ? (< BurgerMenuBtn handleClick={handleBurgerMenuClick}
                    />) : null}
            </Route>

            <Switch >

                <Route exact path="/" >

                    <Link to="/"
                        className="logo-link" >
                        <Logo />
                    </Link>
                    <div className="header__nav header__nav-wrapper_type_unauth" >
                        <Navigation />
                    </div>
                </Route>


                {!isMobile ? (<Route path={['/movies', '/saved-movies', '/profile']}
                >

                    <Link to="/"
                        className="logo-link" >

                        <Logo />
                    </Link>
                    <div className="header__nav header__nav-wrapper_type_auth" >
                        <Navigation />
                    </div>
                </Route>
                ) : null}

                <Route exact path={['/movies', '/saved-movies', '/profile']} >
                    <BurgerMenu isOpen={isOpen} closeHandler={handleBurgerMenuClick} />
                    <Link to="/"
                        className="logo-link" >
                        <Logo />
                    </Link>
                </Route>


            </Switch>
        </header>
    );
}

export default Header;