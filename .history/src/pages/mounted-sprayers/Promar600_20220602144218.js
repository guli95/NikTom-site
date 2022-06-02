import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/14opryskiwacze-zawieszane/Opryskiwacz zawieszany 815/[UYTR76WSARYdgCBVVLGIOIR7E6SRYDX (1).jpg";
import asset2 from "../../images/14opryskiwacze-zawieszane/Opryskiwacz zawieszany 815/[UYTR76WSARYdgCBVVLGIOIR7E6SRYDX (5).jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/opryskiwacze-zawieszane/promar600") {
    return item;
  }
});
const Promar600 = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>
              Zbiornik 600/800 litrów z Polietylenu z dodatkowym zbiorniczkiem
              na czystą wodę do mycia rąk
            </span>
          </li>
          <li>
            <span>
              Szerokość belki 12, 15 m z regulacją wysokości za pomocą ręcznej
              wciągarki, ręcznie rozkładana
            </span>
          </li>
          <li>
            <span>Stabilizacja mechaniczna belki</span>
          </li>
          <li>
            <span>
              Pompa włoska UDOR 100l/min(przy belce 15m), pompa Agroplast
              100l/min(przy belce 12m)
            </span>
          </li>
          <li>
            <span>
              Manometr glicerynowy gwarantuje precyzyjność i przejrzystość
              wskazań ciśnienia roboczego
            </span>
          </li>
          <li>
            <span>Rozwadniacz środków chemicznych w sicie wlewowym</span>
          </li>
          <li>
            <span>
              Pojedyńcze oprawy rozpylaczy z zaworkiem przeciwkroplowym firmy
              AGROPLAST
            </span>
          </li>
          <li>
            <span>
              Rama oraz belka opryskiwacza, oczyszczona w procesie śrutowania
              następnie malowana proszkowo co zapewnia najlepsze zabezpieczenie
              antykorozyjne
            </span>
          </li>
          <li>
            <span>ręczne rozkładanie</span>
          </li>
          <li>
            <span>
              zbiornik do mycia układu(przy zbiorniku 600l i belce 15m oraz przy
              zbiorniku 800l dla obu szerokości belek)
            </span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>
              Potrójne oprawy rozpylaczy w formie głowicy z zaworkiem
              przeciwkroplowym oraz dyszą do RSM-u
            </span>
          </li>
          <li>
            <span>
              Rozdzielacz stałociśnieniowy włoskiej firmy ARAG (5 sekcji
              roboczych) lub Tolmet (3 lub 4 sekcje)
            </span>
          </li>
          <li>
            <span>
              Pompa włoskiej produkcji Udor o wydajności 100 l/min lub 140l/min
            </span>
          </li>
          <li>
            <span>Siłownik podnoszenia belki</span>
          </li>
          <li>
            <span>Siłownik stabilizacji belki 15 m</span>
          </li>
          <li>
            <span>Sterowanie elektryczne funkcją praca - przelew</span>
          </li>
          <li>
            <span>
              Sterowanie elektryczne ciśnieniem i sekcjami opryskiwacza
            </span>
          </li>
          <li>
            <span>Komputer BRAVO 180</span>
          </li>
          <li>
            <span>Rozpylacze specjalistyczne eżektorowe</span>
          </li>
          <li>
            <span>Wał przegubowo - teleskopowy</span>
          </li>
          <li>
            <span>Dodatkowy zbiornik na czystą wodę do płukania zbiornika</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={7}
          colNumber={2}
          raw1={["Pojemność zbiornika [l]", "600/800"]}
          raw2={["Typ zbiornika", "polietylenowy"]}
          raw3={["Zbiornik na wodę do mycia rąk", "tak"]}
          raw4={["Szerokość belki [m]", "12/15"]}
          raw5={["Rozpylacze", "szczelinowe Agroplast"]}
          raw6={["Pompa", "Agroplast P-100"]}
          raw7={["Waga [kg]", "250"]}
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

export default Promar600;
