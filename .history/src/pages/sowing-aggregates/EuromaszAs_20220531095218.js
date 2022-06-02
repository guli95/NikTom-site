import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/2agregaty-uprawowo-siewne/AS PACKER/IMG_9794.jpg";
import asset2 from "../../images/2agregaty-uprawowo-siewne/AS PACKER/IMG_9795.jpg";
import asset3 from "../../images/2agregaty-uprawowo-siewne/AS PACKER/IMG_9796.jpg";
import asset4 from "../../images/2agregaty-uprawowo-siewne/AS PACKER/IMG_9798.jpg";
import asset5 from "../../images/2agregaty-uprawowo-siewne/AS PACKER/IMG_9802.jpg";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/agregaty-uprawowo-siewne/euro-masz-as") {
    return item;
  }
});
console.log(info);
const EuroMaszAs = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>dwa rzędy zębów sprężystych 32x10</span>
          </li>
          <li>
            <span>wał tylny rurowy (450mm) lub strunowy(300mm)</span>
          </li>
          <li>
            <span>hydropak na 2 siłowniki</span>
          </li>
          <li>
            <span>wał przedni strunowy (300mm)</span>
          </li>
          <li>
            <span>udźwig hydropaku 1500 kg</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>Trzeci rząd zębów</span>
          </li>
          <li>
            <span>Wał tylny packer (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny crosskill (śr. 400 mm)</span>
          </li>
          <li>
            <span>Wał tylny gumowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny pierścieniowy (śr. 500 mm)</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={5}
          raw1={["Szerokość", "2,5", "2,7", "3,0", "4,0"]}
          raw2={["Liczba zębów [szt.]", "16", "18", "20", "27"]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "60-70",
            "70-90",
            "80-100",
            "110-140",
          ]}
          raw4={["Waga [kg]", "560", "600", "630", "700"]}
          raw5={[
            "Wydajność[ha/h]",
            "1,6 - 2,3",
            "1,8 - 2,5",
            "2,0 - 2,9",
            "2,8 - 4,2",
          ]}
        />
        <PrizeBtn />
        <div className="assets">
          <LightBox assets={[asset1, asset2, asset3, asset4, asset5]} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default EuroMaszAs;
