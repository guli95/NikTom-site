import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/9glebosze/GŁĘBOSZ NA KOŁACH ZAB. SPRĘŻYNOWE EURO MASZ/189285721_201752398455662_1216878534170548642_n.jpg";
import asset2 from "../../images/9glebosze/GŁĘBOSZ NA KOŁACH ZAB. SPRĘŻYNOWE EURO MASZ/190330810_222073169420717_7892550746669427370_n.jpg";
import asset3 from "../../images/9glebosze/GŁĘBOSZ NA KOŁACH ZAB. SPRĘŻYNOWE EURO MASZ/189321465_817019585860690_2600730669866172170_n.jpg";
import asset4 from "../../images/9glebosze/GŁĘBOSZ NA KOŁACH ZAB. SPRĘŻYNOWE EURO MASZ/189613088_953037425531451_4899572913927500379_n.jpg";
import asset5 from "../../images/9glebosze/GŁĘBOSZ NA KOŁACH ZAB. SPRĘŻYNOWE EURO MASZ/189731631_1881927861988195_6561424189540224166_n.jpg";
import asset6 from "../../images/9glebosze/GŁĘBOSZ NA KOŁACH ZAB. SPRĘŻYNOWE EURO MASZ/9U9786564EWAEDZXCVBNJKL (7).jpg";
import asset7 from "../../images/9glebosze/GŁĘBOSZ NA KOŁACH ZAB. SPRĘŻYNOWE EURO MASZ/190493242_1216114945486659_8265433438711006044_n.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/glebosze/michael-gs") {
    return item;
  }
});
const MichaelGS = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>GS</h3>
          <li>
            <span>rama sztywna 200x100x10</span>
          </li>
          <li>
            <span>prześwit pod ramą 75 cm</span>
          </li>

          <li>
            <span>zabezpieczenie sprężynowe przeciw kamieniom</span>
          </li>
          <li>
            <span>cztery koła podporowe 185/65-15</span>
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
          <LightBox
            assets={[asset1, asset2, asset3, asset4, asset5, asset6, asset7]}
          />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default MichaelGS;
