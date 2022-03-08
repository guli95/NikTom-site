import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";

const Equipment = () => (
  <div>
    <Navigation />
    <div className="item_list">
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="osprzęt"
        name={`chwytaki do bel ATMP`}
        link="/osprzet/chwytak-do-bel"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="osprzęt"
        name={`chwytaki do drzewa ATMP`}
        link="/osprzet/chwytak-do-drzewa"
      />
    </div>

    <Footer />
  </div>
);

export default Equipment;
