import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/osprzet/widly-do-palet") {
    return item;
  }
});
const PalletForks = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>

      <div className="description">
        <ul>
          <p>
            Prezentujemy Państwu widły do palet do ładowaczy, ładowarek oraz
            wózków widłowych (wzmocniona karetka 2A). Widły (odkuwki)
            zastosowane w maszynie: 80x40x1200mm, udźwig 2t. Widły posiadają
            skokową regulację rozstawu, dzięki czemu gwarantują dopasowanie do
            każdej palety. Dodatkowo ramka posiada wspawane tuleje na zęby kute
            880mm, dzięki czemu można wykorzystać ją jako widły do transportu
            np. balotów.
          </p>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={3}
          colNumber={2}
          raw1={["Szerokość [m]", "1,2"]}
          raw2={["Wysokość [m]", "0,4"]}
          raw3={["Wysokość [kg]", "142"]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default PalletForks;
