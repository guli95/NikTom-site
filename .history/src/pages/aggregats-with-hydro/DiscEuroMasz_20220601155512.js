import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/3agregaty-talerzowe-hydro/AGREGAT TALERZOWY Z HYDROPAKIEM EURO-MASZ/dsa5W4qEWEERTYUI (1).jpeg";
import asset2 from "../../images/3agregaty-talerzowe-hydro/AGREGAT TALERZOWY Z HYDROPAKIEM EURO-MASZ/dsa5W4qEWEERTYUI (2).jpeg";
import asset3 from "../../images/3agregaty-talerzowe-hydro/AGREGAT TALERZOWY Z HYDROPAKIEM EURO-MASZ/dsa5W4qEWEERTYUI (3).jpeg";
import asset4 from "../../images/3agregaty-talerzowe-hydro/AGREGAT TALERZOWY Z HYDROPAKIEM EURO-MASZ/dsa5W4qEWEERTYUI (5).jpeg";
import asset5 from "../../images/3agregaty-talerzowe-hydro/AGREGAT TALERZOWY Z HYDROPAKIEM EURO-MASZ/dsa5W4qEWEERTYUI (6).jpeg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/agregaty-uprawowe-hydropak/talerz-euro") {
    return item;
  }
});
const DiscEuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>dwa rzędy uzębionych talerzy fi 510 typu "C"</span>
          </li>
          <li>
            <span>
              zabezpieczenie przeciążeniowe talerzy w postaci amortyzatorów
              gumowych
            </span>
          </li>
          <li>
            <span>odstęp między rzędami talerzy 690 mm</span>
          </li>
          <li>
            <span>piasta bezobsługowa z uszczelnieniem kasetowym</span>
          </li>
          <li>
            <span>wał tylny rurowy (śr. 500 mm) z 9 rur</span>
          </li>
          <li>
            <span>hydropak na 2 siłowniki</span>
          </li>
          <li>
            <span>ekrany boczne</span>
          </li>
          <li>
            <span>składane talerze skrajne w wersji 3,0m i 4,0m</span>
          </li>
          <li>
            <span>udźwig hydropaku 1500 kg</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>Wał tylny rurowy (śr. 500 mm) z 12 rur</span>
          </li>
          <li>
            <span>Wał tylny packer (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny packer (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny pierścieniowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny gumowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny teownikowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny daszkowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny ceownikowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny dyskowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał oponowy z dyszlem (koła 185/65-15)</span>
          </li>
          <li>
            <span>Talerze 560 mm</span>
          </li>
          <li>
            <span>Hydrauliczna regulacja głębokości pracy</span>
          </li>
          <li>
            <span>Piasty SKF</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={5}
          raw1={["Szerokość", "2,5", "2,7", "3,0", "4,0"]}
          raw2={["Liczba talerzy [szt.]", "20", "20", "25", "32"]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "70 – 110 ",
            "80 – 120",
            "100 – 130",
            "110 – 150",
          ]}
          raw4={["Waga [kg]", "1150", "1200", "1400", "1700"]}
          raw5={[
            "Wydajność",
            "1,8 – 2,6",
            "1,8 – 2,6",
            "2,0 – 3,0",
            "2,8 – 3,8",
          ]}
        />
        <PrizeBtn />
        <div className="assets">
          <LightBox assets={[asset1, asset2, asset3, asset4, asset5]} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default DiscEuroMasz;
