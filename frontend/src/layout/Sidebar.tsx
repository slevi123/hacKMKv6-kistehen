import { Box } from "@mui/material";
import { CSSProperties, useMemo } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createPortal } from "react-dom";

const sidebarStyle: CSSProperties = {
    display: 'flex',
    flexDirection: "column",
    // background: "rgba(0,0,0,0.6)",
    background: "rgba(255,255,255,0.6)",
    // color: "white",
    color: "black",
    height: "calc(100vh - 100px)",
    minWidth: "150px",
    borderRadius: "0.2em",
    width: "100%",
    // add blur effect
    backdropFilter: "blur(10px)",
}

export interface SidebarProps {
    children: string | JSX.Element | JSX.Element[];
}

export function Sidebar({ children }:SidebarProps) {

    const matches = useMediaQuery('(min-width:150px)');

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

    const parent = useMemo(() => {
        return document.getElementById('left-side-bar')
    }, [document.getElementById('left-side-bar')]);
        
    const view = useMemo(()=> 
        (
            <Box sx={sidebarDynamicStyle}>
                <>
                {children}
                </>
            </Box>
        ), [children, sidebarDynamicStyle]);

    if (!parent) {
        console.log("Parent is null");
    return (
        // view
        null
    );
    }

    return createPortal((
        view
    ), parent);
}

