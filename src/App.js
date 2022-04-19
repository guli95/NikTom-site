import RoutesApp from "./router/Router";
import React from "react";
import "./css/main.css";
import Helmet from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nik-Tom</title>
      </Helmet>
      <RoutesApp />
    </div>
  );
}

export default App;
