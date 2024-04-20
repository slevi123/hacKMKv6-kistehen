import { Grid } from '@mui/material';
import { CSSProperties, useState } from 'react';
import { Link } from 'react-router-dom';

interface RouteType {
    label: string;
    route: string;
}

const RouteItemStyle: CSSProperties = {
    margin: "0.5em",
    padding: "0.5em",
    // background: "black",
    color: "black",
    font: "bold",
    borderRadius: "0.2em",
    width: "auto",
    textDecoration: "none"
    // on hover

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
        },{
            label: "Agent Schedule planner",
            route: "/agent/1/schedule-planner"
        }
    ]);

    return (
        <Grid container display={"flex"} flexDirection={"column"}>
            {routes.map((route) => (
                <Link className='sidebar-item' style={RouteItemStyle} key={route.route} to={route.route}>{route.label}</Link>
            ))}
        </Grid>
    );
}