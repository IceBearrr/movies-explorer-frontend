
import React,{ useState } from 'react';
import FilterCheckbox from '../Movies/FilterCheckbox';
import useFormWithValidation from "../hook/useFormWithValidation";

//function SearchForm({ handleSearch, setPreloader, setIsChecked, isLoading }) {
function SearchForm(props) {
  const { values, errors, isValid, handleChange } =
  useFormWithValidation({});

  const [keyword, setKeyword] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [isShortMovies, setIsShortMovies] = useState(false);

  // function onCheckboxToggle(checked) {
  //   setIsShortMovies(checked);
  //   setIsChecked(!isShortMovies);
  // }

  function handleKeyword(evt) {
    handleChange(evt);
    setKeyword(evt.target.value);
    if (evt.target.value.length > 0){
        setDisableButton(false)
    } else {
        setDisableButton(true);

    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    //handleSearch(keyword);
     props.onSubmitSearch(props.movies, keyword )

      //setPreloader(true);
  }

  return (
    <div className="search-form block">
      <form className="search-form__search-input-wrapper" onSubmit={handleSubmit} required>
        <input
          className="search-form__text-input"
          name="keyword"
          type="text"
          placeholder="Фильм"
          minLength="1"
          maxLength="200"
          required
          autoComplete="off"
          // value={values.keyword || ""}
          onChange={handleKeyword}
          // disabled={isLoading}

        />
        <button disabled =  {disableButton} hidden = {disableButton}
        className="search-form__button"
        type="submit"
      >

      </button>
      </form>
      <div className="search-form__shorts-wrapper">
        {/*<FilterCheckbox onCheckboxToggle={onCheckboxToggle}/>*/}
        {/*<p className="search-form__shorts-title">Короткометражки</p>*/}

      </div>
    </div>
  );
}

export default SearchForm;