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
  CircularProgress,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { RouteList } from "../layout/RoutesList";
import { Sidebar } from "../layout/Sidebar";
import CustomCard from "../components/CustomCards";
import { Animation } from "../layout/Animation";
import { useParams } from "react-router-dom";
import { useClient } from "../query/clients.query";
import { addNotes } from "../api/notes.api";
import { useNotes } from "../query/note.query";
import useFeedbacks from "../hooks/useFeedbacks";
import { addFeedback } from "../api/feedback.api";

export default function ClientDetail() {
  // State for input values in add note and add feedback forms
  const [noteInput, setNoteInput] = useState("");
  const [feedbackInput, setFeedbackInput] = useState("");
  const id = useParams<{ id: string }>().id ?? "";

  const { data: notes } = useNotes(id);

  // Function to handle adding a feedback
  // const id = useParams<{ id: string }>().id ?? '';

  const { data: client } = useClient(id);

  const { data: feedbacks, isLoading, isError, error } = useFeedbacks();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return (
      <>
        <Alert variant="outlined" severity="error">
          {error && error.message}
        </Alert>
      </>
    );
  }

  // Function to handle adding a note
  const handleAddNote = () => {
    const note = {
      message: noteInput,
      agentId: "0",
    };
    addNotes(id, note);
    window.location.reload();
  };

  const handleAddFeedback = () => {
    const feedback = {
      feedback: feedbackInput,
    };
    addFeedback(feedback);
    window.location.reload();
  };

  return (
    <Box sx={{ margin: "1em" }}>
      <Sidebar>
        {/* <Link to="/about">About</Link> */}
        <RouteList />
      </Sidebar>
      <Animation dir={"up"}>
        <div
          style={{ backgroundColor: "white", zIndex: 1, borderRadius: "0.2em" }}
        >
          <h1>Client Detail</h1>
          <Container maxWidth="lg">
            {/* Company Details */}
            <CustomCard
              id={client?.id}
              name={client?.name}
              email={client?.email}
              city={client?.city}
              county={client?.county}
              sold={client?.sold}
              size={client?.size}
            />

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
                        {notes?.map((note, index) => (
                          <Paper
                            key={index}
                            elevation={3}
                            style={{
                              margin: "0.5rem",
                              padding: "0.5rem",
                              backgroundColor: "inherit",
                            }}
                          >
                            <Typography variant="body1">
                              {note.message}
                            </Typography>
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
                  <Card
                    sx={{
                      backgroundColor: "#F0F0F0",
                      borderRadius: 5,
                      maxWidth: 400,
                    }}
                  >
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
                        {feedbacks?.data.map((feedback, index) => (
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
                              <ListItemText primary={feedback.feedback} />
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
