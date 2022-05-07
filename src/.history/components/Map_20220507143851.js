// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Component } from "react/cjs/react.production.min";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
const MapContainer = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loadding...</div>;
  return <Map></Map>;
};
function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 51.57129887040472, lng: 16.945928204775367 }}
      mapContainerClassName="map-container"
    >
      <Marker position={{ lat: 51.57129887040472, lng: 16.945928204775367 }} />
    </GoogleMap>
  );
}

// <Map google={this.props.google} zoom={14}>
//   <Marker onClick={this.onMarkerClick} name={"Warsaw"} />

//   <InfoWindow onClose={this.onInfoWindowClose}>
//     <div>
//       <h1>{this.state.selectedPlace.name}</h1>
//     </div>
//   </InfoWindow>
// </Map>

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAjAsD1hIrd21Qc4gwW6n00Yf864OFp0iU",
// })(MapContainer);

export default MapContainer;
