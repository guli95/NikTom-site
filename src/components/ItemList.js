import React from "react";
import ItemCard from "./ItemCard";
import img1 from "../images/1agregaty-uprawowe/Neon/neon 3 przod.png";
import img2 from "../images/2agregaty-uprawowo-siewne/polon/polon front.png";
import img3 from "../images/3agregaty-talerzowe-hydro/Tytan/TYTAN PRZÓD.png";
import img4 from "../images/4brony-talerzowe/Astat/przod 4 m astat.png";
import img5 from "../images/5grubery/Arsen/Arsen 180.png";
import img6 from "../images/6agregaty-podrywkowe/Kret  Delta/kret przod kolory.png";
import img7 from "../images/7plugi-jednobelkowe/PJR/PJR/IMG_9756.jpg";
import img8 from "../images/8plugi-obrotowe/VOGEL NOTE ZAB. ZRYWALNE EURO-MASZ/178838091_742871996400648_6102282565372036272_n.jpg";
import img9 from "../images/9glebosze/GŁĘBOSZ NA KOŁACH ZAB. SPRĘŻYNOWE EURO MASZ/189321465_817019585860690_2600730669866172170_n.jpg";
import img10 from "../images/10waly posiewne/WAŁ POSIEWNY ZAWIESZANY EURO-MASZ/257526590_7180850261941261_8818920371837196255_n.jpg";
import img11 from "../images/11siewniki-zbozowe/SIEWNIK NADBUDOWANY Z AGREGATEM EURO-MASZ/siewnoik-rzedowy-nabudowany-euromasz-05.jpg";
import img12 from "../images/12zgrabiarki-karuzelowe/ZGRABIARKA KARUZELOWA EURO-MASZ/161072160_445366863346339_2726573925929161262_n.jpg";
import img13 from "../images/13rozsiewacze/ROZSIEWACZ DWUTARCZOWY STRUMYK/STRUMYK ROZSIEWACZ/IMG_9726.jpg";
import img14 from "../images/10waly posiewne/WAŁ POSIEWNY ZAWIESZANY EURO-MASZ/257526590_7180850261941261_8818920371837196255_n.jpg";
import img15 from "../images/10waly posiewne/WAŁ POSIEWNY ZAWIESZANY EURO-MASZ/257526590_7180850261941261_8818920371837196255_n.jpg";
import img16 from "../images/10waly posiewne/WAŁ POSIEWNY ZAWIESZANY EURO-MASZ/257526590_7180850261941261_8818920371837196255_n.jpg";
import img17 from "../images/10waly posiewne/WAŁ POSIEWNY ZAWIESZANY EURO-MASZ/257526590_7180850261941261_8818920371837196255_n.jpg";
import img18 from "../images/10waly posiewne/WAŁ POSIEWNY ZAWIESZANY EURO-MASZ/257526590_7180850261941261_8818920371837196255_n.jpg";
import img19 from "../images/10waly posiewne/WAŁ POSIEWNY ZAWIESZANY EURO-MASZ/257526590_7180850261941261_8818920371837196255_n.jpg";
import img20 from "../images/10waly posiewne/WAŁ POSIEWNY ZAWIESZANY EURO-MASZ/257526590_7180850261941261_8818920371837196255_n.jpg";
const ItemList = () => (
  <div className="item_list" id="offer">
    <ItemCard
      img={img1}
      alt="agregat uprawowy"
      name="Agregaty Uprawowe"
      link="agregaty-uprawowe"
    />
    <ItemCard
      img={img2}
      alt="agregat uprawowo siewny"
      name="Agregaty uprawowo-siewne"
      link="agregaty-uprawowo-siewne"
    />
    <ItemCard
      img={img3}
      alt="agregat uprawowy z hydropaktem"
      name="Agregaty uprawowe z hydropakiem"
      link="agregaty-uprawowe-hydropak"
    />
    <ItemCard
      img={img4}
      alt="bron talerzowy"
      name="brony talerzowe"
      link="/brony-talerzowe"
    />
    <ItemCard
      img={img5}
      alt="agregat podrywkowy"
      name={`Agregaty podrywkowe "grubery"`}
      link="agregaty-podrywkowe"
    />
    <ItemCard
      img={img6}
      alt="agregat podrywkowo-orkowe"
      name="Agregat podrywkowo-orkowe"
      link="agregaty-podrywkowo-orkowe"
    />
    <ItemCard
      img={img7}
      alt="pług jednobelkowy"
      name="Pługi jednobelkowe/zagonowe"
      link="plugi-jednobelkowe-zagonowe"
    />
    <ItemCard
      img={img8}
      alt="pług obrotowy"
      name="Pługi obrotowe"
      link="plugi-obrotowe"
    />
    <ItemCard img={img9} alt="głębosz" name="Głębosze" link="glebosze" />
    <ItemCard
      img={img10}
      alt="wał posiewny"
      name="Wały posiewne"
      link="waly-posiewne"
    />
    <ItemCard
      img={img11}
      alt="siewnik zbożowy"
      name="Siewniki Zbożowe"
      link="siewniki-zbozowe"
    />
    <ItemCard
      img={img12}
      alt="zgrabiarka karuzelowa"
      name="Zgrabiarki Karuzelowe"
      link="zgrabiarki-karuzelowe"
    />
    <ItemCard
      img={img13}
      alt="rozsiewacz"
      name="Rozsiewacze"
      link="rozsiewacze"
    />
    <ItemCard
      img={img14}
      alt="opryskiwacz zawieszany"
      name="Opryskiwacze Zawieszane"
      link="opryskiwacze-zawieszane"
    />
    <ItemCard
      img={img15}
      alt="opryskiwacz ciągany"
      name="Opryskiwacze Ciągane"
      link="opryskiwacze-ciagane"
    />
    <ItemCard
      img={img16}
      alt="zbiornik paliwa"
      name="Zbiorniki Paliwa"
      link="zbiorniki-paliwa"
    />
    <ItemCard
      img={img17}
      alt="włóki polowe"
      name="włóki polowe"
      link="wloki-polowe"
    />
    <ItemCard img={img18} alt="osprzęt" name="osprzęt" link="osprzet" />
    <ItemCard img={img19} alt="pozostałe" name="pozostałe" link="pozostale" />
    <ItemCard
      img={img20}
      alt="siewniki poplonów"
      name="siewniki poplonów"
      link="siewniki-poplonow"
    />
  </div>
);

export default ItemList;
