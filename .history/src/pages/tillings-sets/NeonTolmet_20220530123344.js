import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/1agregaty-uprawowe/Neon/neon 3 przod.png";
import asset2 from "../../images/1agregaty-uprawowe/Neon/neont 3 tyl.png";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/agregaty-uprawowe/neon") {
    return item;
  }
});
const NeonTolmet = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe:</h3>

          <li>
            <span>Dwa rzędy redlic typu z wymiennymi gęsio stopami 250mm</span>
          </li>
          <li>
            <span>Przedni wał strunowy Ø 440m</span>
          </li>
          <li>
            <span>Tylni wał strunowy Ø 440m</span>
          </li>
          <li>
            <span>Listwa wyrównująca przednia</span>
          </li>
          <li>
            <span>Listwa wyrównująca środkowa</span>
          </li>
          <li>
            <span>Ręczna regulacja głebokości roboczej</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe:</h3>

          <li>
            <span>Hydrauliczna regulacja głębokości pracy</span>
          </li>
          <li>
            <span>Listwa wyrównująca tylna</span>
          </li>
          <li>
            <span>Zgrzebło za wałem </span>
          </li>
          <li>
            <span>Wał strunowy tandem</span>
          </li>
          <li>
            <span>Wał crosskill</span>
          </li>
          <li>
            <span>Wał crosskill tandem</span>
          </li>
          <li>
            <span>Urządzenie trakcyjne</span>
          </li>
          <li>
            <span>Oświetlenie drogowe</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={8}
          colNumber={4}
          raw1={["Szerokość robocza maszyny[m]", "2,5", "2,7", "3,0"]}
          raw2={["Symbol", "NEON 250", "NEON 270", "NEON 300"]}
          raw3={[
            "Wał przód",
            "struna Ø 440 mm",
            "struna Ø 440 mm",
            "struna Ø 440 mm",
          ]}
          raw4={[
            "Wał tył",
            "struna Ø 440 mm",
            "struna Ø 440 mm",
            "struna Ø 440 mm",
          ]}
          raw5={["Liczba redlic", "10", "11", "12"]}
          raw6={[
            "Listwa wyrównująca przednia",
            "standard",
            "standard",
            "standard",
          ]}
          raw7={[
            "Listwa wyrównująca środkowa",
            "standard",
            "standard",
            "standard",
          ]}
          raw8={["Waga maszyny [kg]", "1900", "2100", "2300"]}
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

export default NeonTolmet;