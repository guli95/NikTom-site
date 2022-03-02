import React from "react";
import "../css/item_card.css";
import { NavLink } from "react-router-dom";
const ItemCard = (props) => (
  <div className="item_card">
    <NavLink to={props.link}>
      <div className="image_container">
        <img src={props.img} alt={props.alt} />
      </div>
      <p className="item_text">{props.name}</p>
    </NavLink>
  </div>
);

export default ItemCard;
