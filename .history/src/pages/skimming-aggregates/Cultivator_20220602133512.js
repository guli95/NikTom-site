import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/5grubery/Krypton/przod krypton.png";
import asset2 from "../../images/5grubery/Krypton/krypton bok.png";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/agregaty-podrywkowe/kultywator-tolmet") {
    return item;
  }
});
const Cultivator = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>redlice typu NON - STOP</span>
          </li>
          <li>
            <span>trzy rzędy zębów</span>
          </li>
          <li>
            <span>redlica prosta, obrotowa</span>
          </li>
          <li>
            <span>wzmacniany zaczep</span>
          </li>
          <li>
            <span>wał rurowy Ø 510mm lub strunowy Ø 440mm</span>
          </li>
          <li>
            <span>zgarniacz palcowy</span>
          </li>
          <li>
            <span>ręczna regulacja głębokości roboczej</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>gęsiostopy </span>
          </li>
          <li>
            <span>oświetlenie drogowe</span>
          </li>
          <li>
            <span>wał pierścieniowy Ø 500mm</span>
          </li>
          <li>
            <span>wał daszkowy Ø 500mm</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={7}
          raw1={[
            "Model",
            "Kultywator 200",
            "Kultywator 220",
            "Kultywator 240",
            "Kultywator 260",
            "Kultywator 280",
            "Kultywator 300",
          ]}
          raw2={["Szerokość [m]", "2,0", "2,2", "2,4", "2,6", "2,8", "3,0"]}
          raw3={["Liczba redlic", "10", "11", "12", "13", "14", "16"]}
          raw4={["Waga [kg]", "700", "840", "930", "840", "930", "840"]}
          raw5={[
            "Zapotrzebowanie mocy [KM]",
            "60 - 70",
            "70 - 90",
            "80 - 90",
            "90 - 100",
            "95 - 110",
            "100 - 120",
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

export default Cultivator;
