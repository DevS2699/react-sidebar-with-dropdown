import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Container, TextField, Grid, Typography } from '@mui/material';

const RecordDetailsPage: React.FC = () => {
  const location = useLocation();
  const data = location.state;
  const [recordData, setRecordData] = useState<any>(null);

  useEffect(() => {
    const fetchRecordData = async () => {
      const token = process.env.REACT_APP_BEARER_TOKEN;
      const url = `https://exlservice8-dev-ed.develop.my.salesforce.com/services/data/v55.0/sobjects/pre_auth__c/${data}`;
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRecordData(response.data);
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchRecordData();
  }, [data]);

  if (!recordData) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Pre-Authorization Form (Read-Only)
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Full Name"
            value={recordData.Full_Name_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Mobile Number"
            value={recordData.Mobile_Number_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="MAID"
            value={recordData.MAID_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Corporate Name"
            value={recordData.Corporate_Name_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Employee ID"
            value={recordData.Employee_Id_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Policy Number"
            value={recordData.Policy_Number_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Insurer Name"
            value={recordData.Insurer_Name_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="In-Patient Number"
            value={recordData.In_Patient_Number_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Patient Name"
            value={recordData.Patient_Name_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Patient ID"
            value={recordData.Patient_Id_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Gender"
            value={recordData.Gender_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Age"
            value={recordData.Age_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Address"
            value={recordData.Address_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone Number"
            value={recordData.Phone_Number_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Insurance Information"
            value={recordData.Insurance_Info_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Pre-Existing Conditions"
            value={recordData.Pre_Existing_Conditions_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Allergies"
            value={recordData.Allergies_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Emergency Contact"
            value={recordData.Emergency_Contact_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Date of Admission"
            value={recordData.Date_of_admission_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Date of Discharge"
            value={recordData.Date_of_discharge_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Diagnosis"
            value={recordData.Diagnosis_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Procedure"
            value={recordData.Procedure_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Admission Type"
            value={recordData.Admission_Type_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Estimated Amount"
            value={recordData.Estimated_Amount_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Doctor Name"
            value={recordData.Doctor_Name_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Provided Room Type"
            value={recordData.Provided_room_type_c__c || ''}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecordDetailsPage;
