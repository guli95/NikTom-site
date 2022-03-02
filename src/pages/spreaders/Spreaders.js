import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";

const Spreaders = () => (
  <div>
    <Navigation />
    <div className="item_list">
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="rozsiewacz"
        name={`rozsiewacz dwutarczowy "tytan" malowany Strumyk`}
        link="/rozsiewacze/dwutarczowy-tytan-strumyk"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="rozsiewacz"
        name={`rozsiewacz dwutarczowy malowany Promar`}
        link="/rozsiewacze/dwutarczowy-malowany-promar"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="rozsiewacz"
        name={`rozsiewacz dwutarczowy malowany Langren`}
        link="/rozsiewacze/dwutarczowy-malowany-langren"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="rozsiewacz"
        name={`rozsiewacz dwutarczowy ocynk promar`}
        link="/rozsiewacze/dwutarczowy-ocynk-promar"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="rozsiewacz"
        name={`rozsiewacz dwutarczowy nierdzewny Langren`}
        link="/rozsiewacze/dwutarczowy-nierdzewny-langren"
      />
    </div>

    <Footer />
  </div>
);

export default Spreaders;
