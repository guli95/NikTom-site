import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";

const FuelTanks = () => (
  <div>
    <Navigation />
    <div className="item_list">
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="zbiornik paliwa"
        name={`zbiornik paliwa dwupłaszczowy ON JFC FuelStation 1600/1300l`}
        link="/zbiorniki-paliwa/dwuplaszczowy-1600-1300"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="zbiornik paliwa"
        name={`zbiornik paliwa dwupłaszczowy ON JFC FuelStation 2500l`}
        link="/zbiorniki-paliwa/dwuplaszczowy-2500"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="zbiornik paliwa"
        name={`zbiornik paliwa dwupłaszczowy ON JFC FuelStation 5000l`}
        link="/zbiorniki-paliwa/dwuplaszczowy-5000"
      />
    </div>

    <Footer />
  </div>
);

export default FuelTanks;
