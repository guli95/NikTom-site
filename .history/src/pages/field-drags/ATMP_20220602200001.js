import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import "../../css/product_site.css";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/wloki-polowe/atmp") {
    return item;
  }
});
const ATMP = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>szerokie walcowe ślizgi-wzmocnione mocowane</span>
          </li>
          <li>
            <span>dwustronne odlewy typu combi</span>
          </li>
          <li>
            <span>polskie siłowniki</span>
          </li>
          <li>
            <span>wzmocnione zawiasy</span>
          </li>
          <li>
            <span>końcówki rur zabezpieczone przed piaskiem i wodą</span>
          </li>
          <li>
            <span>wzmocnione mocowanie</span>
          </li>
          <li>
            <span>dodatkowe zabezpieczenie</span>
          </li>
          <li>
            <span>włóki wykonane z kątownika hutniczego</span>
          </li>
          <li>
            <span>60x60x6(2m i 4m)</span>
          </li>
          <li>
            <span>80x80x6(5m)</span>
          </li>
          <li>
            <span>80x80x8(6m i 8m</span>
          </li>
          <li>
            <span>cztery rzędy odlewów</span>
          </li>
        </ul>
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default ATMP;
