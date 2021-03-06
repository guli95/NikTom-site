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
  if (item.route === "/brony-talerzowe/hydraulicznie-rozkladana-euro-masz") {
    return item;
  }
});
const HeavyHydraulicBTCH = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>

      <ul>
        <li>
          <span>dwa rzędy uzębionych talerzy fi 560 typu C</span>
        </li>
        <li>
          <span>
            zabezpieczenie przeciążeniowe talerzy wpostaci amortyzatorów
            gumowych
          </span>
        </li>
        <li>
          <span>odstęp między rzędami talerzy 1050 mm</span>
        </li>
        <li>
          <span>- piasta bezobsługowa z uszczelnieniem kasetowym</span>
        </li>
        <li>
          <span>wał tylny rurowy</span>
        </li>
        <li>
          <span>ekrany boczne</span>
        </li>
        <li>
          <span>hydraulicznie składana</span>
        </li>
        <li>
          <span>szerokość transportowa 2950mm</span>
        </li>
      </ul>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={23}
          colNumber={6}
          raw1={["Szerokość", "4,0H", "4,5H", "5,0H", "5,5H", "6,0H"]}
          raw2={["Liczba talerzy [szt.]", "32", "36", "40", "44", "48"]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "120 – 150",
            "130 - 160",
            "140 – 180",
            "160 – 190",
            "160 - 200",
          ]}
          raw4={["Waga [kg]", "2200", "2500", "2800", "3100", "3500"]}
          raw5={[
            "Wydajność",
            "2,8 – 4,2",
            "3,1 – 5,0",
            "4,0 - 6,0",
            "4,4 - 6,1",
            "5,0 - 7,0",
          ]}
          options
          optionsItem1={[
            {
              name: "Wał tylny packer (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
            },
          ]}
          optionsItem2={[
            {
              name: "Wał tylny crosskill (śr. 400 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
            },
          ]}
          optionsItem3={[
            {
              name: "Wał tylny pierścieniowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
            },
          ]}
          optionsItem4={[
            {
              name: "Wał tylny gumowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
            },
          ]}
          optionsItem5={[
            {
              name: "Wał tylny teownikowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
            },
          ]}
          optionsItem6={[
            {
              name: "Wał tylny daszkowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
            },
          ]}
          optionsItem7={[
            {
              name: "Wał tylny ceownikowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
            },
          ]}
          optionsItem8={[
            {
              name: "Wał tylny dyskowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
            },
          ]}
          optionsItem9={[
            {
              name: "Wał tylny tandem(rurowy śr. 450mm + strunowy śr. 450mm",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
            },
          ]}
          optionsItem10={[
            {
              name: "Wał tylny tandem(daszkowy śr. 500mm + daszkowy śr. 500mm",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
            },
          ]}
          optionsItem11={[
            {
              name: "Talerze 610 mm",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
            },
          ]}
          optionsItem12={[
            {
              name: "Hydrauliczna regulacja głebokości pracy",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
            },
          ]}
          optionsItem13={[
            {
              name: "Rząd zgrzebeł wyrównujących",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
            },
          ]}
          optionsItem14={[
            {
              name: "Piasty SKF",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
            },
          ]}
          optionsItem15={[
            {
              name: "Wózek transportowy(koła 400/60-15,5)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
            },
          ]}
          optionsItem16={[
            {
              name: "Przednie koła podporowe",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
            },
          ]}
          optionsItem17={[
            {
              name: "Tablice ostrzegawcze z oświetleniem",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
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

export default HeavyHydraulicBTCH;
