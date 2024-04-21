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
    locations?: MarkerType[];
};


export interface MarkerType {
  latitude: number;
  longitude: number;
  display_name: string;
}

export default function Map({ currentLocation, locations=[] }: Props ) {

  // const map = useMap();
  const [markers, setMarkers] = useState<MarkerType[]>([currentLocation]);
  const [routes, setRoutes] = useState<[[number, number]][]>([]);

  useEffect(() => {
    setMarkers([...markers, currentLocation]);
    setRoutes([...routes, [currentLocation.latitude, currentLocation.longitude]]);
  }, [currentLocation]);
  

  function MapComponent({markers}: {markers: MarkerType[]}) {
    const map = useMap();
    
    // Fly to the current location when the map is ready

    if (markers.length > 1) {

    map.flyTo(
      // [currentLocation.latitude, currentLocation.longitude],

      [markers[markers.length - 1].latitude, markers[markers.length - 1].longitude],
      10
    );
    } else {
      map.flyTo(
        [currentLocation.latitude, currentLocation.longitude],
        10
      );
    }

    // console.log(map.latLngToLayerPoint([46.771210, 23.623634]))
    if (markers.length === 0) {
      return null;
    }
    
    console.log({markers});
    

    let control = L.Routing.control({
      waypoints: markers.map((marker: MarkerType) => L.latLng(marker.latitude, marker.longitude)),
      show: false
      
  }).addTo(map);
    
    return null; // Render nothing within the MapComponent
  }

  return (
    <MapContainer
      center={[currentLocation?.latitude, currentLocation?.longitude]}   
      zoom={150}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "60vh", borderRadius: "0.2em", zIndex: 1}}
      // whenReady={(mapInstance) => {
      //   mapRef.current = mapInstance;
      // }}
      whenReady={()=>{
        
      }}
    >
      <MapComponent markers={locations} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[currentLocation.latitude, currentLocation.longitude]}>
        <Popup>{currentLocation.display_name}</Popup>
      </Marker>
      {
        locations.map((marker: MarkerType, index:number)=>{
          console.log({marker})
          return (

            <Marker key={`${marker.display_name}-${index}`} position={[marker.latitude, marker.longitude]}>
              <Popup>{marker.display_name}</Popup>
            </Marker>
          );
        })
      }
      {/* <Polyline pathOptions={{ color: 'blue' }} positions={routes} /> */}
    </MapContainer>
  );
}