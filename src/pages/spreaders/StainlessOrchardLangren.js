import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/13rozsiewacze/ROZSIEWACZ NAWOZU NIERDZEWNY LANGREN/243471882_563695221352810_3719140815771619749_n.jpg";
import asset2 from "../../images/13rozsiewacze/ROZSIEWACZ NAWOZU NIERDZEWNY LANGREN/243777779_237490021663271_7757375102394655464_n.jpg";
import asset3 from "../../images/13rozsiewacze/ROZSIEWACZ NAWOZU NIERDZEWNY LANGREN/243796121_1034272860657146_7711526025691092306_n.jpg";
import asset4 from "../../images/13rozsiewacze/ROZSIEWACZ NAWOZU NIERDZEWNY LANGREN/244022063_694150648238487_1721838000691299329_n.jpg";
import asset5 from "../../images/13rozsiewacze/ROZSIEWACZ NAWOZU NIERDZEWNY LANGREN/244029182_339686454620939_6009422592302949681_n.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/rozsiewacze/sadowniczy-nierdzewny-langren") {
    return item;
  }
});
const StainlessOrchardLangren = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <li>
            <span>
              zamykanie zasuw hydrauliczne, 2 talerze rozsiewające, każda z
              dwiema łopatkami
            </span>
          </li>
          <li>
            <span>obroty wału 540 obr./min</span>
          </li>
          <li>
            <span>prędkość robocza 6-12 km/h</span>
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
            <span>nierdzewne osłony, elementy wysiewające i śruby</span>
          </li>
          <li>
            <span>
              przekładnia rozsiewacza naszej produkcji – dwa lata gwarancji na
              element przeniesienia napędu, brak konieczności stosowania
              sprzęgieł
            </span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={6}
          colNumber={3}
          raw1={["Model", "RS-450(SAD)", "RS-600(SAD)"]}
          raw2={["Pojemność [l]", "450", "450 + 150"]}
          raw3={["Materiał", "nierdzewny", "nierdzewny"]}
          raw4={["Szerokość robocza [cm]", "110,", "110"]}
          raw5={["Długość [cm]", "120", "120"]}
          raw6={["Wysokość [cm]", "110", "110"]}
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

export default StainlessOrchardLangren;
