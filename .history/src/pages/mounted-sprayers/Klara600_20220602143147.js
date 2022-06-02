import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/14opryskiwacze-zawieszane/Klara 600/Klara 600 front.png";
import asset2 from "../../images/14opryskiwacze-zawieszane/Klara 600/Klara 615 back.png";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/opryskiwacze-zawieszane/klara-600-tolmet") {
    return item;
  }
});
const Klara600 = () => (
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
            <span>zbiornik wykonany z ORION 600</span>
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
            <span>
              rozdzielacz GRAN 3-sekcyjny(przy 12m) GRAN 5-sekcyjny(przy 14-18m)
            </span>
          </li>
          <li>
            <span>rozwadniacz środków chemicznych w sicie</span>
          </li>
          <li>
            <span>mieszadło hydrauliczne</span>
          </li>
          <li>
            <span>pompa o wydajności 120l/m lub 140l/min</span>
          </li>
          <li>
            <span>mechaniczna regulacja wysokości belki polowej</span>
          </li>
          <li>
            <span>dwuletnia karta gwarancyjna</span>
          </li>
          <li>
            <span>atest do pięciu lat</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>potrójna oprawa rozpylacza</span>
          </li>
          <li>
            <span>rozdzielacz manualny Duro 3-sekcyjny</span>
          </li>
          <li>
            <span>rodzielacz stałociśnieniowy Fermo 3-sekcyjny</span>
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
            <span>oświetlenie robocze</span>
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
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={3}
          colNumber={6}
          raw1={[
            "Symbol",
            "Klara 612",
            "Klara 614",
            "Klara 615",
            "Klara 616",
            "Klara 618",
          ]}
          raw2={["Szerokość lancy [m]", "12", "14", "15", "16", "18"]}
          raw3={["Waga bez cieczy", "250", "345", "355", "368", "445"]}
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

export default Klara600;
