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
  if (item.route === "/zgrabiarki-karuzelowe/euro-masz") {
    return item;
  }
});
const EuroMaszRake = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>ZG</h3>
          <li>
            <span>napęd przedni WOM, obroty wałka 540</span>
          </li>
          <li>
            <span>układ jezdny tandem</span>
          </li>
          <li>
            <span>skręt 10 stopni</span>
          </li>
          <li>
            <span>szerokość transportowa 1400 mm</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={9}
          colNumber={2}
          raw1={["Szerokość [m]", "3,5"]}
          raw2={["Ilość ramion [szt.]", "9"]}
          raw3={["Ilość palcy na 1 ramie [szt.]", "3"]}
          raw4={["Zapotrzebowanie mocy [KM]", "od 25"]}
          raw5={["Waga [kg]", "440"]}
          raw6={["Wydajność", "3,5"]}
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

export default EuroMaszRake;
