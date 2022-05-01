import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/18osprzet/SZUFLO-KROKODYL ATMP/IMG_2906.jpg";
import asset2 from "../../images/18osprzet/SZUFLO-KROKODYL ATMP/IMG_9405.jpg";
import asset3 from "../../images/18osprzet/SZUFLO-KROKODYL ATMP/IMG_9408.jpg";
import asset4 from "../../images/18osprzet/SZUFLO-KROKODYL ATMP/IMG_9409.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/osprzet/szuflo-krokodyl-kuty") {
    return item;
  }
});
const ForkForgedCrocodile = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>

      <div className="description">
        <ul>
          <p>
            Maszyny posiadają lemiesze czołowe ze stali trudno ścieralnej.
            Szuflo-krokodyle wyposażone są w zęby kute WARYŃSKI o bardzo dużej
            wytrzymałości lub zęby palone. Siłowniki używane do zamykania
            krokodyla są polskiej produkcji. Cechuje je wysoka jakość i
            wytrzymałość. Szuflo-krokodyle wyposażone są w odkręcane boki,
            dzięki czemu mogą one służyć także do transportu innych materiałów.
          </p>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={3}
          colNumber={8}
          raw1={[
            "Szerokość [m]",
            "1,2",
            "1,4",
            "1,6",
            "1,8",
            "2,0",
            "2,2",
            "2,5",
          ]}
          raw2={[
            "Pojemność [m3]",
            "0,45",
            "053",
            "0,6",
            "0,68",
            "0,77",
            "0,84",
            "0,95",
          ]}
          raw3={["Waga [kg]", "300", "320", "340", "360", "380", "450", "500"]}
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

export default ForkForgedCrocodile;
