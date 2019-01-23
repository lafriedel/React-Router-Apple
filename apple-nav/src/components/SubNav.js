import React from 'react';
import SubNavLink from './SubNavLink';

const SubNav = props => {
    console.log("props in SubNav", props);
    const item = props.navData.find(item => `${item.category.toLowerCase()}` === props.match.params.id);

    if (!item) return <div>Item not found.</div>;

    return (
        <div className="subnav-wrapper">
        <div className="subnav-container">
        {item.subcategories.map(subcat => <SubNavLink item={item} subcategory={subcat} key={subcat.id} />)}
        </div>

        </div>
        );
}

export default SubNav;