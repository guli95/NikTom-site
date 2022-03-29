import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/dji-5331597_1280.jpg";
import asset2 from "../../images/slider_1.jpg";
import asset3 from "../../images/slider_2.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/agregaty-uprawowe-hydropak/talerz-ciezki-armasz") {
    return item;
  }
});
const DiscHeavyArmasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul className="long-list">
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>oświetlenie</span>
          </li>
          <li>
            <span>piasty bezobsługowe typ skf</span>
          </li>
          <li>
            <span>ramki obciążające</span>
          </li>
          <li>
            <span>rozstaw 85cm(tzw. brona)</span>
          </li>
          <li>
            <span>skrobaki do wału</span>
          </li>
          <li>
            <span>talerze Ø 560</span>
          </li>
          <li>
            <span>wał cewnikowy</span>
          </li>
          <li>
            <span>wał daszkowy Ø 500</span>
          </li>
          <li>
            <span>wał daszkowy Ø 600</span>
          </li>
          <li>
            <span>wał Ø 500</span>
          </li>
          <li>
            <span>wał Ø 600mm</span>
          </li>
          <li>
            <span>wał packera</span>
          </li>
          <li>
            <span>wał sprężynowy</span>
          </li>
          <li>
            <span>wał ząbkowany</span>
          </li>
          <li>
            <span>zgrzebło</span>
          </li>
          <li>
            <span>zmiana koloru</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={3}
          colNumber={4}
          raw1={["Typ", "ATHC 125", "ATHC 127", "ATHC 130"]}
          raw2={["Szerokość robocza [m]", "2,5", "2,7", "3,0"]}
          raw3={["Waga [kg]", "1300", "1350", "1400"]}
        />
        <PrizeBtn />
        <div className="assets">
          <LightBox assets={[asset1, asset2, asset3]} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default DiscHeavyArmasz;
