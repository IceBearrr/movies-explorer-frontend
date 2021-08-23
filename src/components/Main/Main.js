import React from 'react';
import AboutMe from "./AboutMe";
import AboutProject from "./AboutProject";
import Promo from "./Promo";
import Techs from "./Techs";
import Portfolio from './Portfolio';

function Main() {

    return (
        <main className="content">

            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
        </main>
    );
}

export default Main;