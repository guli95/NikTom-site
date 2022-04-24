import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/9glebosze/Thor głębosz/glebosz 1.png";
import asset2 from "../../images/9glebosze/Thor głębosz/głębosz tyl.png";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/glebosze/zab-zrywalne-tolmet") {
    return item;
  }
});
const BreakableTolmet = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>solidna rama z profilu 140x100x8 mm,</span>
          </li>
          <li>
            <span>grządziele na zabezpieczeniu kołkowym (zrywalnym)</span>
          </li>
          <li>
            <span>wzmacniany zaczep</span>
          </li>
          <li>
            <span>głębokość robocza do 60 cm</span>
          </li>
          <li>
            <span>zaczep na przedni TUZ (Thor 3 zęby)</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie opcjonalne</h3>
          <li>
            <span>zaczep na przedni TUZ (4, 5 zębów)</span>
          </li>
          <li>
            <span>hydrauliczna regulacja głębokości pracy</span>
          </li>
          <li>
            <span>koła podporowe</span>
          </li>
          <li>
            <span>grządziele przesuwne</span>
          </li>
          <li>
            <span>oświetlenie drogowe</span>
          </li>
          <li>
            <span>wał rurowy Ø 510mm</span>
          </li>
          <li>
            <span>wał rurowy Ø 600mm</span>
          </li>
          <li>
            <span>wał strunowy Ø 440mm</span>
          </li>
          <li>
            <span>wał strunowy Ø 520mm</span>
          </li>
          <li>
            <span>wał tandem mulczujący rura Ø 140mm</span>
          </li>
          <li>
            <span>wał tandem mulczujący rura Ø 270mm</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={4}
          raw1={["Model", "Thor 3 zęby", "Thor 4 zęby", "Thor 5 zębów"]}
          raw2={["Szerokość robocza [m]", "2,5", "2,5", "3,0"]}
          raw3={["Liczba grządzieli", "3", "4", "5"]}
          raw4={["Waga [kg]", "700", "840", "930"]}
          raw5={[
            "Zapotrzebowanie mocy [KM]",
            "90 - 120",
            "120 - 150",
            "150 - 180",
          ]}
        />
        <PrizeBtn />
        <div className="assets">
          <LightBox assets={[asset1, asset2]} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default BreakableTolmet;
