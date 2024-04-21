import { Chip, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Clients } from '../api/clients.api';

export default function CustomCard(client: Clients) {
  return (
    <Card sx={{margin: 2, backgroundColor: '#F0F0F0', borderRadius: 5}}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <Typography variant="h6" component="div">
              {client.name}
            </Typography>
            <Typography variant="body1" component="div">
              {client.email}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" component="div">
              {client.city}
            </Typography>
            <Typography variant="body1" component="div">
              {client.county}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Chip label="Priority H" color="error" sx={{ mx: 1, mb: 1 }} />
            <Chip label="Priority M" color="warning" sx={{ mx: 1, mb: 1 }} />
            <Chip label="Priority L" color="success" sx={{ mx: 1, mb: 1 }} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}


