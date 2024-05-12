import React from 'react'
import style from "./index.module.scss";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav id={style.Navbar}>
            <ul>
                <li>
                    <NavLink className={style.NavLink} to={'/ranberator'}>Ranberator</NavLink>
                </li>
                <li>
                    <NavLink className={style.NavLink} to={'/ranpointator'}>Ranpointator</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
