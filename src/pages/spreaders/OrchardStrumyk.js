import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/rozsiewacze/sadowniczy-lejek-strumyk") {
    return item;
  }
});
const OrchardStrumyk = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>przekładnia bezobsługowa</span>
          </li>
          <li>
            <span>talerz wysiewu h-17 6-cio łopatkowy</span>
          </li>
          <li>
            <span>dwie dźwignie z możliwością regulacji wysiewu</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie opcjonalne</h3>
          <li>
            <span>otwieranie hydrauliczne</span>
          </li>
          <li>
            <span>trzecia dźwignia</span>
          </li>
          <li>
            <span>oświetlenie</span>
          </li>
          <li>
            <span>kratka</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={6}
          raw1={["Model", "S 200", "S 300", "S 350", "S 400", "S 500"]}
          raw2={["Pojemność [l]", "200", "300", "350", "400", "500"]}
          raw3={[
            "Szerokość [m]",
            "4 - 12",
            "4 - 12",
            "4 - 12",
            "4 - 12",
            "4 - 12",
          ]}
          raw4={["Waga [kg]", "65", "68", "70", "73", "76"]}
          raw5={["Zapotrzebowanie [KM]", "21", "21", "21", "21", "21"]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default OrchardStrumyk;
