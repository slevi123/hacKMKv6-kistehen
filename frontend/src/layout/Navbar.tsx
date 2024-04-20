import { Box, Grid } from "@mui/material";
import { CSSProperties, useCallback, useContext } from "react";
import { centerStyle } from "./layout";
import { SideBarContext } from "../context/context.sidebar";

const navbarStyle = {
    ...centerStyle,
    backgroundColor: "white",
    color: "black",
    borderRadius: "0.2em",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "5em",
    boxShadow: "0 0 0.5em rgba(0,0,0,0.5)",
    zIndex: 100
};

const navbarItemStyle: CSSProperties = {
    width: "2em",
    height: "2em",
}

export function Navbar() {

    const sidebarContext = useContext(SideBarContext);

    const toggleLeftSidebar = useCallback(() => {
        console.log('toggle sidebar');
        
        if (!sidebarContext) {
            console.log('sidebarContext is null');
            return;
        }
        console.log("sidebarContext.leftIsOpen", sidebarContext.leftIsOpen);
        
        console.log("Context", sidebarContext);
        
        if (sidebarContext.leftIsOpen === undefined) {
            return;
        }

        sidebarContext.toggleLeft(!sidebarContext.leftIsOpen);
        
    }, [sidebarContext]);

    const toggleRightSidebar = useCallback(() => {
        console.log('toggle sidebar');
        
        if (!sidebarContext) {
            console.log('sidebarContext is null');
            return;
        }
        
        // sidebarContext.toggleRight(!sidebarContext.rightIsOpen);
    }, [sidebarContext]);
    
    return (

        <Grid sx={navbarStyle} container display={'flex'} flexDirection={'row'}>

        <Grid item xs={2} sx={centerStyle} onClick={toggleLeftSidebar}>
            <Box sx={navbarItemStyle} component={'img'} src="/option_lines.png" />
        </Grid>

        <Grid item xs={8} sx={centerStyle} >
            <h1>Navbar</h1>
        </Grid>

        <Grid item xs={2} sx={centerStyle} onClick={toggleRightSidebar} >
            <Box sx={navbarItemStyle} component={'img'} src="/option_lines.png" />
        </Grid>

        </Grid>

    );
}