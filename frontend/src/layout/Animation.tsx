import { Box, Slide } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import {  SideBarContext } from '../context/context.sidebar';

export function Animation({ close , children }) {

    const [open, setOpen] = useState(false);

    useEffect(()=>{
        if (close) {setOpen(false)}
    },[close])

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 100);
        return () => clearTimeout(timer);
    }
    , []);


    return (
        <Slide in={open} direction="right" timeout={500}>
            {children}
        </Slide>
    );
}


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

