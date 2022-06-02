import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/3agregaty-talerzowe-hydro/AGREGAT TALERZOWY Z HYDROPAKIEM EURO-MASZ/dsa5W4qEWEERTYUI (1).jpeg";
import asset2 from "../../images/3agregaty-talerzowe-hydro/AGREGAT TALERZOWY Z HYDROPAKIEM EURO-MASZ/dsa5W4qEWEERTYUI (2).jpeg";
import asset3 from "../../images/3agregaty-talerzowe-hydro/AGREGAT TALERZOWY Z HYDROPAKIEM EURO-MASZ/dsa5W4qEWEERTYUI (3).jpeg";
import asset4 from "../../images/3agregaty-talerzowe-hydro/AGREGAT TALERZOWY Z HYDROPAKIEM EURO-MASZ/dsa5W4qEWEERTYUI (5).jpeg";
import asset5 from "../../images/3agregaty-talerzowe-hydro/AGREGAT TALERZOWY Z HYDROPAKIEM EURO-MASZ/dsa5W4qEWEERTYUI (6).jpeg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/agregaty-uprawowe-hydropak/talerz-euro") {
    return item;
  }
});
const DiscEuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>

      <ul>
        <li>
          <span>dwa rzędy uzębionych talerzy fi 510 typu "C"</span>
        </li>
        <li>
          <span>
            zabezpieczenie przeciążeniowe talerzy w postaci amortyzatorów
            gumowych
          </span>
        </li>
        <li>
          <span>odstęp między rzędami talerzy 690 mm</span>
        </li>
        <li>
          <span>piasta bezobsługowa z uszczelnieniem kasetowym</span>
        </li>
        <li>
          <span>wał tylny rurowy (śr. 500 mm) z 9 rur</span>
        </li>
        <li>
          <span>hydropak na 2 siłowniki</span>
        </li>
        <li>
          <span>ekrany boczne</span>
        </li>
        <li>
          <span>składane talerze skrajne w wersji 3,0m i 4,0m</span>
        </li>
        <li>
          <span>udźwig hydropaku 1500 kg</span>
        </li>
      </ul>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={11}
          colNumber={5}
          raw1={["Szerokość", "2,5", "2,7", "3,0", "4,0"]}
          raw2={["Liczba talerzy [szt.]", "20", "20", "25", "32"]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "70 – 110 ",
            "80 – 120",
            "100 – 130",
            "110 – 150",
          ]}
          raw4={["Waga [kg]", "1150", "1200", "1400", "1700"]}
          raw5={[
            "Wydajność",
            "1,8 – 2,6",
            "1,8 – 2,6",
            "2,0 – 3,0",
            "2,8 – 3,8",
          ]}
          options
          optionsItem1={[
            {
              name: "Wał tylny rurowy (śr. 500 mm) z 12 rur",
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
              name: "Wał tylny packer (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem4={[
            {
              name: "Wał tylny pierścieniowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem5={[
            {
              name: "Wał tylny gumowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem6={[
            {
              name: "Wał tylny teownikowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem7={[
            {
              name: "Wał tylny daszkowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem8={[
            {
              name: "Wał tylny ceownikowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem9={[
            {
              name: "Wał tylny dyskowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem10={[
            {
              name: "Wał oponowy z dyszlem (koła 185/65-15)",
              len: 1,
            },
            {
              name: "-",
              len: 2,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem11={[
            {
              name: "Talerze 560 mm",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem12={[
            {
              name: "Hydrauliczna regulacja głębokości pracy",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem13={[
            {
              name: "Piasty SKF",
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
          <LightBox assets={[asset1, asset2, asset3, asset4, asset5]} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default DiscEuroMasz;
