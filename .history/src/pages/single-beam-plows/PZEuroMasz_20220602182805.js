import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/plugi-jednobelkowe-zagonowe/pz-euro-masz") {
    return item;
  }
});
const PzEuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <h3>PZ</h3>
          <li>
            <span>zabezpieczenie kołkowe przeciw kamieniom</span>
          </li>
          <li>
            <span>lemiesz z dłutem</span>
          </li>
          <li>
            <span>rozstaw korpusów 94cm</span>
          </li>
          <li>
            <span>prześwit pod ramą 68cm</span>
          </li>
          <li>
            <span>elementy robocze ze stali borowej hartowanej</span>
          </li>
          <li>
            <span>odkładnice pełne 16”; 40</span>
          </li>
          <li>
            <span>rama podwójna</span>
          </li>
          <li>
            <span>metalowe koło podporowe</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>gumowe koło podporowe</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={4}
          raw1={["Liczba korpusów", "3", "4", "5"]}
          raw2={[
            "Zapotrzebowanie mocy [KM]",
            "70 - 80",
            "80 - 100",
            "100 - 120",
          ]}
          raw3={["Waga [kg]", "500", "600", "700"]}
          raw4={["Wydajność", "0,8 – 1,2", "1,0 – 1,4", "1,2 – 1,6"]}
          raw5={["Szerokość robocza [m]", "1,2", "1,6", "2,0"]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default PzEuroMasz;
