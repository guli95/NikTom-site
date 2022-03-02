import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";

const Sowing = () => (
  <div>
    <Navigation />
    <div className="item_list">
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat uprawowowo-siewny"
        name="Agregat uprawowo-siewny z hydropakiem EURO-MASZ"
        link="/agregaty-uprawowo-siewne/euro-masz-as"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat uprawowowo-siewny"
        name="Agregat uprawowo-siewny bez hydropaku ARMASZ"
        link="/agregaty-uprawowo-siewne/armasz-bez-hydropaku"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat uprawowowo-siewny"
        name="Agregat uprawowo-siewny z hydropakiem ARMASZ(1 wał)"
        link="/agregaty-uprawowo-siewne/armasz-hydropak-1"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat uprawowowo-siewny"
        name="Agregat uprawowo-siewny z hydropakiem ARMASZ(2 wały)"
        link="/agregaty-uprawowo-siewne/armasz-hydropak-2"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat uprawowowo-siewny"
        name={`Agregat uprawowo-siewny "polonek" TOLMET`}
        link="/agregaty-uprawowo-siewne/polonek"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat uprawowowo-siewny"
        name={`Agregat uprawowo-siewny "polon S" TOLMET`}
        link="/agregaty-uprawowo-siewne/polons"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat uprawowowo-siewny"
        name={`Agregat uprawowo-siewny "polon" TOLMET`}
        link="/agregaty-uprawowo-siewne/polon"
      />
    </div>

    <Footer />
  </div>
);

export default Sowing;
