import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";
import "../../css/product_site.css";
import { Table } from "react-bootstrap";
import ItemInfo from "../../components/ItemInfo";
import data from "../../data";
import { Carousel } from "bootstrap";

const EuroMaszAu = () => (
  <div>
    <Navigation />
    <div className="wrapper">
      <img src={require("../../images/logo.jpg")} />
      <h1>AGREGAT UPRAWOWO-PRZEDSIEWNY EURO-MASZ(AU)</h1>
      <p>
        AU - cztery rzędy zębówsprężystych 32x10 z płynną regulacją głębokości w
        zakresie 0-12 cm - spulchniacze śladów z płynną regulacją głębokości i
        szerokości oraz zabezpieczeniesprężynowe - wał przedni strunowy
        ułożyskowany o średnicy 300mm - sekcja krusząco-ugniatająca– dwa rzędy
        wałków fi 300 z możliwością regulacji docisku - składany hydraulicznie
        (wersje powyżej 3 m) - automatyczna belka zaczepowa
      </p>
      <div className="box">
        <ItemInfo
          className="table-info"
          rawNumber={5}
          colNumber={9}
          raw1={[
            "szerokość",
            "2,1",
            "2,7",
            "3,0",
            "3,2",
            "3,6",
            "4,2",
            "5,0",
            "5,6",
          ]}
          raw2={[
            "Liczba zębów [szt.]",
            "21",
            "27",
            "30",
            "32",
            "36",
            "42",
            "50",
            "56",
          ]}
          raw3={[
            "Zapotrzebowanie mocy [KM]",
            "40 - 55",
            "50 - 70",
            "65 - 75",
            "75 - 85",
            "85 - 95",
            "95 - 115",
            "110 - 140",
            "120 –160",
          ]}
          raw4={[
            "Waga [kg]",
            "700",
            "800",
            "1000",
            "1100",
            "1250",
            "1350 ",
            "1550",
            "1640",
          ]}
          raw5={[
            "Wydajność[ha/h]",
            "0,8 – 1,6",
            "1,0 – 2,1",
            "1,2 – 2,5",
            "1,5 – 3,0",
            "2,0 – 4,0",
            "2,9 – 5,0",
            "3,5 – 6,1",
            "4,1 – 7,2",
          ]}
          options
          optionsItem1={[
            {
              name: "Podwójny spulchniacz",
              len: 1,
            },
            {
              name: "możliwość dokupienia",
              len: 6,
            },
            {
              name: "zawsze",
              len: 2,
            },
          ]}
          optionsItem2={[
            {
              name: "Ząb wzmocniony 45x10",
              len: 1,
            },
            {
              name: "-",
              len: 3,
            },
            {
              name: "możliwość dokupienia",
              len: 5,
            },
          ]}
        />
        <div className="assets">
          <div
            class="row"
            id="gallery"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div class="col-12 col-sm-6 col-lg-3">
              <img
                class="w-100"
                src="https://images.unsplash.com/photo-1546853020-ca4909aef454?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="First slide"
                data-target="#carouselExample"
                data-slide-to="0"
              />
            </div>
            <div class="col-12 col-sm-6 col-lg-3">
              <img
                class="w-100"
                src="https://images.unsplash.com/photo-1546534505-d534e27ecb35?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="First slide"
                data-target="#carouselExample"
                data-slide-to="1"
              />
            </div>
            <div class="col-12 col-sm-6 col-lg-3">
              <img
                class="w-100"
                src="https://images.unsplash.com/photo-1546111380-cfca9a43dd85?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="First slide"
                data-target="#carouselExample"
                data-slide-to="2"
              />
            </div>
            <div class="col-12 col-sm-6 col-lg-3">
              <img
                class="w-100"
                src="https://images.unsplash.com/photo-1547288242-f3d375fc7b5f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="First slide"
                data-target="#carouselExample"
                data-slide-to="3"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div
                id="carouselExample"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExample"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#carouselExample" data-slide-to="1"></li>
                  <li data-target="#carouselExample" data-slide-to="2"></li>
                  <li data-target="#carouselExample" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src="https://images.unsplash.com/photo-1546853020-ca4909aef454?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="https://images.unsplash.com/photo-1546534505-d534e27ecb35?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="https://images.unsplash.com/photo-1546111380-cfca9a43dd85?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                      alt="Third slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="https://images.unsplash.com/photo-1547288242-f3d375fc7b5f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                      alt="Fourth slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExample"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExample"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="switch-wrap">
        <label class="switch">
          <input type="checkbox" id="styleSwitch" onclick="switchStyle();" />
          <span class="slider round"></span>
        </label>
        <span class="switch-text">
          Toggle between <em>Bootstrap defaults</em> and <em>custom styling</em>
          .
        </span>
      </div>
    </div>
    <Footer />
  </div>
);

export default EuroMaszAu;
