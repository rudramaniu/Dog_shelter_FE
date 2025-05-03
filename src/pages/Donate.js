// import React from 'react';
// import { Container, Typography, Button } from '@mui/material';

// export default function Donate() {
//   return (
//     <Container sx={{ py: 4, textAlign: 'center' }}>
//       <Typography variant="h4" gutterBottom>Support Our Cause</Typography>
//       <Typography paragraph>Your donations help us provide food, shelter, and medical care.</Typography>
//       <Button variant="contained" href="https://donate.example.com" target="_blank">Donate Now</Button>
//     </Container>
//   );
// }


import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Snackbar,
  Alert
} from '@mui/material';
import { API } from '../api';

export default function Donate() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    amount: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, amount } = form;
    try {
      await API.post('/api/donations', { name, email, amount });
      setSubmitted(true);
    } catch {
      setError(true);
    }
  };

  return (
    <div>
    <Box
    
            sx={{
              height: '10vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/api/placeholder/1200/600")', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              color: 'white',
              textAlign: 'center',
              mb: 6,
              p: 4
            }}
          >
            <Typography variant="h2" fontWeight="bold" gutterBottom>
            Support Our Cause
            </Typography>
          </Box>

    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper sx={{ p: 4, borderRadius: 2, boxShadow: 3 }}>
        {!submitted ? (
          <>

            <Typography variant='h6' align="center" paragraph>
              Your donations help us provide food, shelter, and medical care.
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <TextField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Amount (USD)"
                name="amount"
                type="number"
                inputProps={{ min: 1 }}
                value={form.amount}
                onChange={handleChange}
                required
                fullWidth
              />

              <Typography variant="h6" sx={{ mt: 2 }}>
                Payment Details
              </Typography>
              <TextField
                label="Card Number"
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
                required
                fullWidth
              />
              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  label="Expiry (MM/YY)"
                  name="expiry"
                  value={form.expiry}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  label="CVC"
                  name="cvc"
                  type="password"
                  value={form.cvc}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  bgcolor: '#ff6b6b',
                  '&:hover': { bgcolor: '#ff5252' }
                }}
              >
                Pay ${form.amount || '0'}
              </Button>
            </Box>
          </>
        ) : (
          <Typography variant="h5" align="center" color="success.main">
            Thank you! Your donation of ${form.amount} has been received.
          </Typography>
        )}
      </Paper>

      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={() => setError(false)}
      >
        <Alert
          onClose={() => setError(false)}
          severity="error"
          sx={{ width: '100%' }}
        >
          Something went wrong—please try again.
        </Alert>
      </Snackbar>
    </Container>
    </div>
  );
}
