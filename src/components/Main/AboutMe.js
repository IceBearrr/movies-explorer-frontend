import React from 'react';
import Portfolio from './Portfolio';
import myPhoto from '../../images/profile/me.jpg';

function AboutMe() {

    return (
        <section className="student block" id='student'>
            <h1 className="block__name ">Студент</h1>
            <div className="student__info-block">
                <div className="student__info-texts">
                    <div className="student__info-text">
                        <h2 className="student__name">Михаил</h2>
                        <h3 className="student__job-age">Фронтенд-разработчик, 27 лет</h3>
                        <p className="student__about">Родился и живу в Москве. Закончил МГТУ им. Н. Э. Баумана. В жизни
                            придерживаюсь двух фраз:
                            "В здоровом теле - здоровый дух" и "Человек, который хотя бы отчасти не юморист, – лишь
                            отчасти человек".
                            Пиццу и пасту люблю настолько, что в планах фриланс либо удаленная работа в IT-компании с
                            отличным коллективом и видом на море.</p>
                    </div>
                    <div className="student__links">
                        <a
                            href="https://www.facebook.com/mikhailBezFB/"
                            className="student__link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://github.com/IceBearrr"
                            className="student__link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </div>
                </div>
                <img src={myPhoto} alt="me" className="student__photo"/>
            </div>

            <Portfolio/>
        </section>
    );
}

export default AboutMe;


