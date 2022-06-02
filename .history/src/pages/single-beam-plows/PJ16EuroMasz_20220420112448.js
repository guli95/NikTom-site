import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/7plugi-jednobelkowe/PJ16/212020288_1178976279269801_5639755209808180495_n.jpg";
import asset2 from "../../images/7plugi-jednobelkowe/PJ16/217123112_255748295922073_1491058198635234257_n.jpg";
import asset3 from "../../images/7plugi-jednobelkowe/PJ16/IMG_6894.JPG";
import asset4 from "../../images/7plugi-jednobelkowe/PJ16/IMG_6895.JPG";
import asset5 from "../../images/7plugi-jednobelkowe/PJ16/IMG_6896.JPG";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/plugi-jednobelkowe-zagonowe/16-pj-euro-masz") {
    return item;
  }
});
const PJ16EuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>PJ16</h3>
          <li>
            <span>rama 120x120x6</span>
          </li>
          <li>
            <span>zabezpieczenie zrywalne przeciw kamieniom</span>
          </li>
          <li>
            <span>regulowana szerokość skiby (32cm/36cm/40cm/44cm)</span>
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
            <span>prześwit pod ramą 76cm</span>
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
          <li>
            <span>Odkładnice 16” lub Odkładnice typu Kverneland 18”</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={9}
          colNumber={4}
          raw1={["Liczba korpusów", "3", "4", "5"]}
          raw2={[
            "Zapotrzebowanie mocy [KM]",
            "60 - 80",
            "80 - 100",
            "100 – 150",
          ]}
          raw3={["Waga [kg]", "600", "710", "830"]}
          raw4={["Wydajność", "0,7 – 1,0", "1,4 – 1,6", "1,75 – 2,0"]}
          raw5={[
            "Szerokość robocza [m]",
            "0,96 – 1,32",
            "1,28 – 1,76",
            "1,6 – 2,2",
          ]}
          options
          optionsItem1={[
            {
              name: "Dopłata do wersji 3+, 3+1 oraz 4+1",
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
        <div className="assets">
          <LightBox assets={[asset1, asset2, asset3, asset4, asset5]} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default PJ16EuroMasz;
