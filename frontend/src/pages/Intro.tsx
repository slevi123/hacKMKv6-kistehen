import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Fade from '@mui/material/Fade';
import { Zoom } from "@mui/material";
import { centerStyle } from '../layout/layout';

export function Intro() {

    const navigate = useNavigate();
    const [fade, setFade] = useState<boolean>(false);
    const [zoom, setZoom] = useState<boolean>(false);

    useEffect(() => {
        setZoom(true);
        // setTimeout(() => {
        //     setFade(true);
        // }, 1500);

        setTimeout(() => {
            navigate('/home');
            // navigate('/users');
        } , 2000);
        
    } , [navigate]);

    return (
        <Fade in={!fade} timeout={500}>

        <Box
        className="intro-back"
        sx={{
            height: '100vh',
            width: '100vw',
            backgroundColor: 'black',
            // transform the back background to white

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '100',
        }}
        >
            <Zoom in={zoom} timeout={500}>
            <Box style={{...centerStyle, fontSize: "3em"}}>
                BEEZZ
            </Box>
            </Zoom>
        </Box>
        </Fade>
    );
}