import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/14opryskiwacze-zawieszane/Xsara 600/Xsara 615 front.png";
import asset2 from "../../images/14opryskiwacze-zawieszane/Xsara 600/Xsara 615 back.png";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/opryskiwacze-zawieszane/xsara-600") {
    return item;
  }
});
const Xsara600 = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>potrójna oprawa rozpylacza</span>
          </li>
          <li>
            <span>zbiornik typu ZGZZ600</span>
          </li>
          <li>
            <span>ocynkowana belka polowa o szerokości 12m lub 15m</span>
          </li>
          <li>
            <span>zbiornik do mycia rąk o pojemności 15 litrów</span>
          </li>
          <li>
            <span>hydrauliczna stabilizacja belki polowej</span>
          </li>
          <li>
            <span>hydrauliczne rozkładanie belki polowej</span>
          </li>
          <li>
            <span>hydrauliczna regulacja wysokości belki polowej</span>
          </li>

          <li>
            <span>manometr</span>
          </li>
          <li>
            <span>rozdzielacz Fermo 5</span>
          </li>
          <li>
            <span>rozwadniacz środków chemicznych w sicie</span>
          </li>

          <li>
            <span>pompa o wydajności 140l/min</span>
          </li>

          <li>
            <span>atest do pięciu lat</span>
          </li>
          <li>
            <span>zbiornik do mycia układu</span>
          </li>
          <li>
            <span>filtry liniowe</span>
          </li>
          <li>
            <span>control panel 1 + hydropanel</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>

          <li>
            <span>oświetlenie drogowe</span>
          </li>
          <li>
            <span>rozwadniacz boczny</span>
          </li>

          <li>
            <span>układ zasysania cieczy do zbiornika</span>
          </li>
          <li>
            <span>oświetlenie robocze</span>
          </li>
          <li>
            <span>znacznik pianowy</span>
          </li>
          <li>
            <span>komputer Alfa 200</span>
          </li>
          <li>
            <span>control panel 2</span>
          </li>
          <li>
            <span>control panel 7</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={3}
          colNumber={3}
          raw1={["Symbol", "Xsara 612", "Xsara 615"]}
          raw2={["Szerokość lancy [m]", "12", "15"]}
          raw3={["Waga bez cieczy", "580", "650"]}
        />
        <PrizeBtn />
        <div className="assets">
          <LightBox assets={[asset1, asset2]} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default Xsara600;
