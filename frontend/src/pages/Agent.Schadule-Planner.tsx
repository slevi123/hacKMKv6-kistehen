import { Box, Grid, useMediaQuery } from "@mui/material";
import { RouteList } from "../layout/RoutesList";
import { Sidebar } from "../layout/Sidebar";
import { CSSProperties, useMemo } from "react";
import { useCurrentLocation } from "../hooks/localton";
import Map from "../components/Map";
import { centerStyle } from "../layout/layout";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Animation } from "../layout/Animation";
import "react-big-calendar/lib/css/react-big-calendar.css";

//  -----------------------

//  -----------------------

const localizer = momentLocalizer(moment);

const bodyStyle: CSSProperties = {
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
};

export function AgentSchedulePlanner() {
  const currentLocation = useCurrentLocation();
  const matches = useMediaQuery("(min-width:800px)");

  const mobileStyle = useMemo(() => {
    if (matches) {
      return 6;
    } else {
      return 12;
    }
  }, [matches]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

 
const rows = [
{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
{ id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


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
                    <Map currentLocation={currentLocation}/>
                </Grid>


                <Grid item xs={12} style={{...centerStyle,width: "80%"}}>

                <DataGrid
               
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
