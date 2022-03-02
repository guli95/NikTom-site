import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";

const AgregatsHydro = () => (
  <div>
    <Navigation />
    <div className="item_list">
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat uprawowowy z hydropaktem"
        name="Agregat Talerzowy z hydropakiemem EURO-MASZ"
        link="/agregaty-uprawowe-hydropak/talerz-euro"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat uprawowowy z hydropaktem"
        name="Agregat Talerzowy z hydropakiemem lekki Armasz"
        link="/agregaty-uprawowe-hydropak/talerz-lekki-armasz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat uprawowowy z hydropaktem"
        name="Agregat Talerzowy z hydropakiemem ciężki Armasz"
        link="/agregaty-uprawowe-hydropak/talerz-ciezki-armasz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat uprawowowy z hydropaktem"
        name="Agregat Talerzowy bez hydropaku Armasz"
        link="/agregaty-uprawowe-hydropak/talerz-bez-hydropaku-armasz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat uprawowowy z hydropaktem"
        name={`Agregat Talerzowy z hydropakiem "Tytan" Tolmet`}
        link="/agregaty-uprawowe-hydropak/talerz-tytan"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat uprawowowy z hydropaktem"
        name={`Agregat Talerzowy z hydropakiem "Tytan" z wałem oponowym Tolmet`}
        link="/agregaty-uprawowe-hydropak/talerz-tytan-z-walem"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat uprawowowy z hydropaktem"
        name={`Agregat Talerzowy z hydropakiem "Tiger" strumyk`}
        link="/agregaty-uprawowe-hydropak/talerz-tiger"
      />
    </div>

    <Footer />
  </div>
);

export default AgregatsHydro;
