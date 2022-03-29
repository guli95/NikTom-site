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
  if (item.route === "/brony-talerzowe/kompaktowa-astat-model-I-tolmet") {
    return item;
  }
});
const AstatModelI = () => (
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
            <span>dwa rzędy talerzy na amortyzacji gumowej</span>
          </li>
          <li>
            <span>
              talerze o średnicy 560 mm wyposażone w bezobsługowe piasty na
              stożkowych łożyskach
            </span>
          </li>
          <li>
            <span>wał tandem daszkowy Ø 500mm</span>
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
            <span>urządzenie trakcyjne</span>
          </li>
          <li>
            <span>urządzenie trakcyjne z hydropakiem(+300kg)</span>
          </li>
          <li>
            <span>rozstaw pomiędzy belkami talerzowymi 920mm</span>
          </li>
          <li>
            <span>koła 340/55-16</span>
          </li>
        </ul>
        <ul className="long-list">
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>piasta przykręcana, talerz ⌀ 560mm </span>
          </li>
          <li>
            <span>piasta przykręcana, talerz ⌀ 610mm </span>
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
            <span>spulchniacz dłutowy(Astat 300 z U.T.)</span>
          </li>
          <li>
            <span>koła 400/60-15,5</span>
          </li>

          <li>
            <span>wał tandem daszkowy Ø 600mm</span>
          </li>
          <li>
            <span>wał tandem daszkowy z profila Ø 500mm</span>
          </li>
          <li>
            <span>wał tandem daszkowy z profila Ø 600mm</span>
          </li>
          <li>
            <span>wał tandem ceownikowy Ø 520mm</span>
          </li>
          <li>
            <span>wał tandem teownikowy Ø 600mm</span>
          </li>
          <li>
            <span>wał tandem dyskowy Ø 600mm</span>
          </li>
          <li>
            <span>wał tandem pierścieniowy Ø 500mm</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={7}
          colNumber={5}
          raw1={[
            "Model",
            "Astat 220",
            "Astat 250",
            "Astat 270",
            "Astat 300",
            "Astat 350",
            "Astat 400",
          ]}
          raw2={["Szerokość [m]", "2,2", "2,5", "2,7", "3,0", "3,5", "4,0"]}
          raw3={["Liczba talerzy", "14", "18", "22", "24", "28", "32"]}
          raw4={["Waga [kg]", "2150", "2300", "2420", "2500", "2780", "2900"]}
          raw5={[
            "Zapotrzebowanie mocy [KM]",
            "70 - 90",
            "80 - 100",
            "90 - 110",
            "100 - 120",
            "110 - 140",
            "130 - 160",
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

export default AstatModelI;
