import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/brony-talerzowe/tiger-jr") {
    return item;
  }
});
const TigerJr = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>malowanie proszkowe</span>
          </li>
          <li>
            <span>talerz polski 510 mm ze stali borowej </span>
          </li>
          <li>
            <span>wzmocnienie konstrukcji </span>
          </li>
          <li>
            <span>piasty 6 -cio otworowe </span>
          </li>

          <li>
            <span>system amortyzujący w postaci wałków gumowych </span>
          </li>
          <li>
            <span>ekrany boczne </span>
          </li>
          <li>
            <span>uniwersalny system zaczepu dla kat. II i III kat. </span>
          </li>
          <li>
            <span>zawieszenia</span>
          </li>
          <li>
            <span>tylny wał rurowy lub strunowy</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>talerze polskie 460-560 mm ze stali borowej </span>
          </li>
          <li>
            <span>bezobsługowe piasty SKF </span>
          </li>
          <li>
            <span>wał packera </span>
          </li>
          <li>
            <span>wał croskill </span>
          </li>
          <li>
            <span>wał daszkowy </span>
          </li>
          <li>
            <span>wał podwójny daszkowy </span>
          </li>
          <li>
            <span>oświetlenie </span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={8}
          colNumber={9}
          raw1={[
            "Typ",
            "TJ II 14",
            "TJ II 16",
            "TJ II 18",
            "TJ II 20",
            "TJ II 22",
            "TJ II 25",
            "TJ II 27",
            "TJ II 30",
          ]}
          raw2={[
            "Szerokość [m]",
            "1,4",
            "1,6",
            "1,8",
            "2,0",
            "2,2",
            "2,5",
            "2,7",
            "3,0",
          ]}
          raw3={[
            "Liczba talerzy",
            "10",
            "12",
            "14",
            "16",
            "18",
            "20",
            "22",
            "24",
          ]}
          raw4={[
            "Średnica talerzy",
            "460/510/560",
            "460/510/560",
            "460/510/560",
            "460/510/560",
            "460/510/560",
            "460/510/560",
            "460/510/560",
            "460/510/560",
          ]}
          raw5={[
            "Rozstaw rzędów talerzy",
            "75",
            "75",
            "75",
            "75",
            "75",
            "75",
            "75",
            "75",
          ]}
          raw6={[
            "Masa [kg]",
            "430",
            "480",
            "530",
            "580",
            "630",
            "720",
            "810",
            "900",
          ]}
          raw7={[
            "Zapotrzebowanie [KM]",
            "11 - 25",
            "15 - 25",
            "20 - 40",
            "40 - 60",
            "45 - 65",
            "60 - 80",
            "65 - 85",
            "75 - 95",
          ]}
          raw8={[
            "Wydajność [ha/h",
            "0,7 - 1,4",
            "0,9 - 1,4",
            "1,1 - 1,7",
            "1,3 - 3,8",
            "1,5 - 2,0",
            "1,7 - 2,2",
            "1,9 - 2,8",
            "2,1 - 3,3",
          ]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default TigerJr;
