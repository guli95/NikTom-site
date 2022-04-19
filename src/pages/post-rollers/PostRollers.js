import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";

const PostRollers = () => (
  <div>
    <Navigation />
    <div className="item_list">
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="wał posiewny"
        name={`Wał posiewny zawieszany Euro-masz`}
        link="/waly-posiewne/zawieszany-euro-masz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="wał posiewny"
        name={`Wał posiewny ciągany Euro-masz`}
        link="/waly-posiewne/ciagany-euro-masz"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="wał posiewny"
        name={`Wał posiewny ciągany hydrauliczny Euro-masz`}
        link="/waly-posiewne/ciagany-hydrauliczny-euro-masz"
      />
    </div>

    <Footer />
  </div>
);

export default PostRollers;
