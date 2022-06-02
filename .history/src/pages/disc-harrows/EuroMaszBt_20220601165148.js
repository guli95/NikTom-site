import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/brony-talerzowe/euro-masz-bt") {
    return item;
  }
});
const EuroMaszBT = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>
              dwa rzędy uzębionych talerzy fi 510 typu C dla bron 1,8 i 2,0
              talerze fi 460
            </span>
          </li>
          <li>
            <span>
              zabezpieczenie przeciążeniowe talerzy w postaci amortyzatorów
              gumowych
            </span>
          </li>
          <li>
            <span>odstęp między rzędami talerzy 690 mm</span>
          </li>
          <li>
            <span>piasta bezobsługowa z uszczelnieniem kasetowym</span>
          </li>
          <li>
            <span>wał tylny rurowy</span>
          </li>
          <li>
            <span>ekrany boczne</span>
          </li>
          <li>
            <span>składane talerze skrajne w wersji 3,0m i 4,0m</span>
          </li>
        </ul>
        <ul>
          <h3>Wysposażenie dodatkowe</h3>
          <li>
            <span>Wał tylny packer (śr. 500 mm)</span>
          </li>
          <li>
            <span>
              Wał tylny crosskill (śr. 400 mm) dla bron o szerokości 2,5m do 4m
            </span>
          </li>
          <li>
            <span>
              Wał tylny pierścieniowy (śr. 500 mm) dla bron o szerokości 2,5m do
              4m
            </span>
          </li>
          <li>
            <span>
              Wał tylny gumowy (śr. 500 mm) dla bron o szerokości 2,5m do 4m
            </span>
          </li>
          <li>
            <span>
              Wał tylny teownikowy (śr. 500 mm) dla bron o szerokości 2,5m do 4m
            </span>
          </li>
          <li>
            <span>
              Wał tylny daszkowy (śr. 500 mm) dla bron o szerokości 2,5m do 4m
            </span>
          </li>
          <li>
            <span>
              Wał tylny ceownikowy (śr. 500 mm) dla bron o szerokości 2,5m do 4m
            </span>
          </li>
          <li>
            <span>
              Wał tylny dyskowy (śr. 500 mm) dla bron o szerokości 2,5m do 4m
            </span>
          </li>
          <li>
            <span>
              Wał tylny tandem (rurowy śr. 450 mm + strunowy śr. 450 mm) dla
              bron o szerokości 2,5m do 4m
            </span>
          </li>
          <li>
            <span>Piasta bezobsługowa dla bron o szerokości 1,8m do 2,2m</span>
          </li>
          <li>
            <span>
              Wał oponowy z dyszlem (koła 185/65-15) dla bron o szerokości 3m do
              4m
            </span>
          </li>
          <li>
            <span>Talerze 510mm dla bron o szerokości 1,8m do 2,2m</span>
          </li>
          <li>
            <span>Talerze 560mm dla bron o szerokości 2,5m do 4m</span>
          </li>
          <li>
            <span>
              Hydrauliczna regulacja głebokości pracy dla bron o szerokości 1,8m
              do 2,2m
            </span>
          </li>
          <li>
            <span>
              Rząd zgrzebeł wyrównujących dla bron o szerokości 1,8m do 2,2m
            </span>
          </li>
          <li>
            <span>Piasty SKF dla bron o szerokości 1,8m do 2,2m</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={8}
          raw1={["Szerokość", "1,8", "2,0", "2,2", "2,5", "2,7", "3,0", "4,0"]}
          raw2={[
            "Liczba talerzy [szt.]",
            "14",
            "16",
            "18",
            "20",
            "20",
            "24",
            "32",
          ]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "30 – 60 ",
            "50 – 70",
            "60 – 80",
            "70 – 110",
            "80 – 120",
            "100 – 130",
            "110 – 150",
          ]}
          raw4={[
            "Waga [kg]",
            "500",
            "600",
            "700",
            "1150",
            "1200",
            "1400",
            "1700",
          ]}
          raw5={[
            "Wydajność",
            "0,8 – 1,2",
            "1,0 – 1,6",
            "1,2 – 1,8",
            "1,8 – 2,6",
            "1,8 – 2,6",
            "2,0 - 3,0",
            "2,8 - 3,8",
          ]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default EuroMaszBT;