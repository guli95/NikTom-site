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
  if (item.route === "/brony-talerzowe/kompaktowa-astat-tolmet") {
    return item;
  }
});
const CompactAstatTolmet = () => (
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
              talerze o średnicy 560 mm wyposażone w bezobsługowe piasty na
              stożkowych łożyskach
            </span>
          </li>
          <li>
            <span>
              tylny łożyskowany wał rurowy Ø 510mm lub strunowy Ø 440mm
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
            <span>rozstaw pomiędzy belkami talerzowymi 920mm</span>
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
            <span>przesuwane belki talerzowe</span>
          </li>
          <li>
            <span>automatyczna belka zaczepowa</span>
          </li>
          <li>
            <span>wał rurowy Ø 600mm</span>
          </li>
          <li>
            <span>wał strunowy Ø 520mm</span>
          </li>
          <li>
            <span>wał daszkowy Ø 500mm</span>
          </li>
          <li>
            <span>wał daszkowy Ø 600mm</span>
          </li>
          <li>
            <span>wał daszkowy z profila Ø 500mm</span>
          </li>
          <li>
            <span>wał daszkowy z profila Ø 600mm</span>
          </li>
          <li>
            <span>wał pierścieniowy Ø 500mm</span>
          </li>
          <li>
            <span>wał ceownikowy Ø 520mm</span>
          </li>
          <li>
            <span>wał ceownikowy Ø 600mm</span>
          </li>
          <li>
            <span>wał teownikowy Ø 600mm</span>
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
          <li>
            <span>wał dyskowy Ø 600mm</span>
          </li>
          <li>
            <span>wał gumowy Ø 500mm</span>
          </li>
          <li>
            <span>wał spiralny Ø 500mm</span>
          </li>
          <li>
            <span>wał tandem daszkowy Ø 500mm</span>
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
            <span>wał tandem strunowy Ø 440mm</span>
          </li>
          <li>
            <span>wał tandem strunowo-rurowy Ø 440mm</span>
          </li>
          <li>
            <span>wał tandem strunowo-rurowy Ø 510mm</span>
          </li>
          <li>
            <span>wał tandem ceownikowy Ø 520mm</span>
          </li>
          <li>
            <span>wał tandem teownikowy Ø 600mm</span>
          </li>
          <li>
            <span>wał tandem mulczujący Ø rura 140mm</span>
          </li>
          <li>
            <span>wał tandem mulczujący Ø rura 270mm</span>
          </li>
          <li>
            <span>wał tandem dyskowy Ø 600mm</span>
          </li>
          <li>
            <span>wał tandem pierścieniowy Ø 500mm</span>
          </li>
          <li>
            <span>wał tandem crosskill Ø 380mm</span>
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
          raw4={["Waga [kg]", "950", "1100", "1220", "1300", "1580", "1700"]}
          raw5={[
            "Zapotrzebowanie mocy [KM]",
            "60 - 80",
            "80 - 100",
            "100 - 120",
            "110 - 130",
            "130 - 150",
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

export default CompactAstatTolmet;
