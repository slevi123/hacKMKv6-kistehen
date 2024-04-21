import { Box, Grid, Slide } from "@mui/material";
import { CSSProperties, useMemo, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import ClientDetail  from "./pages/ClientDetail";
import { SideBarContext, SideBarContextType } from "./context/context.sidebar";
import { AgentSchedulePlanner } from "./pages/Agent.Schadule-Planner";
import AllClients from "./pages/AllClients";
import { Upload } from './pages/Sipervisers.Upload';

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
    // padding: "20px",
    marginLeft: "300px",
    marginRight: "300px",
    marginTop: "5em",
    height: "calc(100vh - 100px)",
    overflowY: "auto",
    overflowX: "hidden",
    width: "calc(100% - 620px)",
    // background: "linear-gradient(90deg, rgba(220,220,220,1) 0%, rgba(235,235,235,1) 35%, rgba(255,255,255,1) 100%)",
    // background: "rgba(255,255,255,0.9)",
    borderRadius: "0.2em",
    transition: 'all 0.5s ease', // Adjust time and easing function as needed
    zIndex: 1,
};

const bodyStyle: CSSProperties = {
    background: "linear-gradient(90deg, rgba(220,220,220,1) 0%, rgba(235,235,235,1) 35%, rgba(255,255,255,1) 100%)",
}

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
            marginLeft: leftSidebarOpen ? "200px" : "0px",
            marginRight: rightSidebarOpen ? "300px" : "0px",
            // width: rightSidebarOpen && leftSidebarOpen ? "calc(100% - 600px)" : "100%",
            width: leftSidebarOpen ? "calc(100% - 200px)" : "100%",
        }
    }, [leftSidebarOpen, rightSidebarOpen]);


    return (

        <SideBarContext.Provider value={{ leftIsOpen: leftSidebarOpen, rightIsOpen: rightSidebarOpen, toggleLeft: setLeftSidebarOpen, toggleRight: setRightSidebarOpen }}>
        <Grid sx={bodyStyle} container display={'flex'} flexDirection={'column'}>

            <Grid item xs={12}>
                <Box sx={navbarStyle}>
                    <Navbar/>
                </Box>
            </Grid>
           
           <Grid item xs={12}>

                <Grid container display={'flex'} flexDirection={'row'}>

                    <Slide style={leftPanelStyle} in={leftSidebarOpen} direction={"right"} timeout={1000}> 
                         <Box sx={{zIndex: "12"}} id="left-side-bar"></Box>
                    </Slide>
                    
                    <Grid item xs={12}>

                        <Box sx={contentDynamicStyle}>
                            <Box sx={{zIndex: "2"}} id="content">
                            <HashRouter>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    {/* <Route path="/agent/:id/schadule-planner" element={<AgentSchedulePlanner />} /> */}
                                    <Route path="/agent/:id/schedulePlanner" element={<AgentSchedulePlanner />} />
                                    <Route path="/about" element={<About/>} />
                                    <Route path="/supervisors/:id/upload" element={<Upload/>} />
                                    <Route path="/clientDetails/:id" element={<ClientDetail/>}/>
                                    <Route path="/clients" element={<AllClients />}/>
                                </Routes>
                            </HashRouter>
                            </Box>
                        </Box>
                        
                        <div id='left-panel'></div>

                    </Grid>
                    
                </Grid>
            </Grid>


        </Grid>
        </SideBarContext.Provider>
    );
}

