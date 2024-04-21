import { Box, Grid, useMediaQuery } from "@mui/material";
import { RouteList } from "../layout/RoutesList";
import { Sidebar } from "../layout/Sidebar";
import { CSSProperties, useCallback, useEffect, useMemo, useState } from "react";
import { useCurrentLocation } from "../hooks/localton";
import { centerStyle } from "../layout/layout";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Map, { MarkerType } from "../components/Map";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Animation } from "../layout/Animation";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Client, getClients } from "../api/clients.api";
import { AssignModal } from "../components/AssignModal";
import { findShortestPath } from "../components/algorithm";

//  -----------------------

//  -----------------------
interface QueueElement {
    distance: number;
    i: MarkerType;
    j: MarkerType;
}

const localizer = momentLocalizer(moment);

const bodyStyle:CSSProperties = {
    // margin: "2em",
    background: "white",
    height: "100%",
    minHeight: "500px",
    borderRadius: "0.2em",
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255,255,255,0.6)",
    // backgroundColor: "red",
    color: "black",
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    padding: "1em",
    zIndex: 1,
    // make it pop
}

interface DatePickerModalType {
    startTime: Date;
    endTime: Date;
}

export function AgentSchedulePlanner() {
  const currentLocation = useCurrentLocation();
  const matches = useMediaQuery("(min-width:800px)");

    const [selectedLocations, setSelectedLocations] = useState<MarkerType[]>([
        currentLocation
    ]);

    const [savedDates, setSavedDates] = useState<DatePickerModalType[]>([]);
    
    const addToSaved = useCallback((startTime: Date, endTime: Date) => {
        setSavedDates([...savedDates, {startTime, endTime}]);
    }, [savedDates]);

    const clienst = getClients();
    
    const mobileStyle = useMemo(() => {
        if (matches) {
            return 6;
        }
        else {
            return 12;
        }
    }, [matches]);


    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'City', headerName: 'City', width: 150 },
        { field: 'County', headerName: 'County', width: 150 },
        { field: 'Latitude', headerName: 'Latitude', type: 'number', width: 110 },
        { field: 'Longitude', headerName: 'Longitude', type: 'number', width: 110 },
        { field: 'Sold', headerName: 'Sold', type: 'number', width: 90 },
        { field: 'Group', headerName: 'Group', width: 150 },
        { field: 'Agent', headerName: 'Agent', type: 'number', width: 100 },
        { field: 'Visits', headerName: 'Visits', width: 150 },
      ];
      
    //   from clienst
    //   const rows = [
    //     {
    //         id: 1,
    //         City: "Nasaud",
    //         County: "Bistrita-Nasaud",
    //         Latitude: 47.2921849,
    //         Longitude: 24.3973258,
    //         Sold: 1349829,
    //         Group: "LARGE",
    //         Agent: 15,
    //         Visits: "twice-a-week"
    //     },
    //   ]

    // const rows = clienst.map((client, index) => { return {...client, id: index + 1}});
    const rows = useMemo(()=>{

        const plusYourLocation = {
            id: 0,

            City: "Your Location",
            County: "Your County",
            Latitude: currentLocation.latitude,
            Longitude: currentLocation.longitude,
            Sold: 0,
            Group: "LARGE",
            Agent: 0,
            Visits: "twice-a-week"
        } as unknown as Client
        const newClienst = [...clienst];
        newClienst.push(plusYourLocation);

        return findShortestPath(clienst).map((client, index) => { return {...client, id: index + 1}})
    },[clienst]
    ) 

    // const rows = [
    // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    // ];

    return (
       
        <>
        <div>
            <Sidebar>
                <RouteList />
            </Sidebar>
            <Animation dir={"up"}>
            <Box sx={{margin: "2em"}}>
            
            <Grid sx={{...bodyStyle,mobileStyle, centerStyle, zIndex:"3"}} spacing={2} container display={"felx"}>

                <Grid item xs={12} sx={centerStyle}>
                    <h1>Agent Schedule Planner</h1>
                </Grid>

                <Grid item xs={mobileStyle} sx={{...centerStyle, width: "100%"}}>
                        <Calendar
                        localizer={localizer}
                        // events={
                        //     [
                        //         {
                        //             title: 'All Day Event very long title',
                        //             allDay: true,
                        //             start: new Date(2024, 4, 21),
                        //             end: new Date(2021, 4, 22),
                        //         },
                        //         {
                        //             title: 'Long Event',
                        //             start: new Date(2024, 4, 7),
                        //             end: new Date(2021, 4, 10),
                        //         }
                        //     ]
                        // }
                        events={
                            savedDates.map((date, index) => {
                                return {
                                    title: `Visit ${selectedLocations.map((location) => location.display_name).join(",")}`,
                                    start: date.startTime,
                                    end: date.endTime,
                                    AllDay: false
                                }
                            })
                        }
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 500, width: "80%", zIndex: 3}}
                        />
                </Grid>

                <Grid item xs={mobileStyle}>
                    <Map currentLocation={currentLocation} locations={selectedLocations}/>
                </Grid>
                
                <Grid item xs={12} sx={centerStyle}>
                    
                        <AssignModal setFinalDate={addToSaved} />
                </Grid>

                <Grid item xs={12} style={{...centerStyle,width: "80%"}}>

                <DataGrid
               
                onRowSelectionModelChange={(newSelection) => {
                    console.log(newSelection);
                    const newSelect: MarkerType[] = [];
                    newSelection.forEach((selected) => {
                        console.log(rows[selected]);
                        const {Latitude, Longitude, City} = rows[selected];
                        newSelect.push({ latitude:Latitude, longitude: Longitude, display_name: City});
                    });
                    setSelectedLocations(newSelect);
                }
                }
                rows={
                    rows
                }
                columns={columns}
                initialState={{
                    pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                    }}}
                pageSizeOptions={[5, 10]}
                ></DataGrid>
       
            </Grid>
            </Grid>
          </Box>

          {/* <Link to="/">Home</Link> */}
        </Animation>
      </div>
    </>
  );
}
