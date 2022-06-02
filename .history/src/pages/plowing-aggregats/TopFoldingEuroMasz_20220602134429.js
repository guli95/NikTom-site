import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (
    item.route === "/agregaty-podrywkowo-orkowe/wal-skladany-na-gore-euro-masz"
  ) {
    return item;
  }
});
const TopFoldingEuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <h3>APOS</h3>
          <li>
            <span>trzy rzędy zębów 25 x 60 z zabezpieczeniem sprężynowym</span>
          </li>
          <li>
            <span>
              rząd talerzy zgarniających śr. 460mm montowanych na elastometrach
            </span>
          </li>
          <li>
            <span>wał tylny rurowy śr. 500mm</span>
          </li>
          <li>
            <span>hydrauliczna regulacja głębokości pracy</span>
          </li>
          <li>
            <span>
              składanie hydraulicznie w celu zmniejszenia długości transportowej
              (z 3,6mna 2,15m) co zmienia położenie środka ciężkości (czyli
              mniejsze obciążeniedla traktora podczas przejazdu) oraz ułatwia
              manewrowanie z maszyną
            </span>
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
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={17}
          colNumber={2}
          raw1={["Szerokość", "3,0"]}
          raw2={["Liczba zębów [szt.]", "10"]}
          raw3={["Zapotrzebowanie mocy [KM]", "120-160"]}
          raw4={["Waga [kg]", "1700"]}
          raw5={["Wydajność", "2,1-3,0"]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default TopFoldingEuroMasz;
