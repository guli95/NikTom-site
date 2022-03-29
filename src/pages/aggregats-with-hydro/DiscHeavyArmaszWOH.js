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
  if (
    item.route === "/agregaty-uprawowe-hydropak/talerz-bez-hydropaku-armasz"
  ) {
    return item;
  }
});
const DiscHeavyArmaszWOH = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul className="long-list">
          <h3>Wyposażenie dodatkowe:</h3>
          <li>
            <span>hydraulika wału</span>
          </li>
          <li>
            <span>hydropak przy rozstawie 85cm</span>
          </li>
          <li>
            <span>oświetlenie</span>
          </li>
          <li>
            <span>piasty bezobsługowe typ skf</span>
          </li>
          <li>
            <span>podpory pod koła</span>
          </li>
          <li>
            <span>rozstaw 85cm(tzw. brona)</span>
          </li>
          <li>
            <span>skrobaki do wału</span>
          </li>
          <li>
            <span>talerze Ø 610</span>
          </li>
          <li>
            <span>uchwyt pod hydropak do brony</span>
          </li>
          <li>
            <span>wał ceownikowy</span>
          </li>
          <li>
            <span>wał crosskill</span>
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
            <span>wał gumowy</span>
          </li>
          <li>
            <span>wał oponowy</span>
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
          colNumber={6}
          raw1={["Typ", "ATC 125", "ATC 127", "ATC 130", "ATC 131", "ATC 132"]}
          raw2={["Szerokość robocza [m]", "2,5", "2,7", "3,0", "3,5", "4,0"]}
          raw3={["Waga [kg]", "1150", "1200", "1250", "1600", "1800"]}
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

export default DiscHeavyArmaszWOH;
