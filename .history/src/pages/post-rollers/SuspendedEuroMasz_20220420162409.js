import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/10waly posiewne/WAŁ POSIEWNY ZAWIESZANY EURO-MASZ/257526590_7180850261941261_8818920371837196255_n.jpg";
import asset2 from "../../images/10waly posiewne/WAŁ POSIEWNY ZAWIESZANY EURO-MASZ/257725628_269242581821144_5556991493184455019_n.jpg";
import asset3 from "../../images/10waly posiewne/WAŁ POSIEWNY ZAWIESZANY EURO-MASZ/258184526_1225797644594935_4432159606521361134_n.jpg";
import asset4 from "../../images/10waly posiewne/WAŁ POSIEWNY ZAWIESZANY EURO-MASZ/258631816_5271139102901630_3027762784368523968_n.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/waly-posiewne/zawieszany-euro-masz") {
    return item;
  }
});
const SuspendedEuroMasz = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>WPZ</h3>
          <li>
            <span> wał CAMBRIDGE śr. 450 mm</span>
          </li>
          <li>
            <span>trzy sekcje wału</span>
          </li>
          <li>
            <span>automatyczna belka zaczepowa</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={8}
          colNumber={3}
          raw1={["Szerokość [m]", "3", "3,4"]}
          raw2={["Liczba kręgów [szt.]", "61", "-"]}
          raw3={["Zapotrzebowanie mocy [KM]", "60 - 70", "80 - 100"]}
          raw4={["Waga [kg]", "1230", "1330"]}
          raw5={["Wydajność", "2,5 – 3,5", "3,0 – 4,0"]}
          options
          optionsItem1={[
            {
              name: "Wał CAMCRIDGE śr. 500 mm",
              len: 1,
            },

            {
              name: "możliwość dokupienia",
              len: 2,
            },
          ]}
          optionsItem2={[
            {
              name: "Wał CAMCRIDGE śr. 530 mm",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 2,
            },
          ]}
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

export default SuspendedEuroMasz;
