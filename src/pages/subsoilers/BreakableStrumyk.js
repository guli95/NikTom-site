import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/glebosze/zab-zrywalne-strumyk") {
    return item;
  }
});
const BreakableStrumyk = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>wał rurowy</span>
          </li>
          <li>
            <span>belka zaczepowa(do G I i G II)</span>
          </li>
          <li>
            <span>Zaczep II i III kategorii(do G III i G V</span>
          </li>
          <li>
            <span>zabezpieczenie kołkowe</span>
          </li>
          <li>
            <span>malowanie proszkowe</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>wał packera</span>
          </li>
          <li>
            <span>wał strunowy</span>
          </li>
          <li>
            <span>wał gumowy</span>
          </li>
          <li>
            <span>wał croskill</span>
          </li>
          <li>
            <span>wał daszkowy</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={6}
          colNumber={6}
          raw1={["Typ", "G I", "G II", "G III", "G V", "G VII"]}
          raw2={["Szerokość [m]", "1,8", "1,8", "1,8", "3,0", "4,0"]}
          raw3={["Ilość łap", "1,", "2", "3", "5", "7"]}
          raw4={["Głębokość robocz [cm]", "60", "60", "60", "60", "60"]}
          raw5={["Waga [kg]", "550", "650", "800", "1050", "1450"]}
          raw6={[
            "Zapotrzebowanie mocy [KM]",
            "45 - 65",
            "60 - 90",
            "75 - 110",
            "120 - 160",
            "140 - 180",
          ]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default BreakableStrumyk;
