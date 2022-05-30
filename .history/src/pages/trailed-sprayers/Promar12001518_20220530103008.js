import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/opryskiwacze-ciagane/1200-15-18-promar") {
    return item;
  }
});
const Promar12001518 = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>
              Zbiornik 1200 litrów wykonany z żywicy z dodatkowym zbiornikiem na
              czystą wodę do płukania o pojemności 80 litrów
            </span>
          </li>
          <li>
            <span>
              Belka polowa o szerokości 15 lub 18 m z wahadłowym układem
              stabilizacji, rozkładana hydraulicznie z siłownikiem stabilizacji,
              podnoszona hydraulicznie. Belka dzielona standardowo na 5 sekcji
            </span>
          </li>

          <li>
            <span>
              Pojedyńcze oprawy włoskiej firmy ARAG zamontowane na rurce
              kwasoodpornej
            </span>
          </li>
          <li>
            <span>Zaczep skrętny</span>
          </li>
          <li>
            <span>Pompa włoskiej firmy UDOR o wydajności 170l/min</span>
          </li>
          <li>
            <span>Ręczny zawór stałociśnieniowy ARAG</span>
          </li>
          <li>
            <span>
              Rozwadniacz górny umieszczony w sicie wlewowym pod pokrywą
            </span>
          </li>

          <li>
            <span>Oświetlenie drogowe</span>
          </li>
          <li>
            <span>Koła 9,5x24</span>
          </li>
        </ul>
        <ul>
          <h3>Wyposażenie dodatkowe</h3>
          <li>
            <span>Sterowanie elektryczne praca/przelew</span>
          </li>
          <li>
            <span>
              Sterowanie elektryczne ciśnieniem i sekcjami opryskiwacza
            </span>
          </li>
          <li>
            <span>
              Komputer ARAG Bravo 180S (5 sekcji cieczowych) + hydraulika
              (sterowanie belką z panelu komputera)
            </span>
          </li>
          <li>
            <span>
              Komputer ARAG Bravo 300S (5 sekcji cieczowych) + hydraulika
            </span>
          </li>

          <li>
            <span>
              Komputer ARAG Bravo 400S + hydraulika (automatyczne wyłączanie
              sekcji cieczowych dzięki zastosowaniu ogólnodostępnego sygnału
              GPS)
            </span>
          </li>
          <li>
            <span>Czujnik poziomu cieczy w zbiorniku do komputera</span>
          </li>
          <li>
            <span>Rozwadniacz boczny włoskiej firmy POLMAC</span>
          </li>
          <li>
            <span>Znacznik pianowy szerokości ARAG</span>
          </li>
          <li>
            <span>Płuczki zbiornika</span>
          </li>
          <li>
            <span>Halogeny robocze</span>
          </li>
          <li>
            <span>Koła 9,5x36 lub 11,2x36</span>
          </li>
          <li>
            <span>Przyłącze hydrantowe do napełniania</span>
          </li>
          <li>
            <span>Wąż do zasysania z filtrem</span>
          </li>
          <li>
            <span>Oprawa 4-pozycyjne ARAG z dyszami</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={9}
          colNumber={2}
          raw1={["Pojemność zbiornika (l) ", "1200"]}
          raw2={["Typ zbiornika", "żywiczny"]}
          raw3={["Szerokość belki [m]", "15 lub 18"]}
          raw4={["Liczba sekcji roboczych [szt]", "5"]}
          raw5={["Głowice", "pojedyncze z zaworkiem przeciwkroplowym"]}
          raw6={["Rozpylacze", "szczelinowe ARAG"]}
          raw7={["Pompa", "UDOR 170 l/min"]}
          raw8={["Zawór", "manualny stało ciśnieniowy"]}
          raw9={["Waga [kg]", "1400"]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default Promar12001518;
