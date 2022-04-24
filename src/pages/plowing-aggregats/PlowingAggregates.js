import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";
import data from "../../data";
const PlowingAggregates = () => (
  <div>
    <Navigation />
    <div className="item_list">
      {data.map((item) => {
        if ((item.id >= 52 && item.id <= 56) || item.id === 550) {
          return (
            <ItemCard
              img={item.imgUrl}
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

export default PlowingAggregates;
