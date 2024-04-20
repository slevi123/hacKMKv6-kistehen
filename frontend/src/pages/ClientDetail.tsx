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
} from "@mui/material";
import { useState } from "react";
import { RouteList } from "../layout/RoutesList";
import { Sidebar } from "../layout/Sidebar";

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
    <div>
      <h1>Client Detail</h1>
      <Sidebar>
        <h1>Home Sidebar</h1>
        {/* <Link to="/about">About</Link> */}
        <RouteList />
      </Sidebar>
      <Container maxWidth="lg">
        {/* Company Details */}
        <Box my={4}>
          <Typography variant="h4" gutterBottom>
            Company Details
          </Typography>
          {/* Replace the dummy content with your actual company details */}
          <Typography variant="body1">
            Company Name: ABC Company <br />
            Address: 123 Street, City <br />
            Phone Number: 123-456-7890
          </Typography>
        </Box>

        {/* Add Notes Section */}
        <Box my={4}>
          <Card>
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
                rows={4}
                variant="outlined"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddNote}
                style={{ marginTop: "1rem" }}
              >
                Add Note
              </Button>
            </CardContent>
          </Card>
        </Box>

        {/* Display Notes Section */}
        <Box my={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Notes
              </Typography>
              <List>
                {notes.map((note, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={note} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Box>

        <Divider />

        {/* Add Feedback Section */}
        <Box my={4}>
          <Card>
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
        </Box>

        {/* Display Feedback Section */}
        <Box my={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Feedback
              </Typography>
              <List>
                {feedbacks.map((feedback, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={feedback} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
}
