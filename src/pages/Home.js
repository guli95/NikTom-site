import React, { Component } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import Slider from "../components/Slider";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Slider />
        <Footer />
      </div>
    );
  }
}

export default Home;
