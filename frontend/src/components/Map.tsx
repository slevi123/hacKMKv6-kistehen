import { TileLayer , MapContainer, Marker, Popup, useMap, Polyline  } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import { useCallback, useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine"
// import "lrm-graphhopper"

type currentLocation = {
    latitude: number;
    longitude: number;
    display_name: string;
};

type Props = {
    currentLocation: currentLocation;
};


interface MarkerType {
  latitude: number;
  longitude: number;
  display_name: string;
}

export default function Map({ currentLocation }: Props ) {

  // const map = useMap();
  const [markers, setMarkers] = useState<MarkerType[]>([currentLocation]);
  const [routes, setRoutes] = useState<[[number, number]][]>([]);
  const mapRef = useRef<L.Map>(null);

  useEffect(() => {
    setMarkers([...markers, currentLocation]);
    setRoutes([...routes, [currentLocation.latitude, currentLocation.longitude]]);
  }, [currentLocation]);
  
  useEffect(() => {
    if (mapRef.current && routes.length > 1) {
      (window as any).L.Routing.control({
        waypoints: routes.map((route) => (window as any).L.latLng(route[0], route[1])),
        routeWhileDragging: true,
      }).addTo(mapRef.current!);
    }
  }, [routes]);

  const addMarker = useCallback(
    (event: L.LeafletMouseEvent) => {
      const { lat, lng } = event.latlng;
      const newMarker: MarkerType = {
        latitude: lat,
        longitude: lng,
        display_name: `Custom Marker (${lat.toFixed(2)}, ${lng.toFixed(2)})`,
      };
      setMarkers([...markers, newMarker]);
    },
    [markers]
  );

  function MapComponent() {
    const map = useMap();
    
    // Fly to the current location when the map is ready
    map.flyTo(
      [currentLocation.latitude, currentLocation.longitude],
      10
    );

    console.log(map.latLngToLayerPoint([46.771210, 23.623634]))

    let control = L.Routing.control({
      waypoints: [
          L.latLng(57.74, 11.94),
          L.latLng(57.6792, 11.949)
      ],
      show: false
  }).addTo(map);

    control.options.instructionsControl = false;

    return null; // Render nothing within the MapComponent
  }

  return (
    <MapContainer
      center={[currentLocation?.latitude, currentLocation?.longitude]}   
      zoom={150}
      scrollWheelZoom={true}
      style={{ width: "30vw", height: "60vh", borderRadius: "0.2em", zIndex: 1}}
      // whenReady={(mapInstance) => {
      //   mapRef.current = mapInstance;
      // }}
    >
      <MapComponent />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[currentLocation.latitude, currentLocation.longitude]}>
        <Popup>{currentLocation.display_name}</Popup>
      </Marker>
      {
        markers.map((marker: MarkerType)=>{
          console.log({marker})
          return (
            <Marker position={[marker.latitude, marker.longitude]}>
              <Popup>{marker.display_name}</Popup>
            </Marker>
          );
        })
      }
      <Polyline pathOptions={{ color: 'blue' }} positions={routes} />
    </MapContainer>
  );
}