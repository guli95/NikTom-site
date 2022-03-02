import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";

const SingleBeamPlows = () => (
  <div>
    <Navigation />
    <div className="item_list">
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="pług zagonowy"
        name={`pług zagonowy(PZ) zab kołkowe Euro-masz`}
        link="/plugi-jednobelkowe-zagonowe/pz-euro-masz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="pług zagonowy"
        name={`pług jednobelkowy(PJM) zab kołkowe Euro-masz`}
        link="/plugi-jednobelkowe-zagonowe/pjm-euro-masz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="pług zagonowy"
        name={`pług jednobelkowy 16 (PJ) zab kołkowe Euro-masz`}
        link="/plugi-jednobelkowe-zagonowe/16-pj-euro-masz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="pług zagonowy"
        name={`pług jednobelkowy 18 (PJ) zab kołkowe Euro-masz`}
        link="/plugi-jednobelkowe-zagonowe/18-pj-euro-masz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="pług zagonowy"
        name={`pług jednobelkowy (PJL) zab resorowe Euro-masz`}
        link="/plugi-jednobelkowe-zagonowe/pjl-euro-masz"
      />
    </div>

    <Footer />
  </div>
);

export default SingleBeamPlows;
