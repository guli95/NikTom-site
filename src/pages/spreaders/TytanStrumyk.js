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
  if (item.route === "/rozsiewacze/dwutarczowy-tytan-strumyk") {
    return item;
  }
});
const TytanStrumyk = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>dwie tarcze kwasoodporne</span>
          </li>
          <li>
            <span>zasuwki kwasoodporne</span>
          </li>
          <li>
            <span>kosz o grubosci 2mm</span>
          </li>
          <li>
            <span>wzmocnienia konstrukcji</span>
          </li>
          <li>
            <span>przekładnie żeliwne Strumyk</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie opcjonalne</h3>
          <li>
            <span>otwieranie / zamykanie hydrauliczne</span>
          </li>
          <li>
            <span>siew graniczny</span>
          </li>
          <li>
            <span>plandeka</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={6}
          colNumber={7}
          raw1={[
            "Model",
            "S 600",
            "S 800",
            "S 1000",
            "S 1200",
            "S 1400",
            "S 1600",
          ]}
          raw2={["Pojemność [l]", "600", "800", "1000", "1200", "1400", "1600"]}
          raw3={["Liczba siłowników [szt.]", "1", "1", "1", "1", "1", "1"]}
          raw4={[
            "Szerokość  [m]",
            "12 - 24",
            "12 - 24",
            "12 - 24",
            "12 - 24",
            "12 - 24",
            "12 - 24",
          ]}
          raw5={["Waga [kg]", "190", "201", "231", "236", "267", "298"]}
          raw6={["Zapotrzebowanie [KM]", "55", "55", "55", "55", "55", "55"]}
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

export default TytanStrumyk;
