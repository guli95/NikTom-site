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
  if (item.route === "/plugi-obrotowe/dlutowy-tolmet") {
    return item;
  }
});
const ChiselTolmet = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>wał mulczujący wzmocniony(na Ø rurze 270mm)</span>
          </li>
          <li>
            <span>
              dłuta włoskiego producenta AMA z wymiennymi elementami roboczymi
            </span>
          </li>
          <li>
            <span>zabezpieczenie - kołek zrywalny</span>
          </li>
          <li>
            <span>głebokość robocza do 60 cm</span>
          </li>
          <li>
            <span>długość dłuta 35mm (I typ dłuta Ripper)</span>
          </li>

          <li>
            <span>hydraulika wału</span>
          </li>
          <li>
            <span>samopoziomowanie wału</span>
          </li>
          <li>
            <span>zaczep III kategorii</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>oświetlenie drogowe</span>
          </li>
          <li>
            <span>zabezpieczenie hydrauliczne(hydroakumulatory)</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={7}
          colNumber={3}
          raw1={["Model", "Raptor 255", "Raptor 307"]}
          raw2={["Szerokość robocza [m]", "2,5", "3,0"]}
          raw3={["Liczba grządzieli", "5", "7"]}
          raw4={["Waga [kg]", "2200", "2500"]}
          raw5={["Zapotrzebowanie mocy [KM]", "150 - 180", "210 - 250"]}
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

export default ChiselTolmet;
