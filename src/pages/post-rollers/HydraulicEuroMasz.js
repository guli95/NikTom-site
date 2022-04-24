import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/waly-posiewne/ciagany-hydrauliczny-euro-masz") {
    return item;
  }
});
const HydraulicEuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>WPJH</h3>
          <li>
            <span>trzy sekcje wału CAMBRIDGE śr. 450 mm</span>
          </li>
          <li>
            <span>rama z zaczepem na dolny hitch ciągnika</span>
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
            <span>trzy siłowniki</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={10}
          colNumber={3}
          raw1={["Szerokość [m]", "5,0", "6,2"]}
          raw2={["Zapotrzebowanie mocy [KM]", "100 - 120", "110 - 150"]}
          raw3={["Waga [kg]", "3000", "3800"]}
          raw4={["Wydajność", "4,5 – 5,5", "5,5 – 6,5"]}
          options
          optionsItem1={[
            {
              name: "Wał CAMCRIDGE śr. 500 mm",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 2,
            },
          ]}
          optionsItem2={[
            {
              name: "Wał CAMCRIDGE śr. 530 mm",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 2,
            },
          ]}
          optionsItem3={[
            {
              name: "Wał CAMCRIDGE śr. 600 mm – koła jezdne 400/60-15,5 ",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 2,
            },
          ]}
          optionsItem4={[
            {
              name: "Włóka",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 2,
            },
          ]}
          optionsItem5={[
            {
              name: "Koła jezdne 400/60-15,5",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 2,
            },
          ]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default HydraulicEuroMasz;
