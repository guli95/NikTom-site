import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/15opryskiwacze-ciagane/Borys 3000/Borys 3024 front.png";
import asset2 from "../../images/15opryskiwacze-ciagane/Borys 3000/Borys 3024 back.png";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/opryskiwacze-ciagane/borys-3000-tolmet") {
    return item;
  }
});
const Borys3000 = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul className="long-list">
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>typ zbiornika PROTON 3000</span>
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
            <span>hydraulicznie rozkładana belka</span>
          </li>
          <li>
            <span>potrójna oprawa rozpylacza</span>
          </li>
          <li>
            <span>hydrauliczne podnoszenie belki</span>
          </li>
          <li>
            <span>blok elektro - hydrauliczny</span>
          </li>
          <li>
            <span>rozdzielacz Fermo 5 sekcyjny</span>
          </li>
          <li>
            <span>CONTROL PANEL 1 + HYDRO - PANEL</span>
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
            <span>
              oświetlenie drogowe LED(dwie lampy kierunkowe pod lancą)
            </span>
          </li>
          <li>
            <span>dwa mieszadła antypieniące</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie opcjonalne</h3>

          <li>
            <span>control panel 2</span>
          </li>
          <li>
            <span>control panel 7</span>
          </li>
          <li>
            <span>komputer ALFA 200</span>
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
          colNumber={5}
          raw1={[
            "Model",

            "Borys 3015",
            "Borys 3018",
            "Borys 3021",
            "Borys 3024",
          ]}
          raw2={["Pojemność zbiornika [l]", "3000", "3000", "3000", "3000"]}
          raw3={["Szerokość lancy [m]", "15", "18", "21", "24"]}
          raw4={[
            "Waga opryskiwacza bez cieczy[kg]",
            "2150",
            "2200",
            "2350",
            "2500",
          ]}
          raw5={["Długość [mm]", "4000", "4050", "4050", "4100"]}
          raw6={["Szerokość [mm]", "2850", "2850", "2850", "2850"]}
          raw7={["Wysokość [mm]", "2500", "2500", "2500", "2500"]}
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

export default Borys3000;
