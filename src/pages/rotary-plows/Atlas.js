import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/8plugi-obrotowe/atlas/IMG_9824.jpg";
import asset2 from "../../images/8plugi-obrotowe/atlas/IMG_9822.jpg";
import asset3 from "../../images/8plugi-obrotowe/atlas/IMG_9823.jpg";
import asset4 from "../../images/8plugi-obrotowe/atlas/IMG_9826.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/plugi-obrotowe/atlas") {
    return item;
  }
});
const Atlas = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>POA</h3>
          <li>
            <span>zabezpieczenie kołkowe przeciw kamieniom</span>
          </li>
          <li>
            <span>gumowe koło podporowe z regulacją głębokości pracy</span>
          </li>
          <li>
            <span>regulacja pierwszej skiby</span>
          </li>
          <li>
            <span>automatyczna belka zaczepowa</span>
          </li>
          <li>
            <span>lemiesz z dłutem</span>
          </li>
          <li>
            <span>prześwit pod ramą 68cm</span>
          </li>
          <li>
            <span>rozstaw korpusów 94cm</span>
          </li>
          <li>
            <span>elementy robocze ze stali borowej hartowanej</span>
          </li>
          <li>
            <span>odkładnice pełne 16”; 40 cm</span>
          </li>
          <li>
            <span>rama podwójna 120x80</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={7}
          colNumber={4}
          raw1={["Liczba korpusów", "2", "3", "4"]}
          raw2={["Zapotrzebowanie mocy [KM]", "30 - 70", "50 - 80", "80 - 100"]}
          raw3={["Waga [kg]", "500", "650", "800"]}
          raw4={["Wydajność [ha/h]", "0,6 – 0,9", "0,8 – 1,2", "1,0 – 1,7"]}
          raw5={["Szerokość robocza [m]", "0,8", "1,2", "1,6"]}
          options
          optionsItem1={[
            {
              name: "Krój(do wersji 4 i 5)",
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

export default Atlas;
