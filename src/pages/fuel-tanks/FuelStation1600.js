import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/16zbiorniki-paliwa/ZBIORNIKI PALIWA/270225899_1916448248546381_3771377480391690051_n.jpg";
import asset2 from "../../images/16zbiorniki-paliwa/ZBIORNIKI PALIWA/270830440_1086964958754071_6022434813285045451_n.jpg";
import asset3 from "../../images/16zbiorniki-paliwa/ZBIORNIKI PALIWA/270849460_1140936660075006_1041138913256934312_n.jpg";
import asset4 from "../../images/16zbiorniki-paliwa/ZBIORNIKI PALIWA/270909961_482304533271974_473871635918022471_n.jpg";
import asset5 from "../../images/16zbiorniki-paliwa/ZBIORNIKI PALIWA/270926389_680510809630186_6232158937419380805_n.jpg";
import asset6 from "../../images/16zbiorniki-paliwa/ZBIORNIKI PALIWA/270966524_2712606272374954_4306760260317558685_n.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/zbiorniki-paliwa/dwuplaszczowy-1600-1300") {
    return item;
  }
});
const FuelStation1600 = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <p>
        Linia produktów Fuel Station przeznaczona jest do bezpiecznego
        składowania i wewnętrznej dystrtbucji oleju napędowego. To doskonałe
        rozwiązanie dla firm i osób prywatnych posiadających pojazdy z silnikami
        wysokoprężnymi np. samochody maszyny budowlane, wózki widłowe, traktory
      </p>
      <div className="description">
        <ul>
          <h1>wyposażenie standardowe</h1>
          <li>
            <span>duża skrzynia dystrybucyjna z dwoma zamkami na klucz</span>
          </li>
          <li>
            <span>
              wąż ssący zabezpieczony filtrem siatkowym i zaworem
              przeciwzwrotnym
            </span>
          </li>
          <li>
            <span>zamykany właz dostępu 16" w płaszczu zewnętrznym</span>
          </li>
          <li>
            <span>
              zamykany wlew w płaszczu wewnętrznym wraz z zaworem
              odpowietrzającym
            </span>
          </li>
          <li>
            <span>pokrywa rewizyjna o średnicy 16" w płaszczu wewnętrznym</span>
          </li>
          <li>
            <span>przyłącze uziemienia</span>
          </li>
          <li>
            <span>tablica montażowa z uchwytem na pistolet</span>
          </li>
        </ul>
        <ul>
          <h1>wyposażenie opcjonalne</h1>
          <li>
            <span>dłuższy przewód dystrybucyjny</span>
          </li>
          <li>
            <span>zwijadło automatyczne z wężem 6 - 14m</span>
          </li>
          <li>
            <span>szklany filtr paliwa</span>
          </li>
          <li>
            <span>oświetlenie skrzynki dystrybucyjnej LED</span>
          </li>
          <li>
            <span>wskaźnik poziomu paliwa pokazujący w litrach +/-1%</span>
          </li>
          <li>
            <span>
              system zarządzania wydanym paliwem z kontrolą dostępu SMDP,
              Xtrack, Cube
            </span>
          </li>
          <li>
            <span>wydajniejsza pompa PIUSI 79l/min</span>
          </li>
          <li>
            <span>licznik łączony na flanszach PIUSI K600</span>
          </li>
          <li>
            <span>licznik z większym wyświetlaczem Modiflow JFC</span>
          </li>
          <li>
            <span>
              elektroniczny bezprzewodowy czujnik przecieku ze zintegowanym
              wskaźnikiem poziomu paliwa
            </span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={6}
          colNumber={2}
          raw1={["Pojemność [l]", "1600"]}
          raw2={["Długość [m]", "1,65"]}
          raw3={["Szerokość [m]", "1,2"]}
          raw4={["wysokość [m]", "2,1/1,8"]}
          raw5={["Gwarancja na szczelność zbiornika", "10 lat"]}
          raw6={["Gwarancja na wyposażenie", "2 lata"]}
        />
        <PrizeBtn />
        <div className="assets">
          <LightBox assets={[asset1, asset2, asset3, asset4, asset5, asset6]} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default FuelStation1600;
