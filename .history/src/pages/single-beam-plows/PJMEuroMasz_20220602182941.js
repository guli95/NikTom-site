import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/plugi-jednobelkowe-zagonowe/pjm-euro-masz") {
    return item;
  }
});
const PJMEuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <h3>PJM</h3>
          <li>
            <span>rama 100x100x10</span>
          </li>
          <li>
            <span>zabezpieczenie zrywalne przeciw kamieniom</span>
          </li>
          <li>
            <span>regulowana szerokość skiby (25cm/30cm/35cm/40cm)</span>
          </li>
          <li>
            <span>gumowe koło podporowe z regulacją głębokości pracy</span>
          </li>
          <li>
            <span>regulacja kąta pracy skiby</span>
          </li>
          <li>
            <span>regulacja pierwszej skiby</span>
          </li>
          <li>
            <span>prześwit pod ramą 70cm</span>
          </li>
          <li>
            <span>rozstaw korpusów 85cm</span>
          </li>
          <li>
            <span>lemiesz z dłutem 16”</span>
          </li>
          <li>
            <span>elementy robocze ze stali borowej hartowanej</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>Dopłata do wersji 3+1</span>
          </li>
          <li>
            <span>Korpus przedpłużny</span>
          </li>
          <li>
            <span>Krój tarczowy</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={9}
          colNumber={4}
          raw1={["Liczba korpusów", "2", "3", "4"]}
          raw2={["Zapotrzebowanie mocy [KM]", "20 - 40", "40 - 60", "60 - 80"]}
          raw3={["Waga [kg]", "380", "490", "600"]}
          raw4={["Wydajność", "0,25 – 0,4", "0,4 – 0,6", "0,6 – 0,85"]}
          raw5={[
            "Szerokość robocza [m]",
            "0,5 – 0,8",
            "0,75 – 1,2",
            "1,0 – 1,6",
          ]}
          options
          optionsItem1={[
            {
              name: "Dopłata do wersji 3+1",
              len: 1,
            },
            {
              name: "-",
              len: 2,
            },
            {
              name: "możliwość dokupienia",
              len: 1,
            },
          ]}
          optionsItem2={[
            {
              name: "Korpus przedpłużny",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem3={[
            {
              name: "Krój tarczowy",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default PJMEuroMasz;
