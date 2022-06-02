import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/brony-talerzowe/zab-sprezynowe-euro-masz") {
    return item;
  }
});
const BTCSEuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>dwa rzędy uzębionych talerzy fi 610 typu C</span>
          </li>
          <li>
            <span>zabezpieczenie przeciążeniowe talerzy w postaci sprężyn</span>
          </li>
          <li>
            <span>odstęp między rzędami talerzy 1150 mm</span>
          </li>
          <li>
            <span>piasta bezobsługowa z uszczelnieniem kasetowym</span>
          </li>
          <li>
            <span>prześwit pod ramą 850mm</span>
          </li>
          <li>
            <span>wał tylny rurowy</span>
          </li>
          <li>
            <span>ekrany boczne</span>
          </li>
          <li>
            <span>składane skrajne talerze</span>
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
            <span>
              Wał tylny tandem (rurowy śr. 450 mm + strunowy śr. 450 mm)
            </span>
          </li>
          <li>
            <span>
              Wał tylny tandem (daszkowy śr. 500 mm + daszkowy śr. 500 mm)
            </span>
          </li>
          <li>
            <span>Piasta kompletna typu LEMKEN + talerz typu LEMKEN</span>
          </li>
          <li>
            <span>Rząd zgrzebeł za każdą sekcją talerzy</span>
          </li>
          <li>
            <span>Piasty SKF</span>
          </li>
          <li>
            <span>Wózek transportowy (koła 10,0/75-15,3)</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={4}
          raw1={["Szerokość", "3,0", "3,5", "4,0"]}
          raw2={["Liczba talerzy [szt.]", "24", "28", "32"]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "105 – 150",
            "120 – 175",
            "140 - 200",
          ]}
          raw4={["Waga [kg]", "1800", "2000", "2200"]}
          raw5={["Wydajność", "2,0 - 3,2", "2,6 - 3,6", "2,8 - 4,4"]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default BTCSEuroMasz;
