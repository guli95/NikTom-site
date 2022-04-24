import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ItemInfo from "../../components/ItemInfo";
import PrizeBtn from "../../components/PrizeBtn";
import data from "../../data";

const info = data.filter((item) => {
  if (item.route === "/rozsiewacze/sadowniczy-lejek-langren") {
    return item;
  }
});
const FieldLangren = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <h1 className="product-title">{info[0].name}</h1>
      <div className="description">
        <ul>
          <li>
            <span>
              zbiornik rozsiewacza typu lejek wykonany z tworzywa sztucznego w
              kolorze żółtym
            </span>
          </li>
          <li>
            <span>
              cała konstrukcja rozsiewacza (oprócz nierdzewnych elementów) jest
              poddana procesowi śrutowania, następnie malowania proszkowego
              farbą UV Ral 7016 ANTRACYT
            </span>
          </li>
          <li>
            <span>zasuwy, talerze, łopatki wykonane ze stali nierdzewnej</span>
          </li>
          <li>
            <span>
              mieszadło mimośrodowe z doprowadzonym smarowaniem (wolnobieżne,
              nie mieli nawozu)
            </span>
          </li>
          <li>
            <span>
              sworznie mocujące w ramie rozsiewacza dwustronne, obracane
            </span>
          </li>
          <li>
            <span>
              odpowietrznik w przekładni, będący jednocześnie korkiem spustowym
              i otworem rewizyjnym do sprawdzenia stanu smaru przekładniowego
            </span>
          </li>
          <li>
            <span>
              przekładnia rozsiewacza naszej produkcji – 2 lata gwarancji na
              element przeniesienia napędu, brak konieczności stosowania
              sprzęgieł
            </span>
          </li>
          <li>
            <span>jeden zasyp – równomierne schodzenie nawozu</span>
          </li>
          <li>
            <span>zasięg rozsiewanego nawozu 10-18m</span>
          </li>
          <li>
            <span>
              hydrauliczne otwieranie i zamykanie otworów zsypowych w
              standardzie
            </span>
          </li>
        </ul>
      </div>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={4}
          raw1={["Model", "RS-300(SAD)", "RS-400(SAD)", "RS-500(SAD)"]}
          raw2={["Pojemność [l]", "300", "400", "500"]}
          raw3={[
            "Materiał",
            "tworzywo sztuczne/żółty",
            "tworzywo sztuczne/żółty",
            "tworzywo sztuczne/żółty",
          ]}
          raw4={["Szerokość robocza [cm]", "110,", "110", "110"]}
          raw5={["Długość [cm]", "120", "120", "120"]}
        />
        <PrizeBtn />
      </div>
    </div>

    <Footer />
  </div>
);

export default FieldLangren;
