// import React, { useState } from 'react';
// import { Container, Typography, TextField, Button, Box } from '@mui/material';

// export default function ContactUs() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });
//   const [sent, setSent] = useState(false);

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
//   const handleSubmit = e => {
//     e.preventDefault();
//     // placeholder for API call
//     setSent(true);
//   };

//   return (
//     <Container sx={{ py: 4 }}>
//       <Typography variant="h4" gutterBottom>Contact Us</Typography>
//       {sent ? (
//         <Typography>Message sent! We'll get back to you soon.</Typography>
//       ) : (
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
//           <TextField fullWidth label="Name" name="name" margin="normal" onChange={handleChange} required />
//           <TextField fullWidth label="Email" name="email" type="email" margin="normal" onChange={handleChange} required />
//           <TextField
//             fullWidth
//             label="Message"
//             name="message"
//             margin="normal"
//             multiline
//             rows={4}
//             onChange={handleChange}
//             required
//           />
//           <Button type="submit" variant="contained" sx={{ mt: 2 }}>Send</Button>
//         </Box>
//       )}
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
  Alert,
  Divider
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // placeholder for API call
    try {
      // await API.post('/contact', form);
      setSent(true);
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
                Contact Us
                </Typography>
              </Box>

    <Container maxWidth="sm" sx={{ mt: 6, mb: 6 }}>
      <Paper sx={{ p: 4, borderRadius: 2, boxShadow: 3 }}>
        {!sent ? (
          <>

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
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                fullWidth
                multiline
                rows={4}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: '#ff6b6b',
                  '&:hover': { bgcolor: '#ff5252' }
                }}
              >
                Send Message
              </Button>
              <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
              py: 4
            }}>
              
              <Box sx={{ mb: { xs: 4, md: 0 } }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Paws & Hearts Shelter</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOnIcon sx={{ mr: 1, fontSize: 16, color: '#666' }} />
                  <Typography variant="body2" color="text.secondary">
                    1 Dog Lane, Bloomington, IN 47401
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <PhoneIcon sx={{ mr: 1, fontSize: 16, color: '#666' }} />
                  <Typography variant="body2" color="text.secondary">
                    (555) 123-4567
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ mr: 1, fontSize: 16, color: '#666' }} />
                  <Typography variant="body2" color="text.secondary">
                    info@pawsandhearts.org
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ mb: { xs: 4, md: 0 } }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Hours</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="body2" color="text.secondary">Monday - Friday: 10am - 7pm</Typography>
                  <Typography variant="body2" color="text.secondary">Saturday: 9am - 5pm</Typography>
                  <Typography variant="body2" color="text.secondary">Sunday: 11am - 4pm</Typography>
                </Box>
              </Box>
            </Box>
            </Box>
          </>
        ) : (
          <Typography
            variant="h6"
            align="center"
            color="success.main"
            sx={{ mt: 2 }}
          >
            Thanks! We'll get back to you soon.
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
          Oops—something went wrong. Please try again.
        </Alert>
      </Snackbar>
    </Container>
    <Divider sx={{ my: 2 }} />
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
              py: 4
            }}>
              
              <Box sx={{ mb: { xs: 4, md: 0 } }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Paws & Hearts Shelter</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOnIcon sx={{ mr: 1, fontSize: 16, color: '#666' }} />
                  <Typography variant="body2" color="text.secondary">
                    1 Dog Lane, Bloomington, IN 47401
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <PhoneIcon sx={{ mr: 1, fontSize: 16, color: '#666' }} />
                  <Typography variant="body2" color="text.secondary">
                    (555) 123-4567
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ mr: 1, fontSize: 16, color: '#666' }} />
                  <Typography variant="body2" color="text.secondary">
                    info@pawsandhearts.org
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ mb: { xs: 4, md: 0 } }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Hours</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="body2" color="text.secondary">Monday - Friday: 10am - 7pm</Typography>
                  <Typography variant="body2" color="text.secondary">Saturday: 9am - 5pm</Typography>
                  <Typography variant="body2" color="text.secondary">Sunday: 11am - 4pm</Typography>
                </Box>
              </Box>
            </Box>
    </div>
  );
}
