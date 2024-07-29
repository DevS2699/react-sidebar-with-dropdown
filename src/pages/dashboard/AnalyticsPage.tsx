import React from 'react';
import { Container, Grid, Button, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import axios from 'axios';
import CancelIcon from '@mui/icons-material/Cancel';
import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
 
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
 
 
const Icon1 = (props: any) => (
  <SvgIcon {...props}>
    <rect x="2" y="2" width="20" height="6" />
    <rect x="2" y="10" width="20" height="6" />
    <rect x="2" y="18" width="20" height="6" />
  </SvgIcon>
);
 
const Icon2 = (props: any) => (
  <SvgIcon {...props}>
    <path d="M9 19L2 12l1.41-1.41L9 16.17l12-12L22.41 6 9 19z" />
  </SvgIcon>
);
 
const CardStyled = styled(Card)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  color: theme.palette.common.white,
}));
 
const PreauthorizedRaisedCard = styled(CardStyled)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));
 
const PreauthorizedApprovedCard = styled(CardStyled)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
}));
 
const PreauthorizedRejectedCard = styled(CardStyled)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
}));
 
const options = {
  plugins: {
    title: {
      display: true,
      text: 'Graphical Representation',
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
    legend: {
      position: 'top',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
 
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
 
const data: ChartData<'bar'> = {
  labels,
  datasets: [
    {
      label: 'Raised',
      data: [65, 59, 80, 81, 86, 55, 40],
      backgroundColor: '#1976D2',
    },
    {
      label: 'Approved',
      data: [28, 48, 40, 19, 56, 27, 20],
      backgroundColor: '#2E7D32',
    },
    {
      label: 'Rejected',
      data: [37, 11, 20, 62, 30, 28, 10],
      backgroundColor: '#D32F2F',
    },
  ],
};
 
 
 
type Props = {};
 
const handleTestApi = async () => {
  const token = '00D5g00000KLGOg!ARwAQBr6tqVZlTeP7dyzN6LoIrC0tyxw1_Pt4gpgsXlje9rCL1iSmevN4DeunI1cg6p2fbApgBQjCQriejDr0dTwobJKqPp3';
  const url = 'https://exlservice8-dev-ed.develop.my.salesforce.com/services/data/v55.0/sobjects/Opportunity/0065g00000ZexukAAB';
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
 
    console.log('API Response:', response.data);
    // Handle the response data as needed
  } catch (error) {
    // console.error('API Error:', error.response ? error.response.data : error.message);
    console.error('API Error:', error);
    // Handle error appropriately
  }
};
 
const AnalyticsPage = (props: Props) => {
  return (
    <Container className="mt-4">
      <Grid container item xs={12} spacing={2}>
        {/* <Grid item xs={3} spacing={2}> */}
          <PreauthorizedRaisedCard style={{marginRight:'10px'}}>
            <CardContent>
              <Icon1 fontSize="large" />
            </CardContent>
            <CardContent>
              <Typography variant="h3" component="div">
                172
              </Typography>
              <Typography variant="subtitle1" component="div">
                Preauthorized Raised
              </Typography>
            </CardContent>
          </PreauthorizedRaisedCard>
        {/* </Grid>
        <Grid item xs={12} sm={6} md={3}> */}
          <PreauthorizedApprovedCard style={{marginRight:'10px'}}>
            <CardContent>
              <Icon2 fontSize="large" />
            </CardContent>
            <CardContent>
              <Typography variant="h3" component="div">
                142
              </Typography>
              <Typography variant="subtitle1" component="div">
                Preauthorized Approved
              </Typography>
            </CardContent>
          </PreauthorizedApprovedCard>
          <PreauthorizedRejectedCard style={{marginRight:'10px'}}>
            <CardContent>
              <CancelIcon fontSize="large" />
            </CardContent>
            <CardContent>
              <Typography variant="h3" component="div">
                30
              </Typography>
              <Typography variant="subtitle1" component="div">
                Preauthorized Rejected
              </Typography>
            </CardContent>
          </PreauthorizedRejectedCard>
        {/* </Grid> */}
      </Grid>
    <Button onClick={handleTestApi}>Test API</Button>
    <div>
    <Bar data={data} />;
    </div>
    </Container>
 
  );
};
 
export default AnalyticsPage;