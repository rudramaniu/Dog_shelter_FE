// // import React, { useEffect, useState } from 'react';
// // import { Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
// // import { API } from '../api';

// // export default function AdoptADog() {
// //   const [dogs, setDogs] = useState([]);

// //   useEffect(() => {
// //     //API.get('/dogs').then(res => setDogs(res.data));
// //     setDogs([
// //         { id: 1, name: 'Buddy', breed: 'Labrador', photo: 'https://example.com/images/buddy.jpg', status: 'available' },
// //         { id: 2, name: 'Luna', breed: 'German Shepherd', photo: 'https://example.com/images/luna.jpg', status: 'available' },
// //         { id: 3, name: 'Charlie', breed: 'Beagle', photo: 'https://example.com/images/charlie.jpg', status: 'pending' },
// //         { id: 4, name: 'Molly', breed: 'Poodle', photo: 'https://example.com/images/molly.jpg', status: 'available' },
// //         { id: 5, name: 'Rocky', breed: 'Bulldog', photo: 'https://example.com/images/rocky.jpg', status: 'adopted' }
// //       ])
// //   }, []);

// //   return (
// //     <Container sx={{ py: 4 }}>
// //       <Typography variant="h4" gutterBottom>Adopt a Dog</Typography>
// //       <Grid container spacing={2}>
// //         {dogs.map(dog => (
// //           <Grid item key={dog.id} xs={12} sm={6} md={4}>
// //             <Card>
// //               <CardMedia component="img" height="140" image={dog.photo} alt={dog.name} />
// //               <CardContent>
// //                 <Typography variant="h6">{dog.name}</Typography>
// //                 <Typography>Breed: {dog.breed}</Typography>
// //                 <Typography>Status: {dog.status}</Typography>
// //                 <Button variant="contained" sx={{ mt: 1 }}>Learn More</Button>
// //               </CardContent>
// //             </Card>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Container>
// //   );
// // }

// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Paper,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Button,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Snackbar,
//   Alert,
//   CircularProgress,
//   Divider,
//   IconButton,
//   Chip
// } from '@mui/material';
// import PetsIcon from '@mui/icons-material/Pets';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import CloseIcon from '@mui/icons-material/Close';
// import InfoIcon from '@mui/icons-material/Info';
// import SearchIcon from '@mui/icons-material/Search';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import MaleIcon from '@mui/icons-material/Male';
// import FemaleIcon from '@mui/icons-material/Female';

// export default function AdoptADog() {
//   // Data state
//   const [dogs, setDogs] = useState([]);
//   const [filteredDogs, setFilteredDogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');

//   // Dialog & form state
//   const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [selectedDog, setSelectedDog] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '', email: '', phone: '', date: '', time: '', comments: ''
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const [submitting, setSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState(false);

//   // Load mock data
//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       const data =  [
//         { id: 1, name: 'Buddy', breed: 'Labrador Retriever', age: '2 years', gender: 'male', photo: '/api/placeholder/400/300', status: 'available', size: 'Large', personality: 'Friendly, Energetic, Good with kids', description: 'Buddy is a playful and energetic Labrador who loves outdoor activities. He\'s great with children and other dogs, making him perfect for an active family.', medicalInfo: 'Neutered, vaccinated, microchipped' },
//         { id: 2, name: 'Luna', breed: 'German Shepherd', age: '3 years', gender: 'female', photo: '/api/placeholder/400/300', status: 'available', size: 'Large', personality: 'Loyal, Intelligent, Protective', description: 'Luna is a beautiful and intelligent German Shepherd looking for an experienced owner. She is loyal and protective with excellent training potential.', medicalInfo: 'Spayed, vaccinated, microchipped' },
//         { id: 3, name: 'Charlie', breed: 'Beagle', age: '1 year', gender: 'male', photo: '/api/placeholder/400/300', status: 'pending', size: 'Medium', personality: 'Curious, Playful, Vocal', description: 'Charlie is a young and energetic Beagle with a nose for adventure! He loves to explore and would be happiest in a home with a fenced yard where he can safely investigate all the interesting smells.', medicalInfo: 'Neutered, vaccinated, microchipped' },
//         { id: 4, name: 'Molly', breed: 'Poodle', age: '4 years', gender: 'female', photo: '/api/placeholder/400/300', status: 'available', size: 'Small', personality: 'Smart, Gentle, Low-shedding', description: 'Molly is a lovely standard poodle with a gentle disposition. She\'s hypoallergenic and would be perfect for a family concerned about allergies. She enjoys puzzle toys and gentle walks.', medicalInfo: 'Spayed, vaccinated, microchipped' },
//         { id: 5, name: 'Rocky', breed: 'Bulldog', age: '5 years', gender: 'male', photo: '/api/placeholder/400/300', status: 'adopted', size: 'Medium', personality: 'Calm, Affectionate, Easygoing', description: 'Rocky is a lovable bulldog who enjoys relaxing on the couch. He\'s perfect for apartment living and doesn\'t require too much exercise. He loves belly rubs and treats!', medicalInfo: 'Neutered, vaccinated, microchipped, requires special diet' },
//         { id: 6, name: 'Daisy', breed: 'Golden Retriever', age: '6 months', gender: 'female', photo: '/api/placeholder/400/300', status: 'available', size: 'Medium-Large', personality: 'Friendly, Playful, Gentle', description: 'Daisy is a golden retriever puppy full of love and energy! She\'s learning basic commands quickly and would thrive in a home that can provide training and lots of play time.', medicalInfo: 'Vaccinated, microchipped, will need to be spayed' },
//         { id: 7, name: 'Max', breed: 'Siberian Husky', age: '3 years', gender: 'male', photo: '/api/placeholder/400/300', status: 'available', size: 'Large', personality: 'Independent, Talkative, Energetic', description: 'Max is a beautiful husky who needs an experienced owner and plenty of exercise. He loves running and would be perfect for an active household.', medicalInfo: 'Neutered, vaccinated, microchipped' },
//         { id: 8, name: 'Bella', breed: 'Shih Tzu', age: '7 years', gender: 'female', photo: '/api/placeholder/400/300', status: 'pending', size: 'Small', personality: 'Sweet, Cuddly, Calm', description: 'Bella is a sweet senior dog looking for a quiet home to spend her golden years. She loves cuddles and short walks, followed by long naps.', medicalInfo: 'Spayed, vaccinated, microchipped, dental work completed' }
//       ];
//       setDogs(data);
//       setFilteredDogs(data);
//       setLoading(false);
//     }, 1000);
//   }, []);

//   // Filter logic
//   useEffect(() => {
//     let result = [...dogs];
//     if (searchTerm) {
//       result = result.filter(d =>
//         d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         d.breed.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (statusFilter !== 'all') {
//       result = result.filter(d => d.status === statusFilter);
//     }
//     setFilteredDogs(result);
//   }, [dogs, searchTerm, statusFilter]);

//   // Helpers
//   const getStatusColor = status =>
//     ({ available:'success', pending:'warning', adopted:'default' }[status] || 'primary');
//   const getStatusText = s => s.charAt(0).toUpperCase() + s.slice(1);

//   // Handlers
//   const handleLearnMore = dog => {
//     setSelectedDog(dog);
//     setDetailsDialogOpen(true);
//   };
//   const handleOpenAdoptForm = () => {
//     setDetailsDialogOpen(false);
//     setDialogOpen(true);
//   };
//   const handleCloseDetailsDialog = () => setDetailsDialogOpen(false);
//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//     setFormErrors({});
//   };
//   const handleInputChange = e => {
//     const { name, value } = e.target;
//     setFormData(f => ({ ...f, [name]: value }));
//     if (formErrors[name]) setFormErrors(f => ({ ...f, [name]: null }));
//   };
//   const validateForm = () => {
//     const errs = {};
//     if (!formData.name.trim()) errs.name = 'Required';
//     if (!formData.email.trim()) errs.email = 'Required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Invalid';
//     if (!formData.phone.trim()) errs.phone = 'Required';
//     if (!formData.date) errs.date = 'Required';
//     if (!formData.time) errs.time = 'Required';
//     setFormErrors(errs);
//     return !Object.keys(errs).length;
//   };
//   const handleSubmit = () => {
//     if (!validateForm()) return;
//     setSubmitting(true);
//     setTimeout(() => {
//       setSubmitSuccess(true);
//       setDialogOpen(false);
//       setFormData({ name:'',email:'',phone:'',date:'',time:'',comments:'' });
//       setSubmitting(false);
//     }, 1500);
//   };
//   const handleCloseSnackbar = () => {
//     setSubmitSuccess(false);
//     setSubmitError(false);
//   };

//   return (
//     <Box sx={{ bgcolor:'#f8f9fa'}}>
//       {/* Hero */}
//       <Box
//         // sx={{
//         //   height:'40vh', display:'flex', flexDirection:'column',
//         //   justifyContent:'center', alignItems:'center',
//         //   backgroundImage:'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("/api/placeholder/1200/600")',
//         //   backgroundSize:'cover', backgroundPosition:'center',
//         //   color:'white', textAlign:'center', mb:6, px:2
//         // }}
//         sx={{
//           height: '25vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/api/placeholder/1200/600")', 
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed',
//           color: 'white',
//           textAlign: 'center',
//           mb: 6,
//           p: 4
//         }}
//       >
//         <Typography variant="h2" fontWeight="bold" gutterBottom>
//           Adopt a Friend
//         </Typography>
//         <Typography variant="h6" sx={{ maxWidth:'md', mb:3 }}>
//           Give a loving home to a dog in need. Browse our available dogs and start your adoption journey today.
//         </Typography>
//         <Button
//           variant="contained"
//           startIcon={<PetsIcon />}
//           sx={{ bgcolor:'#ff6b6b','&:hover':{bgcolor:'#ff5252'},borderRadius:2,px:3 }}
//           href="#available-dogs"
//         >
//           Find Your Match
//         </Button>
//       </Box>

//       <Container maxWidth="lg">
//         {/* Process Steps: 2 columns */}
//         <Grid container rowSpacing={4} columnSpacing={3} sx={{ mb:6 }}>
//           {['Browse','Meet','Apply','Adopt'].map((step,i)=>(
//             <Grid item xs={12} sm={6} key={step}>
//               <Paper sx={{ p:3, borderTop:'4px solid #ff6b6b', borderRadius:2, textAlign:'center' }}>
//                 <Box
//                   sx={{
//                     width:50,height:50,bgcolor:'#ff6b6b',color:'white',
//                     borderRadius:'50%',display:'flex',alignItems:'center',
//                     justifyContent:'center',fontSize:24,fontWeight:'bold',mb:2
//                   }}
//                 >
//                   {i+1}
//                 </Box>
//                 <Typography variant="h6" gutterBottom>{step}</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {{
//                     Browse:'Explore our available dogs.',
//                     Meet:'Schedule a meet & greet.',
//                     Apply:'Complete application & home check.',
//                     Adopt:'Finalize adoption & bring them home.'
//                   }[step]}
//                 </Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Search & Filter */}
//         <Paper sx={{ p:3, mb:4, borderRadius:2 }} id="available-dogs">
//           <Grid container spacing={3} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <TextField
//                 fullWidth placeholder="Search by name or breed"
//                 variant="outlined" value={searchTerm}
//                 onChange={e=>setSearchTerm(e.target.value)}
//                 InputProps={{ startAdornment:<SearchIcon sx={{mr:1}}/> }}
//               />
//             </Grid>
//             <Grid item xs={12} md={3}>
//               <FormControl fullWidth>
//                 <InputLabel>Status</InputLabel>
//                 <Select
//                   value={statusFilter}
//                   label="Status"
//                   onChange={e=>setStatusFilter(e.target.value)}
//                   startAdornment={<FilterListIcon sx={{mr:1}}/>}
//                 >
//                   <MenuItem value="all">All</MenuItem>
//                   <MenuItem value="available">Available</MenuItem>
//                   <MenuItem value="pending">Pending</MenuItem>
//                   <MenuItem value="adopted">Adopted</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12} md={3} sx={{ textAlign:'right' }}>
//               <Typography variant="body2" color="text.secondary">
//                 {filteredDogs.length} dogs found
//               </Typography>
//             </Grid>
//           </Grid>
//         </Paper>

//         {/* Dog Cards: flex wrap, fixed dimensions */}
//         {loading ? (
//           <Box sx={{display:'flex',justifyContent:'center',py:8}}>
//             <CircularProgress sx={{color:'#ff6b6b'}}/>
//           </Box>
//         ) : (
//           <Box sx={{ display:'flex', flexWrap:'wrap', gap:3, justifyContent:'center' }}>
//             {filteredDogs.map(dog=>(
//               <Card
//                 key={dog.id}
//                 sx={{
//                   width:280, height:420, display:'flex', flexDirection:'column',
//                   borderRadius:2, boxShadow:3, position:'relative'
//                 }}
//               >
//                 <CardMedia
//                   component="img" height="180"
//                   image={dog.photo} alt={dog.name}
//                 />
//                 <CardContent sx={{ flexGrow:1 }}>
//                   <Typography variant="h6" gutterBottom>{dog.name}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     <strong>Breed:</strong> {dog.breed}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     <strong>Age:</strong> {dog.age}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     <strong>Size:</strong> {dog.size}
//                   </Typography>
//                 </CardContent>
//                 <Divider/>
//                 <CardActions sx={{ justifyContent:'space-between',p:1 }}>
//                   <Button
//                     size="small" variant="contained"
//                     sx={{ bgcolor:'#ff6b6b','&:hover':{bgcolor:'#ff5252'} }}
//                     onClick={()=>handleLearnMore(dog)}
//                   >
//                     Learn More
//                   </Button>
//                   <IconButton sx={{ color:'#ff6b6b' }}>
//                     <FavoriteBorderIcon/>
//                   </IconButton>
//                 </CardActions>
//               </Card>
//             ))}
//           </Box>
//         )}
//       </Container>

//       {/* Details Dialog */}
//       <Dialog open={detailsDialogOpen} onClose={handleCloseDetailsDialog} maxWidth="md" fullWidth>
//         {selectedDog && (
//           <>
//             <DialogTitle sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #eee', pb:2 }}>
//               <Box sx={{ display:'flex', alignItems:'center' }}>
//                 <Typography variant="h5" fontWeight="medium">{selectedDog.name}</Typography>
//                 <Chip label={getStatusText(selectedDog.status)} color={getStatusColor(selectedDog.status)} size="small" sx={{ ml:2 }}/>
//               </Box>
//               <IconButton onClick={handleCloseDetailsDialog}><CloseIcon/></IconButton>
//             </DialogTitle>
//             <DialogContent dividers>
//               <Grid container spacing={3}>
//                 <Grid item xs={12} md={6}>
//                   <Box component="img" src={selectedDog.photo} alt={selectedDog.name} sx={{ width:'100%', borderRadius:2, mb:2 }}/>
//                   <Paper sx={{ p:2, borderRadius:2, mb:2 }}>
//                     <Typography variant="h6" gutterBottom fontWeight="medium" sx={{ display:'flex',alignItems:'center',color:'#ff6b6b' }}>
//                       <FavoriteIcon sx={{ mr:1 }}/> Personality
//                     </Typography>
//                     <Box sx={{ display:'flex',gap:1,flexWrap:'wrap' }}>
//                       {selectedDog.personality.split(', ').map((t,i)=>(
//                         <Chip key={i} label={t} sx={{ bgcolor:'rgba(255,107,107,0.1)', color:'#ff6b6b' }}/>
//                       ))}
//                     </Box>
//                   </Paper>
//                   <Paper sx={{ p:2,borderRadius:2 }}>
//                     <Typography variant="h6" gutterBottom fontWeight="medium" sx={{ display:'flex',alignItems:'center',color:'#ff6b6b' }}>
//                       <InfoIcon sx={{ mr:1 }}/> Medical
//                     </Typography>
//                     <Typography variant="body2">{selectedDog.medicalInfo}</Typography>
//                   </Paper>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <Typography variant="h6" gutterBottom fontWeight="medium">About {selectedDog.name}</Typography>
//                   <Typography variant="body1" paragraph>{selectedDog.description}</Typography>
//                   <Grid container spacing={2}>
//                     <Grid item xs={6}>
//                       <Paper variant="outlined" sx={{ p:2,borderRadius:2 }}>
//                         <Typography variant="body2" color="text.secondary">Breed</Typography>
//                         <Typography variant="body1" fontWeight="medium">{selectedDog.breed}</Typography>
//                       </Paper>
//                     </Grid>
//                     <Grid item xs={6}>
//                       <Paper variant="outlined" sx={{ p:2,borderRadius:2 }}>
//                         <Typography variant="body2" color="text.secondary">Age</Typography>
//                         <Typography variant="body1" fontWeight="medium">{selectedDog.age}</Typography>
//                       </Paper>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </DialogContent>
//             <DialogActions sx={{ px:3,pb:2 }}>
//               <Button onClick={handleOpenAdoptForm} variant="contained" sx={{ bgcolor:'#ff6b6b','&:hover':{bgcolor:'#ff5252'} }}>Schedule Appointment</Button>
//               <Button onClick={handleCloseDetailsDialog}>Close</Button>
//             </DialogActions>
//           </>
//         )}
//       </Dialog>

//       {/* Appointment Form Dialog */}
//       <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
//         <DialogTitle>Schedule Adoption Appointment</DialogTitle>
//         <DialogContent dividers>
//           <TextField fullWidth margin="dense" label="Your Name" name="name" value={formData.name} onChange={handleInputChange} error={!!formErrors.name} helperText={formErrors.name}/>
//           <TextField fullWidth margin="dense" label="Email" name="email" value={formData.email} onChange={handleInputChange} error={!!formErrors.email} helperText={formErrors.email}/>
//           <TextField fullWidth margin="dense" label="Phone" name="phone" value={formData.phone} onChange={handleInputChange} error={!!formErrors.phone} helperText={formErrors.phone}/>
//           <Box sx={{ display:'flex',gap:2,mt:1 }}>
//             <TextField fullWidth margin="dense" label="Preferred Date" type="date" name="date" value={formData.date} onChange={handleInputChange} InputLabelProps={{ shrink:true }} error={!!formErrors.date} helperText={formErrors.date}/>
//             <TextField fullWidth margin="dense" label="Preferred Time" type="time" name="time" value={formData.time} onChange={handleInputChange} InputLabelProps={{ shrink:true }} error={!!formErrors.time} helperText={formErrors.time}/>
//           </Box>
//           <TextField fullWidth margin="dense" label="Additional Comments" name="comments" value={formData.comments} onChange={handleInputChange} multiline rows={3}/>
//         </DialogContent>
//         <DialogActions sx={{ px:3,pb:2 }}>
//           <Button onClick={handleCloseDialog} disabled={submitting}>Cancel</Button>
//           <Button onClick={handleSubmit} variant="contained" disabled={submitting} sx={{ bgcolor:'#ff6b6b','&:hover':{bgcolor:'#ff5252'} }}>
//             {submitting ? <CircularProgress size={24}/> : 'Submit'}
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Snackbars */}
//       <Snackbar open={submitSuccess} autoHideDuration={6000} onClose={handleCloseSnackbar}>
//         <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width:'100%' }}>
//           Appointment scheduled successfully!
//         </Alert>
//       </Snackbar>
//       <Snackbar open={submitError} autoHideDuration={6000} onClose={handleCloseSnackbar}>
//         <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width:'100%' }}>
//           Failed to schedule appointment. Please try again.
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// }

import DogImage from './1.jpeg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box, Container, Typography, Grid, Paper, Card, CardMedia, CardContent,
  CardActions, Button, TextField, FormControl, InputLabel, Select, MenuItem,
  Dialog, DialogTitle, DialogContent, DialogActions, Snackbar, Alert,
  CircularProgress, Divider, IconButton, Chip
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function AdoptADog() {
  // Data states
  const [dogs, setDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Details & booking dialog
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedDog, setSelectedDog] = useState(null);

  // Booking form & feedback
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '', comments: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingError, setBookingError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Fetch dogs
  useEffect(() => {
    axios.get('https://dog-shelter-backend.onrender.com/api/dogs')
      .then(res => {
        setDogs(res.data);
        setFilteredDogs(res.data);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // Filter
  useEffect(() => {
    let r = [...dogs];
    if (searchTerm) {
      r = r.filter(d =>
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.breed.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (statusFilter !== 'all') {
      r = r.filter(d => d.status === statusFilter);
    }
    setFilteredDogs(r);
  }, [dogs, searchTerm, statusFilter]);

  const getStatusColor = s =>
    ({ available: 'success', pending: 'warning', adopted: 'default' }[s] || 'primary');

  // Open details
  const handleLearnMore = dog => {
    setSelectedDog(dog);
    setDetailsOpen(true);
  };

  // Booking form handlers
  const openBooking = () => {
    setDetailsOpen(false);
    setBookingOpen(true);
  };
  const closeBooking = () => {
    setFormErrors({});
    setBookingOpen(false);
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(fe => ({ ...fe, [name]: null }));
    }
  };
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Invalid email';
    if (!formData.phone.trim()) errs.phone = 'Required';
    if (!formData.date) errs.date = 'Required';
    if (!formData.time) errs.time = 'Required';
    setFormErrors(errs);
    return !Object.keys(errs).length;
  };
  const handleBookingSubmit = () => {
    if (!validate()) return;
    setSubmitting(true);
    axios.post('https://dog-shelter-backend.onrender.com/api/appointments', {
      dogId: selectedDog.id,
      dogName: selectedDog.name,
      appointmentDate: formData.date+" "+formData.time+":00",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      comments: formData.comments
    })
      .then(() => {
        setBookingSuccess(true);
        closeBooking();
        setFormData({ name:'',email:'',phone:'',date:'',time:'',comments:'' });
      })
      .catch(() => setBookingError(true))
      .finally(() => setSubmitting(false));
  };

  return (
    <Box sx={{ bgcolor: '#f8f9fa', pb: 6 }}>
      {/* Hero */}
      <Box sx={{
        height: '25vh', display:'flex',flexDirection:'column',
        justifyContent:'center',alignItems:'center',
        backgroundImage:'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("/api/placeholder/1200/600")',
        backgroundSize:'cover',backgroundPosition:'center',
        color:'white',textAlign:'center',mb:6,p:4
      }}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>Adopt a Friend</Typography>
        <Typography variant="h6" sx={{mb:3,maxWidth:'md'}}>
          Give a loving home to a dog in need. Browse our available dogs and start your adoption journey today.
        </Typography>
        <Button variant="contained" startIcon={<PetsIcon />}
          sx={{ bgcolor:'#ff6b6b','&:hover':{bgcolor:'#ff5252'},borderRadius:2,px:3 }}
          href="#dogs-list"
        >
          Find Your Match
        </Button>
      </Box>

      <Container maxWidth="lg">
        {/* Search & Filter */}
        <Paper sx={{p:3,mb:4,borderRadius:2}} id="dogs-list">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth placeholder="Search by name or breed"
                value={searchTerm}
                onChange={e=>setSearchTerm(e.target.value)}
                InputProps={{ startAdornment:<SearchIcon sx={{mr:1}}/> }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={statusFilter}
                  label="Status"
                  onChange={e=>setStatusFilter(e.target.value)}
                  startAdornment={<FilterListIcon sx={{mr:1}}/>}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="available">Available</MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="adopted">Adopted</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3} sx={{textAlign:'right'}}>
              <Typography variant="body2" color="text.secondary">
                {filteredDogs.length} dogs found
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Cards */}
        {loading ? (
          <Box sx={{display:'flex',justifyContent:'center',py:8}}>
            <CircularProgress sx={{color:'#ff6b6b'}}/>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {filteredDogs.map(dog=>(
              <Grid item key={dog.id} xs={12} sm={6} md={4}>
                <Card sx={{borderRadius:2,boxShadow:3,overflow:'hidden',display:'flex',flexDirection:'column',height:'100%', width: 200}}>
                  <CardMedia component="img" height="180" image={DogImage} alt={dog.name}/>
                  <CardContent sx={{flexGrow:1}}>
                    <Typography variant="h6">{dog.name}</Typography>
                    <Typography variant="body2" color="text.secondary"><strong>Breed:</strong> {dog.breed}</Typography>
                    <Typography variant="body2" color="text.secondary"><strong>Age:</strong> {dog.age}</Typography>
                    <Typography variant="body2" color="text.secondary"><strong>Size:</strong> {dog.size}</Typography>
                  </CardContent>
                  <Divider/>
                  <CardActions sx={{justifyContent:'space-between'}}>
                    <Button size="small" variant="contained"
                      sx={{bgcolor:'#ff6b6b','&:hover':{bgcolor:'#ff5252'}}}
                      onClick={()=>handleLearnMore(dog)}
                    >
                      Learn More
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* Details Dialog */}
      <Dialog open={detailsOpen} onClose={()=>setDetailsOpen(false)} maxWidth="md" fullWidth>
        {selectedDog && (
          <>
            <DialogTitle sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <Box sx={{display:'flex',alignItems:'center'}}>
                <Typography variant="h5">{selectedDog.name}</Typography>
                <Chip label={selectedDog.status.toUpperCase()} color={getStatusColor(selectedDog.status)} size="small" sx={{ml:2}}/>
              </Box>
              <IconButton onClick={()=>setDetailsOpen(false)}><CloseIcon/></IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box component="img" src={DogImage} alt={selectedDog.name} sx={{width:'100%',borderRadius:2,mb:2}}/>
                  <Paper sx={{p:2,mb:2}}>
                    <Typography variant="h6" sx={{display:'flex',alignItems:'center',color:'#ff6b6b'}}>
                      <FavoriteIcon sx={{mr:1}}/> Personality
                    </Typography>
                    {selectedDog.personality?.split(', ').map((t,i)=>(
                      <Chip key={i} label={t} sx={{bgcolor:'rgba(255,107,107,0.1)',color:'#ff6b6b',mr:1,mb:1}}/>
                    ))}
                  </Paper>
                  <Paper sx={{p:2}}>
                    <Typography variant="h6" sx={{display:'flex',alignItems:'center',color:'#ff6b6b'}}>
                      <InfoIcon sx={{mr:1}}/> Medical
                    </Typography>
                    <Typography variant="body2">{selectedDog.medicalInfo}</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6">About {selectedDog.name}</Typography>
                  <Typography variant="body1" paragraph>{selectedDog.description}</Typography>
                  <Button variant="contained" onClick={openBooking} sx={{bgcolor:'#ff6b6b','&:hover':{bgcolor:'#ff5252'}}}>
                    Schedule Appointment
                  </Button>
                </Grid>
              </Grid>
            </DialogContent>
          </>
        )}
      </Dialog>

      {/* Booking Dialog */}
      <Dialog open={bookingOpen} onClose={closeBooking} maxWidth="sm" fullWidth>
        <DialogTitle>Book Appointment for {selectedDog?.name}</DialogTitle>
        <DialogContent dividers>
          <TextField
            fullWidth margin="dense" label="Your Name"
            name="name" value={formData.name} onChange={handleChange}
            error={!!formErrors.name} helperText={formErrors.name}
          />
          <TextField
            fullWidth margin="dense" label="Email" type="email"
            name="email" value={formData.email} onChange={handleChange}
            error={!!formErrors.email} helperText={formErrors.email}
          />
          <TextField
            fullWidth margin="dense" label="Phone"
            name="phone" value={formData.phone} onChange={handleChange}
            error={!!formErrors.phone} helperText={formErrors.phone}
          />
          <Box sx={{display:'flex',gap:2,mt:1}}>
            <TextField
              fullWidth type="date" label="Date"
              name="date" value={formData.date} onChange={handleChange}
              InputLabelProps={{shrink:true}}
              error={!!formErrors.date} helperText={formErrors.date}
            />
            <TextField
              fullWidth type="time" label="Time"
              name="time" value={formData.time} onChange={handleChange}
              InputLabelProps={{shrink:true}}
              error={!!formErrors.time} helperText={formErrors.time}
            />
          </Box>
          <TextField
            fullWidth margin="dense" label="Comments"
            name="comments" value={formData.comments} onChange={handleChange}
            multiline rows={3}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeBooking} disabled={submitting}>Cancel</Button>
          <Button onClick={handleBookingSubmit} variant="contained" disabled={submitting}
            sx={{bgcolor:'#ff6b6b','&:hover':{bgcolor:'#ff5252'}}}
          >
            {submitting ? <CircularProgress size={20} /> : 'Submit'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbars */}
      <Snackbar open={bookingSuccess} autoHideDuration={6000} onClose={()=>setBookingSuccess(false)}>
        <Alert severity="success" onClose={()=>setBookingSuccess(false)} sx={{width:'100%'}}>
          Appointment successfully booked!
        </Alert>
      </Snackbar>
      <Snackbar open={bookingError} autoHideDuration={6000} onClose={()=>setBookingError(false)}>
        <Alert severity="error" onClose={()=>setBookingError(false)} sx={{width:'100%'}}>
          Failed to book appointment. Please try again.
        </Alert>
      </Snackbar>
    </Box>
  );
}
