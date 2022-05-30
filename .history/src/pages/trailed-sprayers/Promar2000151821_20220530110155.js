import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";

import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/opryskiwacze-ciagane/2000-15-18-21-promar") {
    return item;
  }
});
const Promar2000151821 = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <h3>Wyposażenie standardowe</h3>
          <li>
            <span>
              Zbiornik 2000 litrów wykonany z żywicy z dodatkowym zbiornikiem na
              czystą wodę do płukania o pojemności 100 litrów
            </span>
          </li>
          <li>
            <span>
              Belka polowa o szerokości 15 lub 18 lub 21m rozkładana
              hydraulicznie z siłownikiem stabilizacji, podnoszona
              hydraulicznie. Belka dzielona standardowo na 5 sekcji
            </span>
          </li>

          <li>
            <span>
              Pojedyńcze oprawy włoskiej firmy ARAG zamontowane na rurce
              kwasoodpornej
            </span>
          </li>

          <li>
            <span>
              Pompa włoskiej firmy UDOR o wydajności 170l/min(do belki 21m
              200l/min)
            </span>
          </li>
          <li>
            <span>
              Zawór włoski ARAG sterowany ręcznie z kompensacją ciśnienia, gdzie
              wyłączenie jednej lub kilku sekcji nie powoduje spadku (wzrostu)
              ciśnienia na pozostałych
            </span>
          </li>
          <li>
            <span>
              Rozwadniacz górny umieszczony w sicie wlewowym pod pokrywą
            </span>
          </li>
          <li>
            <span>
              Mieszadło inżektorowe ARAG bezpośrednio poprowadzone od pompy,
              zapewnia utrzymanie jednakowego stężenia cieczy roboczej
            </span>
          </li>
          <li>
            <span>
              Trzy stopnie filtrowania poza sitem wlewowym: filtr ssawny i filtr
              samoczyszczący przy zaworze sterującym oraz filterki w oprawach
              rozpylaczy
            </span>
          </li>
          <li>
            <span>
              Ocynkowana rama główna oraz malowanie proszkowe pozostałych
              elementów konstrukcji zapewnia doskonałe zabezpieczenie
              antykorozyjne
            </span>
          </li>
          <li>
            <span>
              Dyszel przegubowy umożliwiający kopiowanie śladów ciągnika na
              uwrociach
            </span>
          </li>
          <li>
            <span>Wał przegubowo-teleskopowy (WOM)</span>
          </li>
          <li>
            <span>Prowadnik przewodów</span>
          </li>
          <li>
            <span>Oświetlenie drogowe</span>
          </li>
          <li>
            <span>Koła 9,5x36</span>
          </li>
          <li>
            <span>Wałek przegubowo-teleskopowy</span>
          </li>
          <li>
            <span>
              Możliwość regulacji rozstawu kół w zakresie 135 - 175 cm
            </span>
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
            <span>Ćwiartkowanie belki</span>
          </li>
          <li>
            <span>Filtry sekcyjne (5 sekcji)</span>
          </li>
          <li>
            <span>Płuczki zbiornika</span>
          </li>
          <li>
            <span>Halogeny robocze</span>
          </li>
          <li>
            <span>Głowice 4-pozycyjne ARAG z rozpylaczami ASJ</span>
          </li>
          <li>
            <span>Rozpylacze specjalistyczne (przeciwwietrzne, do RSM-u)</span>
          </li>
          <li>
            <span>Koła 9,5x42 lub 11,2x36 (radialne)</span>
          </li>
          <li>
            <span>Przyłącze hydrantowe do napełniania</span>
          </li>
          <li>
            <span>Pneumatyczny układ hamulcowy</span>
          </li>
          <li>
            <span>Wąż do zasysania z filtrem</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={9}
          colNumber={2}
          raw1={["Pojemność zbiornika (l) ", "2000"]}
          raw2={["Typ zbiornika", "żywiczny"]}
          raw3={["Szerokość belki [m]", "15 lub 18 lub 21"]}
          raw4={["Liczba sekcji roboczych [szt]", "5"]}
          raw5={["Głowice", "pojedyncze z zaworkiem przeciwkroplowym"]}
          raw6={["Rozpylacze", "szczelinowe ARAG"]}
          raw7={["Pompa", "UDOR 170 l/min lub 200 l/min do belki 21m"]}
          raw8={["Zawór", "manualny stało ciśnieniowy"]}
          raw9={["Waga [kg]", "1650"]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default Promar2000151821;
