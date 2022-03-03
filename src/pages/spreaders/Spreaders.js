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
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="rozsiewacz"
        name={`rozsiewacz dwutarczowy premium Langren`}
        link="/rozsiewacze/dwutarczowy-premium-langren"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="rozsiewacz"
        name={`rozsiewacz polowy typu lejek Langren`}
        link="/rozsiewacze/polowy-lejek-langren"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="rozsiewacz"
        name={`rozsiewacz lejek Strumyk`}
        link="/rozsiewacze/lejek-strumyk"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="rozsiewacz"
        name={`rozsiewacz sadowniczy lejek Strumyk`}
        link="/rozsiewacze/sadowniczy-lejek-strumyk"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="rozsiewacz"
        name={`rozsiewacz sadowniczy typu lejek Langren`}
        link="/rozsiewacze/sadowniczy-lejek-langren"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="rozsiewacz"
        name={`rozsiewacz sadowniczy Langren malowany`}
        link="/rozsiewacze/sadowniczy-langren-malowany"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="rozsiewacz"
        name={`rozsiewacz sadowniczy nierdzewny Langren`}
        link="/rozsiewacze/sadowniczy-nierdzewny-langren"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="rozsiewacz"
        name={`rozsiewacz wpana soli i piasku langren`}
        link="/rozsiewacze/wapnia-soli-i-piasku-langren"
      />
    </div>

    <Footer />
  </div>
);

export default Spreaders;
