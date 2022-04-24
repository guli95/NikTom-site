import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/12zgrabiarki-karuzelowe/ZGRABIARKA KARUZELOWA PROMAR/ZGRABIARKJA PROMAR/IMG_9784.jpg";
import asset2 from "../../images/12zgrabiarki-karuzelowe/ZGRABIARKA KARUZELOWA PROMAR/ZGRABIARKJA PROMAR/IMG_9785.jpg";
import asset3 from "../../images/12zgrabiarki-karuzelowe/ZGRABIARKA KARUZELOWA PROMAR/ZGRABIARKJA PROMAR/IMG_9786.jpg";
import asset4 from "../../images/12zgrabiarki-karuzelowe/ZGRABIARKA KARUZELOWA PROMAR/ZGRABIARKJA PROMAR/IMG_9787.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/zgrabiarki-karuzelowe/promar") {
    return item;
  }
});
const PromarRake = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <p>
          Zgrabiarka karuzelowa przeznaczona jest do zgrabiania zielonki,
          podsuszonej zielonki i słomy. Maszyna może współpracować z ciągnikami
          o mocy od 30 km. Zgrabiarka wyposażona jest w dziewięć ramion z trzema
          parami zębów grabiących na każdym (model o szerokości pracy 3.5m ),
          lub w jedenaście ramion z czterema parami zębów na każdym (model o
          szerokości pracy 4.1m) ruch ramion jest sterowany ruchem krzywki w
          przekładni. Praca tą maszyną zapewnia układanie równego i przewiewnego
          pokosu. Szerokość formowanego wału jest regulowana odległością
          metalowego grzebienia od środka przekładni. Na czas transportu
          grzebień i stelaż ochronny są podnoszone nad maszynę, a łatwe do
          demontażu ramiona zgrabiarki są umieszczane w specjalnym stojaku na
          ramie głównej zgrabiarki. W ten sposób szerokość transportowa jest
          zredukowana do 1.5m. Zgrabiarka wyposażona w śrubową regulację
          wysokości pracy co zapewnia zawsze czyste zgrabianie poprzez
          dostosowanie wysokości pracy zębów grabiących do podłoża.
        </p>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={9}
          colNumber={2}
          raw1={["Szerokość [m]", "3,5"]}
          raw2={["Ilość ramion [szt.]", "9"]}
          raw3={["Ilość palcy na 1 ramie [szt.]", "3"]}
          raw4={["Zapotrzebowanie mocy [KM]", "od 25"]}
          raw5={["Waga [kg]", "440"]}
          raw6={["Wydajność", "3,5"]}
        />
        <PrizeBtn />
        <div className="assets">
          <LightBox assets={[asset1, asset2, asset3, asset4]} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default PromarRake;
