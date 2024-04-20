import { Box, Grid } from "@mui/material";
import { CSSProperties, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

const panelStyle: CSSProperties = {
    backgroundColor: "blue",
    color: "white",
    height: "50px",
    // width: "100%",
};

const navbarStyle: CSSProperties = {
    ...panelStyle,
    width: "100%",

};

const sidebarStyle: CSSProperties = {
    ...panelStyle,
    background:"red",
    height: "calc(100vh - 100px)",
};

const contentStyle: CSSProperties = {
    ...panelStyle,
    background:"green",
    height: "calc(100vh - 100px)",
    overflowY: "auto",
    overflowX: "hidden",
    width: "100%",

};

const footbarStyle: CSSProperties = {
    ...panelStyle,
    background:"yellow",
};


export function Layout() {

    const [count, setCount] = useState(0);

    return (
        <Grid container display={'flex'} flexDirection={'column'}>

            <Grid item xs={12}>
                <Box sx={navbarStyle}>
                    <div>navbar</div>
                </Box>
            </Grid>
           

           <Grid item xs={12}>

                <Grid container display={'flex'} flexDirection={'row'}>

                    <Grid item xs={3}>
                        <Box sx={sidebarStyle}>
                            <div id="sidebar">sidebar
                                {count}
                                <button onClick={() => setCount(count + 1)}>+</button>
                            </div>
                        </Box>
                    </Grid>

                    <Grid item xs={9}>

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
                    
                    <Box sx={footbarStyle}>
                    <div>footbar</div>
                    </Box>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                also footbar
            </Grid>

        </Grid>
    );
}