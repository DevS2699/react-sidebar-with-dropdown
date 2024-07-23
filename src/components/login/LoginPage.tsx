import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import './styles.css';  // Import the CSS file

interface Props {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const LoginPage: React.FC<Props> = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your login logic here
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
      navigate('/');
    } else {
      alert('Invalid credentials');
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
      </Box>
    </Container>
    </div>
  );
};

export default LoginPage;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, Navigate } from 'react-router-dom';


// const LoginPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);
//     const [token, setToken] = useState(null);

//     const handleLogin = async (e: any) => {
//         e.preventDefault();
//         const clientId = '3MVG9fe4g9fhX0E43bWoXe8E4bzyTY29rUIq5SAW9mO6xxJGi_S8mXQL1aZ1mY.qCOpLYULgl';
//         const clientSecret = '5C19C7BD9D9B9C734C5811C7EC07D5E0B71EC3561BD90A6C5A33AA0D47FBFB7C';

//         try {
//             const response = await axios.post('https://login.salesforce.com/services/oauth2/token', {
//                 grant_type: 'password',
//                 client_id: clientId,
//                 client_secret: clientSecret,
//                 username: username,
//                 password: password
//           }, {
//             headers: {
//               'Content-Type': 'multipart/form-data'
//             }
//           }
//         )

//             setToken(response.data.access_token);
//             console.log(response.data);
//             <Navigate to="/" replace />
//             // Handle successful login here (e.g., redirect to another page)
//         } catch (err) {
//             // setError(err.response ? err.response.data : 'Login failed');
//             console.log('Error occured while login')
//         }
//     };

//     return (
//         <form onSubmit={handleLogin}>
//             <div>
//                 <label>Username</label>
//                 <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
//             </div>
//             <div>
//                 <label>Password</label>
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//             </div>
//             <Link to={'/'}><button type="submit" onClick={handleLogin}>Login</button></Link>
//             {error && <p>{error}</p>}
//         </form>
//     );
// };

// export default LoginPage;

