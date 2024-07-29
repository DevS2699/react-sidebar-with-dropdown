import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import './styles.css';  // Import the CSS file

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const clientId = '3MVG9fe4g9fhX0E43bWoXe8E4b8bA38bA.8rYJSt6XzbM7n6dvN3qsK205GG32D_A.kq4qmlJXehtnw3DtTag';
    const clientSecret = '895F2E621028F261ABBDCA206623E8F440EE6048DD4737474669543BE00F15F5';
    const endpoint = 'https://login.salesforce.com/services/oauth2/token';  // Use the appropriate endpoint for production or sandbox

    const params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
    params.append('username', username);
    params.append('password', password);

    try {
      const response = await axios.post(endpoint, params.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      const token = response.data.access_token;
      localStorage.setItem('token', token);
      navigate('/');
    } catch (err) {
      console.log('Invalid credentials or login failed');
    }
  };

  return (
    <div className='two-tone-background'>
      <Container maxWidth="sm">
        <Box sx={{ mt: 25 }}>
          <Typography variant="h4" gutterBottom>Login</Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
          {error && <Typography color="error">{error}</Typography>}
        </Box>
      </Container>
    </div>
  );
};

export default LoginPage;
