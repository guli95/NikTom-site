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
  if (item.route === "/brony-talerzowe/zawieszana") {
    return item;
  }
});
const VSelmar = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>mocowanie wału strunowego </span>
          </li>
          <li>
            <span>talerz marki "WARYŃSKI"</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={6}
          colNumber={7}
          raw1={["Typ", "V-160", "V-180", "V-200", "V-220", "V-240", "V-270"]}
          raw2={[
            "Głębokość robocza",
            "80 - 150mm",
            "80 - 150mm",
            "80 - 150mm",
            "80 - 150mm",
            "80 - 150mm",
            "80 - 150mm",
          ]}
          raw3={[
            "Ilość łożyskowań",
            "2 szt (na skecji)",
            "2 szt (na skecji)",
            "3 szt (na skecji)",
            "3 szt (na skecji)",
            "3 szt (na skecji)",
            "3 szt (na skecji)",
          ]}
          raw4={[
            "Średnice talerzy",
            "510 - 460mm",
            "510 - 460mm",
            "510 - 460mm",
            "510 - 460mm",
            "510 - 460mm",
            "510 - 460mm",
          ]}
          raw5={["Masa [kg]", "310", "350", "390", "440", "490", "540"]}
          raw6={[
            "Belka najazdowa",
            "standard",
            "standard",
            "standard",
            "standard",
            "standard",
            "standard",
          ]}
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

export default VSelmar;
