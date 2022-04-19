import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/4brony-talerzowe/Simply 200/IMG_0362.png";
import asset2 from "../../images/4brony-talerzowe/Simply 200/IMG_0373.png";
import asset3 from "../../images/4brony-talerzowe/Simply 270/simply 2020 270.png";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/brony-talerzowe/kompaktowa-simply-tolmet") {
    return item;
  }
});
const CompactSimplyTolmet = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>dwa rzędy talerzy na amortyzacji gumowej</span>
          </li>
          <li>
            <span>
              talerze o średnicy 510mm wyposażone w bezobługowe piasty z
              uszczelnieniem
            </span>
          </li>
          <li>
            <span>
              tylny łożyskowany(łożysko wahliwe UCF 208) wał rurowy Ø 510mm lub
              strunowy Ø 440mm
            </span>
          </li>
          <li>
            <span>automatyczna belka zaczepowa </span>
          </li>

          <li>
            <span>rozstaw pomiędzy belkami talerzowymi 800mm</span>
          </li>
          <li>
            <span>
              kosz na obciążniki(dla modeli Simlply 220 - 300 dwa kosze){" "}
            </span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>ekrany boczne </span>
          </li>
          <li>
            <span>zgrzebło wyrównujące </span>
          </li>
          <li>
            <span>wał pierścieniowy Ø 500mm </span>
          </li>
          <li>
            <span>oświetleni drogowe</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={7}
          colNumber={10}
          raw1={[
            "Model",
            "Simply 120",
            "Simply 140",
            "Simply 160",
            "Simply 180",
            "Simply 200",
            "Simply 220",
            "Simply 250",
            "Simply 270",
            "Simply 300",
          ]}
          raw2={[
            "Szerokość [m]",
            "1,2",
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
            "8",
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
            "Masa [kg]",
            "500",
            "550",
            "600",
            "650",
            "700",
            "850",
            "900",
            "950",
            "1000",
          ]}
          raw5={[
            "Zapotrzebowanie mocy [KM]",
            "30 - 40",
            "35 - 45",
            "40 - 50",
            "50 - 60",
            "60 - 70",
            "65 - 75",
            "70 - 80",
            "75 - 90",
            "90 - 100",
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

export default CompactSimplyTolmet;
