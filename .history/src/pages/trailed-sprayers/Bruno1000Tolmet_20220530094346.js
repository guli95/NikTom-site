import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/15opryskiwacze-ciagane/Bruno 1200/Brono 1200 front.png";
import asset2 from "../../images/15opryskiwacze-ciagane/Bruno 1200/Bruno 1200 back.png";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/opryskiwacze-ciagane/bruno-1000-tolmet") {
    return item;
  }
});
const Bruno1000Tolmet = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul className="long-list">
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>typ zbiornika PROTON 1000</span>
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
            <span>pompa TOLVERI PU-3/140 wydajność 140 l/min</span>
          </li>
          <li>
            <span>koła 9,5 x 24</span>
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
          <li>
            <span>filtry liniowe</span>
          </li>
          <li>
            <span>układ napełniania zbiornika</span>
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
            <span>koła 9,5 x 32</span>
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
            "Bruno 1012",
            "Bruno 1014",
            "Bruno 1015",
            "Bruno 1016",
            "Bruno 1018",
          ]}
          raw2={[
            "Pojemność zbiornika [l]",
            "1000",
            "1000",
            "1000",
            "1000",
            "1000",
          ]}
          raw3={["Szerokość lancy [m]", "12", "14", "15", "16", "18"]}
          raw4={[
            "Waga opryskiwacza bez cieczy[kg]",
            "900",
            "950",
            "950",
            "980",
            "1100",
          ]}
          raw5={["Długość [mm]", "3000", "3000", "3000", "3000", "3000"]}
          raw6={["Szerokość [mm]", "2850", "2850", "2850", "2850", "2850"]}
          raw7={["Wysokość [mm]", "2500", "2500", "2500", "2500", "2500"]}
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

export default Bruno1000Tolmet;
