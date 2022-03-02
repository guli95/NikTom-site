import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";

const RotaryPlows = () => (
  <div>
    <Navigation />
    <div className="item_list">
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="pług obrotowy"
        name={`pług obrotowy "atlas" 16 typ lekki rama podwojna zab kolkowe Euro-Masz`}
        link="/plugi-obrotowe/atlas"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="pług obrotowy"
        name={`pług obrotowy (POM) 16  zab kolkowe Euro-Masz`}
        link="/plugi-obrotowe/pom-16-euro-masz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="pług obrotowy"
        name={`pług obrotowy "PO" 18 zab zrywalne Euro-Masz`}
        link="/plugi-obrotowe/po-18-euro-masz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="pług obrotowy"
        name={`pług obrotowy "PON" Vogeł 8 NOOT 18 zab zrywalne Euro-Masz`}
        link="/plugi-obrotowe/vogel-noot-euro-masz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="pług obrotowy"
        name={`pług obrotowy zab resorowe (POR) 184`}
        link="/plugi-obrotowe/por-184"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="pług dłutowy"
        name={`pług dłutowy ripper (PD) Euro-masz`}
        link="/plugi-obrotowe/ripper-euro-masz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="pług dłutowy"
        name={`pług dłutowy tolmet`}
        link="/plugi-obrotowe/dlutowy-tolmet"
      />
    </div>

    <Footer />
  </div>
);

export default RotaryPlows;
