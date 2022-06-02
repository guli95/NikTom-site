import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/8plugi-obrotowe/PO/IMG_9701.jpg";
import asset2 from "../../images/8plugi-obrotowe/PO/IMG_9705.jpg";
import asset3 from "../../images/8plugi-obrotowe/PO/IMG_9707.jpg";
import asset4 from "../../images/8plugi-obrotowe/PO/IMG_9709.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/plugi-obrotowe/po-18-euro-masz") {
    return item;
  }
});
const PO18EuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <h3>PO</h3>
          <li>
            <span>rama 120x120x8</span>
          </li>
          <li>
            <span>zabezpieczenie kołkowe przeciw kamieniom</span>
          </li>
          <li>
            <span>regulowana szerokość skiby(32cm/36cm/40cm/44cm)</span>
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
            <span>prześwit pod ramą 75cm</span>
          </li>
          <li>
            <span>rozstaw korpusów 85cm</span>
          </li>
          <li>
            <span>lemiesz z dłutem</span>
          </li>
          <li>
            <span>odkładnice, lemiesze i piersi typu Kverneland18”</span>
          </li>
          <li>
            <span>elementy robocze ze stali borowej hartowanej</span>
          </li>
          <li>
            <span>automatyczna belka zaczepowa</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>Wersja 3+, 3+1, 4+1</span>
          </li>
          <li>
            <span>Korpus przedpłużny</span>
          </li>
          <li>
            <span>Krój tarczowy</span>
          </li>
          <li>
            <span>Siłownik liniowania wspomagający obrót</span>
          </li>
          <li>
            <span>Odkładnice ażurowe</span>
          </li>
          <li>
            <span>Kostka pamięci (do wersji z siłownikiem liniowania)</span>
          </li>
          <li>
            <span>Rozstaw korpusów 100 cm"</span>
          </li>
          <li>
            <span>Rama 120x120x12,5</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={14}
          colNumber={4}
          raw1={["Liczba korpusów", "3", "4", "5"]}
          raw2={[
            "Zapotrzebowanie mocy [KM]",
            "65 - 90",
            "90 - 120",
            "115 - 150",
          ]}
          raw3={["Waga [kg]", "1200", "1400", "1600"]}
          raw4={["Wydajność [ha/h]", "0,8 – 1,2", "1,0 – 1,7", "1,2 – 2,0"]}
          raw5={[
            "Szerokość robocza [m]",
            "0,96 – 1,32",
            "1,28 – 1,76",
            "1,6 – 2,2",
          ]}
          options
          optionsItem1={[
            {
              name: "Wersja 3+, 3+1, 4+1",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 3,
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
              name: "Odkładnice ażurowe",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem4={[
            {
              name: "Krój tarczowy",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem5={[
            {
              name: "Siłownik liniowania wspomagający obrót",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem6={[
            {
              name: "Kostka pamięci (do wersji z siłownikiem liniowania)",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem7={[
            {
              name: "Rozstaw korpusów 100 cm",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem8={[
            {
              name: "Rama 120x120x12,5",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
        />
        <PrizeBtn />
        <div className="assets">
          <LightBox assets={[asset1, asset2, asset3, asset4]} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default PO18EuroMasz;
