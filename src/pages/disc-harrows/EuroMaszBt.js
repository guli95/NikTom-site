import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/brony-talerzowe/euro-masz-bt") {
    return item;
  }
});
const EuroMaszBT = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>

      <ul>
        <li>
          <span>
            dwa rzędy uzębionych talerzy fi 510 typu C dla bron 1,8 i 2,0
            talerze fi 460
          </span>
        </li>
        <li>
          <span>
            zabezpieczenie przeciążeniowe talerzy wpostaci amortyzatorów
            gumowych
          </span>
        </li>
        <li>
          <span>odstęp między rzędami talerzy 690 mm</span>
        </li>
        <li>
          <span>- piasta bezobsługowa zuszczelnieniem kasetowym</span>
        </li>
        <li>
          <span>wał tylny rurowy</span>
        </li>
        <li>
          <span>ekrany boczne</span>
        </li>
        <li>
          <span>składane talerze skrajne w wersji 3,0m i 4,0m</span>
        </li>
      </ul>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={22}
          colNumber={8}
          raw1={["Szerokość", "1,8", "2,0", "2,2", "2,5", "2,7", "3,0", "4,0"]}
          raw2={[
            "Liczba talerzy [szt.]",
            "14",
            "16",
            "18",
            "20",
            "20",
            "24",
            "32",
          ]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "30 – 60 ",
            "50 – 70",
            "60 – 80",
            "70 – 110",
            "80 – 120",
            "100 – 130",
            "110 – 150",
          ]}
          raw4={[
            "Waga [kg]",
            "500",
            "600",
            "700",
            "1150",
            "1200",
            "1400",
            "1700",
          ]}
          raw5={[
            "Wydajność",
            "0,8 – 1,2",
            "1,0 – 1,6",
            "1,2 – 1,8",
            "1,8 – 2,6",
            "1,8 – 2,6",
            "2,0 - 3,0",
            "2,8 - 3,8",
          ]}
          options
          optionsItem1={[
            {
              name: "Wał tylny packer (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 7,
            },
          ]}
          optionsItem2={[
            {
              name: "Wał tylny crosskill (śr. 400 mm)",
              len: 1,
            },
            { name: "-", len: 3 },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem3={[
            {
              name: "Wał tylny pierścieniowy (śr. 500 mm)",
              len: 1,
            },
            { name: "-", len: 3 },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem4={[
            {
              name: "Wał tylny gumowy (śr. 500 mm)",
              len: 1,
            },
            { name: "-", len: 3 },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem5={[
            {
              name: "Wał tylny teownikowy (śr. 500 mm)",
              len: 1,
            },
            { name: "-", len: 3 },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem6={[
            {
              name: "Wał tylny daszkowy (śr. 500 mm)",
              len: 1,
            },
            { name: "-", len: 3 },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem7={[
            {
              name: "Wał tylny ceownikowy (śr. 500 mm)",
              len: 1,
            },
            { name: "-", len: 3 },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem8={[
            {
              name: "Wał tylny dyskowy (śr. 500 mm)",
              len: 1,
            },
            { name: "-", len: 3 },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem9={[
            {
              name: "Wał tylny tandem(rurowy 450mm + strunowy 450mm)",
              len: 1,
            },
            { name: "-", len: 3 },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem10={[
            {
              name: "piasta bezobsługowa",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
            { name: "-", len: 4 },
          ]}
          optionsItem11={[
            {
              name: "Wał oponowy z dyszlem (koła 185/65-15)",
              len: 1,
            },
            {
              name: "-",
              len: 5,
            },
            {
              name: "możliwość dokupienia",
              len: 2,
            },
          ]}
          optionsItem12={[
            {
              name: "Talerze 510 mm",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
            {
              name: "-",
              len: 4,
            },
          ]}
          optionsItem13={[
            {
              name: "Talerze 560 mm",
              len: 1,
            },
            {
              name: "-",
              len: 3,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem14={[
            {
              name: "Hydrauliczna regulacja głębokości pracy",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
            { name: "-", len: 4 },
          ]}
          optionsItem15={[
            {
              name: "Rząd zgrzebeł wyrównujących",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
            { name: "-", len: 4 },
          ]}
          optionsItem16={[
            {
              name: "Piasty SKF",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
            { name: "-", len: 4 },
          ]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default EuroMaszBT;
