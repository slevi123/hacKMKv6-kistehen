import { Link } from "react-router-dom";
import { Sidebar } from "../layout/Sidebar";
import { RouteList } from "../layout/RoutesList";
import Map from "../components/Map";
import { useEffect, useState } from "react";
import { getCurrentCityName } from "../query/query";

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
            <Sidebar>
                <h1>Home Sidebar</h1>
                {/* <Link to="/about">About</Link> */}
                <RouteList />
            </Sidebar>

            <h1>Home</h1>
            <Map currentLocation={currentLocation}/>
            <Link to="/about">About</Link>
        </div>
       
    );
}
