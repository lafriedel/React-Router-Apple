import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav';

import './Navigation.css';

const NavWrapper = props => {
    return (
        <div className="nav-wrapper">
            <FontAwesomeIcon icon={faApple} size="lg" />
            {props.navData.map(item => <Nav navData={item} key={item.id} />)}
            <p>Support</p>
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faShoppingBag} />

        </div>
    )
}

export default NavWrapper;