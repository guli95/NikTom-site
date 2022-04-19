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
  if (item.route === "/agregaty-podrywkowo-orkowe/delta-skladany-tolmet") {
    return item;
  }
});
const FoldedDeltaTolmet = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>Trzy rzędy gardzieli na zabezpieczeniu sprężynowym</span>
          </li>
          <li>
            <span>hydrauliczna regulacja głębokości roboczej</span>
          </li>
          <li>
            <span>
              maksymalna głębokość pracy: z lemieszami bocznymi do 15 cm, bez
              lemieszy do 30 cm
            </span>
          </li>
          <li>
            <span>niezależna regulacja talerzy niwelujących(Ø 460mm)</span>
          </li>
          <li>
            <span>talerze niwelujące na amortyzacji gumowej</span>
          </li>

          <li>
            <span>wał tandem daszkowy z profilu zamkniętego (Ø 600mm)</span>
          </li>
          <li>
            <span>koło transportowe w środku</span>
          </li>
          <li>
            <span>koła podporowe podwójne</span>
          </li>
          <li>
            <span>automatyczny zatrzask hydrauliczny</span>
          </li>
          <li>
            <span>belka zaczepowa pływająca</span>
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
          <li>
            <span>ucho zaczepowe 40mm</span>
          </li>
          <li>
            <span>ucho zaczepowe 51mm </span>
          </li>
          <li>
            <span>ucho zaczepowe K80</span>
          </li>
          <li>
            <span>wał daszkowy z profila Ø 600mm</span>
          </li>
          <li>
            <span>wał tandem ceownikowy Ø 520mm</span>
          </li>
          <li>
            <span>wał tandem teownikowy Ø 600mm</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={7}
          colNumber={4}
          raw1={["Model", "DELTA 420", "DELTA 480", "DELTA 540"]}
          raw2={["Szerokość [m]", "4,2", "4,8", "5,4"]}
          raw3={["Liczba redlic", "14", "16", "18"]}
          raw4={["Liczba talerzy", "12", "14", "16"]}
          raw5={["Waga [kg]", "6000", "6500", "7000"]}
          raw6={[
            "Zapotrzebowanie mocy [KM]",
            "210 - 250",
            "240 - 280",
            "270 - 310",
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

export default FoldedDeltaTolmet;
