import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/5grubery/Krypton/przod krypton.png";
import asset2 from "../../images/5grubery/Krypton/krypton bok.png";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/agregaty-podrywkowe/krypton-tolmet") {
    return item;
  }
});
const Krypton = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>grządziele - zabezpieczenie kołkowe</span>
          </li>
          <li>
            <span>wzmacniany zaczep (II i III kategoria)</span>
          </li>
          <li>
            <span>wał rurowy Ø 510mm lub strunowy Ø 440mm</span>
          </li>
          <li>
            <span>ręczna regulacja głębokości roboczej</span>
          </li>

          <li>
            <span>talerze na amortyzacji gumowej</span>
          </li>
        </ul>
        <ul className="long-list">
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>hydrauliczna regulacja głębokości roboczej </span>
          </li>
          <li>
            <span>automatyczna belka zaczepowa</span>
          </li>
          <li>
            <span>elementy robocze typu Lemken </span>
          </li>
          <li>
            <span>oświetlenie drogowe</span>
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
            <span>wał tandem strunowy Ø 440mm</span>
          </li>
          <li>
            <span>wał tandem strunowo-rurowy Ø 440mm</span>
          </li>
          <li>
            <span>wał tandem strunowo-rurowy Ø 510mm</span>
          </li>
          <li>
            <span>wał tandem ceownikowy Ø 520mm</span>
          </li>
          <li>
            <span>wał tandem teownikowy Ø 600mm</span>
          </li>
          <li>
            <span>wał tandem mulczujący Ø rura 140mm</span>
          </li>
          <li>
            <span>wał tandem mulczujący Ø rura 270mm</span>
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
            "Krypton 180",
            "Krypton 220",
            "Krypton 260",
            "Krypton 300",
          ]}
          raw2={["Szerokość [m]", "1,8", "2,2", "2,6", "3,0"]}
          raw3={["Liczba redlic", "4", "5", "6", "7"]}
          raw4={["Liczba talerzy", "5", "6", "7", "8"]}
          raw5={["Waga [kg]", "740", "890", "1020", "1140"]}
          raw6={[
            "Zapotrzebowanie mocy [KM]",
            "60 - 75",
            "70 - 90",
            "80 - 100",
            "90 - 120",
          ]}
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

export default Krypton;
