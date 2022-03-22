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
  if (item.route === "/agregaty-uprawowo-siewne/polonek") {
    return item;
  }
});
console.log(info);
const Polonek = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>dwa rzędy zębów sprężynowych</span>
          </li>
          <li>
            <span>ręczna regulacja głebokości roboczej</span>
          </li>
          <li>
            <span>wzmacniany zaczep</span>
          </li>
          <li>
            <span>
              tylny, łożyskowany wał rurowy(Ø 350mm) lub strunowy(Ø 350mm)
              rozbijający powstałe grudy ziemi
            </span>
          </li>
          <li>
            <span>
              dwusiłownikowy hydropak z możliwością regulacji szybkości pracy
            </span>
          </li>
          <li>
            <span>uniwersalny zaczep do siewnika</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie opcjonalne</h3>
          <li>
            <span>automatyczna belka zaczepowa</span>
          </li>
          <li>
            <span>oświetlenie drogowe</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={4}
          raw1={["Model", "Polonek 250", "Polonek 270", "Polonek 300"]}
          raw2={["Szerokość robocza", "2,5", "2,7", "3,0"]}
          raw3={["Waga [kg]", "520", "540", "570"]}
          raw4={["Liczba redlic", "14", "16", "19"]}
          raw5={["Zapotrzebowanie [KM]", "50-60", "60-70", "70-80"]}
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

export default Polonek;
