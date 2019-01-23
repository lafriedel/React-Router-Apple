import React from "react";
import { Link } from "react-router-dom";
// import './Navigation.css';

const SubNavLink = props => {
  console.log(props);
  // const page = props.item.subcategories.find(item => `${item.subcategories.id}` === props.match.params.id.subId);

  // if (!page) return <div>Page not found.</div>;

  return (
    <div className="sublink-wrapper">
      <div className="icon-container">
        <img className="icons" src={props.subcategory.icon} />
      </div>
      <div className="name-container">
        <p>{props.subcategory.name}</p>
        <p className="detail">{props.subcategory.detail}</p>
      </div>
    </div>
  );
};

export default SubNavLink;
