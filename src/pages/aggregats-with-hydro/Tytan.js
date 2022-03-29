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
  if (item.route === "/agregaty-uprawowe-hydropak/talerz-tytan") {
    return item;
  }
});
const Tytan = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>piasta spawana</span>
          </li>
          <li>
            <span>dwa rzędy talerzy na trójkątnej amortyzacji gumowej</span>
          </li>
          <li>
            <span>Rozstaw między belkami talerzowymi 650mm</span>
          </li>
          <li>
            <span>
              talerze o średnicy 560mm wyposażone w bezobsługowe piasty na
              stożkowych łożyskach
            </span>
          </li>
          <li>
            <span>
              tylny łożyskowany wał rurowy Ø 510mm lub strunowy Ø 440mm
            </span>
          </li>
          <li>
            <span>
              uniwersalny zaczep do siewnika(do wyboru rozstaw 720mm lub 840mm)
            </span>
          </li>
          <li>
            <span>składane talerze boczne z możłiwością regulacji</span>
          </li>
        </ul>
        <ul className="long-list">
          <h3>Wyposażenie opcjonalne</h3>
          <li>
            <span>piasta przykręcana, talerz Ø 560mm</span>
          </li>
          <li>
            <span>przesuwane belki talerzowe</span>
          </li>
          <li>
            <span>ekrany boczne</span>
          </li>
          <li>
            <span>ekrany boczne pływające</span>
          </li>
          <li>
            <span>atomatyczna belka zaczepowa</span>
          </li>
          <li>
            <span>hydrauliczna regulacja głębokości roboczej</span>
          </li>
          <li>
            <span>oświetlenie drogowe</span>
          </li>
          <li>
            <span>wał rurowy Ø 600</span>
          </li>
          <li>
            <span>wał strunowy Ø 520</span>
          </li>
          <li>
            <span>wał daszkowy Ø 500</span>
          </li>
          <li>
            <span>wał daszkowy Ø 600</span>
          </li>
          <li>
            <span>wał Ø 500</span>
          </li>
          <li>
            <span>wał daszkowy z profila Ø 500</span>
          </li>
          <li>
            <span>wał daszkowy z profila Ø 600</span>
          </li>
          <li>
            <span>wał pierścieniowy Ø 500</span>
          </li>
          <li>
            <span>wał ceownikowy Ø 520</span>
          </li>
          <li>
            <span>wał daszkowy z profila Ø 600</span>
          </li>
          <li>
            <span>wał teownikowy Ø 600</span>
          </li>
          <li>
            <span>wał packer Ø 510</span>
          </li>
          <li>
            <span>wał crosskill Ø 380</span>
          </li>
          <li>
            <span>wał packer Ø 550</span>
          </li>
          <li>
            <span>wał dyskowy Ø 600</span>
          </li>
          <li>
            <span>wał gumowy Ø 500</span>
          </li>
          <li>
            <span>wał spiralny Ø 500</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={5}
          raw1={["Model", "Tytan 250", "Tytan 270", "Tytan 300", "Tytan 400"]}
          raw2={["Szerokość robocza [m]", "2,5", "2,7", "3,0", "4,0"]}
          raw3={["Liczba talerzy", "18", "22", "24", "32"]}
          raw4={["Waga [kg]", "1200", "1270", "1320", "1850"]}
          raw5={[
            "Zapotrzebowanie [KM]",
            "80 - 100",
            "100 - 120",
            "110 - 130",
            "150 - 170",
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

export default Tytan;
