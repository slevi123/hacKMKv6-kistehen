import { TileLayer , MapContainer, Marker, Popup  } from "react-leaflet"
import "leaflet/dist/leaflet.css";

type currentLocation = {
    latitude: number;
    longitude: number;
    display_name: string;
};

type Props = {
    currentLocation: currentLocation;
};

export default function Map({ currentLocation }: Props ) {

  return (
    <MapContainer
      center={[currentLocation.latitude, currentLocation.longitude]}   
      zoom={3}
      scrollWheelZoom={true}
      style={{ width: "30vw", height: "60vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[currentLocation.latitude, currentLocation.longitude]}>
        <Popup>{currentLocation.display_name}</Popup>
      </Marker>
    </MapContainer>
  );
}