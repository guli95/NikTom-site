import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/osprzet//osprzet/widly-do-bel") {
    return item;
  }
});
const BaleFork = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>

      <div className="description">
        <ul>
          <p>
            Prezentujemy widły do transportu: bel, balotów, siana, słomy,
            kiszonki. Widły wyposażone są w zęby kute Waryński 880mm. Wspawane
            stożkowe tuleje uniemożliwiają obrót zębów oraz chronią ramę przed
            uszkodzeniem. W ofercie widły z mocowaniem Euroramka, SMS oraz TUZ.
            Istnieje możliwość wykonania wideł z innym mocowaniem.
          </p>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={6}
          colNumber={2}
          raw1={["Szerokość [m]", "1,12"]}
          raw2={["Wysokość [m]", "0,54"]}
          raw3={["Rozstaw wideł [m]", "0,79"]}
          raw4={["Waga [kg]", "45"]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default BaleFork;
