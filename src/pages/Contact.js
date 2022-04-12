import React, { useRef } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "../css/contact_page.css";
import emailjs from "emailjs-com";
import Map from "../components/Map";

const Contact = () => {
  const form = useRef();

  // const containerStyle = {
  //   width: "100%",
  //   height: "100%",
  //   flexBasis: "40%",
  // };

  // const center = {
  //   lat: 51.57129887040472,
  //   lng: 16.945928204775367,
  // };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vzpn61c",
        "template_a4kjort",
        form.current,
        "user_yNEVEIQ72WFe8teieYxsj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div>
      <Navigation />
      <div className="contact-site-wrapper">
        {
          // <Map />
          // <div className="map">
          //   <LoadScript googleMapsApiKey="AIzaSyAjAsD1hIrd21Qc4gwW6n00Yf864OFp0iU">
          //     <GoogleMap
          //       className="map-item"
          //       mapContainerStyle={containerStyle}
          //       center={center}
          //       zoom={10}
          //     >
          //       <Marker
          //         position={{ lat: 51.57129887040472, lng: 16.945928204775367 }}
          //       />
          //     </GoogleMap>
          //   </LoadScript>
        }
        <div className="info">
          <h3>Tomasz Kapała NIK-TOM</h3>
          <p>Zielona Wieś 22</p>
          <p>63-900 Rawicz</p>
        </div>

        <div className="login-box">
          <h2>Zapytaj o wycenę lub zadaj nam pytanie :)</h2>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="user-box">
              <label>Imię</label>
              <input type="text" name="name" />
            </div>
            <div className="user-box">
              <label>Email</label>
              <input type="email" name="email" />
            </div>
            <div className="user-box">
              <label>Telefon</label>
              <input type="tel" name="phone" />
            </div>
            <div className="user-box">
              <label>Treść wiadomości</label>
              <textarea name="message" placeholder="Tu wpisz swoją wiadomość" />
            </div>
            <a href="#" onClick={sendEmail}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Wyślij
            </a>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
