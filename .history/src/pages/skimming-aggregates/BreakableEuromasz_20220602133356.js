import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/agregaty-podrywkowe/zab-zrywalne-euro-masz") {
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
          <h3>APL</h3>
          <li>
            <span>rama główna 80 x 80 mm</span>
          </li>
          <li>
            <span>typ lżejszy</span>
          </li>
          <li>
            <span>dwa rzędy zębów o przekroju 60x25 mm</span>
          </li>
          <li>
            <span>rząd talerzy zgarniających śr. 460 mm</span>
          </li>
          <li>
            <span>wał tylny rurowy lub strunowy śr. 500mm</span>
          </li>
          <h3>AP</h3>
          <li>
            <span>rama główna 100 x 100 mm</span>
          </li>
          <li>
            <span>dwa rzędy zębów o przekroju 60x25 mm</span>
          </li>
          <li>
            <span>rząd talerzy zgarniających śr. 460 mm</span>
          </li>
          <li>
            <span>wał tylny rurowy lub strunowy śr. 500mm</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>Wał tylny pierścieniowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny teownikowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny daszkowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny ceownikowy (śr. 500 mm)</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={10}
          colNumber={5}
          raw1={["Szerokość", "1,8", "2,1", "2,6", "3,0"]}
          raw2={["Liczba talerzy [szt.]", "4", "5", "6", "7"]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "60 – 70",
            "70 - 90",
            "90 - 110",
            "100 - 130",
          ]}
          raw4={["Waga [kg]", "770", "800", "875", "950"]}
          raw5={[
            "Wydajność",
            "1,2 – 1,7",
            "1,5 – 2,1",
            "1,8 – 2,6",
            "2,1 – 3,0",
          ]}
          options
          optionsItem1={[
            {
              name: "Wał tylny pierścieniowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem2={[
            {
              name: "Wał tylny teownikowy (śr. 500 mm)",
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
              name: "Wał tylny ceownikowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default BreakableEuroMasz;
