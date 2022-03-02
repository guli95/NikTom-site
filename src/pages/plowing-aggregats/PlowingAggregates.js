import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";

const PlowingAggregates = () => (
  <div>
    <Navigation />
    <div className="item_list">
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat podrywkowo-orkowy"
        name={`Agregat podrywkowo-orkowy/bezorkowy Euro-masz`}
        link="/agregaty-podrywkowo-orkowe/bezorkowy-euro-masz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat podrywkowo-orkowy"
        name={`Agregat podrywkowo-orkowy/bezorkowy wał składany na górę agregatu Euro-masz`}
        link="/agregaty-podrywkowo-orkowe/wal-skladany-na-gore-euro-masz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat podrywkowo-orkowy"
        name={`Agregat bezorkowy Armasz`}
        link="/agregaty-podrywkowo-orkowe/bezorkowy-armasz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat podrywkowo-orkowy"
        name={`Agregat bezorkowy "DELTA" "KRET" Armasz`}
        link="/agregaty-podrywkowo-orkowe/delta-kret-tolmet"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="agregat podrywkowo-orkowy"
        name={`Agregat bezorkowy hydraulicznie składany półzawieszany "DELTA" Tolmet`}
        link="/agregaty-podrywkowo-orkowe/delta-skladany-tolmet"
      />
    </div>

    <Footer />
  </div>
);

export default PlowingAggregates;
