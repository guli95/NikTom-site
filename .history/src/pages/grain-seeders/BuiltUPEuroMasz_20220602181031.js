import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/11siewniki-zbozowe/SIEWNIK NADBUDOWANY Z AGREGATEM EURO-MASZ/siewnoik-rzedowy-nabudowany-euromasz-05.jpg";
import asset2 from "../../images/11siewniki-zbozowe/SIEWNIK NADBUDOWANY Z AGREGATEM EURO-MASZ/siewnoik-rzedowy-nabudowany-euromasz-07.jpg";
import asset3 from "../../images/11siewniki-zbozowe/SIEWNIK NADBUDOWANY Z AGREGATEM EURO-MASZ/siewnoik-rzedowy-nabudowany-euromasz-08.jpeg";
import asset4 from "../../images/11siewniki-zbozowe/SIEWNIK NADBUDOWANY Z AGREGATEM EURO-MASZ/siewnoik-rzedowy-nabudowany-euromasz-09.jpeg";
import asset5 from "../../images/11siewniki-zbozowe/SIEWNIK NADBUDOWANY Z AGREGATEM EURO-MASZ/siewnoik-rzedowy-nabudowany-euromasz-10.jpeg";
import asset6 from "../../images/11siewniki-zbozowe/SIEWNIK NADBUDOWANY Z AGREGATEM EURO-MASZ/siewnoik-rzedowy-nabudowany-euromasz-11.jpeg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/siewniki-zbozowe/nadbudowany-euro-masz") {
    return item;
  }
});
const BuiltUPEuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <h3>SNT ZESTAW</h3>
          <li>
            <span>dwa rzędy talerzy o średnicy 460 mm</span>
          </li>
          <li>
            <span>rozstaw między rzędami talerzy 600 mm</span>
          </li>
          <li>
            <span>redlice dwutalerzowe z kołem dogniatającym</span>
          </li>
          <li>
            <span>uniwersalne, dzielone koła wysiewające</span>
          </li>
          <li>
            <span>hydrauliczny przerzutnik znaczników</span>
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
            <span>wał packer (śr. 450 mm)</span>
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
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={9}
          colNumber={2}
          raw1={["Szerokość [m]", "3,0"]}
          raw2={["Liczba redlic [szt.]", "24"]}
          raw3={["Zapotrzebowanie mocy [KM]", "130 - 180"]}
          raw4={["Waga [kg]", "2200"]}
          raw5={["Wydajność", "2,7"]}
          options
          optionsItem1={[
            {
              name: "Ścieżki technologiczne załączane mechanicznie",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 1,
            },
          ]}
          optionsItem2={[
            {
              name: "Ścieżki technologiczne załączane elektrycznie ON/OFF",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 1,
            },
          ]}
          optionsItem3={[
            {
              name: "Ścieżki technologiczne załączane elektryczniever. z komputerem sterującym- dodatkowo czujnik niskiego poziomu ziarna- dodatkowo czujnik prędkości siewnika- dodatkowo czujnik obrotów wałka wysiewającego(dodatkowe czujniki są dostępne w przypadku gdy siewnik wyposażony jest w komputer sterujący)",

              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 1,
            },
          ]}
          optionsItem4={[
            {
              name: "Ścieżki technologiczne przedwschodowe (tylko gdy są ścieżki załączane elektr. bądź z komp.",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 1,
            },
          ]}
          optionsItem5={[
            {
              name: "Zestaw podpór",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 1,
            },
          ]}
          optionsItem6={[
            {
              name: "Agregat ANT",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 1,
            },
          ]}
          optionsItem7={[
            {
              name: "Talerze 510 mm",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 1,
            },
          ]}
          optionsItem8={[
            {
              name: "Talerze 510 mm",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 1,
            },
          ]}
          optionsItem9={[
            {
              name: "Wał gumowy (śr. 500mm)",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 1,
            },
          ]}
          optionsItem10={[
            {
              name: "Siewnik do agregatu nabudowanego SN",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 1,
            },
          ]}
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

export default BuiltUPEuroMasz;
