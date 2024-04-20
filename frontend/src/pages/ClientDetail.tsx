import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { RouteList } from "../layout/RoutesList";
import { Sidebar } from "../layout/Sidebar";
import CustomCard from "../components/CustomCards";
import { Animation } from "../layout/Animation";

export default function ClientDetail() {
  const [notes, setNotes] = useState<string[]>([]);
  const [feedbacks, setFeedbacks] = useState<string[]>([]);

  // State for input values in add note and add feedback forms
  const [noteInput, setNoteInput] = useState("");
  const [feedbackInput, setFeedbackInput] = useState("");

  // Function to handle adding a note
  const handleAddNote = () => {
    if (noteInput.trim() !== "") {
      setNotes([...notes, noteInput]);
      setNoteInput("");
    }
  };

  // Function to handle adding a feedback
  const handleAddFeedback = () => {
    if (feedbackInput.trim() !== "") {
      setFeedbacks([...feedbacks]);
      setFeedbackInput("");
    }
  };

  return (
    <Box sx={{margin: "1em"}}>
      <Sidebar>
        {/* <Link to="/about">About</Link> */}
        <RouteList />
      </Sidebar>
      <Animation dir={"up"}>
    <div style={{ backgroundColor: "white", zIndex: 1, borderRadius: "0.2em" }}>
      <h1>Client Detail</h1>
      

      
      <Container maxWidth="lg">
        {/* Company Details */}
        <CustomCard />

        {/* Add Note and Display Notes Section */}
        <Box my={4} mx={2}>
          <Grid container spacing={2}>
            {/* Add Note Section */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: "#F0F0F0",
                  borderRadius: 5,
                  maxWidth: 400,
                }}
              >
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Add Note
                  </Typography>
                  <TextField
                    label="Note"
                    fullWidth
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                    multiline
                    rows={2}
                    variant="outlined"
                  />
                  <Button
                    variant="contained"
                    onClick={handleAddNote}
                    style={{ marginTop: "1rem" }}
                  >
                    Add Note
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Display Notes Section */}
            <Grid item xs={12} md={6} padding={2}>
              <Card sx={{ borderRadius: 5, backgroundColor: "#F0F0F0" }}>
                <CardContent sx={{ backGroundColor: "#F0F0F0" }}>
                  <Typography variant="h5" gutterBottom>
                    Notes
                  </Typography>
                  <List>
                    {notes.map((note, index) => (
                      <Paper
                        key={index}
                        elevation={3}
                        style={{
                          margin: "0.5rem",
                          padding: "0.5rem",
                          backgroundColor: "inherit",
                        }}
                      >
                        <Typography variant="body1">{note}</Typography>
                      </Paper>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Divider />

        {/* Add Feedback Section */}
        <Box my={4} mx={2}>
          <Grid container spacing={3}>
            {/* Add Feedback Section */}
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: "#F0F0F0", borderRadius: 5, maxWidth: 400 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Add Feedback
                  </Typography>
                  <TextField
                    label="Feedback"
                    fullWidth
                    value={feedbackInput}
                    onChange={(e) => setFeedbackInput(e.target.value)}
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddFeedback}
                    style={{ marginTop: "1rem" }}
                  >
                    Add Feedback
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Display Feedback Section */}
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: "#F0F0F0", borderRadius: 5 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Feedback
                  </Typography>
                  <List>
                    {feedbacks.map((feedback, index) => (
                      <Paper
                        key={index}
                        elevation={3}
                        style={{
                          margin: "0.5rem",
                          padding: "0.5rem",
                          borderRadius: "5px",
                        }}
                      >
                        <ListItem>
                          <ListItemText primary={feedback} />
                        </ListItem>
                      </Paper>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
    </Animation>

    </Box>
  );
}
