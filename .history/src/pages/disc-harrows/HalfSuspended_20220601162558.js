import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/brony-talerzowe/pol-zawieszana-euro-masz") {
    return item;
  }
});
const HalfSuspended = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description"></div>
      <ul>
        <li>
          <span>dwa rzędy uzębionych talerzy fi 560 typu C</span>
        </li>
        <li>
          <span>
            zabezpieczenie przeciążeniowe talerzy w postaci amortyzatorów
            gumowych
          </span>
        </li>
        <li>
          <span>odstęp między rzędami talerzy 900 mm</span>
        </li>
        <li>
          <span>- piasta bezobsługowa z uszczelnieniem kasetowym</span>
        </li>
        <li>
          <span>wał tylny rurowy</span>
        </li>
        <li>
          <span>ekrany boczne</span>
        </li>
        <li>
          <span>wersja tylko półzawieszana</span>
        </li>
        <li>
          <span>koło transportowe 10,0x75-15,3</span>
        </li>
      </ul>
      <ul>
        <h3>Wyposażenie dodatkowe</h3>
        <li>
          <span>Wał tylny packer (śr. 500 mm)</span>
        </li>
        <li>
          <span>Wał tylny crosskill (śr. 400 mm)</span>
        </li>
        <li>
          <span>Wał tylny pierścieniowy (śr. 500 mm)</span>
        </li>
        <li>
          <span>Wał tylny gumowy (śr. 500 mm)</span>
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
          <span>Wał tylny dyskowy (śr. 500 mm)</span>
        </li>
        <li>
          <span>Talerze 610 mm</span>
        </li>
        <li>
          <span>Piasty SKF</span>
        </li>
      </ul>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={6}
          raw1={["Szerokość", "2,5", "2,7", "3,0", "3,5", "4,0"]}
          raw2={["Liczba talerzy [szt.]", "20", "20", "24", "28", "32"]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "70 – 110",
            "80 - 120",
            "100 – 130",
            "105 – 140",
            "110 - 150",
          ]}
          raw4={["Waga [kg]", "1450", "1500", "1700", "1950", "2100"]}
          raw5={[
            "Wydajność",
            "1,8 – 2,6",
            "1,8 – 2,6",
            "2,1 - 3,3",
            "2,4 - 3,3",
            "2,8 - 3,8",
          ]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default HalfSuspended;
