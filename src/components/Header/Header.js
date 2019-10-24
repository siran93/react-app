import style from './Header.module.css';
import React from 'react';

const Header = () =>{
    return (
        <header className={style.header}>
            <img
                src='https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram--icon-png-image_3571406.jpg'/>
            <p>John Smith</p>
        </header>
    )
}

export default Header;