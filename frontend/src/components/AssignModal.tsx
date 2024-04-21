import { Box, Button, Grid } from "@mui/material";
import { CSSProperties, useCallback, useState } from "react";
import { centerStyle } from '../layout/layout';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const floatingStyle:CSSProperties = {
    ...centerStyle,
    position: "fixed",
    background: 'rgba(0,0,0,0.8)',
    backdropFilter: "blur(20px)",
    width: "100%",
    zIndex: 7,
    color: "white",
    height: "100%",
    // top: 0,
    // left: 0,
    borderRadius: "0.4em",

};

interface AssignModalProps {
    setDate: (date: Date, startTime: Date, endTime: Date) => void;
}


export function AssignModal({locations, setDate}) {

    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [startTime, setStartTime] = useState(dayjs());
    const [endTime, setEndTime] = useState(dayjs());

    const toggleOpen = useCallback(() => {
        setOpen(!open);
    }, [open]);

    const saveAndExit = useCallback(() => {
        setDate(selectedDate.toDate(), startTime.toDate(), endTime.toDate());
        console.log("Save and exit", selectedDate.toDate(), startTime.toDate(), endTime.toDate());
        
        setOpen(false);
        
    }, [setDate, selectedDate, startTime, endTime]);


    if (!open) {
       return    <Button onClick={toggleOpen}>Assign</Button>
    }

    return (

        <Box sx={floatingStyle}>
            <Grid container sx={{}}> 
                <Grid item xs={12} sx={centerStyle}>
                    <h1>AssignModal</h1>
                </Grid>

                <Grid item xs={12} sx={{...centerStyle, bgcolor:"white", paddingY:"1em"}}>

                    <TimePicker
                    label="Uncontrolled picker"
                    defaultValue={dayjs('2022-04-17T15:30')}
                    value={startTime}
                    onChange={(newValue) => setStartTime(newValue)}
                    />
                    <TimePicker
                    label="Controlled picker"
                    value={endTime}
                    onChange={(newValue) => setEndTime(newValue)}
                    />

                </Grid>

                <Grid item xs={12} sx={{...centerStyle,marginY: "2em"}}>
                    {dayjs(selectedDate).format('YYYY-MM-DD')}
                </Grid>

                <Grid item xs={12} sx={{...centerStyle, bgcolor:"white"}}>
                    <DateCalendar
                        value={selectedDate}
                        onChange={(date) => {
                            setSelectedDate(date);
                            setDate(date);
                        }}
                     defaultValue={null}
                     />
                </Grid>
               

                <Grid item xs={12} sx={centerStyle}>
                    <Button onClick={toggleOpen}>Close</Button>
                </Grid>

                <Grid item xs={12} sx={centerStyle}>
                    <Button onClick={saveAndExit}>Save</Button>
                </Grid>

                


            </Grid>
        </Box>

    );

}