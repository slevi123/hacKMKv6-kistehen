import { Box, Grid, useMediaQuery } from "@mui/material";
import { RouteList } from "../layout/RoutesList";
import { Sidebar } from "../layout/Sidebar";
import { CSSProperties, useEffect, useMemo, useState } from "react";
import { useCurrentLocation } from "../hooks/localton";
import Map, { MarkerType } from "../components/Map";
import { centerStyle } from '../layout/layout';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Animation } from "../layout/Animation";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { getClients } from "../api/clients.api";
import { shortestPathWithOrder } from "../components/path.algorithm";

//  -----------------------

//  -----------------------
interface QueueElement {
    distance: number;
    i: MarkerType;
    j: MarkerType;
}


const localizer = momentLocalizer(moment)

const bodyStyle:CSSProperties = {
    // margin: "2em",
    background: "white",
    height: "100%",
    minHeight: "500px",
    borderRadius: "0.2em",
    // width: "calc(100% - 4em)",
    // width: "100%",
    // boxShadow: "0 0 0.2em rgba(0,0,0,0.5)",
    // add blur effect
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

export function AgentSchedulePlanner() {

    const currentLocation = useCurrentLocation();
    const matches = useMediaQuery('(min-width:800px)');
    const [selectedLocations, setSelectedLocations] = useState<MarkerType[]>([]);

    // useEffect(() => {


    //     // from selectedLocations order to mini the distance between stops
    //     // const distanceMatrix = Array(selectedLocations.length).fill(0).map(() => Array(selectedLocations.length).fill(0));
    //     // const priorityQueue = new PriorityQueue<QueueElement>({
    //     //     comparator: (a, b) => a.distance - b.distance,
    //     // });
        
    //     // for (let i = 0; i < selectedLocations.length; i++) {
    //     //     for (let j = 0; j < selectedLocations.length; j++) {
    //     //         if (i === j) {
    //     //             distanceMatrix[i][j] = 0;
    //     //             continue;
    //     //         }
    //     //         const {latitude: lat1, longitude: lon1} = selectedLocations[i];
    //     //         const {latitude: lat2, longitude: lon2} = selectedLocations[j];
    //     //         const distance = Math.sqrt((lat1 - lat2) ** 2 + (lon1 - lon2) ** 2);
    //     //         distanceMatrix[i][j] = distance;
                
    //     //         priorityQueue.queue({distance, i: selectedLocations[i], j: selectedLocations[j]});
    //     //     }
    //     // }
    //     const shortestPath = shortestPathWithOrder(selectedLocations);

    //     console.log("Shortest Path", shortestPath);
        
    //     // to array
    //     // return priorityQueue.toArray().map((element) => {

        
        

    // }, []);

    const clienst = getClients();
    // console.log("Clients", clienst);
    
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

    const rows = clienst.map((client, index) => { return {...client, id: index + 1}});


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
                        style={{ height: 500, width: "80%", zIndex: 3}}
                        />
                </Grid>

                <Grid item xs={mobileStyle}>
                    <Map currentLocation={currentLocation} locations={selectedLocations}/>
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
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                />

                </Grid>

            </Grid>
            </Box>
           
            {/* <Link to="/">Home</Link> */}
        </Animation>

        </div>
        </>
    );
}