import React from 'react';
import nav from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return(
        <nav className={nav.nav}>
            <ul>
                <li><NavLink to='/profile' activeClassName={nav.active}>Profile</NavLink></li>
                <li><NavLink to='/dialogs' activeClassName={nav.active}>Messages</NavLink></li>
                <li><NavLink to='/news' activeClassName={nav.active}>News</NavLink></li>
                <li><NavLink to='/music' activeClassName={nav.active}>Music</NavLink></li>
                <li><NavLink to='/settings' activeClassName={nav.active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;