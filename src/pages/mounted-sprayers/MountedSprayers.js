import React from "react";
import Navigation from "../../components/Navigation";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import "../../css/item_card.css";
import "../../css/item_list.css";

const MountedSprayers = () => (
  <div>
    <Navigation />
    <div className="item_list">
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="opryskiwacz zaiweszany"
        name={`opryskiwacz zawieszany Bruno 1000 Tolmet`}
        link="/opryskiwacze-zawieszane/bruno-1000-tolmet"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="opryskiwacz zaiweszany"
        name={`opryskiwacz zawieszany Promar 1200l/12/15m`}
        link="/opryskiwacze-zawieszane/promar-1200-12-15"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="opryskiwacz zaiweszany"
        name={`opryskiwacz zawieszany Promar 1200l/18m`}
        link="/opryskiwacze-zawieszane/promar-1200-18"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="opryskiwacz zaiweszany"
        name={`opryskiwacz zawieszany bruno 1200l tolmet`}
        link="/opryskiwacze-zawieszane/bruno-1200-tolmet"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="opryskiwacz zaiweszany"
        name={`opryskiwacz zawieszany Promar 1500l/15m`}
        link="/opryskiwacze-zawieszane/promar-1500-15"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="opryskiwacz zaiweszany"
        name={`opryskiwacz zawieszany Promar 1500l/18m`}
        link="/opryskiwacze-zawieszane/promar-1500-18"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="opryskiwacz zaiweszany"
        name={`opryskiwacz zawieszany Bruno 1500l tolmet`}
        link="/opryskiwacze-zawieszane/bruno-1500-tolmet"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="opryskiwacz zaiweszany"
        name={`opryskiwacz zawieszany Promar 1700l/15/18m`}
        link="/opryskiwacze-zawieszane/promar-1700-15-18"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="opryskiwacz zaiweszany"
        name={`opryskiwacz zawieszany Promar 2000l/15/18m`}
        link="/opryskiwacze-zawieszane/promar-2000-15-18"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="opryskiwacz zaiweszany"
        name={`opryskiwacz zawieszany Bruno 2000l tolmet`}
        link="/opryskiwacze-zawieszane/bruno-2000-tolmet"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="opryskiwacz zaiweszany"
        name={`opryskiwacz zawieszany Promar 2500l/15/18m`}
        link="/opryskiwacze-zawieszane/promar-2500-15-18"
      />
      <ItemCard
        img={require("../../images/dji-5331597_1280.jpg")}
        alt="opryskiwacz zaiweszany"
        name={`opryskiwacz zawieszany Bruno 2500l tolmet`}
        link="/opryskiwacze-zawieszane/bruno-2500-tolmet"
      />
    </div>

    <Footer />
  </div>
);

export default MountedSprayers;
