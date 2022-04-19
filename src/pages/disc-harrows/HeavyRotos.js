import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/brony-talerzowe/hydrauliczna-ciezka-rotos") {
    return item;
  }
});
const HeavyRotos = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>talerz polski 560mm ze stali borowej</span>
          </li>
          <li>
            <span>wzmocnienia konstrukcji</span>
          </li>
          <li>
            <span>piasty 6. otworowe</span>
          </li>
          <li>
            <span>system amortyzujący w postaci wałków gumowych</span>
          </li>

          <li>
            <span>ekrany boczne</span>
          </li>
          <li>
            <span>
              uniwersalny system zaczepu dla II i III kategorii zawieszenia
            </span>
          </li>
          <li>
            <span>tylny wał rurowy lub strunowy</span>
          </li>
          <li>
            <span>malowanie proszkowe</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>hydrauliczna regulacja wałów</span>
          </li>
          <li>
            <span>talerze polskie 510-610mm ze stali borowej</span>
          </li>
          <li>
            <span>bezobsługowe piasty SKF</span>
          </li>
          <li>
            <span>wał packera</span>
          </li>
          <li>
            <span>wał gumowy</span>
          </li>
          <li>
            <span>wał daszkowy</span>
          </li>
          <li>
            <span>wał crosskill</span>
          </li>
          <li>
            <span>dyszel + wózek transportowy(1150kg)</span>
          </li>
          <li>
            <span>oświetlenie</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={8}
          colNumber={6}
          raw1={["Szerokość", "4,0", "4,5", "5", "5,5", "6,0"]}
          raw2={["Liczba siłowników", "4", "4", "4", "4", "4"]}
          raw3={["Liczba talerzy", "32", "36", "40", "44", "48"]}
          raw4={[
            "Średnica talerzy",
            "560/610/660",
            "560/610/660",
            "560/610/660",
            "560/610/660",
            "560/610/660",
          ]}
          raw5={["Rozstaw rzędów talerzy", "120", "120", "120", "120", "120"]}
          raw6={["Masa [kg]", "2500", "2800", "3160", "3400", "3600"]}
          raw7={[
            "Zapotrzebowanie [KM]",
            "120 - 150",
            "140 - 170",
            "160 - 190",
            "180 - 220",
            "180 - 250",
          ]}
          raw8={[
            "Wydajność [ha/h",
            "2,8 - 4,2",
            "3,5 - 5,5",
            "4,0 - 6,0",
            "4,5 - 6,5",
            "5,0 - 7,0",
          ]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default HeavyRotos;
