import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/4brony-talerzowe/BRONA BTC EURO-MASZ/BTC/IMG_9831.jpg";
import asset2 from "../../images/4brony-talerzowe/BRONA BTC EURO-MASZ/BTC/IMG_9832.jpg";
import asset3 from "../../images/4brony-talerzowe/BRONA BTC EURO-MASZ/BTC/IMG_9834.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/brony-talerzowe/hydraulicznie-rozkladana-euro-masz") {
    return item;
  }
});
const HeavyHydraulicBTCH = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wysposażenie standardowe</h3>
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
            <span>odstęp między rzędami talerzy 1050 mm</span>
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
            <span>hydraulicznie składana</span>
          </li>
          <li>
            <span>szerokość transportowa 2950mm</span>
          </li>
        </ul>
        <ul>
          <h3>Wysposażenie dodatkowe</h3>
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
            <span>Talerze 610mm</span>
          </li>
          <li>
            <span>Hydrauliczna regulacja głebokości pracy</span>
          </li>
          <li>
            <span>Rząd zgrzebeł wyrównujących</span>
          </li>
          <li>
            <span>Piasty SKF</span>
          </li>

          <li>
            <span>Wózek transportowy(koła 400/60-15,5)</span>
          </li>
          <li>
            <span>Przednie koła podporowe</span>
          </li>

          <li>
            <span>Tablice ostrzegawcze z oświetleniem</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={6}
          raw1={["Szerokość", "4,0H", "4,5H", "5,0H", "5,5H", "6,0H"]}
          raw2={["Liczba talerzy [szt.]", "32", "36", "40", "44", "48"]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "120 – 150",
            "130 - 160",
            "140 – 180",
            "160 – 190",
            "160 - 200",
          ]}
          raw4={["Waga [kg]", "2200", "2500", "2800", "3100", "3500"]}
          raw5={[
            "Wydajność",
            "2,8 – 4,2",
            "3,1 – 5,0",
            "4,0 - 6,0",
            "4,4 - 6,1",
            "5,0 - 7,0",
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

export default HeavyHydraulicBTCH;
