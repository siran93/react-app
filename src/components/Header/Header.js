import React from 'react';
import header from './Header.module.css';

const Header = () =>{
    return (
        <header className={header.header}>
            <img
                src='https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram--icon-png-image_3571406.jpg'/>
            <p>John Smith</p>
        </header>
    )
}

export default Header;