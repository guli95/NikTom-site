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
  if (item.route === "/rozsiewacze/dwutarczowy-nierdzewny-langren") {
    return item;
  }
});
const StainlessLangren = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <li>
            <span>pojemność 600l-1200l</span>
          </li>
          <li>
            <span>
              możliwość dokupienia nadstawki – pojemność z nadstawką 1000l lub
              1200l
            </span>
          </li>
          <li>
            <span>maksymalny zasięg rozsiewanego nawozu 10-18m</span>
          </li>
          <li>
            <span>równomierne schodzenie nawozu</span>
          </li>
          <li>
            <span>
              hydrauliczne otwieranie, zamykanie otworów zsypowych w standardzie
            </span>
          </li>
          <li>
            <span>
              konstrukcja mieszadła zapobiega mieleniu nawozu (mieszadło
              mimośrodowe)
            </span>
          </li>
          <li>
            <span>wał przekaźnika mocy w opcji</span>
          </li>
          <li>
            <span>osłony i elementy wysiewające z blachy nierdzewnej</span>
          </li>
          <li>
            <span>
              przekładnia rozsiewacza polskiej produkcji-dwa lata gwarancji na
              element przeniesienia napędu
            </span>
          </li>
          <li>
            <span>możliwość wysiewu skrajnego</span>
          </li>
          <li>
            <span>brak konieczności stosowania sprzęgieł</span>
          </li>
          <li>
            <span>możliwość dokupienia plandeki</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={6}
          colNumber={5}
          raw1={[
            "Model",
            "Rozsiewacz RS-600N",
            "Rozsiewacz RS-800N",
            "Rozsiewacz RS-1000N",
            "Rozsiewacz RS-1200N",
          ]}
          raw2={[
            "Pojemność [l]",
            "600,",
            "800/600 + 200",
            "600 + 400/ 800 + 200",
            "800 + 400",
          ]}
          raw3={[
            "Materiał",
            "nierdzewny",
            "nierdzewny",
            "nierdzewny",
            "nierdzewny",
          ]}
          raw4={["Szerokość robocza [m]", "10-18,", "10-18", "10-18", "10-18"]}
          raw5={["Masa [kg]", "160", "175", "185", "190"]}
          raw6={["Zapotrzebowanie mocy [kM]", "45", "45", "45", "45"]}
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

export default StainlessLangren;
