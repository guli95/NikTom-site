import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/18osprzet/SZUFLE ŁYCHY/IMG_4207.jpg";
import asset2 from "../../images/18osprzet/SZUFLE ŁYCHY/IMG_4410.jpg";
import asset3 from "../../images/18osprzet/SZUFLE ŁYCHY/IMG_4485.jpg";
import asset4 from "../../images/18osprzet/SZUFLE ŁYCHY/IMG_4491.jpg";
import asset5 from "../../images/18osprzet/SZUFLE ŁYCHY/IMG_4500_1.jpg";
import asset6 from "../../images/18osprzet/SZUFLE ŁYCHY/IMGP5972.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/osprzet/lycha-uniwersalna") {
    return item;
  }
});
const BucketUniversal = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>

      <div className="description">
        <ul>
          <p>
            Prezentujemy Państwu łychy, szufle uniwersalne oraz pojemnościowe.
            Łyżki wykonane są ze stali o grubościach od 4mm do 15mm oraz
            posiadają liczne wewnętrzne, boków, pleców oraz górne. Szufle
            posiadają lemiesze oraz dolne ślizgi ze stali trudno ścieralnej
            HB500
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
            "2,5",
          ]}
          raw2={[
            "Pojemność [m3]",
            "0,4",
            "0,46",
            "0,53",
            "0,6",
            "0,66",
            "0,72",
            "0,82",
          ]}
          raw3={["Waga [kg]", "160", "180", "200", "220", "240", "260", "290"]}
          raw4={[
            "Głębokość [m]",
            "0,88",
            "0,88",
            "0,88",
            "0,88",
            "0,88",
            "0,88",
            "0,88",
          ]}
        />
        <PrizeBtn />
        <div className="assets">
          <LightBox assets={[asset1, asset2, asset3, asset4, asset5, asset6]} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default BucketUniversal;
