import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/14opryskiwacze-zawieszane/Klara 1200/Klara 1215 front.png";
import asset2 from "../../images/14opryskiwacze-zawieszane/Klara 1200/Klara 1215 back.png";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/opryskiwacze-zawieszane/klara-1200-tolmet") {
    return item;
  }
});
const Klara1200 = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>pojedyncze rozpylacze typu "V"</span>
          </li>
          <li>
            <span>zbiornik wykonany z OMEGA 1200</span>
          </li>
          <li>
            <span>
              ocynkowana belka polowa o szerokości 12m lub 14m lub 15m lub 16m
              lub 18m
            </span>
          </li>
          <li>
            <span>zbiornik do mycia rąk o pojemności 15 litrów</span>
          </li>
          <li>
            <span>manometr</span>
          </li>
          <li>
            <span>rozdzielacz DURO 3-sekcyjny i 5-sekcyjny</span>
          </li>
          <li>
            <span>rozwadniacz środków chemicznych w sicie</span>
          </li>
          <li>
            <span>pompa o wydajności 140l/min</span>
          </li>
          <li>
            <span>mechaniczna regulacja wysokości belki polowej</span>
          </li>
          <li>
            <span>atest do pięciu lat</span>
          </li>
          <li>
            <span>ręczne rozkłanie belki</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>potrójna oprawa rozpylacza</span>
          </li>
          <li>
            <span>
              rozdzielacz manualny Duro 3-sekcyjny lub Duro 5-sekcyjny
            </span>
          </li>
          <li>
            <span>
              rodzielacz stałociśnieniowy Fermo 3-sekcyjny lub 5-sekcyjny
            </span>
          </li>
          <li>
            <span>rozpylacz eżektorowy 0,2</span>
          </li>
          <li>
            <span>rozpylacz eżektorowy 0,3</span>
          </li>
          <li>
            <span>oświetlenie drogowe</span>
          </li>

          <li>
            <span>układ napełniania zbiornika</span>
          </li>
          <li>
            <span>hydrauliczna stabilizacja belki polowej</span>
          </li>
          <li>
            <span>układ zasysania cieczy do zbiornika</span>
          </li>
          <li>
            <span>hydrauliczna regulacja wysokości belki polowej</span>
          </li>
          <li>
            <span>rozwadniacz boczny</span>
          </li>
          <li>
            <span>Control Panel 1(ON/OFF)</span>
          </li>
          <li>
            <span>Control Panel 2(ON/OFF, regulacja ciśnienia +/-)</span>
          </li>
          <li>
            <span>
              Control Panel 5(ON/OFF, regulacja ciśnienia +/-, sterowanie trzema
              sekcjami)
            </span>
          </li>
          <li>
            <span>
              Control Panel 7(ON/OFF, regulacja ciśnienia +/-, sterowanie
              pięcioma sekcjami)
            </span>
          </li>
          <li>
            <span>komputer Alfa 100</span>
          </li>
          <li>
            <span>rozwadniacz boczny</span>
          </li>
          <li>
            <span>filtry liniowe</span>
          </li>
          <li>
            <span>znacznik pianowy</span>
          </li>
          <li>
            <span>oświetlenie robocze</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={3}
          colNumber={6}
          raw1={[
            "Symbol",
            "Klara 1212",
            "Klara 1214",
            "Klara 1215",
            "Klara 1216",
            "Klara 1218",
          ]}
          raw2={["Szerokość lancy [m]", "12", "14", "15", "16", "18"]}
          raw3={["Waga bez cieczy", "443", "534", "546", "567", "626"]}
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

export default Klara1200;
