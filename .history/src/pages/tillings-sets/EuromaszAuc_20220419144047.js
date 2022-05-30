import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/1agregaty-uprawowe/AGREGAT UPRAWOWO PRZEDSIEWNY CIEŻKI EURO-MASZ/kljm (1).jpg";
import asset2 from "../../images/1agregaty-uprawowe/AGREGAT UPRAWOWO PRZEDSIEWNY CIEŻKI EURO-MASZ/kljm (17).jpg";
import asset3 from "../../images/1agregaty-uprawowe/AGREGAT UPRAWOWO PRZEDSIEWNY CIEŻKI EURO-MASZ/kljm (2).jpg";
import asset4 from "../../images/1agregaty-uprawowe/AGREGAT UPRAWOWO PRZEDSIEWNY CIEŻKI EURO-MASZ/kljm (5).jpg";
import asset5 from "../../images/1agregaty-uprawowe/AGREGAT UPRAWOWO PRZEDSIEWNY CIEŻKI EURO-MASZ/kljm (9).jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/agregaty-uprawowe/euro-maszauc") {
    return item;
  }
});
const EuroMaszAuc = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <ul>
        <li>
          <span>
            listwa zgarniająca I zębata z regulacją głębokości i amortyzatorem
          </span>
        </li>
        <li>
          <span>
            wał strunowy fi 400 mm - dwa rzędy zębów sprężystych 25x25 z
            gęsiostópkami
          </span>
        </li>
        <li>
          <span>listwa zgarniająca II gładka na wieszakach łańcuchowych</span>
        </li>
        <li>
          <span>wał crosskill</span>
        </li>
        <li>
          <span>ekrany boczne</span>
        </li>
      </ul>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={10}
          colNumber={3}
          raw1={["Szerokość", "3,0", "4,0"]}
          raw2={["Liczba zębów [szt.]", "12", "16"]}
          raw3={["Zapotrzebowanie mocy [KM]", "100-140", "140-190"]}
          raw4={["Waga [kg]", "1600", "2200"]}
          raw5={["Wydajność[ha/h]", "1,8 - 2,7", "2,6-3,8"]}
          options
          optionsItem1={[
            {
              name: "Wał crosskill podwójny",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 2,
            },
          ]}
          optionsItem2={[
            {
              name: "III listwa zgarniająca",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 2,
            },
          ]}
          optionsItem3={[
            {
              name: "Wersja połzawieszana (wózek z dyszlem)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 2,
            },
          ]}
          optionsItem4={[
            {
              name: "Uchwyty do siewnika",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 2,
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

export default EuroMaszAuc;
