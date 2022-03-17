import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef } from "react";
import { Carousel, Button } from "react-bootstrap";
import "../css/slider.css";

const Slider = () => {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <div className="slider">
      <Carousel className="carousel">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 "
            src={require("../images/slider_111.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <Button variant="danger" onClick={executeScroll}>
              Zapoznaj się z naszą ofertą
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 mx-auto "
            src={require("../images/slider_2.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption>
            <Button variant="danger" onClick={executeScroll}>
              Zapoznaj się z naszą ofertą
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto"
            src={require("../images/slider_33.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption>
            <Button variant="danger" onClick={executeScroll}>
              Zapoznaj się z naszą ofertą
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div ref={myRef}></div>
    </div>
  );
};

export default Slider;
