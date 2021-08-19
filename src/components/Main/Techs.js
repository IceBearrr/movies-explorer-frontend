import React from 'react';

function Techs() {

    return (

      <section className="techs " id='techs'>
      <h1 className="block__name block__name_techs">Технологии</h1>
      <h2 className="techs__theme">7 технологий</h2>
      <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

      <ul className="techs__names">
        <li className="techs__name">HTML</li>
        <li className="techs__name">CSS</li>
        <li className="techs__name">JS</li>
        <li className="techs__name">React</li>
        <li className="techs__name">Git</li>
        <li className="techs__name">Express.js</li>
        <li className="techs__name">mongoDB</li>
      </ul>
    </section>
    )
}

export default Techs;