import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/dji-5331597_1280.jpg";
import asset2 from "../../images/slider_1.jpg";
import asset3 from "../../images/slider_2.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/agregaty-uprawowo-siewne/armasz-hydropak-2") {
    return item;
  }
});
const Armasz2 = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>

      <ul>
        <li>
          <span>brak opisu</span>
        </li>
      </ul>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={11}
          colNumber={4}
          raw1={["Typ", "AS 225", "AS 227", "AS 230"]}
          raw2={["Szerokość", "2,5", "2,7", "3,0"]}
          raw3={["Waga [kg]", "630", "660", "700"]}
          options
          optionsItem1={[
            {
              name: "Przedni wał dzielony",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem2={[
            {
              name: "Przedni wał Ø400",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem3={[
            {
              name: "Trzeci rząd zębów",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem4={[
            {
              name: "Tylny wał Ø460",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem5={[
            {
              name: "Wał daszkowy Ø500",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem6={[
            {
              name: "Wał packera",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem7={[
            {
              name: "Wał sprężynowy",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem8={[
            {
              name: "Zmiana koloru",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
        />
        <PrizeBtn />
        <div className="assets">
          <LightBox assets={[asset1, asset2, asset3]} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default Armasz2;
