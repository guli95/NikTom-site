import React from "react";
import ItemCard from "./ItemCard";
import img1 from "../images/1agregaty-uprawowe/Neon/neon 3 przod.png";
import img2 from "../images/2agregaty-uprawowo-siewne/polon/polon front.png";
import img3 from "../images/3agregaty-talerzowe-hydro/Tytan/TYTAN PRZÓD.png";
import img4 from "../images/4brony-talerzowe/Astat/przod 4 m astat.png";
import img5 from "../images/1agregaty-uprawowe/Neon/neon 3 przod.png";
import img6 from "../images/1agregaty-uprawowe/Neon/neon 3 przod.png";
import img7 from "../images/1agregaty-uprawowe/Neon/neon 3 przod.png";
import img8 from "../images/1agregaty-uprawowe/Neon/neon 3 przod.png";
import img9 from "../images/1agregaty-uprawowe/Neon/neon 3 przod.png";
import img10 from "../images/1agregaty-uprawowe/Neon/neon 3 przod.png";
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
      img={require("../images/dji-5331597_1280.jpg")}
      alt="siewnik zbożowy"
      name="Siewniki Zbożowe"
      link="siewniki-zbozowe"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="zgrabiarka karuzelowa"
      name="Zgrabiarki Karuzelowe"
      link="zgrabiarki-karuzelowe"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="rozsiewacz"
      name="Rozsiewacze"
      link="rozsiewacze"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="opryskiwacz zawieszany"
      name="Opryskiwacze Zawieszane"
      link="opryskiwacze-zawieszane"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="opryskiwacz ciągany"
      name="Opryskiwacze Ciągane"
      link="opryskiwacze-ciagane"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="zbiornik paliwa"
      name="Zbiorniki Paliwa"
      link="zbiorniki-paliwa"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="włóki polowe"
      name="włóki polowe"
      link="wloki-polowe"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="osprzęt"
      name="osprzęt"
      link="osprzet"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="pozostałe"
      name="pozostałe"
      link="pozostale"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="siewniki poplonów"
      name="siewniki poplonów"
      link="siewniki-poplonow"
    />
  </div>
);

export default ItemList;
