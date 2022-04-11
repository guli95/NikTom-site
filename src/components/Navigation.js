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
    <div className="navi-item">
      <ul>
        <li>
          <NavLink to="/">Oferta</NavLink>
        </li>
        <li>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </li>
      </ul>
    </div>

    <div className="navi-logo-container">
      <NavLink to="/">
        <img
          src={require("../images/Logotyp.png")}
          alt="logo firmy"
          className="navi-logo"
        />
      </NavLink>
    </div>
    <div className="navi-searcher">
      <Searcher />
    </div>
  </div>
);

export default Navigation;
