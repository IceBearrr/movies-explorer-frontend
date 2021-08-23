
import React from 'react';
import FilterCheckbox from '../Movies/FilterCheckbox';

function SearchForm() {
  return (
    <div className="search-form block">
      <div className="search-form__search-input-wrapper">
        <input
          className="search-form__text-input"
          type="text"
          placeholder="Фильм"
          required
        />
        <button className="search-form__button" type="submit"></button>
      </div>
      <div className="search-form__shorts-wrapper">
        <FilterCheckbox />
        <p className="search-form__shorts-title">Короткометражки</p>

      </div>
    </div>
  );
}

export default SearchForm;