import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";

const FieldDrags = () => (
  <div>
    <Navigation />
    <div className="item_list">
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="włóka polowa"
        name={`włóka łąkowo-polowa ATMP`}
        link="/wloki-polowe/atmp"
      />
    </div>

    <Footer />
  </div>
);

export default FieldDrags;
