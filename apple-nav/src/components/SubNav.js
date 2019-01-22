import React from 'react';
import SubNavLink from './SubNavLink';

const SubNav = props => {
    console.log(props);
    const item = props.navData.find(item => `${item.id}` === props.match.params.id);

    if (!item) return <div>Item not found.</div>;

    return (
        <div className="subnav-wrapper">
            {item.subcategories.map(subcat => <SubNavLink subcategory={subcat} key={Math.random()} />)}
        </div>
        );
}

export default SubNav;