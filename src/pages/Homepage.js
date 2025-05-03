// import React, { useEffect, useState } from 'react';
// import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
// import { API } from '../api';

// export default function Homepage() {
//   const [dogs, setDogs] = useState([]);
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // API.get('/dogs?limit=3').then(res => setDogs(res.data));
//     // API.get('/events?limit=3').then(res => setEvents(res.data));
//     setDogs([
//         { id: 1, name: 'Buddy', breed: 'Labrador', photo: 'https://example.com/images/buddy.jpg' },
//         { id: 2, name: 'Luna', breed: 'German Shepherd', photo: 'https://example.com/images/luna.jpg' },
//         { id: 3, name: 'Charlie', breed: 'Beagle', photo: 'https://example.com/images/charlie.jpg' }
//       ]);
//       setEvents([
//         { id: 101, title: 'Spring Adoption Drive', date: '2025-05-10T10:00:00Z' },
//         { id: 102, title: 'Volunteer Orientation', date: '2025-05-15T18:00:00Z' },
//         { id: 103, title: 'Fundraiser Gala', date: '2025-06-01T19:00:00Z' }
//       ]);
// }, []);

//   return (
//     <Container sx={{ py: 4 }}>
//       <Typography variant="h4" gutterBottom>Welcome to Our Shelter</Typography>
//       <Typography paragraph>Our mission is to rescue and rehome dogs in need. Explore adoptable friends below.</Typography>
//       <Typography variant="h5" gutterBottom>Featured Dogs</Typography>
//       <Grid container spacing={2}>
//         {dogs.map(dog => (
//           <Grid item key={dog.id} xs={12} sm={6} md={4}>
//             <Card>
//               <CardMedia component="img" height="140" image={dog.photo} alt={dog.name} />
//               <CardContent>
//                 <Typography variant="h6">{dog.name}</Typography>
//                 <Typography>Breed: {dog.breed}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>Upcoming Events</Typography>
//       <Grid container spacing={2}>
//         {events.map(evt => (
//           <Grid item key={evt.id} xs={12} sm={6} md={4}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6">{evt.title}</Typography>
//                 <Typography>{new Date(evt.date).toLocaleDateString()}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Box, 
  Paper,
  IconButton,
  Divider
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import EventIcon from '@mui/icons-material/Event';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { API } from '../api';

export default function Homepage() {
  const [dogs, setDogs] = useState([]);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {    
    API.get('/api/events')
    .then(res => {
      const sorted = [...res.data].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      setEvents(sorted.slice(0, 3));

    })
  }, []);

  // Helper function to format dates nicely
  const formatDate = (dateString) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Box sx={{ 
      bgcolor: '#f8f9fa',
      minHeight: '50vh',
    }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '30vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/api/placeholder/1200/800")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          mb: 4,
          p: 4
        }}
      >
        <Typography variant="h2" fontWeight="bold" sx={{ mb: 2 }}>
          Paws & Hearts Shelter
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, maxWidth: 'md' }}>
          Helping dogs find their forever homes since 2023
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" size="large" color="primary" 
            sx={{ 
              bgcolor: '#ff6b6b', 
              '&:hover': { bgcolor: '#ff5252' },
              borderRadius: 2,
              px: 4
            }}
            onClick={()=>navigate('/adopt')}
            >
            Adopt a Dog
          </Button>
          <Button variant="outlined" size="large" 
            sx={{ 
              color: 'white', 
              borderColor: 'white',
              '&:hover': { borderColor: '#ff6b6b', bgcolor: 'rgba(255,255,255,0.1)' },
              borderRadius: 2,
              px: 4
            }}
            onClick={()=>navigate('/volunteer')}
            >
            Volunteer
          </Button>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Mission Statement */}
        <Paper elevation={0} sx={{ 
          p: 4, 
          mb: 6, 
          borderRadius: 4,
          backgroundColor: 'white',
          textAlign: 'center'
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <FavoriteIcon sx={{ fontSize: 40, color: "#ff6b6b" }} />
          </Box>
          <Typography variant="h4" gutterBottom fontWeight="medium">Our Mission</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 'md', mx: 'auto', fontSize: '1.1rem' }}>
            We are dedicated to rescuing, rehabilitating, and rehoming dogs in need. 
            Each year, we help hundreds of dogs find their loving forever families 
            and provide care for those still waiting for their chance.
          </Typography>
        </Paper>

        {/* Featured Dogs Section */}
        {/* <Box sx={{ mb: 6 }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 3,
            borderLeft: '4px solid #ff6b6b',
            pl: 2
          }}>
            <PetsIcon sx={{ mr: 1, color: '#ff6b6b' }} />
            <Typography variant="h4" fontWeight="medium">Featured Dogs</Typography>
          </Box>
          
          <Grid container spacing={3}>
            {dogs.map(dog => (
              <Grid item key={dog.id} xs={12} sm={6} md={4}>
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: 2,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={dog.photo}
                    alt={dog.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom fontWeight="medium">{dog.name}</Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {dog.breed} • {dog.age}
                    </Typography>
                    <Button 
                      size="small" 
                      sx={{ 
                        color: '#ff6b6b',
                        '&:hover': { bgcolor: 'rgba(255,107,107,0.1)' }
                      }}
                      endIcon={<ArrowForwardIcon fontSize="small" />}
                    >
                      Meet {dog.name}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button 
              variant="contained" 
              color="primary"
              sx={{ 
                bgcolor: '#ff6b6b', 
                '&:hover': { bgcolor: '#ff5252' },
                borderRadius: 2,
                px: 4
              }}
            >
              See More Dogs
            </Button>
          </Box>
        </Box> */}

        {/* Upcoming Events Section */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 3,
            borderLeft: '4px solid #ff6b6b',
            pl: 2
          }}>
            <EventIcon sx={{ mr: 1, color: '#ff6b6b' }} />
            <Typography variant="h4" fontWeight="medium">Upcoming Events</Typography>
          </Box>
          
          <Grid container spacing={3}>
            {events.map(evt => (
              <Grid item key={evt.id} xs={12} sm={6} md={4}>
                <Card sx={{ 
                  height: '100%',
                  borderRadius: 2,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                  }
                }}>
                  <Box sx={{ 
                    bgcolor: '#ff6b6b', 
                    color: 'white', 
                    p: 2,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}>
                    <Typography variant="h6">{evt.title}</Typography>
                  </Box>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <EventIcon sx={{ mr: 1, fontSize: 16, color: '#666' }} />
                      <Typography variant="body2" color="text.secondary">
                        {formatDate(evt.date)}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <LocationOnIcon sx={{ mr: 1, fontSize: 16, color: '#666' }} />
                      <Typography variant="body2" color="text.secondary">
                        {evt.location}
                      </Typography>
                    </Box>
                    <Typography variant="body1">{evt.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button 
              variant="outlined"
              sx={{ 
                color: '#ff6b6b', 
                borderColor: '#ff6b6b',
                '&:hover': { 
                  borderColor: '#ff5252', 
                  bgcolor: 'rgba(255,107,107,0.1)' 
                },
                borderRadius: 2,
                px: 4
              }}
              onClick={()=>navigate('/events')}
            >
              View All Events
            </Button>
          </Box>
        </Box>

        {/* Call to Action */}
        <Paper
          sx={{
            p: 4,
            mb: 6,
            borderRadius: 4,
            backgroundImage: 'linear-gradient(to right, #ff9a9e, #fad0c4)',
            color: 'white',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ mb: { xs: 3, md: 0 } }}>
            <Typography variant="h5" fontWeight="medium" gutterBottom>
              Ready to make a difference?
            </Typography>
            <Typography variant="body1">
              Our dogs need your help. Donate, volunteer, or spread the word today.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'white',
                color: '#ff6b6b',
                '&:hover': { bgcolor: '#f0f0f0' },
                borderRadius: 2,
                px: 3
              }}
              onClick={()=>navigate('/donate')}
            >
              Donate Now
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                borderRadius: 2,
                px: 3
              }}
              onClick={()=>navigate('/about')}
            >
              Learn More
            </Button>
          </Box>
        </Paper>

        {/* Footer Quick Info */}
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
      </Container>
    </Box>
  );
}