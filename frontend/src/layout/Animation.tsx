import { Slide } from "@mui/material";
import { useState, useEffect } from "react";
// import {  SideBarContext } from '../context/context.sidebar';

export function Animation({ dir, children }) {

    
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setOpen(true);
        }, 100);
    }, []);


    return (
        <Slide in={open}  direction={dir} timeout={500}>
            {children}
        </Slide>
    );
}

