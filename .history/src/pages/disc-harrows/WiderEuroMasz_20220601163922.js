import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/brony-talerzowe/poszerzona-euro-masz") {
    return item;
  }
});
const WiderEuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wysposażenie standardowe</h3>
          <li>
            <span>
              dwa rzędy uzębionych talerzy fi 560 typu C dla bron 1,8 i 2,0
              talerze fi 460
            </span>
          </li>
          <li>
            <span>
              zabezpieczenie przeciążeniowe talerzy wpostaci amortyzatorów
              gumowych
            </span>
          </li>
          <li>
            <span>odstęp między rzędami talerzy 1150 mm</span>
          </li>
          <li>
            <span>- piasta bezobsługowa zuszczelnieniem kasetowym</span>
          </li>
          <li>
            <span>wał tylny rurowy</span>
          </li>
          <li>
            <span>ekrany boczne</span>
          </li>
          <li>
            <span>składane talerze skrajne</span>
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
          rawNumber={22}
          colNumber={5}
          raw1={["Szerokość", "2,5", "3,0", "3,5", "4,0"]}
          raw2={["Liczba talerzy [szt.]", "20", "24", "28", "32"]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "70 – 110",
            "100 – 130",
            "110 – 140",
            "120 - 150",
          ]}
          raw4={["Waga [kg]", "1100", "1200", "1300", "1400"]}
          raw5={[
            "Wydajność",
            "1,8 – 2,6",
            "2,0 - 3,2",
            "2,6 - 3,6",
            "2,8 - 4,4",
          ]}
          options
          optionsItem1={[
            {
              name: "Wał tylny packer (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem2={[
            {
              name: "Wał tylny crosskill (śr. 400 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem3={[
            {
              name: "Wał tylny pierścieniowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem4={[
            {
              name: "Wał tylny gumowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem5={[
            {
              name: "Wał tylny teownikowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem6={[
            {
              name: "Wał tylny daszkowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem7={[
            {
              name: "Wał tylny ceownikowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem8={[
            {
              name: "Wał tylny dyskowy (śr. 500 mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem9={[
            {
              name: "Wał tylny tandem(rurowy 450mm + strunowy 450mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem11={[
            {
              name: "Wał oponowy z dyszlem (koła 185/65-15)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem12={[
            {
              name: "Talerze 610 mm",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem14={[
            {
              name: "Hydrauliczna regulacja głębokości pracy",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem15={[
            {
              name: "Rząd zgrzebeł wyrównujących",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
          optionsItem16={[
            {
              name: "Piasty SKF",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 4,
            },
          ]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default WiderEuroMasz;
