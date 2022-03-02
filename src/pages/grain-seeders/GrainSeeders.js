import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";

const GrainSeeders = () => (
  <div>
    <Navigation />
    <div className="item_list">
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="siewnik zbołowy"
        name={`siewnik zbołowy stopkowy (SR) Euro-masz`}
        link="/siewniki-zbolowe/sr-euro-masz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="siewnik zbołowy"
        name={`siewnik zbołowy dwutalerzowy (SRT) Euro-masz`}
        link="/siewniki-zbolowe/srt-euro-masz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="siewnik zbołowy"
        name={`siewnik zbołowy nadbudowany Euro-masz`}
        link="/siewniki-zbolowe/nadbudowany-euro-masz"
      />
    </div>

    <Footer />
  </div>
);

export default GrainSeeders;
