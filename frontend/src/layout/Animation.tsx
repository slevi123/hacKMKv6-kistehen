// import { Slide } from "@mui/material";
// import { useState, useEffect, useContext } from "react";
// import {  SideBarContext } from '../context/context.sidebar';

// export function SidebarAnimation({ children }) {

//     const sideBarContext = useContext(SideBarContext)
//     const [open, setOpen] = useState(sideBarContext?.leftIsOpen || false);

//     useEffect(()=>{
//         if (!sideBarContext) return;
//         setOpen(sideBarContext.leftIsOpen);
//     },[sideBarContext, sideBarContext?.leftIsOpen])

//     useEffect(() => {
//         if (!sideBarContext?.leftIsOpen) {
//             return
//         }
//         const timer = setTimeout(() => {
//             setOpen(true);
//         }, 100);
//         return () => clearTimeout(timer);
//     }
//     , [sideBarContext?.leftIsOpen]);

//     return (
//         <Slide in={open} appear={true} direction={"right"} timeout={500} easing={"ease-in-out"}>
//             {children}
//         </Slide>
//     );
// }

