import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/13rozsiewacze/ROZSIEWACZ NAWOZU OCYNK PROMAR/IMG_20210322_092934.jpg";
import asset2 from "../../images/13rozsiewacze/ROZSIEWACZ NAWOZU OCYNK PROMAR/IMG_20210322_092936.jpg";
import asset3 from "../../images/13rozsiewacze/ROZSIEWACZ NAWOZU OCYNK PROMAR/IMG_20210322_092942_1.jpg";
import asset4 from "../../images/13rozsiewacze/ROZSIEWACZ NAWOZU OCYNK PROMAR/IMG_20210322_093546.jpg";
import asset5 from "../../images/13rozsiewacze/ROZSIEWACZ NAWOZU OCYNK PROMAR/IMG_20210322_093551.jpg";
import asset6 from "../../images/13rozsiewacze/ROZSIEWACZ NAWOZU OCYNK PROMAR/IMG_20210322_093604.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/rozsiewacze/dwutarczowy-ocynk-promar") {
    return item;
  }
});
const PaintedPromar = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <p>
          Dwutarczowy rozsiewacz nawozów PROMAR służy do powierzchniowego
          wysiewu nawozów mineralnych granulowanych i pylistych na polach
          uprawnych, łąkach, ścierniskach i pastwiskach. Odśrodkowy dwutarczowy
          aparat rozsiewający zapewnia szerokość wysiewu nawozów mineralnych od
          8 do 18 m. Standardowo montowany jest zbiornik malowany bądź
          ocynkowany, na zamówienie rozsiewacz można wyposażyć w zbiornik
          wykonany ze stali kwasoodpornej. W wyposażeniu standardowym jest w
          hydrauliczne otwieranie zasuw oraz łatwą i precyzyjna regulacja
          wysiewu. Dodatkowo rozsiewacz można wyposażyć w plandekę i wałek
          przekaźnika. Posiadamy rozsiewacze o łącznej pojemności kosza
          ładunkowego: 600, 800, 1000 litrów
        </p>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={10}
          colNumber={4}
          raw1={["Symbol", "NO 14/5", "NO 14/6", "NO 14/7"]}
          raw2={["Pojemność [l]", "600", "800", "1000"]}
          raw3={["Szerokość robocza [m]", "8-21", "8-21", "8-21"]}
          raw4={["Zakres dawek (kg/ha)", "50-1500", "50-1500", "50-1500"]}
          raw5={[
            "Zespół dozujący",
            "szczelinowy",
            "szczelinowy",
            "szczelinowy",
          ]}
          raw6={["Liczba tarcz rozsiewających", "2", "2", "2"]}
          raw7={["Liczba łopatek na tarczy", "2", "2", "2"]}
          raw8={[
            "Zamykanie zasuw",
            "hydrauliczne",
            "hydrauliczne",
            "hydrauliczne",
          ]}
          raw9={["Zapotrzebowanie mocy (kW)", "54", "54", "54"]}
          raw10={["Masa maszyny (kg)", "190", "215", "222"]}
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

export default PaintedPromar;
