import { Chip, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const CustomCard = () => {
  return (
    <Card sx={{margin: 2, backgroundColor: '#F0F0F0', borderRadius: 5}}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <Typography variant="h6" component="div">
              Company Name
            </Typography>
            <Typography variant="body1" component="div">
              Address
            </Typography>
            <Typography variant="body1" component="div">
              Phone Number
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" component="div">
              Time(1pm-2pm)
            </Typography>
            <Typography variant="body1" component="div">
              Date(12/12/2021)
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
};

export default CustomCard;
