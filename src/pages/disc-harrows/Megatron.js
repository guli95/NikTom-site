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
  if (item.route === "/brony-talerzowe/kompaktowa-megatron-tolmet") {
    return item;
  }
});
const Megatron = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>piasta przykręcana</span>
          </li>
          <li>
            <span>dwa rzędy talerzy na trójkątnej amortyzacji gumowej</span>
          </li>
          <li>
            <span>rozstaw pomiędzy belkami talerzowymi 920mm</span>
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
            <span>przesuwane belki talerzowe</span>
          </li>
          <li>
            <span>składane talerze boczne z możliwością regulacji</span>
          </li>
          <li>
            <span>ekrany boczne</span>
          </li>
          <h3>Z urządzeniem trakcyjnym</h3>
          <li>
            <span>urządzenie trakcyjne(+1800kg do wagi z tabelii)</span>
          </li>
          <li>
            <span>rozstaw pomiędzy belkami talerzowymi 1100mm</span>
          </li>
          <li>
            <span>
              sterownik elektryczny - podnoszenie, opuszczanie, składanie,
              rozkładanie, ustawianie głebokości roboczej
            </span>
          </li>
        </ul>
        <ul className="long-list">
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>piasta spawana, talerz ⌀ 610mm </span>
          </li>
          <li>
            <span>piasta przykręcana, talerz ⌀ 610mm </span>
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
            <span>hamulce pneumatyczne</span>
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
          <li>
            <span>wał tandem crosskill Ø 380mm</span>
          </li>
          <h3>Z urządzeniem trakcyjnym</h3>
          <li>
            <span>przednie koła podporowe</span>
          </li>
          <li>
            <span>hamulce pneumatyczne</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={7}
          colNumber={7}
          raw1={[
            "Model",
            "Magatron 400",
            "Magatron 450",
            "Magatron 500",
            "Magatron 550",
            "Magatron 600",
            "Magatron 800(tylko x U.T.)",
          ]}
          raw2={["Szerokość [m]", "4,0", "4,5", "5,0", "5,5", "6,0", "8,0"]}
          raw3={["Liczba talerzy", "32", "36", "40", "44", "48", "64"]}
          raw4={["Waga [kg]", "3000", "3500", "3800", "4100", "4500", "8200"]}
          raw5={[
            "Zapotrzebowanie mocy [KM]",
            "140 - 180",
            "160 - 200",
            "180 - 220",
            "200 - 240",
            "220 - 260",
            "330 - 400",
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

export default Megatron;
