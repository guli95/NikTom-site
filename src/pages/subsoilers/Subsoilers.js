import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";
import data from "../../data";
const Subsoilers = () => (
  <div>
    <Navigation />
    <div className="item_list">
      {data.map((item) => {
        // const url= item.url.pop()
        if ((item.id >= 69 && item.id <= 77) || 7401) {
          return (
            <ItemCard
              // img="../../images/dji-5331597_1280.jpg"
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

export default Subsoilers;
