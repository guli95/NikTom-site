import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/agregaty-podrywkowo-orkowe/bezorkowy-euro-masz") {
    return item;
  }
});
const PlowingEuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>APO / APOH</h3>
          <li>
            <span>trzy rzędy zębów 20 x 60 z zabezpieczeniem sprężynowym</span>
          </li>
          <li>
            <span>
              rząd talerzy zgarniających śr. 460mm montowanych na elastometrach
            </span>
          </li>
          <li>
            <span>wał tylny rurowy śr. 500mm</span>
          </li>
          <li>
            <span>
              konstrukcja ramy umożliwiającajednoczesną regulacje głębokości
              pracy talerzy orazwału
            </span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={17}
          colNumber={7}
          raw1={["Szerokość", "2,4", "3,0", "4,0", "4,0H", "5,0H", "6,0H"]}
          raw2={["Liczba zębów [szt.]", "9", "11", "14", "14", "17", "20"]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "100-130",
            "130-160",
            "160-210",
            "160-210",
            "200-250",
            "240-300",
          ]}
          raw4={["Waga [kg]", "1200", "1440", "1900", "2500", "2850", "3200"]}
          raw5={[
            "Wydajność",
            "1,5-2,0",
            "2,1-3,0",
            "2,8-4,0",
            "2,8-4,0",
            "3,7-5,0",
            "4,8-6,0",
          ]}
          options
          optionsItem1={[
            {
              name: "Wał tylny packer (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 6,
            },
          ]}
          optionsItem2={[
            {
              name: "Wał tylny crosskill (śr. 400 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 6,
            },
          ]}
          optionsItem3={[
            {
              name: "Wał tylny pierścieniowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 6,
            },
          ]}
          optionsItem4={[
            {
              name: "Wał tylny gumowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 6,
            },
          ]}
          optionsItem5={[
            {
              name: "Wał tylny teownikowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 6,
            },
          ]}
          optionsItem6={[
            {
              name: "Wał tylny daszkowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 6,
            },
          ]}
          optionsItem7={[
            {
              name: "Wał tylny ceownikowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 6,
            },
          ]}
          optionsItem8={[
            {
              name: "Wał tylny dyskowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 6,
            },
          ]}
          optionsItem9={[
            {
              name: "Hydrauliczna regulacja wału",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 6,
            },
          ]}
          optionsItem10={[
            {
              name: "Wózek transportowy",
              len: 1,
            },
            {
              name: "-",
              len: 3,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem11={[
            {
              name: "Koła podporowe przednie (185/65-15)",
              len: 1,
            },
            {
              name: "-",
              len: 3,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default PlowingEuroMasz;
