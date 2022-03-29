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
  if (item.route === "/agregaty-uprawowe-hydropak/hydrauliczna-tiger") {
    return item;
  }
});
const HydraulicTiger = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>talerz polski 560mm ze stali borowej</span>
          </li>
          <li>
            <span>wzmocnienia konstrukcji</span>
          </li>
          <li>
            <span>piasty 6. otworowe</span>
          </li>
          <li>
            <span>system amortyzujący w postaci wałków gumowych</span>
          </li>

          <li>
            <span>ekrany boczne</span>
          </li>
          <li>
            <span>
              uniwersalny system zaczepu dla II i III kategorii zawieszenia
            </span>
          </li>
          <li>
            <span>tylny wał rurowy lub strunowy</span>
          </li>
          <li>
            <span>malowanie proszkowe</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>talerze polskie 560-660mm ze stali borowej</span>
          </li>
          <li>
            <span>bezobsługowe piasty SKF</span>
          </li>
          <li>
            <span>wał packera</span>
          </li>
          <li>
            <span>wał gumowy</span>
          </li>
          <li>
            <span>wał daszkowy</span>
          </li>
          <li>
            <span>wał crosskill</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={9}
          colNumber={6}
          raw1={["Typ", "T II 25", "T II 27", "T II 30", "T II 35", "T II 40"]}
          raw2={["Szerokość", "2,5", "2,7", "3,0", "3,5", "4,0"]}
          raw3={["Liczba siłowników", "2", "2", "2", "2", "2"]}
          raw4={["Liczba talerzy", "20", "22", "24", "28", "32"]}
          raw5={[
            "Średnica talerzy",
            "560/610/660",
            "560/610/660",
            "560/610/660",
            "560/610/660",
            "560/610/660",
          ]}
          raw6={["Rozstaw rzędów talerzy", "90", "90", "90", "90", "90"]}
          raw7={["Masa [kg]", "1140", "1165", "1240", "1550", "1750"]}
          raw8={[
            "Zapotrzebowanie [KM]",
            "90 - 120",
            "100 - 130",
            "110 - 150",
            "130 - 150",
            "140 - 160",
          ]}
          raw9={[
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

export default HydraulicTiger;
