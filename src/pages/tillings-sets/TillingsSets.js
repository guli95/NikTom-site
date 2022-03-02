import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";

const TillingsSets = () => (
  <div>
    <Navigation />
    <div className="item_list">
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat uprawowy"
        name="Agregat uprawowo-przedsiewny EURO-MASZ(AU)"
        link="/agregaty-uprawowe/euro-maszau"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat uprawowy"
        name="Agregat uprawowy cieżki EURO-MASZ(AUC)"
        link="/agregaty-uprawowe/euro-maszauc"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat uprawowy"
        name={`Agregat uprawowy "nietoperek" strumyk`}
        link="/agregaty-uprawowe/nietoperek"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat uprawowy"
        name={`Agregat uprawowy "NEON" TOLMET`}
        link="/agregaty-uprawowe/neon"
      />
    </div>

    <Footer />
  </div>
);

export default TillingsSets;
