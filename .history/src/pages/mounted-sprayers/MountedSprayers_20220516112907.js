import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";
import data from "../../data";
const MountedSprayers = () => (
  <div>
    <Navigation />
    <div className="item_list">
      {data.map((item) => {
        if (item.id >= 161 && item.id <= 177) {
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

export default MountedSprayers;
