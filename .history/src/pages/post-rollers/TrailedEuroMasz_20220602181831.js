import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
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
          <h3>Wyposażenie standardowe</h3>
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
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>Wał CAMCRIDGE śr. 500 mm</span>
          </li>
          <li>
            <span>Wał CAMCRIDGE śr. 530 mm</span>
          </li>
          <li>
            <span>Wał CAMCRIDGE śr. 600 mm</span>
          </li>
          <li>
            <span>Koła jezdne 11.5/80-15,3</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={4}
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
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default TrailedEuroMasz;
