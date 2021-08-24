import React from 'react';

function AboutProject() {

  return (
  <section className="about-project block" id='about-project'>
        <h1 className="block__name">О проекте</h1>


        <div className="about-project__block">
          <h2 className="about-project__name">Дипломный проект включал 5 этапов</h2>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
            финальные доработки.</p>
          <h2 className="about-project__name">На выполнение диплома ушло 5 недель</h2>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
            чтобы
            успешно защититься.</p>
        </div>


        <div className="about-project__schema">
          <p className="about-project__time-line about-project__time-line_green">1 неделя</p>
          <p className="about-project__time-line about-project__time-line_grey">4 недели</p>
          <p className="about-project__theme">Back-end</p>
          <p className="about-project__theme">Front-end</p>
        </div>
      </section>
  )
}

export default AboutProject;