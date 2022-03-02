import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";

const SkimmingAgregates = () => (
  <div>
    <Navigation />
    <div className="item_list">
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat podrywkowy"
        name={`Agregat podrywkowy "gruber" zab zrywalne Euro-masz`}
        link="/agregaty-podrywkowe/zab-zrywalne-euro-masz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat podrywkowy"
        name={`Agregat podrywkowy "gruber" zab ślimakowe Euro-masz`}
        link="/agregaty-podrywkowe/zab-slimakowe-euro-masz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat podrywkowy"
        name={`Agregat podrywkowy "gruber" zab sprężynowe`}
        link="/agregaty-podrywkowe/zab-sprezynowe"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat ścierniskowy"
        name={`Agregat ścierniskowy zab kołkowe Armasz`}
        link="/agregaty-podrywkowe/zab-kolkowe-armasz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat ścierniskowy"
        name={`Agregat ścierniskowy zab ślimakowe Armasz`}
        link="/agregaty-podrywkowe/zab-slimakowe-armasz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat ścierniskowy"
        name={`Agregat ścierniskowy zab sprężynowe Armasz`}
        link="/agregaty-podrywkowe/zab-sprezynowe-armasz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat podrywkowy"
        name={`Agregat podrywkowy "krypton" Tolmet`}
        link="/agregaty-podrywkowe/krypton-tolmet"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat podrywkowy"
        name={`Agregat podrywkowy "arsen" Tolmet`}
        link="/agregaty-podrywkowe/arsen-tolmet"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="kultywator ścierniskowy"
        name={`kultywator ścierniskowy Tolmet`}
        link="/agregaty-podrywkowe/kultywator-tolmet"
      />
    </div>

    <Footer />
  </div>
);

export default SkimmingAgregates;
