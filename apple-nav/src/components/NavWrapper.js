import React from 'react';
import Nav from './Nav';

import './Navigation.css';

const NavWrapper = props => {
    return (
        <div className="nav-wrapper">
            <p>Apple Logo</p>
            {props.navData.map(item => <Nav navData={item} key={item.id} />)}
            <p>Support</p>

        </div>
    )
}

export default NavWrapper;