import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/osprzet/chwytak-do-drzewa") {
    return item;
  }
});
const TreeGrapple = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>

      <div className="description">
        <p>
          Prezentujemy Państwu chwytaki do drzewa: Model 1 oraz Model 2. Maszyny
          przeznaczone są do transportu drzewa, pni, kłód, bali oraz desek. Ich
          solidna, zwarta s sprawdzona konstrukcja zapewnia komfortową i
          bezpieczną pracę. Zastosowano w nim dwa wzmocnione siłowniki
          hydrauliczne polskiej produkcji. Chwytaki wyposażone są w
          smarowniczki, przewody z podwójnym oplotem oraz złącza hydrauliczne. W
          komplecie znajdują się przewody hydrauliczne wraz ze złączkami.
        </p>
      </div>

      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={4}
          colNumber={8}
          raw1={[
            "Szerokość [m]",
            "1,2",
            "1,4",
            "1,6",
            "1,8",
            "2,0",
            "2,2",
            "2,4",
          ]}
          raw2={[
            "Głebokość [m]",
            "0,94",
            "0,94",
            "0,94",
            "0,94",
            "0,94",
            "0,94",
            "0,94",
          ]}
          raw3={[
            "Wysokość [m]",
            "0,77",
            "0,77",
            "0,77",
            "0,77",
            "0,77",
            "0,77",
            "0,77",
          ]}
          raw4={["Waga [kg]", "120", "130", "150", "170", "200", "220", "240"]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default TreeGrapple;
