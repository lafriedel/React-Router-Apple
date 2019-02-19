import React from 'react';
import { NavLink } from 'react-router-dom';

// import './Navigation.css';

const Nav = props => {
    return (
        <div className="nav-link">
            <NavLink to={`/${props.navData.category.toLowerCase()}`} >{props.navData.category}</NavLink>
        </div>
    );
}

export default Nav;