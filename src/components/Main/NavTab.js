import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function NavTab() {

    return (
        <div>
            <nav className="nav__links">
                <Link to="#about-project" className="nav__link">О проекте</Link>
                <Link to="#techs" className="nav__link">Технологии</Link>
                <Link to="#student" className="nav__link">Студент</Link>
            </nav>
        </div>
    )
}

export default NavTab;