import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/11siewniki-zbozowe/SIEWNIK STOPKOWY EURO-MASZ/SR/IMG_9804.jpg";
import asset2 from "../../images/11siewniki-zbozowe/SIEWNIK STOPKOWY EURO-MASZ/SR/IMG_9806.jpg";
import asset3 from "../../images/11siewniki-zbozowe/SIEWNIK STOPKOWY EURO-MASZ/SR/IMG_9807.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/siewniki-zbozowe/sr-euro-masz") {
    return item;
  }
});
const SREuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>redlice stopkowe</span>
          </li>
          <li>
            <span>dzielone koła wysiewające</span>
          </li>
          <li>
            <span>koła</span>
          </li>
          <li>
            <span>hydrauliczny przerzutnik znaczników</span>
          </li>
          <li>
            <span>skrajne redlice talerzowe</span>
          </li>
          <li>
            <span>pomost załadunkowy ze stopniami</span>
          </li>
          <li>
            <span>bezstopniowa skrzynia przekładniowa</span>
          </li>
          <li>
            <span>docisk redlic centralny, regulowany bezstopniowo</span>
          </li>
          <li>
            <span>zagarniacz</span>
          </li>
          <li>
            <span>rynienki do próby kręconej</span>
          </li>
          <li>
            <span>mieszadło w skrzyni nasiennej</span>
          </li>
          <li>
            <span>klapki zapobiegające zapychaniu się redlic</span>
          </li>
          <li>
            <span>spulchniacz śladów do wersji SR30</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>Ścieżki technologiczne załączane mechanicznie</span>
          </li>
          <li>
            <span>Ścieżki technologiczne załączane elektrycznie ON/OFF</span>
          </li>
          <li>
            <span>
              Ścieżki technologiczne załączane elektrycznie ver. z komputerem
              sterującym- dodatkowo czujnik niskiego poziomu ziarna- dodatkowo
              czujnik prędkości siewnika- dodatkowo czujnik obrotów wałka
              wysiewającego(dodatkowe czujniki są dostępne w przypadku gdy
              siewnik wyposażony jest w komputer sterujący)"
            </span>
          </li>
          <li>
            <span>
              Ścieżki technologiczne przedwschodowe (tylko gdy są ścieżki
              załączane elektr. bądź z komp.
            </span>
          </li>
          <li>
            <span>oświetlenie</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={6}
          colNumber={4}
          raw1={["Szerokość [m]", "2,5", "2,7", "3,0"]}
          raw2={["Liczba redlic [szt.]", "21", "23", "25"]}
          raw3={["Zapotrzebowanie mocy [KM]", "40 - 60", "50 - 70", "60 - 80"]}
          raw4={["Waga [kg]", "600", "620", "640"]}
          raw5={["Wydajność", "2,3", "2,5", "2,7"]}
          raw6={["Pojemność zbiornika [l]", "450", "480", "550"]}
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

export default SREuroMasz;