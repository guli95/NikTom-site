import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

import LightBox from "../../components/Lightbox";
import asset1 from "../../images/15opryskiwacze-ciagane/OPRYSKIWACZ SADOWNICZY CIĄGANY PROMAR DUO 1000 i 1500/IMG_20210322_093859.jpg";
import asset2 from "../../images/15opryskiwacze-ciagane/OPRYSKIWACZ SADOWNICZY CIĄGANY PROMAR DUO 1000 i 1500/IMG_20210322_093906.jpg";
import asset3 from "../../images/15opryskiwacze-ciagane/OPRYSKIWACZ SADOWNICZY CIĄGANY PROMAR DUO 1000 i 1500/IMG_20210322_093912.jpg";
import asset4 from "../../images/15opryskiwacze-ciagane/OPRYSKIWACZ SADOWNICZY CIĄGANY PROMAR DUO 1000 i 1500/IMG_20210322_093922.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/opryskiwacze-ciagane/1500-duo-promar") {
    return item;
  }
});
const Promar1500Duo = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul className="long-list">
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>zbiornik 1500 l 3- częściowy firmy VETROVERSINA</span>
          </li>
          <li>
            <span>pompa włoska UDOR OMEGA 135l/min</span>
          </li>
          <li>
            <span>
              przystawka DUO - kolumnowa 2 biegowa z dwoma wentylatorami
            </span>
          </li>
          <li>
            <span>głowice rozpylaczy 2 pozycyjne z rozpylaczami ARAG</span>
          </li>
          <li>
            <span>rama ocynkowana</span>
          </li>
          <li>
            <span>koła 340/55/16</span>
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
          <LightBox assets={[asset1, asset2, asset3, asset4]} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default Promar1500Duo;
