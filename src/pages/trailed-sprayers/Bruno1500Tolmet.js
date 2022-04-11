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
  if (item.route === "/opryskiwacze-ciagane/bruno-1500-tolmet") {
    return item;
  }
});
const Bruno1500Tolmet = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul className="long-list">
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>typ zbiornika PROTON 1500</span>
          </li>
          <li>
            <span>zbiornik do mycia rąk</span>
          </li>
          <li>
            <span>zbiornik do mycia układu</span>
          </li>
          <li>
            <span>stabilizacja belki</span>
          </li>
          <li>
            <span>ręcznie rozkładana belka</span>
          </li>
          <li>
            <span>potrójna oprawa rozpylacza</span>
          </li>
          <li>
            <span>hydrauliczne podnoszenie belki</span>
          </li>
          <li>
            <span>rozdzielacz Fermo 5 sekcyjny</span>
          </li>
          <li>
            <span>dwie pompy TOLVERI PU-3/140 o wydajności 140 l/min</span>
          </li>
          <li>
            <span>koła 9,5 x 32</span>
          </li>
          <li>
            <span>filtr liniowy</span>
          </li>
          <li>
            <span>mycie zbiornika głównego</span>
          </li>
          <li>
            <span>oświetlenie drogowe LED</span>
          </li>
          <li>
            <span>dwa mieszadła antypieniące</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie opcjonalne</h3>
          <li>
            <span>stabilizacja belki hydrauliczna</span>
          </li>
          <li>
            <span>control panel 1</span>
          </li>
          <li>
            <span>control panel 2</span>
          </li>
          <li>
            <span>control panel 7</span>
          </li>
          <li>
            <span>komputer ALFA 100</span>
          </li>
          <li>
            <span>oświetlenie robocze</span>
          </li>

          <li>
            <span>koła 9,5 x 36</span>
          </li>
          <li>
            <span>rozwadniacz boczny</span>
          </li>
          <li>
            <span>znacznik pianowy</span>
          </li>
          <li>
            <span>układ zasysania cieczy do zbiornika</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={7}
          colNumber={6}
          raw1={[
            "Model",
            "Bruno 1512",
            "Bruno 1514",
            "Bruno 1515",
            "Bruno 1516",
            "Bruno 1518",
          ]}
          raw2={[
            "Pojemność zbiornika [l]",
            "1500",
            "1500",
            "1500",
            "1500",
            "1500",
          ]}
          raw3={["Szerokość lancy [m]", "12", "14", "15", "16", "18"]}
          raw4={[
            "Waga opryskiwacza bez cieczy[kg]",
            "1500",
            "1550",
            "1550",
            "1580",
            "1600",
          ]}
          raw5={["Długość [mm]", "4000", "4000", "4000", "4000", "4000"]}
          raw6={["Szerokość [mm]", "2850", "2850", "2850", "2850", "2850"]}
          raw7={["Wysokość [mm]", "2500", "2500", "2500", "2500", "2500"]}
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

export default Bruno1500Tolmet;
