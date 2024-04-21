import { Grid, useMediaQuery } from "@mui/material";
import { CSSProperties, useMemo, useState } from "react";
import { Link } from "react-router-dom";

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
  textDecoration: "none",
  // on hover
};

export function RouteList() {
  const matches = useMediaQuery("(min-width:600px)");

  const mobileStyle = useMemo(() => {
    if (matches) {
      return {};
    } else {
      return {
        justifyContent: "center",
        alignItems: "center",
      };
    }
  }, [matches]);

  const [routes] = useState<RouteType[]>([
    {
      label: "Home",
      route: "/home",
    },
    {
      label: "Agent Schedule planner",
      route: "/agent/1/schedulePlanner",
    },
    {
      label: "Client Detail",
      route: "/clientDetails/:id",
    },
    {
      label: "All Clients",
      route: "/clients",
    },
    {
      label: "Upload",
      route: "/supervisors/:id/upload",
    },
    {
      label: "About",
      route: "/about",
    },
  ]);

  return (
    <Grid container display={"flex"} flexDirection={"column"} sx={mobileStyle}>
      {routes.map((route) => (
        <Link
          className="sidebar-item"
          style={RouteItemStyle}
          key={route.route}
          to={route.route}
        >
          {route.label}
        </Link>
      ))}
    </Grid>
  );
}
