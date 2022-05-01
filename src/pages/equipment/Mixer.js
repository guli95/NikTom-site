import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import LightBox from "../../components/Lightbox";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/osprzet/mieszalnik do betonu/paszy") {
    return item;
  }
});
const Mixer = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>

      <div className="description">
        <ul>
          <h1>Wyposażenie podstawowe</h1>
          <li>
            <span>napęd z układem hydraulicznym</span>
          </li>
          <li>
            <span>mocowanie do wyboru: SMS, EURO</span>
          </li>
          <li>
            <span>ślimak mieszający</span>
          </li>
          <li>
            <span>spust otwierany hydraulicznie</span>zawór bezpieczeństwa
          </li>
        </ul>
        <ul>
          <h1>Wyposażenie dodatkowe</h1>
          <li>
            <span>rura spustowa fi 150 mm</span>
          </li>
          <li>
            <span>mocowanie dostosowane do maszyny klienta</span>
          </li>
        </ul>
      </div>
      <p>
        Mieszalnik MT to samo załadunkowa maszyna głównie wykorzystywana przez
        firmy budowlane, brukarskie oraz gospodarstwa rolne. Maszyna
        przeznaczona jest do mieszania betonu, żwiru oraz ziemi, jednocześnie
        rewelacyjnie sprawdzi się przy przygotowaniu podsypki pod kostkę brukową
        oraz mieszaniu paszy dla zwierząt. Łyżka do mieszania betonu sprawdza
        się w miejscach bez dostępu do energii elektrycznej np. odległe pola,
        nieużytki, gdyż zawsze jest zasilana poprzez napęd hydrauliczny maszyny
        na której jest zamontowana. Produkowane przez naszą firmę mieszalniki
        wyposażone są w nowoczesne przekładnie w obudowie żeliwnej gwarantujące
        bezawaryjną pracę, a silniki zabezpieczone zostały zaworami przelewowymi
        przed tzw. strzałami ciśnienia. Zastosowana krata chroni mieszalnik
        przed dostaniem się kamieni i innych zanieczyszczeń, które mogą
        spowodować uszkodzenie bądź zablokowanie układu mieszającego. Główny
        element mieszający został wykonany z utwardzonej stali trudno ścieralnej
        natomiast lemiesz maszyny z Hardoxu. Poza nowoczesną konstrukcją nasze
        mieszalniki wyróżniają się możliwością adaptacji do każdej maszyny za
        pomocą przykręcanego, wymiennego mocowania. Opcjonalnie do łyżki
        istnieje możliwość zastosowania rury spustowej, dzięki której można
        dokładnie prowadzić i dozować wymieszany materiał.
      </p>
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
            "2,4",
          ]}
          raw2={[
            "Głebokość [m]",
            "0,94",
            "0,94",
            "0,94",
            "0,94",
            "0,94",
            "0,94",
            "0,94",
          ]}
          raw3={[
            "Wysokość [m]",
            "0,77",
            "0,77",
            "0,77",
            "0,77",
            "0,77",
            "0,77",
            "0,77",
          ]}
          raw4={["Waga [kg]", "120", "130", "150", "170", "200", "220", "240"]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default Mixer;
