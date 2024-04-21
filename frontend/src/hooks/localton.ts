import { useState, useEffect } from "react";
import { getCurrentCityName } from "../query/query";

export async function getCurrentLocation() {

}

export function useCurrentLocation() {
    
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

    return currentLocation;
}