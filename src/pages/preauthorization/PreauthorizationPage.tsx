// import React, { useState, ChangeEvent } from 'react';
// import { Container, TextField, Checkbox, FormControlLabel, Button, Grid, Typography } from '@mui/material';
// import axios from 'axios';

// const PreauthorizationPage: React.FC = () => {
//   const [fullName, setFullName] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [isRsbmMsby, setIsRsbmMsby] = useState(false);
//   const [maid, setMaid] = useState('');
//   const [corporateName, setCorporateName] = useState('');
//   const [employeeId, setEmployeeId] = useState('');
//   const [policyNumber, setPolicyNumber] = useState('');
//   const [insurerName, setInsurerName] = useState('');
//   const [inPatientNumber, setInPatientNumber] = useState('');
//   const [patientName, setPatientName] = useState('');
//   const [patientId, setPatientId] = useState('');
//   const [gender, setGender] = useState('');
//   const [age, setAge] = useState('');
//   const [address, setAddress] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [insuranceInfo, setInsuranceInfo] = useState('');
//   const [preExistingConditions, setPreExistingConditions] = useState('');
//   const [allergies, setAllergies] = useState('');
//   const [emergencyContact, setEmergencyContact] = useState('');
//   const [dateOfAdmission, setDateOfAdmission] = useState('');
//   const [dateOfDischarge, setDateOfDischarge] = useState('');
//   const [diagnosis, setDiagnosis] = useState('');
//   const [procedure, setProcedure] = useState('');
//   const [admissionType, setAdmissionType] = useState('');
//   const [estimatedAmount, setEstimatedAmount] = useState('');
//   const [doctorName, setDoctorName] = useState('');
//   const [providedRoomType, setProvidedRoomType] = useState('');

//   const [signedPreAuthorizationForm, setSignedPreAuthorizationForm] = useState<File | null>(null);
//   const [idProof, setIdProof] = useState<File | null>(null);
//   const [diagnosticReports, setDiagnosticReports] = useState<File | null>(null);
//   const [otherRelevantDocuments, setOtherRelevantDocuments] = useState<File | null>(null);

//   const [signedPreAuthorizationFormPreview, setSignedPreAuthorizationFormPreview] = useState<string | null>(null);
//   const [idProofPreview, setIdProofPreview] = useState<string | null>(null);
//   const [diagnosticReportsPreview, setDiagnosticReportsPreview] = useState<string | null>(null);
//   const [otherRelevantDocumentsPreview, setOtherRelevantDocumentsPreview] = useState<string | null>(null);

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>, setFile: (file: File | null) => void, setPreview: (preview: string | null) => void) => {
//     const file = event.target.files?.[0] || null;
//     setFile(file);
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => setPreview(reader.result as string);
//       reader.readAsDataURL(file);
//     } else {
//       setPreview(null);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('Full_Name_c__c', fullName);
//     formData.append('Mobile_Number_c__c', mobileNumber);
//     formData.append('RSBY_MSBY_c__c', isRsbmMsby ? '00110011' : '00000000');
//     formData.append('MAID_c__c', maid);
//     formData.append('Corporate_Name_c__c', corporateName);
//     formData.append('Employee_Id_c__c', employeeId);
//     formData.append('Policy_Number_c__c', policyNumber);
//     formData.append('Insurer_Name_c__c', insurerName);
//     formData.append('In_Patient_Number_c__c', inPatientNumber);
//     formData.append('Patient_Name_c__c', patientName);
//     formData.append('Patient_Id_c__c', patientId);
//     formData.append('Gender_c__c', gender);
//     formData.append('Age_c__c', age);
//     formData.append('Address_c__c', address);
//     formData.append('Phone_Number_c__c', phoneNumber);
//     formData.append('Insurance_Info_c__c', insuranceInfo);
//     formData.append('Pre_Existing_Conditions_c__c', preExistingConditions);
//     formData.append('Allergies_c__c', allergies);
//     formData.append('Emergency_Contact_c__c', emergencyContact);
//     formData.append('Date_of_admission_c__c', dateOfAdmission);
//     formData.append('Date_of_discharge_c__c', dateOfDischarge);
//     formData.append('Diagnosis_c__c', diagnosis);
//     formData.append('Procedure_c__c', procedure);
//     formData.append('Admission_Type_c__c', admissionType);
//     formData.append('Estimated_Amount_c__c', estimatedAmount);
//     formData.append('Doctor_Name_c__c', doctorName);
//     formData.append('Provided_room_type_c__c', providedRoomType);

//     if (signedPreAuthorizationForm) {
//         formData.append('signedPreAuthorizationForm', signedPreAuthorizationForm, signedPreAuthorizationForm.name);
//     }
//     if (idProof) {
//         formData.append('idProof', idProof, idProof.name);
//     }
//     if (diagnosticReports) {
//         formData.append('diagnosticReports', diagnosticReports, diagnosticReports.name);
//     }
//     if (otherRelevantDocuments) {
//         formData.append('otherRelevantDocuments', otherRelevantDocuments, otherRelevantDocuments.name);
//     }

//     try {
//         const token = process.env.REACT_APP_BEARER_TOKEN;
//         const response = await axios({
//             method: 'post',
//             url: 'https://exlservice8-dev-ed.develop.my.salesforce.com/services/data/v55.0/sobjects/pre_auth__c/',
//             data: formData,
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'Content-Type': 'multipart/form-data'
//             }
//         });
//         console.log('Form submitted successfully:', response.data);
//     } catch (error) {
//         console.error('Error submitting form:', error);
//     }
// };

//   const validateForm = () => {
//     // Implement form validation logic here
//     // Example: check if required fields are filled and if data formats are correct
//     if (!fullName || !mobileNumber || !maid || !corporateName || !employeeId || !policyNumber ||
//         !patientName || !patientId || !gender || !age || !address || !phoneNumber || !insuranceInfo ||
//         !emergencyContact || !dateOfAdmission || !dateOfDischarge || !diagnosis || !procedure ||
//         !admissionType || !estimatedAmount || !doctorName || !providedRoomType) {
//       return false;
//     }
//     // Add more validation rules as needed
//     return true;
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: '20px' }}>
//       <Typography variant="h4" gutterBottom>
//         Pre-Authorization Form
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//         <Grid item xs={12} sm={6}>
//             <TextField
//               label="Full Name"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Mobile Number"
//               value={mobileNumber}
//               onChange={(e) => setMobileNumber(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <FormControlLabel
//               control={<Checkbox checked={isRsbmMsby} onChange={(e) => setIsRsbmMsby(e.target.checked)} />}
//               label="Check this box if claim is an RSBY/MSBY"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="MAID"
//               value={maid}
//               onChange={(e) => setMaid(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Corporate Name"
//               value={corporateName}
//               onChange={(e) => setCorporateName(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Employee ID"
//               value={employeeId}
//               onChange={(e) => setEmployeeId(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Policy Number"
//               value={policyNumber}
//               onChange={(e) => setPolicyNumber(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Insurer Name"
//               value={insurerName}
//               onChange={(e) => setInsurerName(e.target.value)}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="In-Patient Number"
//               value={inPatientNumber}
//               onChange={(e) => setInPatientNumber(e.target.value)}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Patient Name"
//               value={patientName}
//               onChange={(e) => setPatientName(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Patient ID"
//               value={patientId}
//               onChange={(e) => setPatientId(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Gender"
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Age"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Phone Number"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Insurance Information"
//               value={insuranceInfo}
//               onChange={(e) => setInsuranceInfo(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Pre-Existing Conditions"
//               value={preExistingConditions}
//               onChange={(e) => setPreExistingConditions(e.target.value)}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Allergies"
//               value={allergies}
//               onChange={(e) => setAllergies(e.target.value)}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Emergency Contact"
//               value={emergencyContact}
//               onChange={(e) => setEmergencyContact(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Date of Admission"
//               value={dateOfAdmission}
//               onChange={(e) => setDateOfAdmission(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Date of Discharge"
//               value={dateOfDischarge}
//               onChange={(e) => setDateOfDischarge(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Diagnosis"
//               value={diagnosis}
//               onChange={(e) => setDiagnosis(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Procedure"
//               value={procedure}
//               onChange={(e) => setProcedure(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Admission Type"
//               value={admissionType}
//               onChange={(e) => setAdmissionType(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Estimated Amount"
//               value={estimatedAmount}
//               onChange={(e) => setEstimatedAmount(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Doctor Name"
//               value={doctorName}
//               onChange={(e) => setDoctorName(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Provided Room Type"
//               value={providedRoomType}
//               onChange={(e) => setProvidedRoomType(e.target.value)}
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Typography variant="h6">Upload Documents</Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Button
//               variant="contained"
//               component="label"
//             >
//               Signed Pre-Authorization Form
//               <input
//                 type="file"
//                 hidden
//                 onChange={(e) => handleFileChange(e, setSignedPreAuthorizationForm, setSignedPreAuthorizationFormPreview)}
//               />
//             </Button>
//             {signedPreAuthorizationFormPreview && (
//               <img src={signedPreAuthorizationFormPreview} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />
//             )}
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Button
//               variant="contained"
//               component="label"
//             >
//               ID Proof
//               <input
//                 type="file"
//                 hidden
//                 onChange={(e) => handleFileChange(e, setIdProof, setIdProofPreview)}
//               />
//             </Button>
//             {idProofPreview && (
//               <img src={idProofPreview} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />
//             )}
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Button
//               variant="contained"
//               component="label"
//             >
//               Diagnostic Reports
//               <input
//                 type="file"
//                 hidden
//                 onChange={(e) => handleFileChange(e, setDiagnosticReports, setDiagnosticReportsPreview)}
//               />
//             </Button>
//             {diagnosticReportsPreview && (
//               <img src={diagnosticReportsPreview} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />
//             )}
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Button
//               variant="contained"
//               component="label"
//             >
//               Other Relevant Documents
//               <input
//                 type="file"
//                 hidden
//                 onChange={(e) => handleFileChange(e, setOtherRelevantDocuments, setOtherRelevantDocumentsPreview)}
//               />
//             </Button>
//             {otherRelevantDocumentsPreview && (
//               <img src={otherRelevantDocumentsPreview} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />
//             )}
//           </Grid>
//           <Grid item xs={12}>
//             <Button type="submit" variant="contained" color="primary" disabled={!validateForm()}>
//               Submit
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default PreauthorizationPage;

import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

interface FormData {
  Admission_Type_c__c: string;
  Corporate_Name_c__c: string;
  Date_of_admission_c__c: string;
  Date_of_discharge_c__c: string;
  Diagnosis_c__c: string;
  Doctor_Name_c__c: string;
  Employee_Id_c__c: string;
  Estimated_Amount_c__c: string;
  Full_Name_c__c: string;
  In_Patient_Number_c__c: string;
  Insurer_Name_c__c: string;
  MAID_c__c: string;
  Mobile_Number_c__c: string;
  Policy_Number_c__c: string;
  Procedure_c__c: string;
  Provided_room_type_c__c: string;
  RSBY_MSBY_c__c: string;
}

const PreauthorizationPage = () => {
  const initialFormData: FormData = {
    Admission_Type_c__c: "",
    Corporate_Name_c__c: "",
    Date_of_admission_c__c: "",
    Date_of_discharge_c__c: "",
    Diagnosis_c__c: "",
    Doctor_Name_c__c: "",
    Employee_Id_c__c: "",
    Estimated_Amount_c__c: "",
    Full_Name_c__c: "",
    In_Patient_Number_c__c: "",
    Insurer_Name_c__c: "",
    MAID_c__c: "",
    Mobile_Number_c__c: "",
    Policy_Number_c__c: "",
    Procedure_c__c: "",
    Provided_room_type_c__c: "",
    RSBY_MSBY_c__c: ""
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const token = process.env.REACT_APP_BEARER_TOKEN;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post('https://exlservice8-dev-ed.develop.my.salesforce.com/services/data/v55.0/sobjects/pre_auth__c/', formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(response.data);
      alert('Form submitted successfully');
    })
    .catch(error => {
      console.error(error);
      alert('Error submitting the form');
     });
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admission Form
      </Typography>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <TextField
            key={key}
            name={key}
            label={key.replace(/_c__c/g, '').replace(/_/g, ' ')}
            value={formData[key as keyof FormData]}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
        ))}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default PreauthorizationPage;


