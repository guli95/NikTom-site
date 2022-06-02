import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/plugi-obrotowe/ripper-euro-masz") {
    return item;
  }
});
const RipperEuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
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
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={4}
          raw1={["Szerokość [m]", "2,5", "4", "5"]}
          raw2={["Liczba zębów [szt.]", "5", "7", "9"]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "140 - 200",
            "180 - 250",
            "220 - 330",
          ]}
          raw4={["Waga [kg]", "2200", "2500", "3400"]}
          raw5={["Wydajność [ha/h]", "1,5 – 2,2", "2,0 – 3,0", "2,7 – 4,0"]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default RipperEuroMasz;
