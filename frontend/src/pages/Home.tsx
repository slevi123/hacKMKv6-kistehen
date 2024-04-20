import { Link } from "react-router-dom";
import Map from "../components/Map";
import { useEffect, useState } from "react";

export function Home() {

    const [ currentLocation, setCurrentLocation ] = useState({
        latitude: 0,
        longitude: 0,
        display_name: "",
      });

      useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => getCurrentCityName(position, setCurrentLocation),
        );
      }, []);

    return (
        <div>
            <h1>Home</h1>
            <Map currentLocation={currentLocation}/>
            <Link to="/about">About</Link>
        </div>
    );
}

function getCurrentCityName(position: GeolocationPosition, setCurrentLocation: (location: { latitude: number, longitude: number, display_name: string }) => void) {

    const url = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='+ position.coords.latitude + '&lon=' +  
                                                position.coords.longitude ;
     
    fetch(url, {
            method: "GET",
            mode: "cors",      
        }).then((response) => response.json())
            .then((data) => setCurrentLocation({ latitude: position.coords.latitude,
                                                longitude: position.coords.longitude,
                                                display_name:`${ data.address.city }, ${ data.address.country }` })    
            );
}
