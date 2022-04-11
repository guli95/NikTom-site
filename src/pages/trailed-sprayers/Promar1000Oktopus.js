import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/dji-5331597_1280.jpg";
import asset2 from "../../images/slider_1.jpg";
import asset3 from "../../images/slider_2.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/opryskiwacze-ciagane/1000-oktopus-promar") {
    return item;
  }
});
const Promar1000Oktopus = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul className="long-list">
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>zbiornik 1000 l 3- częściowy firmy VETROVERSINA</span>
          </li>
          <li>
            <span>pompa włoska UDOR OMEGA 135l/min</span>
          </li>
          <li>
            <span>przystawka NOBILI - 10 dyfuzorowa</span>
          </li>
          <li>
            <span>głowice rozpylaczy 2 pozycyjne z rozpylaczami ARAG</span>
          </li>
          <li>
            <span>rama ocynkowana</span>
          </li>
          <li>
            <span>koła 10/75/15,3</span>
          </li>
          <li>
            <span>dyszel sztywny</span>
          </li>
          <li>
            <span>
              sterowanie elektryczne ciśnieniem i sekcjami opryskiwacza
            </span>
          </li>
          <li>
            <span>rozwadniacz w otworze wlewowym</span>
          </li>
          <li>
            <span>płuczka zbiornika</span>
          </li>
          <li>
            <span>oświetlenie drogowe</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie opcjonalne</h3>

          <li>
            <span>
              komputer Arag Bravo 180 - 2 sekcje cieciowe w tym elektryczne
              sterowanie ciśnieniem i sekcjami
            </span>
          </li>
          <li>
            <span>oświetlenie nocne LED przystawki</span>
          </li>
          <li>
            <span>elektrozawór na 4 sekcje 3 + 5</span>
          </li>
          <li>
            <span>zaczep skrętny</span>
          </li>
          <li>
            <span>wałek szerokokątny</span>
          </li>
          <li>
            <span>myjka zewnętrzna</span>
          </li>
          <li>
            <span>szersze ogumienie</span>
          </li>
        </ul>
      </div>
      <div className="box-photo">
        <PrizeBtn />
        <div className="assets">
          <LightBox assets={[asset1, asset2, asset3]} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default Promar1000Oktopus;
