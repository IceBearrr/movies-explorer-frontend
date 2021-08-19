
import React from 'react';
import FilterCheckbox from '../Movies/FilterCheckbox';
import SearchIcon from '../../images/find/find.svg';

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__search-input-wrapper">
        <input
          className="search-form__text-input"
          type="text"
          placeholder="Фильм"
          required
        />
        <button className="search-form__button" type="submit" src={SearchIcon}></button>
      </div>
      <div className="search-form__shorts-wrapper">
        <FilterCheckbox />
        <p className="search-form__shorts-title">Короткометражки</p>

      </div>
    </div>
  );
}

export default SearchForm;