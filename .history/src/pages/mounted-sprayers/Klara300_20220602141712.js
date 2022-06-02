import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/14opryskiwacze-zawieszane/Klara 300/Klara 310 front.png";
import asset2 from "../../images/14opryskiwacze-zawieszane/Klara 300/Klara 310 back.png";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/opryskiwacze-zawieszane/klara-300-tolmet") {
    return item;
  }
});
const Klara300 = () => (
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
            <span>zbiornik wykonany z ORION 300</span>
          </li>
          <li>
            <span>
              ocynkowana belka polowa o szerokości 6m lub 8m lub 10m lub 12m
            </span>
          </li>
          <li>
            <span>zbiornik do mycia rąk o pojemności 15 litrów</span>
          </li>
          <li>
            <span>zaworki odcinające</span>
          </li>

          <li>
            <span>manometr</span>
          </li>
          <li>
            <span>rozdzielacz GRAN 3-sekcyjny</span>
          </li>
          <li>
            <span>rozwadniacz środków chemicznych w sicie</span>
          </li>
          <li>
            <span>mieszadło hydrauliczne</span>
          </li>
          <li>
            <span>pompa pu2/120 o wydajności 120l/m</span>
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
          <li>
            <span>rozkładanie ręczne</span>
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
            <span>pompa TOLVERI PU-3/140 wydajność 140l/min</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={3}
          colNumber={4}
          raw1={["Symbol", "Klara 306", "Klara 308", "Klara 310", "Klara 312"]}
          raw2={["Szerokość lancy [m]", "6", "8", "10", "12"]}
          raw3={["Waga bez cieczy", "150", "160", "163", "106"]}
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

export default Klara300;
