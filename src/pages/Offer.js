import React, { Component } from "react";
import Footer from "../components/Footer";
import ItemList from "../components/ItemList";
import Navigation from "../components/Navigation";
import Slider from "../components/Slider";
import "../css/slider.css";

class Offer extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Slider />
        <ItemList />
        <Footer />
      </div>
    );
  }
}

export default Offer;
