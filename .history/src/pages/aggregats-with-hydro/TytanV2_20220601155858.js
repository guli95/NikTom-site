import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";

import asset1 from "../../images/3agregaty-talerzowe-hydro/Tytan z wałem oponowym/tytan na wale oponowym zdjecie dron.png";
import asset2 from "../../images/3agregaty-talerzowe-hydro/Tytan z wałem oponowym/tytan wał oponowy do katalogu.png";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/agregaty-uprawowe-hydropak/talerz-tytan-z-walem") {
    return item;
  }
});
const TytanV2 = () => (
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
            <span>Rozstaw między belkami 790mm</span>
          </li>
          <li>
            <span>
              talerze o średnicy 560mm wyposażone w bezobsługowe piasty na
              stożkowych łożyskach
            </span>
          </li>

          <li>
            <span>
              uniwersalny zaczep do siewnika(do wyboru rozstaw 720mm lub 840mm)
            </span>
          </li>
          <li>
            <span>wał oponowy(koła 185/65/15 - 12szt.)</span>
          </li>
          <li>
            <span>ekrany boczne</span>
          </li>
          <li>
            <span>składane talerze boczne z możłiwością regulacji</span>
          </li>
          <li>
            <span>hydrauliczna regulacja głebokości roboczej</span>
          </li>
          <li>
            <span>przesuwne belki talerzowe</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie opcjonalne</h3>
          <li>
            <span>piasta przykręcana, talerz Ø 560mm</span>
          </li>
          <li>
            <span>ekrany boczne pływające</span>
          </li>
          <li>
            <span>oświetlenie drogowe</span>
          </li>
          <li>
            <span>wał tandem mulczujący mocowany na hydropak</span>
          </li>
          <li>
            <span>spulchniacz za kołem</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={5}
          raw1={["Model", "Tytan 300 wał oponowy"]}
          raw2={["Szerokość robocza [m]", "3,0"]}
          raw3={["Liczba talerzy", "24"]}
          raw4={["Waga [kg]", "2000"]}
          raw5={["Zapotrzebowanie [KM]", "100 - 140"]}
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

export default TytanV2;
