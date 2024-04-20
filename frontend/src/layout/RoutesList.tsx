import { Grid, useMediaQuery } from '@mui/material';
import { CSSProperties, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { centerStyle } from './layout';

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

    const matches = useMediaQuery('(min-width:600px)');

    const mobileStyle = useMemo(() => {
        if (matches) {
            return {
              
            }
        } else {
            return { 
                justifyContent: "center",
                 alignItems: "center",
            }
        }
    }
    , [matches]);

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
        <Grid container display={"flex"} flexDirection={"column"} sx={mobileStyle}
        >
            {routes.map((route) => (
                <Link className='sidebar-item' style={RouteItemStyle} key={route.route} to={route.route}>{route.label}</Link>
            ))}
        </Grid>
    );
}