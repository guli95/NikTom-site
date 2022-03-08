import React, { useState } from "react";
import Data from "../data";
import { Link } from "react-router-dom";
import "../css/searcher.css";
const Searcher = () => {
  const [query, setQuery] = useState("");
  return (
    <li className="searcher">
      <input
        placeholder="Wyszukiwarka"
        onChange={(event) => setQuery(event.target.value)}
      />
      {Data.filter((item) => {
        if (query === "") {
          return;
        } else if (item.name.toLowerCase().includes(query.toLowerCase())) {
          return item;
        }
      }).map((item) => (
        <Link
          to={item.route}
          className="box"
          key={item.id}
          style={{ textDecoration: "none" }}
        >
          <img src={require(`../${item.searcherImg}`)} alt={item.name} />
          <p>{item.name}</p>
        </Link>
      ))}
    </li>
  );
};

export default Searcher;
