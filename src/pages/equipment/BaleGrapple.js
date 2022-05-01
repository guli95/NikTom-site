import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/osprzet/chwytak-do-bel") {
    return item;
  }
});
const BaleGrapple = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>

      <div className="description">
        <ul>
          <p>
            Prezentujemy Państwu chwytaki to bel. Chwytaki posiadają trwałą i
            sprawdzoną konstrukcję. Zastosowano w nich solidne, polskie
            siłowniki oraz węże hydrauliczne firmy WARYŃSKI z podwójnym oplotem
            oraz komplet złączy. Konstrukcja chwytaka gwarantuje bezpieczny
            transport balotów owiniętych folią. Chwytak nie uszkadza folii
            podczas transportu i dostawiania do siebie bel.
          </p>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={6}
          colNumber={2}
          raw1={["Szerokość ramienia [m]", "0,73"]}
          raw2={["Wysokość [m]", "1,15"]}
          raw3={["Rozstaw wideł [m]", "0,79"]}
          raw4={["Waga [kg]", "175"]}
          raw5={["Siłowniki hydrauliczne [szt.]", "1"]}
          raw6={["Max. średnica belki [m]", "1,4"]}
          raw7={["Min. średnica belki [m]", "0,88"]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default BaleGrapple;
