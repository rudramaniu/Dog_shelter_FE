// import React, { useState } from 'react';
// import { Container, Typography, TextField, Button, Box } from '@mui/material';
// import { API } from '../api';
// import { useNavigate } from 'react-router-dom';

// export default function AdminLogin() {
//   const [credentials, setCredentials] = useState({ username: '', password: '' });
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = e => setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await API.post('/admin/login', credentials);
//       localStorage.setItem('adminToken', res.data.token);
//       navigate('/');
//     } catch (err) {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <Container sx={{ py: 4 }}>
//       <Typography variant="h4" gutterBottom>Admin Login</Typography>
//       <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
//         <TextField fullWidth label="Username" name="username" margin="normal" onChange={handleChange} required />
//         <TextField fullWidth label="Password" name="password" type="password" margin="normal" onChange={handleChange} required />
//         {error && <Typography color="error">{error}</Typography>}
//         <Button type="submit" variant="contained" sx={{ mt: 2 }}>Login</Button>
//       </Box>
//     </Container>
//   );
// }
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Alert,
  Paper
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PetsIcon from '@mui/icons-material/Pets';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { API } from '../api';

// Mock API function for authentication
// const API = {
//   post: (url, data) => {
//     console.log(`POST to ${url} with data:`, data);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // In a real app, this would be handled by the backend
//         if (data.username === 'admin' && data.password === 'shelter123') {
//           resolve({ status: 200, data: { token: 'mock-auth-token', username: data.username } });
//         } else {
//           reject({ status: 401, message: 'Invalid credentials' });
//         }
//       }, 500);
//     });
//   }
// };

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  

  // Check if already logged in
  useEffect(() => {
    const adminAuth = localStorage.getItem('adminAuth');
    console.log(adminAuth);
    if (adminAuth) {
      navigate('/adminDashboard') // Redirect to admin dashboard if already authenticated
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await API.post('/api/login', formData);
      localStorage.setItem('adminAuth', JSON.stringify(response.data));
      navigate('/adminDashboard'); // Redirect to admin dashboard
    } catch (error) {
      setError('Invalid username or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: '#f8f9fa',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 4
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2
            }}
          >
            <PetsIcon sx={{ fontSize: 40, color: '#ff6b6b', mr: 1 }} />
            <Typography variant="h4" fontWeight="bold" color="primary">
              Paws & Hearts Shelter
            </Typography>
          </Box>
          <Typography variant="h5" color="text.secondary">
            Admin Portal
          </Typography>
        </Box>

        <Paper
          elevation={3}
          sx={{
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              bgcolor: '#ff6b6b',
              color: 'white',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <LockIcon sx={{ mr: 1 }} />
            <Typography variant="h6">Admin Login</Typography>
          </Box>

          <CardContent sx={{ p: 4 }}>
            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <TextField
                name="username"
                label="Username"
                fullWidth
                margin="normal"
                value={formData.username}
                onChange={handleInputChange}
                required
                variant="outlined"
              />

              <TextField
                name="password"
                label="Password"
                fullWidth
                margin="normal"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleInputChange}
                required
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={loading}
                sx={{ mt: 3, mb: 2, py: 1.5, bgcolor: '#ff6b6b', '&:hover': { bgcolor: '#e56060' } }}
              >
                {loading ? 'Logging In...' : 'Login'}
              </Button>
            </form>
          </CardContent>
        </Paper>
      </Container>
    </Box>
  );
}