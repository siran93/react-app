import {NavLink} from "react-router-dom";
import style from './Nav.module.css';
import React from 'react';

const Nav = () => {
    return(
        <nav className={style.nav}>
            <ul>
                <li><NavLink to='/profile' activeClassName={style.active}>Profile</NavLink></li>
                <li><NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink></li>
                <li><NavLink to='/news' activeClassName={style.active}>News</NavLink></li>
                <li><NavLink to='/music' activeClassName={style.active}>Music</NavLink></li>
                <li><NavLink to='/settings' activeClassName={style.active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;