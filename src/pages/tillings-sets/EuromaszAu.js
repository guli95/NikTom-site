import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/dji-5331597_1280.jpg";
import asset2 from "../../images/slider_1.jpg";
import asset3 from "../../images/slider_2.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/agregaty-uprawowe/euro-maszau") {
    return item;
  }
});
const EuroMaszAu = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <ul>
        <li>
          <span>
            cztery rzędy zębówsprężystych 32x10 z płynną regulacją głębokości w
            zakresie 0-12 cm
          </span>
        </li>
        <li>
          <span>
            spulchniacze śladów z płynną regulacją głębokości i szerokości oraz
            zabezpieczeniesprężynowe
          </span>
        </li>
        <li>
          <span>
            sekcja krusząco-ugniatająca– dwa rzędy wałków fi 300 z możliwością
            regulacji docisku
          </span>
        </li>
        <li>
          <span>składany hydraulicznie (wersje powyżej 3 m)</span>
        </li>
        <li>
          <span>automatyczna belka zaczepowa</span>
        </li>
      </ul>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={9}
          raw1={[
            "Szerokość",
            "2,1",
            "2,7",
            "3,0",
            "3,2",
            "3,6",
            "4,2",
            "5,0",
            "5,6",
          ]}
          raw2={[
            "Liczba zębów [szt.]",
            "21",
            "27",
            "30",
            "32",
            "36",
            "42",
            "50",
            "56",
          ]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "40 - 55",
            "50 - 70",
            "65 - 75",
            "75 - 85",
            "85 - 95",
            "95 - 115",
            "110 - 140",
            "120 –160",
          ]}
          raw4={[
            "Waga [kg]",
            "700",
            "800",
            "1000",
            "1100",
            "1250",
            "1350 ",
            "1550",
            "1640",
          ]}
          raw5={[
            "Wydajność[ha/h]",
            "0,8 – 1,6",
            "1,0 – 2,1",
            "1,2 – 2,5",
            "1,5 – 3,0",
            "2,0 – 4,0",
            "2,9 – 5,0",
            "3,5 – 6,1",
            "4,1 – 7,2",
          ]}
          options
          optionsItem1={[
            {
              name: "Podwójny spulchniacz",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 6,
            },
            {
              name: "zawsze",
              len: 2,
            },
          ]}
          optionsItem2={[
            {
              name: "Ząb wzmocniony 45x10",
              len: 1,
            },
            {
              name: "-",
              len: 3,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
            },
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

export default EuroMaszAu;
