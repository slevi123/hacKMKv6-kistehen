import { Box, Grid, Zoom, Slide } from "@mui/material";
import { CSSProperties, useMemo, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { SideBarContext, SideBarContextType } from "./context/context.sidebar";

const panelStyle: CSSProperties = {
    // backgroundColor: "blue",
    color: "white",
    height: "50px",
    margin: "0.3em",
    // width: "100%",
};

const navbarStyle: CSSProperties = {
    ...panelStyle,
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const sidebarStyle: CSSProperties = {
    ...panelStyle,
    background:"red",
    height: "calc(100vh - 100px)",
};

const contentStyle: CSSProperties = {
    ...panelStyle,
    marginLeft: "300px",
    marginRight: "300px",
    marginTop: "3em",
    height: "calc(100vh - 100px)",
    overflowY: "auto",
    overflowX: "hidden",
    width: "calc(100% - 600px)",
    background: "green",
    transition: 'all 0.5s ease', // Adjust time and easing function as needed
};

const footterStyle: CSSProperties = {
    ...panelStyle,
    background:"yellow",
};

const leftPanelStyle: CSSProperties = {
    position: "fixed",
    top: "5em",
}


export function Layout() {

    const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

    const contentDynamicStyle = useMemo(() => {
        return {
            ...contentStyle,
            marginLeft: leftSidebarOpen ? "300px" : "0px",
            marginRight: rightSidebarOpen ? "300px" : "0px",
            width: rightSidebarOpen && leftSidebarOpen ? "calc(100% - 600px)" : "100%",
        }
    }, [leftSidebarOpen, rightSidebarOpen]);


    return (

        <SideBarContext.Provider value={{ leftIsOpen: leftSidebarOpen, rightIsOpen: rightSidebarOpen, toggleLeft: setLeftSidebarOpen, toggleRight: setRightSidebarOpen }}>
        <Grid container display={'flex'} flexDirection={'column'}>

            <Grid item xs={12}>
                <Box sx={navbarStyle}>
                    <Navbar/>
                </Box>
            </Grid>
           
           <Grid item xs={12}>

                <Grid container display={'flex'} flexDirection={'row'}>

                    <Slide style={leftPanelStyle} in={leftSidebarOpen} direction={"right"} timeout={1000}> 
                         <div id="left-side-bar"></div>
                    </Slide>
                    
                    <Grid item xs={12}>

                        <Box sx={contentDynamicStyle}>
                            <div id="content">
                            <HashRouter>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about" element={<About/>} />
                                </Routes>
                            </HashRouter>
                            </div>
                        </Box>
                        
                        <div id='left-panel'></div>

                    </Grid>
                    
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Box sx={footterStyle}>
                    <Footer/>
                </Box>
            </Grid>

        </Grid>
        </SideBarContext.Provider>
    );
}

