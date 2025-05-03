// // import React from 'react';
// // import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
// // // import { API } from '../api'; // API calls commented out

// // // Inline mock data
// // const mockEvents = [
// //   { id: 101, title: 'Spring Adoption Drive', date: '2025-05-10T10:00:00Z', description: 'Join us in the park for an outdoor adoption event!' },
// //   { id: 102, title: 'Volunteer Orientation', date: '2025-05-15T18:00:00Z', description: 'Learn how to help care for and socialize our dogs.' },
// //   { id: 103, title: 'Fundraiser Gala', date: '2025-06-01T19:00:00Z', description: 'An evening to support our shelter’s rescue efforts.' },
// //   { id: 104, title: 'Pet Care Workshop', date: '2025-06-20T14:00:00Z', description: 'Tips on grooming, nutrition, and overall dog care.' }
// // ];

// // export default function Events() {
// //   // const [events, setEvents] = useState([]);
// //   // useEffect(() => { API.get('/events').then(res => setEvents(res.data)); }, []);
// //   const events = mockEvents;

// //   return (
// //     <Container style={{ padding: '32px 0' }}>
// //       <Typography variant="h4" gutterBottom>Events</Typography>
// //       <Grid container spacing={2}>
// //         {events.map(e => (
// //           <Grid item key={e.id} xs={12} sm={6} md={4}>
// //             <Card>
// //               <CardContent>
// //                 <Typography variant="h6">{e.title}</Typography>
// //                 <Typography color="textSecondary">{new Date(e.date).toLocaleDateString()}</Typography>
// //                 <Typography>{e.description}</Typography>
// //               </CardContent>
// //             </Card>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Container>
// //   );
// // }

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Button
// } from '@mui/material';
// import EventIcon from '@mui/icons-material/Event';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// const mockEvents = [
//   {
//     id: 101,
//     title: 'Spring Adoption Drive',
//     date: '2025-05-10T10:00:00Z',
//     location: 'Central Park',
//     description: 'Join us in the park for an outdoor adoption event!'
//   },
//   {
//     id: 102,
//     title: 'Volunteer Orientation',
//     date: '2025-05-15T18:00:00Z',
//     location: 'Shelter Training Room',
//     description: 'Learn how to help care for and socialize our dogs.'
//   },
//   {
//     id: 103,
//     title: 'Fundraiser Gala',
//     date: '2025-06-01T19:00:00Z',
//     location: 'City Ballroom',
//     description: 'An evening to support our shelter’s rescue efforts.'
//   },
//   {
//     id: 104,
//     title: 'Pet Care Workshop',
//     date: '2025-06-20T14:00:00Z',
//     location: 'Community Center',
//     description: 'Tips on grooming, nutrition, and overall dog care.'
//   }
// ];

// const formatDate = (iso) =>
//   new Date(iso).toLocaleDateString(undefined, {
//     month: 'long',
//     day: 'numeric',
//     year: 'numeric'
//   });

// export default function Events() {
//   return (
//     <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh' }}>
//       {/* Hero */}
//       <Box
//         sx={{
//           height: '10vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundImage:
//             'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("/api/placeholder/1200/600")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           color: 'white',
//           textAlign: 'center',
//           mb: 4,
//           p: 4
//         }}
//       >
//         <Typography variant="h2" fontWeight="bold">
//           Upcoming Events
//         </Typography>
//       </Box>

//       <Container maxWidth="lg" sx={{ py: 4 }}>
//         <Grid container spacing={3}>
//           {mockEvents.map((evt) => (
//             <Grid item key={evt.id} xs={12} sm={6} md={4}>
//               <Card
//                 sx={{
//                   height: '100%',
//                   borderRadius: 2,
//                   boxShadow: 3,
//                   transition: 'transform 0.2s',
//                   '&:hover': {
//                     transform: 'translateY(-5px)',
//                     boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
//                   }
//                 }}
//               >
//                 <Box
//                   sx={{
//                     bgcolor: '#ff6b6b',
//                     color: 'white',
//                     p: 2,
//                     borderTopLeftRadius: 8,
//                     borderTopRightRadius: 8
//                   }}
//                 >
//                   <Typography variant="h6">{evt.title}</Typography>
//                 </Box>
//                 <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                     <EventIcon sx={{ mr: 1, fontSize: 16, color: '#666' }} />
//                     <Typography variant="body2" color="text.secondary">
//                       {formatDate(evt.date)}
//                     </Typography>
//                   </Box>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                     <LocationOnIcon sx={{ mr: 1, fontSize: 16, color: '#666' }} />
//                     <Typography variant="body2" color="text.secondary">
//                       {evt.location}
//                     </Typography>
//                   </Box>
//                   <Typography variant="body2" sx={{ flexGrow: 1 }}>
//                     {evt.description}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }
import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CircularProgress
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { API } from '../api';

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    API.get('/api/events')
      .then(res => {
        setEvents(res.data);
        const sorted = res.data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setEvents(sorted);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography color="error">Failed to load events. Please try again later.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Hero */}
      <Box
        sx={{
          height: '10vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("/api/placeholder/1200/600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          mb: 4,
          p: 4
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          Upcoming Events
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3} justifyContent="center">
          {events.map(evt => (
            <Grid
              item
              key={evt.id}
              xs={12}
              sm={4}  /* 3 columns on small+ */
              md={4}  /* 3 columns on medium+ */
            >
              <Card
                sx={{
                  width: 350,
                  height: 250,           /* fixed height */
                  borderRadius: 2,
                  boxShadow: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                  }
                }}
              >
                {/* Colored header */}
                <Box
                  sx={{
                    bgcolor: '#ff6b6b',
                    color: 'white',
                    p: 2,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8
                  }}
                >
                  <Typography variant="h6" noWrap>
                    {evt.title}
                  </Typography>
                </Box>

                {/* Content */}
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
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
                  <Typography variant="body2" sx={{ flexGrow: 1 }}>
                    {evt.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
