
// import React, { useState } from 'react';
// import {
//   Container,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Snackbar,
//   Alert,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider
// } from '@mui/material';
// import { API } from '../api';

// export default function Volunteer() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     availability: '',
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);

//   const handleChange = e =>
//     setForm(f => ({ ...f, [e.target.name]: e.target.value }));

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setError(false);

//     try {
//       await API.post('/api/volunteers', form);
//       setSubmitted(true);
//       window.scrollTo(0, 0);
//     } catch (err) {
//       console.error('Failed to submit volunteer:', err);
//       setError(true);
//     }
//   };

//   const volunteerOpportunities = [
//     {
//       title: "Community Garden",
//       description: "Help maintain our community gardens and grow fresh produce for local food banks.",
//       image: "/api/placeholder/400/200"
//     },
//     {
//       title: "Tutoring Program", 
//       description: "Support students of all ages with homework, test preparation, and skill development.",
//       image: "/api/placeholder/400/200"
//     },
//     {
//       title: "Senior Companion", 
//       description: "Spend time with elderly community members, providing companionship and assistance.",
//       image: "/api/placeholder/400/200"
//     }
//   ];

//   return (
//     <Box>
//       {/* Hero Banner */}
//       <Box
//         sx={{
//           height: '30vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundImage:
//             'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/api/placeholder/1200/600")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed',
//           color: 'white',
//           textAlign: 'center',
//           p: 4
//         }}
//       >
//         <Typography variant="h2" fontWeight="bold" gutterBottom>
//           Volunteer with Us
//         </Typography>
//         <Typography variant="h5" sx={{ maxWidth: 'md', mx: 'auto' }}>
//           Join our team of dedicated volunteers and make a difference in our community
//         </Typography>
//       </Box>

//       {/* Why Volunteer Section */}
//       <Container maxWidth="lg" sx={{ my: 8 }} align="center">
//         <Typography variant="h3" align="center" gutterBottom color="primary">
//           Why Volunteer With Us?
//         </Typography>
//         <Typography variant="body1" align="center" paragraph sx={{ mb: 6 }}>
//           Your time and talents can make a real impact in the lives of others. Here's why you should join our volunteer team:
//         </Typography>

//         <Grid container spacing={4}>
//           <Grid item xs={12} sm={6} md={3}>
//             <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', boxShadow: 2 }}>
//               <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
//                 <Box sx={{ 
//                   width: 64, 
//                   height: 64, 
//                   bgcolor: '#ff6b6b20', 
//                   borderRadius: '50%', 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   justifyContent: 'center',
//                   fontSize: '1.5rem',
//                   fontWeight: 'bold',
//                   color: '#ff6b6b'
//                 }}>
//                   C
//                 </Box>
//               </Box>
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   Community
//                 </Typography>
//                 <Typography>
//                   Connect with like-minded individuals who share your passion for   making a difference.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', boxShadow: 2 }}>
//               <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
//                 <Box sx={{ 
//                   width: 64, 
//                   height: 64, 
//                   bgcolor: '#ff6b6b20', 
//                   borderRadius: '50%', 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   justifyContent: 'center',
//                   fontSize: '1.5rem',
//                   fontWeight: 'bold',
//                   color: '#ff6b6b'
//                 }}>
//                   I
//                 </Box>
//               </Box>
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   Impact
//                 </Typography>
//                 <Typography>
//                   See the direct results of your volunteer work and how it improves lives in our community.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', boxShadow: 2 }}>
//               <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
//                 <Box sx={{ 
//                   width: 64, 
//                   height: 64, 
//                   bgcolor: '#ff6b6b20', 
//                   borderRadius: '50%', 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   justifyContent: 'center',
//                   fontSize: '1.5rem',
//                   fontWeight: 'bold',
//                   color: '#ff6b6b'
//                 }}>
//                   F
//                 </Box>
//               </Box>
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   Flexibility
//                 </Typography>
//                 <Typography>
//                   Choose from various opportunities that fit your schedule and time commitment preferences.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', boxShadow: 2 }}>
//               <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
//                 <Box sx={{ 
//                   width: 64, 
//                   height: 64, 
//                   bgcolor: '#ff6b6b20', 
//                   borderRadius: '50%', 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   justifyContent: 'center',
//                   fontSize: '1.5rem',
//                   fontWeight: 'bold',
//                   color: '#ff6b6b'
//                 }}>
//                   G
//                 </Box>
//               </Box>
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   Growth
//                 </Typography>
//                 <Typography>
//                   Develop new skills, gain valuable experience, and grow personally through service to others.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Volunteer Opportunities */}
//       <Box sx={{ bgcolor: '#f9f9f9', py: 8 }}>
//         <Container maxWidth="lg">
//           <Typography variant="h3" align="center" gutterBottom color="primary">
//             Volunteer Opportunities
//           </Typography>
//           <Typography variant="body1" align="center" paragraph sx={{ mb: 6 }}>
//             We have a variety of ways you can contribute your time and talents
//           </Typography>

//           <Grid container spacing={4}>
//             {volunteerOpportunities.map((opportunity, index) => (
//               <Grid item key={index} xs={12} md={4}>
//                 <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                  
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       {opportunity.title}
//                     </Typography>
//                     <Typography>
//                       {opportunity.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Volunteer Process */}
//       <Container maxWidth="md" sx={{ my: 8 }}>
//         <Typography variant="h3" align="center" gutterBottom color="primary">
//           How It Works
//         </Typography>
//         <Paper elevation={2} sx={{ p: 4, borderRadius: 2 }}>
//           <List>
//             <ListItem>
//               <ListItemIcon>
//                 <Box sx={{ bgcolor: '#ff6b6b', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>1</Box>
//               </ListItemIcon>
//               <ListItemText 
//                 primary="Fill out the volunteer form" 
//                 secondary="Provide your contact information and availability to get started"
//               />
//             </ListItem>
//             <Divider variant="inset" component="li" />
//             <ListItem>
//               <ListItemIcon>
//                 <Box sx={{ bgcolor: '#ff6b6b', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>2</Box>
//               </ListItemIcon>
//               <ListItemText 
//                 primary="Attend orientation" 
//                 secondary="Learn about our mission, programs, and volunteer policies"
//               />
//             </ListItem>
//             <Divider variant="inset" component="li" />
//             <ListItem>
//               <ListItemIcon>
//                 <Box sx={{ bgcolor: '#ff6b6b', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>3</Box>
//               </ListItemIcon>
//               <ListItemText 
//                 primary="Choose your volunteer opportunity" 
//                 secondary="Select from available positions based on your interests and skills"
//               />
//             </ListItem>
//             <Divider variant="inset" component="li" />
//             <ListItem>
//               <ListItemIcon>
//                 <Box sx={{ bgcolor: '#ff6b6b', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>4</Box>
//               </ListItemIcon>
//               <ListItemText 
//                 primary="Make a difference" 
//                 secondary="Start volunteering and creating positive change in our community"
//               />
//             </ListItem>
//           </List>
//         </Paper>
//       </Container>

//       {/* Testimonials */}
//       <Box sx={{ bgcolor: '#f9f9f9', py: 8 }}>
//         <Container maxWidth="md">
//           <Typography variant="h3" align="center" gutterBottom color="primary">
//             Volunteer Testimonials
//           </Typography>
//           <Typography variant="body1" align="center" paragraph sx={{ mb: 6 }}>
//             Hear from people who have made a difference
//           </Typography>
          
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={6}>
//               <Paper elevation={2} sx={{ p: 4, height: '100%', bgcolor: 'white', borderRadius: 2 }}>
//                 <Typography variant="body1" paragraph sx={{ fontStyle: 'italic' }}>
//                   "Volunteering has been one of the most rewarding experiences of my life. I've met amazing people and learned so much about my community while making a real difference."
//                 </Typography>
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   — Sarah Johnson
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Community Garden Volunteer
//                 </Typography>
//               </Paper>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Paper elevation={2} sx={{ p: 4, height: '100%', bgcolor: 'white', borderRadius: 2 }}>
//                 <Typography variant="body1" paragraph sx={{ fontStyle: 'italic' }}>
//                   "I started volunteering to give back, but I've gained so much more than I've given. The connections I've made and the impact we create together is truly meaningful."
//                 </Typography>
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   — Michael Chen
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Tutoring Program Volunteer
//                 </Typography>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Sign Up Form */}
//       <Container maxWidth="sm" sx={{ mt: 8, mb: 8 }}>
//         <Paper sx={{ p: 4, borderRadius: 2, boxShadow: 3 }}>
//           <Typography variant="h4" align="center" gutterBottom color="primary">
//             Ready to Get Started?
//           </Typography>

//           {!submitted ? (
//             <Box
//               component="form"
//               onSubmit={handleSubmit}
//               sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
//             >
//               <TextField
//                 label="Full Name"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 fullWidth
//               />
//               <TextField
//                 label="Email Address"
//                 name="email"
//                 type="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 fullWidth
//               />
//               <TextField
//                 label="Areas of Interest"
//                 name="availability"
//                 placeholder="e.g. Gardening, Tutoring, Senior Care"
//                 value={form.availability}
//                 onChange={handleChange}
//                 required
//                 fullWidth
//               />
              
//               <Button
//                 type="submit"
//                 variant="contained"
//                 sx={{
//                   mt: 2,
//                   bgcolor: '#ff6b6b',
//                   '&:hover': { bgcolor: '#ff5252' },
//                   py: 1.5
//                 }}
//                 size="large"
//               >
//                 Submit Application
//               </Button>
//             </Box>
//           ) : (
//             <Box sx={{ textAlign: 'center', py: 2 }}>
//               <Box sx={{ 
//                 width: 64, 
//                 height: 64, 
//                 bgcolor: '#4caf5020', 
//                 borderRadius: '50%', 
//                 display: 'flex', 
//                 alignItems: 'center', 
//                 justifyContent: 'center',
//                 fontSize: '1.5rem',
//                 fontWeight: 'bold',
//                 color: '#4caf50',
//                 margin: '0 auto'
//               }}>
//                 ✓
//               </Box>
//               <Typography
//                 variant="h5"
//                 align="center"
//                 color="success.main"
//                 sx={{ mt: 2 }}
//               >
//                 Thank you for signing up!
//               </Typography>
//               <Typography variant="body1" sx={{ mt: 2 }}>
//                 We've received your volunteer application and will contact you within 3 business days to discuss next steps.
//               </Typography>
//             </Box>
//           )}
//         </Paper>
//       </Container>

//       {/* FAQ Section */}
//       <Box sx={{ bgcolor: '#f9f9f9', py: 8 }}>
//         <Container maxWidth="md">
//           <Typography variant="h3" align="center" gutterBottom color="primary">
//             Frequently Asked Questions
//           </Typography>
          
//           <Grid container spacing={3} sx={{ mt: 2 }}>
//             <Grid item xs={12} md={6}>
//               <Typography variant="h6" gutterBottom>
//                 How much time do I need to commit?
//               </Typography>
//               <Typography variant="body1" paragraph>
//                 We offer flexible volunteer opportunities that can fit various schedules. Some positions require as little as 2 hours per week, while others may need more time. We'll work with you to find a good fit.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Typography variant="h6" gutterBottom>
//                 Do I need any special skills?
//               </Typography>
//               <Typography variant="body1" paragraph>
//                 Not necessarily! While some roles benefit from specific skills, many only require your enthusiasm and willingness to help. We provide training for all volunteer positions.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Typography variant="h6" gutterBottom>
//                 Can I volunteer as part of a group?
//               </Typography>
//               <Typography variant="body1" paragraph>
//                 Absolutely! We welcome individuals, families, corporate teams, and community groups. Group volunteering is a great team-building activity with meaningful impact.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Typography variant="h6" gutterBottom>
//                 Is there an age requirement?
//               </Typography>
//               <Typography variant="body1" paragraph>
//                 Most of our volunteer opportunities are available for those 16 and older. We do have some family-friendly options where children can participate with adult supervision.
//               </Typography>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Impact Statistics */}
//       <Container maxWidth="lg" sx={{ my: 8 }}>
//         <Typography variant="h3" align="center" gutterBottom color="primary">
//           Our Impact
//         </Typography>
//         <Typography variant="body1" align="center" paragraph sx={{ mb: 6 }}>
//           See the difference our volunteers make every day
//         </Typography>
        
//         <Grid container spacing={4} justifyContent="center">
//           <Grid item xs={12} sm={6} md={3}>
//             <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}>
//               <Typography variant="h2" color="primary" fontWeight="bold">
//                 1,200+
//               </Typography>
//               <Typography variant="h6">
//                 Volunteer Hours Monthly
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}>
//               <Typography variant="h2" color="primary" fontWeight="bold">
//                 300+
//               </Typography>
//               <Typography variant="h6">
//                 Active Volunteers
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}>
//               <Typography variant="h2" color="primary" fontWeight="bold">
//                 25+
//               </Typography>
//               <Typography variant="h6">
//                 Community Projects
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}>
//               <Typography variant="h2" color="primary" fontWeight="bold">
//                 5,000+
//               </Typography>
//               <Typography variant="h6">
//                 People Helped Annually
//               </Typography>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>

//       <Snackbar
//         open={error}
//         autoHideDuration={6000}
//         onClose={() => setError(false)}
//       >
//         <Alert
//           onClose={() => setError(false)}
//           severity="error"
//           sx={{ width: '100%' }}
//         >
//           Oops—something went wrong. Please try again.
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// }

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Snackbar,
  Alert
} from '@mui/material';
import { API } from '../api';

export default function Volunteer() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    availability: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setError(false);
    try {
      await API.post('/api/volunteers', form);
      setSubmitted(true);
      window.scrollTo(0, 0);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  const opportunities = [
    {
      title: 'Dog Walking',
      description: 'Take our dogs on daily walks to help them socialize and get exercise.',
      image: '/api/placeholder/400/200'
    },
    {
      title: 'Kennel Care',
      description: 'Help clean, sanitize, and maintain our dog kennels and common areas.',
      image: '/api/placeholder/400/200'
    },
    {
      title: 'Foster Homes',
      description: 'Provide temporary loving homes for pups before they find their forever family.',
      image: '/api/placeholder/400/200'
    },
    {
      title: 'Event Support',
      description: 'Assist with our adoption days, fundraisers, and community outreach events.',
      image: '/api/placeholder/400/200'
    }
  ];

  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          height: '30vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/api/placeholder/1200/600")',
          backgroundSize: 'cover',
          color: 'white',
          textAlign: 'center',
          p: 4
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Volunteer with Our Shelter
        </Typography>
        <Typography variant="h5" sx={{ maxWidth: 'md' }}>
          Lend a hand, warm a heart—join our team to help dogs in need.
        </Typography>
      </Box>

      {/* Why Volunteer */}
      <Container maxWidth="lg" sx={{ my: 8 }} align="center">
        <Typography variant="h3" gutterBottom color="primary">
          Why Volunteer?
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 6 }}>
          Your time means tails wagging, paws playing, and lives changed forever.
        </Typography>
        <Grid container spacing={4}>
          {[
            { letter: 'C', title: 'Companionship', text: 'Give dogs the love and socialization they crave.' },
            { letter: 'S', title: 'Support',      text: 'Help with daily operations so we can rescue more.' },
            { letter: 'T', title: 'Training',     text: 'Assist with basic obedience and enrichment.' },
            { letter: 'E', title: 'Events',       text: 'Be part of our adoption days and fundraising.' }
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card sx={{ height: '100%', textAlign: 'center', boxShadow: 2, width: 500 }}>
                <Box sx={{ p: 2 }}>
                  <Box
                    sx={{
                      width: 64, height: 64,
                      bgcolor: '#ff6b6b20',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      color: '#ff6b6b',
                      mb: 1
                    }}
                  >
                    {item.letter}
                  </Box>
                  <CardContent>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2">{item.text}</Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Opportunities */}
      <Box sx={{ bgcolor: '#f9f9f9', py: 8 }}>
        <Container maxWidth="lg" align="center">
          <Typography variant="h3" gutterBottom color="primary">
            Volunteer Opportunities
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 6 }}>
            Choose how you’d like to help from these roles:
          </Typography>
          <Grid container spacing={4}>
            {opportunities.map((opp, i) => (
              <Grid item xs={12} md={6} lg={3} key={i}>
                <Card sx={{ height: '100%', boxShadow: 3, width: 500 }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {opp.title}
                    </Typography>
                    <Typography variant="body2">{opp.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process */}
      <Container maxWidth="md" sx={{ my: 8 }}>
        <Typography variant="h3" align="center" gutterBottom color="primary">
          How It Works
        </Typography>
        <Paper sx={{ p: 4, borderRadius: 2 }} elevation={2}>
          <List>
            {[
              'Fill out the volunteer form below.',
              'Attend a brief orientation at our shelter.',
              'Select your preferred role and schedule.',
              'Start making a difference!'
            ].map((step, i) => (
              <React.Fragment key={i}>
                <ListItem>
                  <ListItemIcon>
                    <Box
                      sx={{
                        bgcolor: '#ff6b6b',
                        borderRadius: '50%',
                        width: 32, height: 32,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                      }}
                    >
                      {i + 1}
                    </Box>
                  </ListItemIcon>
                  <ListItemText primary={step} />
                </ListItem>
                {i < 3 && <Divider variant="inset" component="li" />}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Container>

      {/* Sign-up Form */}
      <Container maxWidth="sm" sx={{ mb: 8 }}>
        <Paper sx={{ p: 4, borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h4" align="center" gutterBottom color="primary">
            Ready to Help?
          </Typography>

          {!submitted ? (
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Availability"
                name="availability"
                placeholder="e.g. Weekends, Weekdays"
                value={form.availability}
                onChange={handleChange}
                required
                fullWidth
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: '#ff6b6b',
                  '&:hover': { bgcolor: '#ff5252' },
                  py: 1.5
                }}
                size="large"
              >
                Submit
              </Button>
            </Box>
          ) : (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h5" color="success.main" gutterBottom>
                🐾 Thank you for signing up!
              </Typography>
              <Typography variant="body1">
                We’ve received your application and will be in touch soon.
              </Typography>
            </Box>
          )}
        </Paper>
      </Container>

      {/* Snackbar */}
      <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
        <Alert onClose={() => setError(false)} severity="error" sx={{ width: '100%' }}>
          Something went wrong—please try again.
        </Alert>
      </Snackbar>
    </Box>
  );
}
