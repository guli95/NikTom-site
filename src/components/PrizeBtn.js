import React from "react";
import { Link } from "react-router-dom";

const PrizeBtn = () => (
  <div className="btn-wrapper">
    <Link to={"/kontakt"}>
      <button className="prize-btn">Zapytaj o cenę</button>
    </Link>
  </div>
);

export default PrizeBtn;
