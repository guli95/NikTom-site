import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import "../../css/product_site.css";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/plugi-obrotowe/ripper-euro-masz") {
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
          <h3>PD</h3>
          <li>
            <span>dwurzędowa sekcja zębów</span>
          </li>
          <li>
            <span>głębokość pracy do 50 cm</span>
          </li>
          <li>
            <span>hydrauliczna regulacja głębokości pracy</span>
          </li>
          <li>
            <span>podwójny wał kolczasty</span>
          </li>
          <li>
            <span>rama 150x150x12</span>
          </li>
          <li>
            <span>zabezpieczenie zrywalne przeciw kamieniom</span>
          </li>
          <li>
            <span>elementy robocze stal borowa (włoskie)</span>
          </li>
        </ul>
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default ATMP;
