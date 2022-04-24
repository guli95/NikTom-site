import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/9glebosze/Thor głębosz/głębosz tyl.png";
import asset2 from "../../images/9glebosze/Thor głębosz/glebosz 1.png";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/glebosze/michael-zrywalne-tolmet") {
    return item;
  }
});
const MichaelBreakableTolmet = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>
              grządziele włoskiego producenta AMA z wymiennymi elementami
              roboczymi
            </span>
          </li>
          <li>
            <span>zabezpieczenie – kołek zrywalny</span>
          </li>
          <li>
            <span>głębokość robocza do 60 cm</span>
          </li>
          <li>
            <span>stopki</span>
          </li>
          <li>
            <span>grządziele przesuwne</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie opcjonalne</h3>
          <li>
            <span>oświetlenie drogowe</span>
          </li>
          <li>
            <span>adapter do wału</span>
          </li>
          <li>
            <span>tylny sprzęg trzypunktowy</span>
          </li>
          <li>
            <span>wał rurowy Ø 510mm</span>
          </li>
          <li>
            <span>wał rurowy Ø 600mm</span>
          </li>
          <li>
            <span>wał strunowy Ø 440mm</span>
          </li>
          <li>
            <span>wał strunowy Ø 520mm</span>
          </li>
          <li>
            <span>wał tandem mulczujący rura Ø 140mm</span>
          </li>
          <li>
            <span>wał tandem mulczujący rura Ø 270mm</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={4}
          raw1={["Model", "Michael 4", "Michael 6", "Michael 8"]}
          raw2={["Szerokość robocza [m]", "3", "3", "4"]}
          raw3={["Liczba grządzieli", "4", "6", "8"]}
          raw4={["Waga [kg]", "1100", "1250", "1500"]}
          raw5={[
            "Zapotrzebowanie mocy [KM]",
            "120 - 140",
            "150 - 180",
            "200 - 250",
          ]}
        />
        <PrizeBtn />
        <div className="assets">
          <LightBox assets={[asset1, asset2]} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default MichaelBreakableTolmet;
