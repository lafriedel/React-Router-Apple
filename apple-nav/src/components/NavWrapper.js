import React from 'react';
import Nav from './Nav';

const NavWrapper = props => {
    console.log(props);
    return (
        <div className="nav-wrapper">
            {props.navData.map(item => <Nav navData={item} key={item.id} />)}
        </div>
    )
}

export default NavWrapper;