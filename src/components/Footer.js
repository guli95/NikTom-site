import React from "react";
import { NavLink } from "react-router-dom";
// import "../css/footer.css";

const Footer = () => (
  <footer class="footer-distributed">
    <div class="footer-left">
      <h3>
        NiK-<span>TOM</span>
      </h3>

      <p class="footer-links">
        <NavLink to={"/"} className={"link-1"}>
          Oferta
        </NavLink>

        <NavLink to={"/kontakt"}>Kontakt</NavLink>
      </p>

      <p class="footer-company-name">NIK-TOM © 2022</p>
    </div>

    <div class="footer-center">
      <div>
        <NavLink to={"/kontakt"}>
          <p>
            <span>Zielona Wieś 22</span>
            <br /> 63-900 Rawicz
          </p>
        </NavLink>
      </div>

      <div className="phones">
        <a className="number" href="tel:+48 661 295 350">
          <p>+48 661 295 350</p>
        </a>
        <br />
        <a className="number" href="tel:+48 661 295 350">
          <p> +48 792 948 365</p>
        </a>
        <br />
        <a className="number" href="tel:+48 661 295 350">
          <p>+48 792 948 365</p>
        </a>
        <br />
        <a className="number" href="tel:+48 661 295 350">
          <p>+48 577 211 216</p>
        </a>
        <br />
      </div>

      <div>
        <p>
          <a href="mailto:nik.tom11@interia.pl">nik.tom11@interia.pl</a>
        </p>
      </div>
    </div>

    <div class="footer-right">
      <p class="footer-company-about">
        <span>Odwiedź naszą stronę na facebooku</span>
      </p>
      <p>
        <a href="https://pl-pl.facebook.com/pages/category/Agricultural-Cooperative/Nik-tom-775921779218736/">
          <img
            className="face-icon"
            src={require("../images/facebook.png")}
            alt="ikona fejsbooka"
            href="https://pl-pl.facebook.com/pages/category/Agricultural-Cooperative/Nik-tom-775921779218736/"
          />
        </a>
      </p>
      <p>
        <a href="https://pl-pl.facebook.com/pages/category/Agricultural-Cooperative/Nik-tom-775921779218736/">
          Nik-Tom facebok
        </a>
      </p>
    </div>
  </footer>
  //   <div className="footer">
  //   <div className="footer-item">
  //     <a href="https://pl-pl.facebook.com/pages/category/Agricultural-Cooperative/Nik-tom-775921779218736/">
  //       <img src={require("../images/facebook.png")} alt="ikona fejsbooka" />
  //       Nik-Tom facebok
  //     </a>
  //   </div>
  //   <div className="footer-item">
  //     <a href="mailto:nik.tom11@interia.pl">
  //       <img src={require("../images/email.png")} alt="ikona fejsbooka" />
  //       nik.tom11@interia.pl
  //     </a>
  //   </div>
  //   <div className="footer-item">
  //     <img src={require("../images/phone.png")} alt="ikona fejsbooka" />
  //     <a className="number" href="tel:+48 661 295 350">
  //       +48 661 295 350{" "}
  //     </a>
  //   </div>
  //   <div className="footer-item">
  //     <a className="number" href="tel:+48 661 295 350">
  //       +48 577 211 217{" "}
  //     </a>
  //   </div>
  //   <div className="footer-item">
  //     <a className="number" href="tel:+48 661 295 350">
  //       +48 792 948 365{" "}
  //     </a>
  //   </div>
  //   <div className="footer-item">
  //     <a className="number" href="tel:+48 661 295 350">
  //       +48 577 211 216{" "}
  //     </a>
  //   </div>
  // </div>
);

export default Footer;
