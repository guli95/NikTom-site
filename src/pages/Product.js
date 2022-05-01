import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Wrapper,
} from "@react-google-maps/api";
const Product = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAt3S5WffyzciKZm6DRFzdRJCzMXwjhkHo",
  });
  if (!isLoaded) return <div>Loadding...</div>;
  return (
    <div>
      <Map></Map>Footer
    </div>
  );
};
function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 51.57129887040472, lng: 16.945928204775367 }}
      mapContainerClassName="map-container"
    ></GoogleMap>
  );
}

export default Product;
