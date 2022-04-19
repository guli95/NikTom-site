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
  if (item.route === "/glebosze/zab-zrywalne-euro-masz") {
    return item;
  }
});
const BreakableEuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>GZ</h3>
          <li>
            <span>
              dwa rzędy zębów z możliwością regulacjiich położenia względem
              siebie
            </span>
          </li>
          <li>
            <span>prześwit pod ramą 90 cm</span>
          </li>
          <li>
            <span>głębokość pracy do 60 cm</span>
          </li>
          <li>
            <span>zabezpieczenie zrywalne przeciw kamieniom</span>
          </li>
          <li>
            <span>- automatyczna belka zaczepowa</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={9}
          colNumber={5}
          raw1={["Szerokość [m]", "2,1", "2,1", "2,4", "3,0"]}
          raw2={["Liczba nóg", "2,", "3", "4", "5"]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "60 - 80",
            "80 - 110",
            "110 - 130",
            "130 - 160",
          ]}
          raw4={["Waga [kg]", "750", "800", "900", "950"]}
          raw5={[
            "Wydajność [ha/h]",
            "0,8 – 1,0",
            "1,0 – 1,3",
            "1,3 – 1,6",
            "1,5 – 2,0",
          ]}
          options
          optionsItem1={[
            {
              name: "Wał tylny rurowy (śr. 500 mm)",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem2={[
            {
              name: "Wał tylny packer (śr. 500 mm)",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem3={[
            {
              name: "Wał tylny daszkowy (śr. 500 mm)",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem4={[
            {
              name: "Wał tylny teownikowy śr. 500 mm)",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 4,
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

export default BreakableEuroMasz;
