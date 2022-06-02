import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/5grubery/GRUBER SPRĘŻYNA EURO-MASZ/GRUBER NON-STOP/IMG_9856.jpg";
import asset2 from "../../images/5grubery/GRUBER SPRĘŻYNA EURO-MASZ/GRUBER NON-STOP/IMG_9859.jpg";
import asset3 from "../../images/5grubery/GRUBER SPRĘŻYNA EURO-MASZ/GRUBER NON-STOP/IMG_9862.jpg";
import asset4 from "../../images/5grubery/GRUBER SPRĘŻYNA EURO-MASZ/GRUBER NON-STOP/IMG_9864.jpg";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/agregaty-podrywkowe/zab-sprezynowe") {
    return item;
  }
});
const SpringProtector = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>rama główna 100 x 100 mm</span>
          </li>
          <li>
            <span>
              dwa rzędy zębów o przekroju 60 x 25 mm z zabezpieczeniem
              sprężynowym
            </span>
          </li>
          <li>
            <span>
              rząd talerzy zgarniających śr. 460 mm montowanych na elastometrach
            </span>
          </li>
          <li>
            <span>wał tylny rurowy lub strunowy śr. 500mm</span>
          </li>
          <li>
            <span>
              konstrukcja ramy umożliwiająca jednoczesną regulacje głębokości
              pracy talerzy oraz wału
            </span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>Wał tylny pierścieniowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny teownikowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny daszkowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny ceownikowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Hydrauliczna regulacja pracy</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={11}
          colNumber={4}
          raw1={["Szerokość", "2,1", "2,6", "3,0"]}
          raw2={["Liczba talerzy [szt.]", "5", "6", "7"]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "80 - 100",
            "100 - 120",
            "110 - 140",
          ]}
          raw4={["Waga [kg]", "1100", "1250", "1400"]}
          raw5={["Wydajność", "1,5 – 2,1", "1,8 – 2,6", "2,1 – 3,0"]}
        />
        <PrizeBtn />
        <div className="assets">
          <LightBox assets={[asset1, asset2, asset3, asset4]} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default SpringProtector;
