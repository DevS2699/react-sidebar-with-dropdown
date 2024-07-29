import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab,
  Button
} from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
 
interface ApiData {
  Id: string;
  Name: string;
}
 
const HomePage = (props: {}) => {
  const [apiData, setApiData] = useState<ApiData[]>([]);
  const [tabValue, setTabValue] = useState(0);
 
  useEffect(() => {
    handleTestApi();
  }, []);
 
  const handleTestApi = async () => {
    console.log(process.env.REACT_APP_BEARER_TOKEN);
    const token = process.env.REACT_APP_BEARER_TOKEN;
    const url = 'https://exlservice8-dev-ed.develop.my.salesforce.com/services/data/v55.0/sobjects/pre_auth__c/';
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
 
      console.log('API Response:', response.data.recentItems);
      setApiData(response.data.recentItems);
    } catch (error) {
      console.error('API Error:', error);
    }
  };
 
  const handleCompleteData = async () =>{
    const token = process.env.REACT_APP_BEARER_TOKEN;
   
  }
 
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };
 
  return (
    <div>
      <Tabs value={tabValue} onChange={handleTabChange} aria-label="claims tabs">
        <Tab label="Active Claims" />
        <Tab label="Approved Claims" />
      </Tabs>
 
{tabValue === 0 && (
  <TableContainer component={Paper} className="mt-4">
    <Table sx={{ minWidth: 650 }} aria-label="active claims table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Full Name</TableCell>
          <TableCell>Insurer Name</TableCell>
          <TableCell>MAID</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {apiData.map((row) => (
          <TableRow key={row.Id}>
            <TableCell>
              <Link to={'/recordDetails'} state={row.Id} style={{ color: 'blue' }}>
                {row.Id}
              </Link>
            </TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>EXL</TableCell> {/* Static value for Insurer Name */}
            <TableCell>33245678</TableCell> {/* Static value for MAID */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)}
 
      {tabValue === 1 && (
        <TableContainer component={Paper} className="mt-4">
          <Table sx={{ minWidth: 650 }} aria-label="approved claims table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Approval Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Assuming `approvedApiData` would have data for the approved claims */}
              {apiData.map((row) => (
                <TableRow key={row.Id}>
                  <TableCell>
                    <Link to={'/approvedRecordDetails'} state={row.Id} style={{ color: 'blue' }}>
                      {row.Id}
                    </Link>
                  </TableCell>
                  <TableCell>{row.Name}</TableCell>
                  <TableCell>{/* Add the Approval Date here if available */}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
 
export default HomePage;