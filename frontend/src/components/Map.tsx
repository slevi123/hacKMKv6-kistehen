import { TileLayer , MapContainer, Marker, Popup, useMap  } from "react-leaflet"
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

  // const map = useMap();

  function MapComponent() {
    const map = useMap();

    // Fly to the current location when the map is ready
    map.flyTo(
      [currentLocation.latitude, currentLocation.longitude],
      10
    );

    return null; // Render nothing within the MapComponent
  }

  return (
    <MapContainer
      center={[currentLocation?.latitude, currentLocation?.longitude]}   
      zoom={150}
      scrollWheelZoom={true}
      style={{ width: "30vw", height: "60vh", borderRadius: "0.2em", zIndex: 1}}
    >
      <MapComponent />
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