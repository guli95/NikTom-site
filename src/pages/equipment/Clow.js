import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/osprzet/pazur-do-widel-do-palet") {
    return item;
  }
});
const Clow = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>

      <div className="description">
        <ul>
          <p>
            Pazur sterowany hydraulicznie przeznaczony jest do ramki do wideł do
            palet. Rozszerza on możliwości wideł, umożliwiając transport
            materiałów zabezpieczając je przed przesuwaniem czy zsunięciem.
          </p>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={8}
          colNumber={2}
          raw1={["Maks. wysokość otwarcia [m]", "0,8"]}
          raw2={["Całkowita długość [m]", "0,84"]}
          raw3={["Waga [kg]", "47/52"]}
          raw4={["wersje", "ISO2/ISO3"]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default Clow;
