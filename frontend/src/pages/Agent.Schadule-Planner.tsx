import { Grid } from "@mui/material";
import { RouteList } from "../layout/RoutesList";
import { Sidebar } from "../layout/Sidebar";
import { CSSProperties } from "react";
import { useCurrentLocation } from "../hooks/localton";
import Map from "../components/Map";
import { Scheduler } from "@aldabil/react-scheduler";
import { centerStyle } from '../layout/layout';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'

//  -----------------------

//  -----------------------


const localizer = momentLocalizer(moment)

const bodyStyle:CSSProperties = {
    margin: "2em",
    background: "white",
    height: "100%",
    minHeight: "500px",
    borderRadius: "0.2em",
    // boxShadow: "0 0 0.2em rgba(0,0,0,0.5)",
    // add blur effect
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255,255,255,0.6)",
    color: "black",
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    padding: "1em",
    zIndex: 1,
}

export function AgentSchedulePlanner() {

    const currentLocation = useCurrentLocation();

    return (
        
        <div>
            <Sidebar>
                
                <RouteList />
            </Sidebar>

            <Grid sx={bodyStyle} spacing={2} container display={"felx"} flexDirection={"row"}>

                <Grid item xs={12} sx={centerStyle}>
                    <h1>Agent Schedule Planner</h1>
                </Grid>

                <Grid item xs={6}>
                    <div>
                        <Calendar
                        localizer={localizer}
                        events={
                            [
                                {
                                    title: 'All Day Event very long title',
                                    allDay: true,
                                    start: new Date(2024, 4, 21),
                                    end: new Date(2021, 4, 22),
                                },
                                {
                                    title: 'Long Event',
                                    start: new Date(2024, 4, 7),
                                    end: new Date(2021, 4, 10),
                                }
                            ]
                        }
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 500 }}
                        />
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <Map currentLocation={currentLocation}/>
                </Grid>

            </Grid>

           
            {/* <Link to="/">Home</Link> */}
        </div>
       
    );
}