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
  if (item.route === "/brony-talerzowe/mega-rozstaw") {
    return item;
  }
});
const MegaSpacing = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>talerze polski 560mm ze stali borowej </span>
          </li>
          <li>
            <span>malowanie proszkowe</span>
          </li>
          <li>
            <span>talerz polski 560 mm ze stali borowej </span>
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
            <span>tylny wał rurowy lub strunowy</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>talerze polskie 560-660 mm ze stali borowej </span>
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
            <span>wał gumowy </span>
          </li>
          <li>
            <span>dyszel + wózek transportowy (950kg)</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={6}
          colNumber={6}
          raw1={["Szerokość [m]", "2,5", "2,7", "3,0", "3,5", "4,0"]}
          raw2={["Liczba talerzy", "20", "22", "24", "28", "32"]}
          raw3={[
            "Średnica talerzy",
            "560/610/660",
            "560/610/660",
            "560/610/660",
            "560/610/660",
            "560/610/660",
          ]}
          raw4={["Rozstaw rzędów talerzy", "120", "120", "120", "120", "120"]}
          raw5={["Masa [kg]", "1240", "1265", "1340", "1650", "1850"]}
          raw6={[
            "Zapotrzebowanie mocy [KM]",
            "75 - 100",
            "80 - 110",
            "90 - 120",
            "110 - 150",
            "120 - 160",
          ]}
          raw7={[
            "Wydajność [ha/h",
            "1,7 - 2,2",
            "1,9 - 2,8",
            "2,1 - 3,3",
            "2,3 - 3,8",
            "2,5 - 4,2",
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

export default MegaSpacing;
