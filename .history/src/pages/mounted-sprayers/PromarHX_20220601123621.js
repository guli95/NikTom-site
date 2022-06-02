import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/14opryskiwacze-zawieszane/opryskiwacz zawieszany HX/DSCN4616.JPG";
import asset2 from "../../images/14opryskiwacze-zawieszane/opryskiwacz zawieszany HX/I0U9R657ISRZTFGHJ;I897R8E654ER (1).JPG";
import asset3 from "../../images/14opryskiwacze-zawieszane/opryskiwacz zawieszany HX/I0U9R657ISRZTFGHJ;I897R8E654ER (5).JPG";
import asset4 from "../../images/14opryskiwacze-zawieszane/opryskiwacz zawieszany HX/I0U9R657ISRZTFGHJ;I897R8E654ER (6).JPG";
import asset5 from "../../images/14opryskiwacze-zawieszane/opryskiwacz zawieszany HX/I0U9R657ISRZTFGHJ;I897R8E654ER (9).JPG";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/opryskiwacze-zawieszane/promar-hx") {
    return item;
  }
});
const PromarHX = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>
              Zbiornik włoskiej produkcji o pojemności 800/1000/1200 litrów
              wykonany z polietylenu. W jednej bryle ukryte są trzy zbiorniki:
              główny, na czystą wodę oraz do mycia rąk
            </span>
          </li>
          <li>
            <span>
              Belka polowa o szerokości 15m. Podnoszona i rozkładana
              hydraulicznie niezależnie (jednostronnie) z możliwością rozłożenia
              1/4 belki. Sterowanie belką odbywa się dzięki dźwigniom
              przeniesionym do kabiny ciągnika a połączonych z rozdzielaczem
              zamontowanym na opryskiwaczu. Tylko jedna para przewodów
              zasilających rozdzielacz hydrauliczny
            </span>
          </li>
          <li>
            <span>Stabilizacja hydrauliczna belki</span>
          </li>
          <li>
            <span>
              Pompa włoskiej produkcji UDOR 140/min zapewnia odpowiednią
              wydajność, a komora powietrznika ma eliminować pulsację cieczy
            </span>
          </li>
          <li>
            <span>
              Mieszadło hydrauliczne (2szt) zapewnia utrzymanie jednakowego
              stężenia cieczy roboczej
            </span>
          </li>
          <li>
            <span>
              Manometr glicerynowy gwarantuje precyzyjność i przejrzystość
              wskazań ciśnienia roboczego
            </span>
          </li>

          <li>
            <span>Czterostopniowy system filtrowania cieczy</span>
          </li>
          <li>
            <span>Rozwadniacz środków chemicznych w sicie wlewowym</span>
          </li>
          <li>
            <span>
              Rozdzielacz stałociśnieniowy (5 sekcji roboczych) zapewniający
              stałe ciśnienie bez względu na zmianę ilości pracujących sekcji
            </span>
          </li>
          <li>
            <span>Układ cieczowy w rurkach kwasoodpornych</span>
          </li>
          <li>
            <span>
              Pojedyncze oprawy rozpylaczy z zaworkiem przeciwkroplowym
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
            <span>Oświetlenie drogowe</span>
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
            <span>Komputer BRAVO 300 S</span>
          </li>
          <li>
            <span>Komputer BRAVO 400 z nawigacją</span>
          </li>
          <li>
            <span>
              Antena GPS do komputera BRAVO 180Si BRAVO 300S (pomiar prędkości
              bez montowania czujnika w ciągniku)
            </span>
          </li>
          <li>
            <span>Rozpylacze specjalistyczne eżektorowe</span>
          </li>
          <li>
            <span>Rozwadniacz boczny włoskiej produkcji POLMAC</span>
          </li>
          <li>
            <span>Płuczka zbiornika</span>
          </li>
          <li>
            <span>Znacznik pianowy</span>
          </li>
          <li>
            <span>Oświetlenie ledowe belki</span>
          </li>
          <li>
            <span>Halogeny ledowe belki</span>
          </li>
          <li>
            <span>Wał przegubowo - teleskopowy</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={7}
          colNumber={2}
          raw1={["Pojemność zbiornika [l]", "1000/1200"]}
          raw2={["Typ zbiornika", "3w1 polietylenowy"]}
          raw3={["Zbiornik na wodę do mycia rąk", "tak"]}
          raw4={["Szerokość belki [m]", "18/21"]}
          raw5={["Rozpylacze", "szczelinowe Agroplast"]}
          raw6={["Pompa", "UDOR 170 l/min"]}
          raw7={["Waga [kg]", "730"]}
        />
        <PrizeBtn />
        <div className="assets">
          <LightBox assets={[asset1, asset2, asset3, asset4, asset5]} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default PromarHX;
