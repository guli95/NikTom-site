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
  if (
    item.route === "/agregaty-podrywkowo-orkowe/delta-kret-tolmet-wal oponowy"
  ) {
    return item;
  }
});
const DeltaTolmetTyre = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>
              elementy robocze na zabezpieczeniu sprężynowym typu Kongskilde
              (Delta) lub typu Horsch (Kret)
            </span>
          </li>
          <li>
            <span>
              maksymalna głębokość pracy: z lemieszami bocznymi do 15 cm, bez
              lemieszy do 30 cm
            </span>
          </li>
          <li>
            <span>wzmacniany zaczep</span>
          </li>
          <li>
            <span>wał oponowy (koło 26x12-12)</span>
          </li>
          <li>
            <span>hydrauliczna regulacja głębokości roboczej</span>
          </li>

          <li>
            <span>
              ręczna niezależna regulacja talerzy niwelujących, amortyzacja
              gumowa talerzy
            </span>
          </li>
          <li>
            <span>amortyzacja gumowa talerzy</span>
          </li>
          <li>
            <span>składanie oraz regulacja kąta skrajnych talerzy</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>oświetlenie drogowe</span>
          </li>
          <li>
            <span>elementy robocze - węglik spiekany </span>
          </li>
          <li>
            <span>elementy robocze napawane</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={7}
          colNumber={5}
          raw1={[
            "Model",
            "DELTA / KRET 240",
            "DELTA / KRET 270",
            "DELTA / KRET 300",
            "DELTA / KRET 360",
            "DELTA / KRET 420(hydr. składana)",
            "DELTA / KRET 480(hydr. składana)",
          ]}
          raw2={["Szerokość [m]", "2,4", "2,7", "3,0", "3,6", "4,2", "4,8"]}
          raw3={["Liczba redlic", "8", "9", "10", "12", "14", "16"]}
          raw4={["Liczba talerzy", "6", "7", "8", "10", "12", "14"]}
          raw5={["Waga [kg]", "1500", "1650", "1800", "2150", "2900", "3400"]}
          raw6={[
            "Zapotrzebowanie mocy [KM]",
            "110 - 130",
            "120 - 130",
            "140 - 160",
            "150 - 210",
            "160 - 225",
            "240 - 330",
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

export default DeltaTolmetTyre;
