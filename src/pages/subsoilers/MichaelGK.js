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
  if (item.route === "/glebosze/michael-gk") {
    return item;
  }
});
const MichaelGK = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>GK</h3>
          <li>
            <span>rama sztywna 200x100x10</span>
          </li>
          <li>
            <span>prześwit pod ramą 75 cm</span>
          </li>

          <li>
            <span>zabezpieczenie zrywalne przeciw kamieniom</span>
          </li>
          <li>
            <span>cztery koła podporowe 178/65-15</span>
          </li>
          <li>
            <span>stopki podporowe</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={9}
          colNumber={4}
          raw1={["Szerokość [m]", "3", "3", "4"]}
          raw2={["Liczba nóg", "4,", "6", "8"]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "130 - 150",
            "150 - 170",
            "170 - 190",
          ]}
          raw4={["Waga [kg]", "1350", "1650", "1950"]}
          raw5={["Wydajność [ha/h]", "1,1 – 1,4", "1,6 – 2,4", "2,6 – 3,6"]}
          options
          optionsItem1={[
            {
              name: "Wał tylny rurowy (śr. 500 mm)",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem2={[
            {
              name: "Wał tylny daszkowy (śr. 500)",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem3={[
            {
              name: "Wał tylny teownikowy (śr. 500)",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem4={[
            {
              name: "Wał tylny packer (śr. 450)",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem5={[
            {
              name: "Wał tylny crosskill (śr. 400)",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem6={[
            {
              name: "Wał tylny gumowy (śr. 500)",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem7={[
            {
              name: "Wał tylny podwójny kolczasty z hydr. regulacją pracy",
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

export default MichaelGK;
