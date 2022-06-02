import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/5grubery/GRUBER ŚLIMAK EURO-MASZ/165283503_917954165605353_3263555855815076844_n.jpg";
import asset2 from "../../images/5grubery/GRUBER ŚLIMAK EURO-MASZ/164625370_471317320723964_8613995887485439454_n.jpg";
import asset3 from "../../images/5grubery/GRUBER ŚLIMAK EURO-MASZ/165058128_5197358853672614_6405054829589977612_n.jpg";
import asset4 from "../../images/5grubery/GRUBER ŚLIMAK EURO-MASZ/165297926_866296200893889_3881397351957294621_n.jpg";
import asset5 from "../../images/5grubery/GRUBER ŚLIMAK EURO-MASZ/dcvgbh (1).jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/agregaty-podrywkowe/zab-slimakowe-euro-masz") {
    return item;
  }
});
const SnailEuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <h3>APSL</h3>
          <li>
            <span>rama główna 100 x 100 mm</span>
          </li>
          <li>
            <span>typ lżejszy</span>
          </li>
          <li>
            <span>dwa rzędy zębów o przekroju 35x35 mm</span>
          </li>
          <li>
            <span>rząd talerzy zgarniających śr. 460 mm</span>
          </li>
          <li>
            <span>wał tylny rurowy lub strunowy śr. 500mm</span>
          </li>
          <h3>APS</h3>
          <li>
            <span>rama główna 100 x 100 mm</span>
          </li>
          <li>
            <span>dwa rzędy zębów o przekroju 35x35 mm</span>
          </li>
          <li>
            <span>
              rząd talerzy zgarniających śr. 460mm montowanych na elastometrach
            </span>
          </li>
          <li>
            <span>wał tylny rurowy lub strunowy śr. 500mm</span>
          </li>
          <li>
            <span>
              konstrukcja ramy umożliwiająca jednoczesną regulacje głębokości
              pracy talerzy oraz wału
            </span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>Wał tylny pierścieniowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny teownikowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny daszkowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Wał tylny ceownikowy (śr. 500 mm)</span>
          </li>
          <li>
            <span>Podzespoły LEMKEN</span>
          </li>
          <li>
            <span>Hydrauliczna regulacja głębokości pracy (APS)</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={12}
          colNumber={5}
          raw1={["Szerokość", "1,8", "2,1", "2,6", "3,0"]}
          raw2={["Liczba talerzy [szt.]", "4", "5", "6", "7"]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "70 – 80",
            "80 - 100",
            "100 - 110",
            "110 - 140",
          ]}
          raw4={["Waga [kg]", "800", "900", "975", "1050"]}
          raw5={[
            "Wydajność",
            "1,2 – 1,7",
            "1,5 – 2,1",
            "1,8 – 2,6",
            "2,1 – 3,0",
          ]}
        />
        <PrizeBtn />
        <div className="assets">
          <LightBox assets={[asset1, asset2, asset3, asset4, asset5]} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default SnailEuroMasz;
