import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/osprzet/widly-hydrauliczne") {
    return item;
  }
});
const HydraulicFork = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>

      <div className="description">
        <ul>
          <p>
            Prezentujemy Państwu składane widły hydraulicznie do transportu
            słomy, siana, bel czy snopów. Widły posiadają zęby kute 880mm marki
            Waryński o bardzo dużej wytrzymałości. Zastosowany siłownik jest
            polskiej produkcji. Cechuje go wysoka jakość i trwałość. Widły
            sprzedawane są razem z przewodami oraz złączami.
          </p>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={3}
          colNumber={3}
          raw1={["Szerokość [m]", "0,9", "2,3"]}
          raw2={["Ilość zębów [szt]", "4", "2"]}
          raw3={["Wysokość [m]", "1,1", "1,1"]}
          raw4={["Rozstaw zębów [cm]", "70", "70 - 75"]}
          raw5={["Waga [kg]", "70", "132"]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default HydraulicFork;
