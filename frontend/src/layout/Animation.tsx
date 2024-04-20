import { Slide } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import {  SideBarContext } from '../context/context.sidebar';

export function SidebarAnimation({ children }) {

    const sideBarContext = useContext(SideBarContext)
    const [open, setOpen] = useState(sideBarContext?.leftIsOpen || false);

    useEffect(()=>{
        if (!sideBarContext) return;
        setOpen(sideBarContext.leftIsOpen);
    },[sideBarContext, sideBarContext?.leftIsOpen])

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 100);
        return () => clearTimeout(timer);
    }
    , []);

    return (
        <Slide in={open} direction={"right"} timeout={500}>
            {/* <Box sx={{width: "100%"}}> */}
            {children}
            {/* </Box> */}
        </Slide>
    );
}

