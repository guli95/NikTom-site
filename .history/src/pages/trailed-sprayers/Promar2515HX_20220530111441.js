import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import asset1 from "../../images/15opryskiwacze-ciagane/Promar HX/IMG_20210322_093758.jpg";
import asset2 from "../../images/15opryskiwacze-ciagane/Promar HX/IMG_20210322_093736.jpg";
import asset3 from "../../images/15opryskiwacze-ciagane/Promar HX/IMG_20210322_093747.jpg";
import asset4 from "../../images/15opryskiwacze-ciagane/Promar HX/IMG_20210322_093803.jpg";
import asset5 from "../../images/15opryskiwacze-ciagane/Promar HX/IMG_20210322_093809.jpg";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/opryskiwacze-ciagane/2515-hx-promar") {
    return item;
  }
});
const Promar2515HX = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>
              Zbiornik 2500 litrów wykonany z żywicy z dodatkowym zbiornikiem na
              czystą wodę do płukania o pojemności 100 litrów
            </span>
          </li>
          <li>
            <span>
              Belka polowa o szerokości 15 m Podnoszona i rozkładana
              hydraulicznie niezależnie (jednostronnie) z możliwością rozłożenia
              1/4 belki
            </span>
          </li>
          <li>
            <span>Układ cieczowy belki w rurkach kwasoodpornych</span>
          </li>
          <li>
            <span>
              Pojedyncze oprawy rozpylaczy z zaworkiem przeciwkroplowym
            </span>
          </li>
          <li>
            <span>Zaczep skrętny</span>
          </li>
          <li>
            <span>
              Pompa włoskiej produkcji UDOR o wydajności 170 l/min zapewnia
              odpowiednią wydajność
            </span>
          </li>
          <li>
            <span>Stabilizacja hydrauliczna belki polowej</span>
          </li>

          <li>
            <span>Rozwadniacz środków chemicznych w sicie wlewowym</span>
          </li>
          <li>
            <span>Koła 9,5x32</span>
          </li>
          <li>
            <span>
              Zawór ręczny stałociśnieniowy włoskiej firmy ARAG (5 sekcji
              roboczych) zapewniający stałe ciśnienie bez względu na zmianę
              ilości pracujących sekcji
            </span>
          </li>

          <li>
            <span>Oświetlenie drogowe</span>
          </li>
          <li>
            <span>Dodatkowy zbiorniczek (10l) na czystą wodę do mycia rąk</span>
          </li>
          <li>
            <span>
              Belka oczyszczona w procesie śrutowania następnie malowana
              proszkowo co zapewnia najlepsze zabezpieczenie antykorozyjne
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
            <span>Układ cieczowy belki w rurkach kwasoodpornych</span>
          </li>
          <li>
            <span>Siłownik stabilizacji belki</span>
          </li>
          <li>
            <span>Koła 9,5x36</span>
          </li>
          <li>
            <span>
              Elektryczne sterowanie rozkładaniem belki (elektrozawory)
            </span>
          </li>
          <li>
            <span>Sterowanie elektryczne funkcją praca-przelew</span>
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
            <span>Rozwadniacz boczny zwykły lub włoski POLMAC</span>
          </li>
          <li>
            <span>Rozpylacze specjalistyczne eżektorowe</span>
          </li>
          <li>
            <span>Płuczki zbiornika</span>
          </li>
          <li>
            <span>Znacznik pianowy</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={9}
          colNumber={2}
          raw1={["Pojemność zbiornika (l) ", "2500"]}
          raw2={["Typ zbiornika", "żywiczny"]}
          raw3={["Szerokość belki [m]", "15"]}
          raw4={["Liczba sekcji roboczych [szt]", "5"]}
          raw5={["Głowice", "pojedyncze z zaworkiem przeciwkroplowym"]}
          raw6={["Rozpylacze", "szczelinowe ARAG"]}
          raw7={["Pompa", "UDOR 170 l/min"]}
          raw8={["Zawór", "manualny stało ciśnieniowy"]}
          raw9={["Waga [kg]", "920"]}
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

export default Promar2515HX;
