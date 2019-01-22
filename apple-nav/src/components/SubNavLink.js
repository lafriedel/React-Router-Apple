import React from 'react';
import './Navigation.css';

const SubNavLink = props => {
    return (
        <div className="sublink-wrapper">
            {props.subcategory.name}
            {props.subcategory.detail}
        </div>
    )
}

export default SubNavLink;