import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";

const Subsoilers = () => (
  <div>
    <Navigation />
    <div className="item_list">
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="głębosz"
        name={`Głebosz zab zrywalne Euro-masz`}
        link="/glebosze/zab-zrywalne-euro-masz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="głębosz"
        name={`Głebosz zab zrywalne Strumyk`}
        link="/glebosze/zab-zrywalne-strumyk"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="głębosz"
        name={`Głebosz "kret" bez wału zab zrywalne Armasz`}
        link="/glebosze/kret-bez-wal-armasz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="głębosz"
        name={`Głebosz "kret" z wałem zab zrywalne Armasz`}
        link="/glebosze/kret-z-walem-armasz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="głębosz"
        name={`Głebosz zab zrywalne Tolmet`}
        link="/glebosze/zab-zrywalne-tolmet"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="głębosz"
        name={`Głebosz zab zrywalne "Michael" Euro-Masz (GK)`}
        link="/glebosze/michael-gk"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="głębosz"
        name={`Głebosz zab sprężynowe "Michael" Euro-Masz (GS)`}
        link="/glebosze/michael-gs"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="głębosz"
        name={`Głebosz zab zrywalne "Michael" Armasz`}
        link="/glebosze/michael-zrywalne-armasz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="głębosz"
        name={`Głebosz zab sprężynowe "Michael" Armasz`}
        link="/glebosze/michael-sprezynowe-armasz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="głębosz"
        name={`Głebosz belkowy zab zrywalne "Michael" Tolmet`}
        link="/glebosze/michael-zrywalne-tolmet"
      />
    </div>

    <Footer />
  </div>
);

export default Subsoilers;
