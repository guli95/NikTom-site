// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Component } from "react/cjs/react.production.min";

export class MapContainer extends Component {
  render() {
    return (
      // <Map google={this.props.google} zoom={14}>
      //   <Marker onClick={this.onMarkerClick} name={"Warsaw"} />

      //   <InfoWindow onClose={this.onInfoWindowClose}>
      //     <div>
      //       <h1>{this.state.selectedPlace.name}</h1>
      //     </div>
      //   </InfoWindow>
      // </Map>
      <div>Mapa</div>
    );
  }
}

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAjAsD1hIrd21Qc4gwW6n00Yf864OFp0iU",
// })(MapContainer);

export default MapContainer;
