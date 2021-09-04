import React from 'react';

function BurgerMenuBtn({handleClick}) {
    return (
        <button className="menu-btn" onClick={handleClick} type="button"/>
    );
}

export default BurgerMenuBtn;