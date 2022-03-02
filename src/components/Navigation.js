import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
  NavLink,
} from "react-router-dom";
import "../css/navigation.css";
import Searcher from "./Searcher";

const Navigation = () => (
  <div className="navi">
    <NavLink to="/">
      <img src={require("../images/logo.jpg")} alt="logo firmy" />
    </NavLink>
    <ul>
      <li>
        <NavLink to="/">Oferta</NavLink>
      </li>
      <li>
        <NavLink to="/kontakt">Kontakt</NavLink>
      </li>
    </ul>
    <Searcher />
  </div>
);

export default Navigation;
