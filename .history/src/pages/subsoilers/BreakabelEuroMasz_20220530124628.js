import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/9glebosze/GŁĘBOSZ KOŁEK BEZ KÓŁ EURO-MASZ/GZ/IMG_9882.jpg";
import asset2 from "../../images/9glebosze/GŁĘBOSZ KOŁEK BEZ KÓŁ EURO-MASZ/GZ/IMG_9883.jpg";
import asset3 from "../../images/9glebosze/GŁĘBOSZ KOŁEK BEZ KÓŁ EURO-MASZ/GZ/IMG_9884.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/glebosze/zab-zrywalne-euro-masz") {
    return item;
  }
});
const BreakableEuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>
              dwa rzędy zębów z możliwością regulacji ich położenia względem
              siebie
            </span>
          </li>
          <li>
            <span>prześwit pod ramą 90 cm</span>
          </li>
          <li>
            <span>głębokość pracy do 60 cm</span>
          </li>
          <li>
            <span>zabezpieczenie zrywalne przeciw kamieniom</span>
          </li>
          <li>
            <span>automatyczna belka zaczepowa</span>
          </li>
          <li>
            <span>dłuta wymienne</span>
          </li>
          <li>
            <span>zęby przesuwne względem siebie</span>
          </li>
          <li>
            <span>regulacja głebokości pracy na wale</span>
          </li>
          <li>
            <span>rama sztywna 200x100x10</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>Wał tylny rurowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny packer (śr. 500)</span>
          </li>
          <li>
            <span>Wał tylny daszkowy (śr. 500)</span>
          </li>

          <li>
            <span>Wał tylny teownikowy (śr. 500)</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={5}
          raw1={["Szerokość [m]", "2,1", "2,1", "2,4", "3,0"]}
          raw2={["Liczba nóg", "2,", "3", "4", "5"]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "60 - 80",
            "80 - 110",
            "110 - 130",
            "130 - 160",
          ]}
          raw4={["Waga [kg]", "750", "800", "900", "950"]}
          raw5={[
            "Wydajność [ha/h]",
            "0,8 – 1,0",
            "1,0 – 1,3",
            "1,3 – 1,6",
            "1,5 – 2,0",
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

export default BreakableEuroMasz;
