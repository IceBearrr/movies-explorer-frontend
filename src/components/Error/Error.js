import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound () {
  return (
    <div className="not-found">
 <h4 className="not-found__number-err">404</h4>
      <h3 className="not-found__title">
       Страница не найдена
      </h3>
      <Link className="button_type_to-main" to="/">Назад</Link>
    </div>
  )
}

export default PageNotFound;