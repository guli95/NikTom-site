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
  if (item.route === "/waly-posiewne/ciagany-euro-masz") {
    return item;
  }
});
const TrailedEuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>WPJ</h3>
          <li>
            <span>trzy sekcje wału CAMBRIDGE śr. 450 mm</span>
          </li>
          <li>
            <span>rama z zaczepem na górny hitch ciągnika</span>
          </li>
          <li>
            <span>stopa podporowa</span>
          </li>
          <li>
            <span>zabezpieczenie transportowe</span>
          </li>
          <li>
            <span>koła jezdne 10,0/75-15,3</span>
          </li>
          <li>
            <span>jeden siłownik</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={9}
          colNumber={4}
          raw1={["Szerokość [m]", "4,5", "5,0", "6,2"]}
          raw2={[
            "Zapotrzebowanie mocy [KM]",
            "80 - 90",
            "90 - 100",
            "95 - 110",
          ]}
          raw3={["Waga [kg]", "1950", "2250", "2600"]}
          raw4={["Wydajność", "3,5 – 4,5", "4,5 – 5,5", "5,5 – 6,5"]}
          options
          optionsItem1={[
            {
              name: "Wał CAMCRIDGE śr. 500 mm",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem2={[
            {
              name: "Wał CAMCRIDGE śr. 530 mm",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem3={[
            {
              name: "Wał CAMCRIDGE śr. 600 mm",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
          ]}
          optionsItem4={[
            {
              name: "Koła jezdne 11.5/80-15,3",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 3,
            },
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

export default TrailedEuroMasz;
