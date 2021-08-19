import React from 'react';
import './BurgerMenuBtn.css';

function BurgerMenuBtn({ handleClick }) {
  return (
    <button className="menu-btn" onClick={handleClick} type="button" />
  );
}

export default BurgerMenuBtn;