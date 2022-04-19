import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/agregaty-uprawowe/nietoperek") {
    return item;
  }
});
const Bat = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe:</h3>

          <li>
            <span>ząb z rędliczką</span>
          </li>
          <li>
            <span>
              spulchniacze śladów z płynną regulacją głębokości i szerokości
            </span>
          </li>
          <li>
            <span>wał przedni strunowy gładki</span>
          </li>
          <li>
            <span>cztery rzędy zębów 32 x 10</span>
          </li>
          <li>
            <span>dwa rzędy wałów krusząco ugniatających</span>
          </li>
          <li>
            <span>malowanie proszkowe</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe:</h3>

          <li>
            <span>ząb wzmacniany z rędliczką</span>
          </li>
          <li>
            <span>ząb wzmacniany z gęsiostopką</span>
          </li>
          <li>
            <span>gęsiostopka</span>
          </li>
          <li>
            <span>oświetlenie</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={9}
          colNumber={8}
          raw1={[
            "Typ",
            "AUN 25",
            "AUN 30",
            "AUN 36H",
            "AUN 42H",
            "AUN 46H",
            "AUN 50H",
            "AUN 60H",
          ]}
          raw2={[
            "Szerokość[m]",
            "2,5",
            "3,0",
            "3,6",
            "4,2",
            "4,6",
            "5,0",
            "6,0",
          ]}
          raw3={["Liczba siłowników", "-", "-", "2", "2", "2", "2", "2"]}
          raw4={["Redliczka", "25", "30", "36", "42", "46", "50", "60"]}
          raw5={["Gęsiostópka", "25", "30", "36", "42", "46", "50", "60"]}
          raw6={[
            "Liczba wałów",
            "4 + 2",
            "4 + 2",
            "6 + 3",
            "6 + 3",
            "6 + 3",
            "8 + 4",
            "8 + 4",
          ]}
          raw7={[
            "Masa[kg]",
            "800",
            "900",
            "1250",
            "1350",
            "1450",
            "1550",
            "1750",
          ]}
          raw8={[
            "Zapotrzebowanie mocy [km]",
            "50-70",
            "65-75",
            "85-95",
            "95-115",
            "110-125",
            "120-140",
            "135-160",
          ]}
          raw9={[
            "Wydajność[ha/h]",
            "1,0 – 2,1",
            "1,2 – 2,5",
            "1,9 - 3,9",
            "2,8 - 4,8",
            "2,9 – 5,3",
            "3,4 - 6,0",
            "4,5 - 7,8",
          ]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default Bat;
