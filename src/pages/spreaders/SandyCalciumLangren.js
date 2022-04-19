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
  if (item.route === "/rozsiewacze/wapnia-soli-i-piasku-langren") {
    return item;
  }
});
const SandyCalciumLangren = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <li>
            <span>pojemność 3100 litrów</span>
          </li>
          <li>
            <span>maksymalna ładowność 3,5t</span>
          </li>
          <li>
            <span>masa rozsiewacza 1150 kg</span>
          </li>
          <li>
            <span>szerokość robocza dla nawozów pylistych 6-8 m</span>
          </li>
          <li>
            <span>szerokość robocza dla nawozów granulowanych 8-12 m</span>
          </li>
          <li>
            <span>wał przekaźnika mocy i plandeka w opcji</span>
          </li>
          <li>
            <span>malowanie proszkowe</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={6}
          colNumber={3}
          raw1={["Model", "RS-3000", "RS-3000 N"]}
          raw2={["Pojemność [l]", "3000", "3000"]}
          raw3={["Materiał", "malowany", "nierdzewny"]}
          raw4={["Szerokość [cm]", "200", "200"]}
          raw5={["Długość [cm]", "470", "470"]}
          raw6={["Wysokość [cm]", "185", "185"]}
          raw7={["Wydajność [ha/h]", "2,5 - 3,5", "2,5 - 3,5"]}
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

export default SandyCalciumLangren;
