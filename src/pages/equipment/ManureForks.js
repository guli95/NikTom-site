import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/osprzet/widly-do-obornika") {
    return item;
  }
});
const ManureForks = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>

      <div className="description">
        <ul>
          <p>
            Prezentujemy Państwu widły do transportu obornika, słomy i siana o
            szerokościach od 1,4m do 2,4m. Wyposażone są one w zęby kute
            Waryński 880mm o bardzo dużej wytrzymałości oraz liczne wzmocnienia
            konstrukcji.
          </p>
        </ul>
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

export default ManureForks;
