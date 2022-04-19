import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/brony-talerzowe/alfa") {
    return item;
  }
});
const Alfa = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe Alfa V2/X4</h3>
          <li>
            <span>talerz polski 510 mm ze stali borowej </span>
          </li>
          <li>
            <span>wzmocnienia konstrukcji</span>
          </li>
          <li>
            <span>tylny wał rurowy lub strunowy </span>
          </li>
          <li>
            <span>automatyczna belka zaczepowa</span>
          </li>

          <li>
            <span>malowanie proszkowe</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe Alfa V2/X4</h3>
          <li>
            <span>talerze polskie 510-610mm ze stali borowej</span>
          </li>
          <li>
            <span>mocowanie pod wał</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={7}
          colNumber={11}
          raw1={[
            "Typ",
            "V2/14",
            "V2/16",
            "V2/18",
            "V2/20",
            "V2/20/3",
            "V2/22",
            "V2/24",
            "V2/27",
            "X4/27",
            "X4/27",
          ]}
          raw2={[
            "Liczba talerzy",
            "10",
            "12",
            "14",
            "16",
            "18",
            "20",
            "22",
            "24",
            "24",
            "28",
          ]}
          raw3={[
            "Średnica talerzy",
            "460/510/560",
            "460/510/560",
            "460/510/560",
            "460/510/560",
            "460/510/560",
            "460/510/560",
            "460/510/560",
            "460/510/560",
            "460/510/560",
            "460/510/560",
          ]}
          raw4={[
            "Ilość łożysk",
            "4",
            "4",
            "4",
            "4",
            "4",
            "4",
            "4",
            "4",
            "8",
            "8",
          ]}
          raw5={[
            "Masa [kg]",
            "340",
            "375",
            "410",
            "440",
            "455",
            "475",
            "565",
            "615",
            "750",
            "830",
          ]}
          raw6={[
            "Zapotrzebowanie [KM/kW]",
            "18 - 24",
            "20 - 28",
            "25 - 32",
            "34 - 52",
            "34 - 52",
            "44 - 60",
            "55 - 65",
            "65 - 75",
            "75 - 85",
            "80 - 90",
          ]}
          raw7={[
            "Wydajność [ha/h",
            "1,0 - 2,2",
            "1,1 - 2,2",
            "1,2 - 2,8",
            "1,3 - 3,5",
            "1,3 - 3,5",
            "1,4 - 4,2",
            "1,5 - 4,6",
            "1,6 - 5,2",
            "1,7 - 5,2",
            "1,9 - 5,4",
          ]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default Alfa;
