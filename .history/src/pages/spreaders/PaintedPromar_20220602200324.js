import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/13rozsiewacze/ROZSIEWACZ NAWOZU MALOWANY PROMAR/MALOWANY PROMAR/IMG_9721.jpg";
import asset2 from "../../images/13rozsiewacze/ROZSIEWACZ NAWOZU MALOWANY PROMAR/MALOWANY PROMAR/IMG_9722.jpg";
import asset3 from "../../images/13rozsiewacze/ROZSIEWACZ NAWOZU MALOWANY PROMAR/MALOWANY PROMAR/IMG_9723.jpg";
import asset4 from "../../images/13rozsiewacze/ROZSIEWACZ NAWOZU MALOWANY PROMAR/MALOWANY PROMAR/IMG_9724.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/rozsiewacze/dwutarczowy-malowany-promar") {
    return item;
  }
});
const PaintedPromar = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>otwieranie i zamykanie hydrauliczne</span>
          </li>
          <li>
            <span>plandeka</span>
          </li>
          <li>
            <span>wysiew od 6m do 18m</span>
          </li>
          <li>
            <span>dwie tarcze i zasuwy kwasoodporne</span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>siew graniczny</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={10}
          colNumber={4}
          raw1={["Symbol", "NO 14/5", "NO 14/6", "NO 14/7"]}
          raw2={["Pojemność [l]", "600", "800", "1000"]}
          raw3={["Szerokość robocza [m]", "8-21", "8-21", "8-21"]}
          raw4={["Zakres dawek (kg/ha)", "50-1500", "50-1500", "50-1500"]}
          raw5={[
            "Zespół dozujący",
            "szczelinowy",
            "szczelinowy",
            "szczelinowy",
          ]}
          raw6={["Liczba tarcz rozsiewających", "2", "2", "2"]}
          raw7={["Liczba łopatek na tarczy", "2", "2", "2"]}
          raw8={[
            "Zamykanie zasuw",
            "hydrauliczne",
            "hydrauliczne",
            "hydrauliczne",
          ]}
          raw9={["Zapotrzebowanie mocy (kW)", "54", "54", "54"]}
          raw10={["Masa maszyny (kg)", "190", "215", "222"]}
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

export default PaintedPromar;
