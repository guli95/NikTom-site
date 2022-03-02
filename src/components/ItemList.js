import React from "react";
import ItemCard from "./ItemCard";
import "../css/item_list.css";

const ItemList = () => (
  <div className="item_list">
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="agregat uprawowy"
      name="Agregaty Uprawowe"
      link="agregaty-uprawowe"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="agregat uprawowo siewny"
      name="Agregaty uprawowo-siewne"
      link="agregaty-uprawowo-siewne"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="agregat uprawowy z hydropaktem"
      name="Agregaty uprawowe z hydropakiem"
      link="agregaty-uprawowe-hydropak"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="bron talerzowy"
      name="brony talerzowe"
      link="/brony-talerzowe"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="agregat podrywkowy"
      name={`Agregaty podrywkowe "grubery"`}
      link="agregaty-podrywkowe"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="agregat podrywkowo-orkowe"
      name="Agregat podrywkowo-orkowe"
      link="agregaty-podrywkowo-orkowe"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="pług jednobelkowy"
      name="Pługi jednobelkowe/zagonowe"
      link="plugi-jednobelkowe-zagonowe"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="pług obrotowy"
      name="Pługi obrotowe"
      link="plugi-obrotowe"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="głębosz"
      name="Głębosze"
      link="glebosze"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="wał posiewny"
      name="Wały posiewne"
      link="waly-posiewne"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="siewnik zbołowy"
      name="Siewniki Zbołowe"
      link="siewniki-zbolowe"
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
      link="agregaty"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="opryskiwacz ciągany"
      name="Opryskiwacze Ciągane"
      link="opryskiwacze-ciągane"
    />
    <ItemCard
      img={require("../images/dji-5331597_1280.jpg")}
      alt="zbiornik paliwa"
      name="Zbiorniki Paliwa"
      link="zbiorniki-paliwa"
    />
  </div>
);

export default ItemList;