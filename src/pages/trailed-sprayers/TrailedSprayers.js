import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";
import data from "../../data";

const TrailedSprayers = () => (
  <div>
    <Navigation />
    <div className="item_list">
      {data.map((item) => {
        if (item.id >= 99 && item.id <= 137) {
          return (
            <ItemCard
              img={require(`../../${item.imgUrl}`)}
              alt={item.name}
              name={item.name}
              link={item.route}
              key={item.id}
            />
          );
        }
      })}
    </div>

    <Footer />
  </div>
);

export default TrailedSprayers;
