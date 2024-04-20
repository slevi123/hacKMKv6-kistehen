import { Box, Grid } from "@mui/material";
import { CSSProperties, useMemo, useState } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { Sidebar } from './layout/Sidebar';
import { SideBarContext, SideBarContextType } from "./context/context.sidebar";
import { SidebarAnimation } from "./layout/Animation";

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
    marginTop: "3em",
    background:"green",
    height: "calc(100vh - 100px)",
    overflowY: "auto",
    overflowX: "hidden",
    width: "100%",

};

const footterStyle: CSSProperties = {
    ...panelStyle,
    background:"yellow",
};


export function Layout() {

    const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

    const parent = useMemo(() => document.getElementById('layout'), []);

    console.log('parent', parent);
    
    
    return (

        <SideBarContext.Provider value={{ leftIsOpen: leftSidebarOpen, rightIsOpen: rightSidebarOpen, toggleLeft: setLeftSidebarOpen, toggleRight: setRightSidebarOpen }}>
        <Grid container display={'flex'} flexDirection={'column'}>

            <Grid item xs={12}>
                <Box sx={navbarStyle}>
                    <Navbar/>
                    {/* <div id="navbar"></div> */}
                </Box>
            </Grid>
           
           <Grid item xs={12}>

                <Grid container display={'flex'} flexDirection={'row'}>

                    {/* <Sidebar>
                        <>
                        asd
                        <Box>
                            box 
                            <Link to="/about">About</Link>
                            <Link to="/">Home</Link>
                        </Box>
                        </>
                    </Sidebar> */}

                    <div id="left-side-bar"></div>
                    
                    <Grid item xs={12}>

                        <Box sx={contentStyle}>
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

