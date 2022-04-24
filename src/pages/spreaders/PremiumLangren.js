import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/rozsiewacze/dwutarczowy-premium-langren") {
    return item;
  }
});
const PremiumLangren = () => (
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
          colNumber={2}
          raw1={["Model", "Rozsiewacz RS-600 M/N"]}
          raw2={["Pojemność [l]", "600,"]}
          raw3={["Materiał", "malowany + nierdzewne dno kosza"]}
          raw4={["Szerokość robocza [m]", "10-18,"]}
          raw5={["Masa [kg]", "180"]}
          raw6={["Zapotrzebowanie mocy [kM]", "45"]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default PremiumLangren;
