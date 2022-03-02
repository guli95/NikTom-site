import React from "react";
import "../css/footer.css";

const Footer = () => (
  <div className="footer">
    <div className="footer-item">
      <a href="https://pl-pl.facebook.com/pages/category/Agricultural-Cooperative/Nik-tom-775921779218736/">
        <img src={require("../images/facebook.png")} alt="ikona fejsbooka" />
        Nik-Tom facebok
      </a>
    </div>
    <div className="footer-item">
      <a href="mailto:nik.tom11@interia.pl">
        <img src={require("../images/email.png")} alt="ikona fejsbooka" />
        nik.tom11@interia.pl
      </a>
    </div>
    <div className="footer-item">
      <img src={require("../images/phone.png")} alt="ikona fejsbooka" />
      <a className="number" href="tel:+48 661 295 350">
        +48 661 295 350{" "}
      </a>
    </div>
    <div className="footer-item">
      <a className="number" href="tel:+48 661 295 350">
        +48 577 211 217{" "}
      </a>
    </div>
    <div className="footer-item">
      <a className="number" href="tel:+48 661 295 350">
        +48 792 948 365{" "}
      </a>
    </div>
    <div className="footer-item">
      <a className="number" href="tel:+48 661 295 350">
        +48 577 211 216{" "}
      </a>
    </div>
  </div>
);

export default Footer;
