import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { createPortal } from "react-dom";
import { useMemo } from "react";

// get element fomr dome with id content

export function NavRoutes() {

    // const element = useMemo(() => document.getElementById('content'), []);

    // if (!element) {
    //     console.log('element not found');
        
        return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </HashRouter>
        )
    // }

    // return createPortal((
    //     <HashRouter>
    //         <Routes>
    //             <Route path="/" element={<Home />} />
    //             <Route path="/about" element={<About/>} />
    //         </Routes>
    //     </HashRouter>
    // ), element);
}