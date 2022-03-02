import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";
import "../../css/product_site.css";

const NeonTolmet = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1>Neon</h1>
    </div>
    <Footer />
  </div>
);

export default NeonTolmet;
