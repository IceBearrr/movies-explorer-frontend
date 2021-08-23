import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__project">Учебный проект Яндекс.Практикум х BeatFilm.</div>
      <div className="footer__bottom">
        <div className="footer__year"> &copy; {(new Date().getFullYear())} </div>
        <ul className="footer__column-links">
          <li className="footer__column-link">
            <a className="footer__column-link" href="https://practicum.yandex.ru/" target="_blank" rel="noopener">Яндекс.Практикум</a>
          </li>
          <li className="footer__column-link">
            <a className="footer__column-link" href="https://github.com/" target="_blank" rel="noopener">Github</a>
          </li>
          <li className="footer__column-link">
            <a className="footer__column-link" href="https://ru-ru.facebook.com/" target="_blank" rel="noopener">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}


export default Footer;