import React from 'react';
import { NavLink } from 'react-router-dom';

function Portfolio() {

  return (

    <div className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>

      <nav className="portfolio-links">
        <NavLink exact to="https://github.com/IceBearrr" activeClassName="portfolio-link_active" className="portfolio-link">
          <div className="portfolio-link_button">Статичный сайт</div>
          <div className="portfolio-link_button">↗</div>
        </NavLink>
        <NavLink exact to="https://github.com/IceBearrr" activeClassName="portfolio-link_active" className="portfolio-link">
          <div className="portfolio-link_button">Адаптивный сайт</div>
          <div className="portfolio-link_button">↗</div>
        </NavLink>
        <NavLink exact to="https://github.com/IceBearrr" activeClassName="portfolio-link_active" className="portfolio-link">
          <div className="portfolio-link_button">Одностраничное приложение</div>
          <div className="portfolio-link_button">↗</div>
        </NavLink>
      </nav>
    </div>
  )
}

export default Portfolio;