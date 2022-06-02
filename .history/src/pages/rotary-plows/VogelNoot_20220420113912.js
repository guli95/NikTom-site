import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/8plugi-obrotowe/VOGEL NOTE ZAB. ZRYWALNE EURO-MASZ/178838091_742871996400648_6102282565372036272_n.jpg";
import asset2 from "../../images/8plugi-obrotowe/VOGEL NOTE ZAB. ZRYWALNE EURO-MASZ/179546488_3834296756640118_1117662125705218121_n.jpg";
import asset3 from "../../images/8plugi-obrotowe/VOGEL NOTE ZAB. ZRYWALNE EURO-MASZ/179669946_788513081772815_228645311931653730_n.jpg";
import asset4 from "../../images/8plugi-obrotowe/VOGEL NOTE ZAB. ZRYWALNE EURO-MASZ/180333217_295699342033380_5334597877973025008_n.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/plugi-obrotowe/vogel-noot-euro-masz") {
    return item;
  }
});
const VogelNoot = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>PON</h3>
          <li>
            <span>rama 120x120x8</span>
          </li>
          <li>
            <span>zabezpieczenie kołkowe przeciw kamieniom</span>
          </li>
          <li>
            <span>regulowana szerokość skiby(36cm/40cm/44cm/48cm)</span>
          </li>
          <li>
            <span>gumowe koło podporowe z regulacją głębokości pracy</span>
          </li>
          <li>
            <span>regulacja pierwszej skiby</span>
          </li>

          <li>
            <span>prześwit pod ramą 80cm</span>
          </li>
          <li>
            <span>rozstaw korpusów 95cm</span>
          </li>
          <li>
            <span>lemiesz z dłutem</span>
          </li>
          <li>
            <span>odkładnice, lemiesze i piersi typu Vogel&Noot18”</span>
          </li>
          <li>
            <span>elementy robocze ze stali borowej hartowanej</span>
          </li>
          <li>
            <span>automatyczna belka zaczepowa</span>
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
            "80 - 110",
            "95 - 130",
            "120 - 160",
          ]}
          raw3={["Waga [kg]", "1300", "1550", "1800"]}
          raw4={["Wydajność [ha/h]", "0,8 – 1,2", "1,0 – 1,7", "1,2 – 2,0"]}
          raw5={[
            "Szerokość robocza [m]",
            "1,08 – 1,44",
            "1,44 – 1,92",
            "1,8 – 2,4",
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
              name: "Rozstaw korpusów 10 cm",
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

export default VogelNoot;
