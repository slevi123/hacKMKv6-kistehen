import { Grid } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface RouteType {
    label: string;
    route: string;
}

const RouteItemStyle = {
    margin: "0.5em",
    padding: "0.5em",
    color: "white",
    background: "black",
    borderRadius: "0.2em",
    width: "4em",
    textDecoration: "none"
}

export function RouteList() {
    const [routes] = useState<RouteType[]>([
        {
            label: "Home",
            route: "/"
        },
        {
            label: "About",
            route: "/about"
        },
        {
            label: "Client Detail",
            route: "clientDetails/:id"
        }
    ]);

    return (
        <Grid container display={"flex"} flexDirection={"column"}>
            {routes.map((route) => (
                <Link style={RouteItemStyle} key={route.route} to={route.route}>{route.label}</Link>
            ))}
        </Grid>
    );
}