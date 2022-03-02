import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";

const Rakes = () => (
  <div>
    <Navigation />
    <div className="item_list">
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="zgrabiarka karuzelowa"
        name={`zgrabiarka karuzelowa Euro-masz`}
        link="/zgrabiarki-karuzelowe/euro-masz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="zgrabiarka karuzelowa"
        name={`zgrabiarka karuzelowa promar`}
        link="/zgrabiarki-karuzelowe/promar"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="zgrabiarka karuzelowa"
        name={`zgrabiarka karuzelowa Armasz`}
        link="/zgrabiarki-karuzelowe/armasz"
      />
    </div>

    <Footer />
  </div>
);

export default Rakes;
