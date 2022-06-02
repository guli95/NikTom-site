import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/4brony-talerzowe/Tenes z UT/t przod .png";
import asset2 from "../../images/4brony-talerzowe/Tenes z UT/tenes tyl .png";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/brony-talerzowe/kompaktowa-tenes-model-I-tolmet") {
    return item;
  }
});
const TenesModelI = () => (
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
            <span>
              możliwość regulacji rozstawu pomiędzy belkami talerzowymi: 960 mm
              – 1100 mm – 1240 mm,
            </span>
          </li>
          <li>
            <span>
              talerze o średnicy 560 mm wyposażone w bezobsługowe piasty na
              stożkowych łożyskach
            </span>
          </li>
          <li>
            <span>
              tylny, łożyskowany wał rurowy Ø 510mm lub strunowy Ø 440mm
            </span>
          </li>
          <li>
            <span>składane talerze boczne z możliwością regulacji </span>
          </li>

          <li>
            <span>
              wzmocniony zaczep z możliwością zapięcia na hak II i III kategorii
            </span>
          </li>
          <li>
            <span>dwa rzędy talerzy na amortyzacji gumowej</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>piasta przykręcana, talerze ⌀ 560mm </span>
          </li>
          <li>
            <span>piasta przykręcana, talerze ⌀ 610mm </span>
          </li>
          <li>
            <span>ekrany boczne </span>
          </li>
          <li>
            <span>ekrany boczne pływające</span>
          </li>
          <li>
            <span>hydrauliczna regulacja głębokości roboczej</span>
          </li>
          <li>
            <span>oświetlenie drogowe</span>
          </li>
          <li>
            <span>urządzenie trakcyjne z możłiwością podpięcia siewnika</span>
          </li>
          <li>
            <span>przesuwane belki talerzowe</span>
          </li>
          <li>
            <span>hydrauliczny sprzęg siewnika</span>
          </li>
          <li>
            <span>blok elktrohydrauliczny</span>
          </li>
          <li>
            <span>koła 400/60-15,5</span>
          </li>

          <li>
            <span>wały opcjonalne</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={7}
          colNumber={5}
          raw1={["Model", "Tenes 270", "Tenes 300", "Tenes 350", "Tenes 400"]}
          raw2={["Szerokość [m]", "2,7", "3,0", "3,5", "4,0"]}
          raw3={["Liczba talerzy", "22", "24", "28", "32"]}
          raw4={["Waga [kg]", "2540", "2620", "2900", "3020"]}
          raw5={[
            "Zapotrzebowanie mocy [KM]",

            "100 - 120",
            "110 - 130",
            "130 - 150",
            "150 - 170",
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

export default TenesModelI;
