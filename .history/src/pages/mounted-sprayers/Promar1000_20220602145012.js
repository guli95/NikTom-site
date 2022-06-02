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
  if (item.route === "/opryskiwacze-zawieszane/promar1000") {
    return item;
  }
});
const Promar1000 = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>
              Zbiornik 1000/1200 litrów z Polietylenu z dodatkowym zbiorniczkiem
              na czystą wodę do mycia rąk
            </span>
          </li>
          <li>
            <span>Zbiornik do mycia rąk</span>
          </li>
          <li>
            <span>Zbiornik do mycia układu</span>
          </li>
          <li>
            <span>Stabilizacja mechaniczna belki</span>
          </li>
          <li>
            <span>
              Pompa włoskiej produkcji UDOR 140/min zapewnia odpowiednią
              wydajność, a komora powietrznika ma eliminować pulsację cieczy
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
            <span>hydrauliczne rozkładanie</span>
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
              Zbiornik 3w1 włoskiej produkcji z dodatkowym zbiornikiem do
              płukania
            </span>
          </li>
          <li>
            <span>
              Rozdzielacz stałociśnieniowy włoskiej firmy ARAG (5 sekcji
              roboczych)
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
          <li>
            <span>
              Belka 15m podnoszona i rozkładana hydraulicznie niezależnie w
              układzie „X”
            </span>
          </li>
          <li>
            <span>Rozwadniacz boczny włoskiej produkcji POLMAC</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={7}
          colNumber={2}
          raw1={["Pojemność zbiornika [l]", "1000/1200"]}
          raw2={["Typ zbiornika", "polietylenowy"]}
          raw3={["Zbiornik na wodę do mycia rąk", "tak"]}
          raw4={["Szerokość belki [m]", "15/18"]}
          raw5={["Rozpylacze", "szczelinowe Agroplast"]}
          raw6={["Pompa", "UDOR 140 l/min"]}
          raw7={["Waga [kg]", "390"]}
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

export default Promar1000;
