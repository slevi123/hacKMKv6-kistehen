import { Link } from "react-router-dom";
import CustomCard from "../components/CustomCards";
import { RouteList } from "../layout/RoutesList";
import { Sidebar } from "../layout/Sidebar";
import { useClients } from "../query/clients.query";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { addClient } from "../api/clients.api";

export default function AllClients() {
  const { data } = useClients();

  const showData = () => {
    setInfo(true);
  };

  const hideData = () => {
    setInfo(false);
  };

  const [info, setInfo] = useState<boolean>(true);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [county, setCounty] = useState<string>("");
    const [latitute, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);

    const uploadData = () => {
        const client = {
            name: name,
            email: email,
            city: city,
            county: county,
            latitude: latitute,
            longitude: longitude
            };
        addClient(client);
        setInfo(true);
        window.location.reload();
      };
    
  return (
    <div>
      <Sidebar>
        {/* <Link to="/">Home</Link> */}
        <RouteList />
      </Sidebar>
      <Box sx={{ width: "80%", margin: "auto" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4">Clients</Typography>
          <Box>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#bec0bf" }}
              style={{ marginRight: "8px" }}
              onClick={showData}
            >
              Products
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#bec0bf" }}
              onClick={hideData}
            >
              Upload
            </Button>
          </Box>
        </Box>

        {info && data?.map((client) => (
          <Container key={client.id}>
            <Link
              to={`/clientDetails/${client.id}`}
              style={{ textDecoration: "none" }}
            >
              <CustomCard
                id={client.id}
                name={client.name}
                email={client.email}
                city={client.city}
                county={client.county}
                sold={client.sold}
                size={client.size}
              />
            </Link>
          </Container>
        ))}
        {!info && 
        <Box sx={{ mt: "2em" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "2px 2px 0px 0px rgba(0,0,0,0.2)",
            marginBottom: "2em",
            backgroundColor: "white",
            paddingBottom: "1em",
            paddingTop: "1em",
            borderRadius: "0.6em",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            sx={{ marginLeft: "1em" }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            variant="outlined"
            sx={{ marginRight: "1em" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "2px 2px 0px 0px rgba(0,0,0,0.2)",
            marginBottom: "2em",
            backgroundColor: "white",
            paddingBottom: "1em",
            paddingTop: "1em",
            borderRadius: "0.6em",
          }}
        >
          <TextField
            id="outlined-basic"
            label="County"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
            variant="outlined"
            sx={{ marginLeft: "1em" }}
          />
          <TextField
            id="outlined-number"
            label="Latitude"
            value={latitute}
            onChange={(e) => setLatitude(+e.target.value)}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-number"
            label="Longitude"
            value={longitude}
            onChange={(e) => setLongitude(+e.target.value)}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ marginRight: "1em" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "2px 2px 0px 0px rgba(0,0,0,0.2)",
            marginBottom: "2em",
            backgroundColor: "white",
            paddingBottom: "1em",
            paddingTop: "1em",
            borderRadius: "0.6em",
          }}
        >
          <Typography></Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#bec0bf", marginRight: "2em" }}
            onClick={uploadData}
          >
            Add clinet
          </Button>
        </Box>
      </Box>
        }
      </Box>
    </div>
  );
}
