import { Box, Button } from "@mui/material";
import React, { CSSProperties, useMemo, useState } from "react";
import { SidebarAnimation } from "./Animation";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, useNavigation } from "react-router-dom";
import { createPortal } from "react-dom";

const sidebarStyle: CSSProperties = {
    // background:"white",
    background: "rgba(255,255,255,0.9)",
    color: "black",
    height: "100%",
    // width: "100%",
    minWidth: "200px",
    display: "flex",
    justifyContent: "center",
    borderRadius: "0.2em",
    position: "fixed",
    marginTop: "4em",
    // padding: "0.5em",
    // margin: "1em",
}

export interface SidebarProps {
    children: string | JSX.Element | JSX.Element[];
}

export function Sidebar({ children }:SidebarProps) {

    const matches = useMediaQuery('(min-width:600px)');

    const sidebarDynamicStyle = useMemo(() => {
        if (matches) {
            return {
                ...sidebarStyle,
                width: "200px",
            }
        } else {
            return {
                ...sidebarStyle,
                width: "100%",
            }
        }
    }, [matches])

    const parent = useMemo(() => document.getElementById('left-side-bar'), []);

    const view = useMemo(()=> 
        (
        <SidebarAnimation>
            <Box sx={sidebarDynamicStyle}>
                <>
                {children}
                </>
            </Box>
        </SidebarAnimation>
        ), [children, sidebarDynamicStyle]);

    if (!parent) {
    return (
        view
    );
    }

    return createPortal((
        view
    ), parent);
}

