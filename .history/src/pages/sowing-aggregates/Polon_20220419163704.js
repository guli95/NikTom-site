import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/2agregaty-uprawowo-siewne/polon/polon bok.png";
import asset2 from "../../images/2agregaty-uprawowo-siewne/polon/polon front.png";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/agregaty-uprawowo-siewne/polon") {
    return item;
  }
});
const Polon = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>trzy rzędy zębów sprężynowych jackpot</span>
          </li>
          <li>
            <span>wzmacniany zaczep</span>
          </li>
          <li>
            <span>przedni wał strunowy Ø 440mm</span>
          </li>
          <li>
            <span>
              tylny, łożyskowany wał rurowy(Ø 510mm) lub strunowy(Ø 350mm)
              rozbijający powstałe grudy ziemi
            </span>
          </li>
          <li>
            <span>
              dwusiłownikowy hydropak z możliwością regulacji szybkości pracy
            </span>
          </li>
          <li>
            <span>
              uniwersalny zaczep do siewnika(do wyboru 720mm lub 840mm)
            </span>
          </li>
          <li>
            <span>dwie gęsiostopy dodatkowo spulchniające ziemię</span>
          </li>
          <li>
            <span>podpory pod siewnik</span>
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
          <li>
            <span>wał pierścieniowy Ø 500mm</span>
          </li>
          <li>
            <span>wał daszkowy Ø 500mm</span>
          </li>
          <li>
            <span>wał daszkowy z profila Ø 500mm</span>
          </li>
          <li>
            <span>wał packer Ø 510mm</span>
          </li>
          <li>
            <span>wał crosskill Ø 380mm</span>
          </li>
          <li>
            <span>wał crosskill Ø 550mm</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={5}
          raw1={["Model", "Polon 250", "Polon 270", "Polon 300", "Polon 400"]}
          raw2={["Szerokość robocza", "2,5", "2,7", "3,0", "4,0"]}
          raw3={["Waga [kg]", "850", "960", "1040", "1380"]}
          raw4={["Liczba redlic", "14", "16", "19", "25"]}
          raw5={[
            "Zapotrzebowanie [KM]",
            "70-90",
            "80-110",
            "100-130",
            "120-150",
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

export default Polon;
