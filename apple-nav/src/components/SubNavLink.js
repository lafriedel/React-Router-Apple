import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const SubNavLink = props => {
    console.log(props);
    // const page = props.item.subcategories.find(item => `${item.subcategories.id}` === props.match.params.id.subId);

    // if (!page) return <div>Page not found.</div>;

    return (
        <div className="sublink-wrapper">
            
                <p>{props.subcategory.name}</p>
                <p>{props.subcategory.detail}</p>
           
        </div>
    )
}

export default SubNavLink;