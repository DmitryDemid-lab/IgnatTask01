import React from 'react';
import s from './NavBar.module.css'

function NavBar() {
    return (
        <ul className={s.NavBar}>
            <li><a href={'#'}>PreJunior</a></li>
            <li><a href={'#'}>Junior</a></li>
            <li><a href={'#'}>JuniorPlus</a></li>
        </ul>
    )
};

export default NavBar;