import { Link } from "react-router-dom";
import { Sidebar } from "../layout/Sidebar";
import { RouteList } from "../layout/RoutesList";
import Map from "../components/Map";
import { useEffect, useState } from "react";
import { getCurrentCityName } from "../query/query";
import { Box } from "@mui/material";

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
        
        <Box sx={{zIndex: "3"}}>
            <Sidebar>
               
                {/* <Link to="/about">About</Link> */}
                <RouteList />
            </Sidebar>

            {/* <h1>Home</h1>
            <Map currentLocation={currentLocation}/>
            <Link to="/about">About</Link> */}

            <Box sx={{
                width: '100%',
                height: '100%',
                backdropFilter: "blur(100px)",
                }} component={'img'} src='/hero.jpeg'>

            </Box>

        </Box>
       
    );
}
