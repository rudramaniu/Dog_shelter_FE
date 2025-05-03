// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Card,
//   Tabs,
//   Tab,
//   Button,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Alert,
//   Snackbar,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Grid
// } from '@mui/material';
// import PetsIcon from '@mui/icons-material/Pets';
// import EventIcon from '@mui/icons-material/Event';
// import PeopleIcon from '@mui/icons-material/People';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { useNavigate } from 'react-router-dom';

// // Mock API functions
// const API = {
//   post: (url, data) =>
//     new Promise(resolve => {
//       console.log(`POST to ${url}`, data);
//       setTimeout(() => resolve({ status: 200, data: { ...data, id: Date.now() } }), 500);
//     }),
//   put: (url, data) =>
//     new Promise(resolve => {
//       console.log(`PUT to ${url}`, data);
//       setTimeout(() => resolve({ status: 200, data }), 500);
//     }),
//   delete: url =>
//     new Promise(resolve => {
//       console.log(`DELETE to ${url}`);
//       setTimeout(() => resolve({ status: 200 }), 500);
//     })
// };

// // Mock data
// const mockDogs = [
//   {
//     id: 1,
//     name: 'Buddy',
//     breed: 'Labrador Retriever',
//     age: '2 years',
//     gender: 'male',
//     status: 'available'
//   },
//   {
//     id: 2,
//     name: 'Luna',
//     breed: 'German Shepherd',
//     age: '3 years',
//     gender: 'female',
//     status: 'available'
//   }
// ];

// const mockEvents = [
//   {
//     id: 101,
//     title: 'Spring Adoption Drive',
//     date: '2025-05-10T10:00:00Z',
//     location: 'Central Park'
//   },
//   {
//     id: 102,
//     title: 'Volunteer Orientation',
//     date: '2025-05-15T18:00:00Z',
//     location: 'Shelter Training Room'
//   }
// ];

// // Mock volunteers
// const mockVolunteers = [
//   { id: 1, name: 'John Doe', email: 'john@example.com', availability: 'Weekdays' },
//   { id: 2, name: 'Jane Smith', email: 'jane@example.com', availability: 'Weekends' }
// ];

// export default function AdminDashboard() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const adminAuth = localStorage.getItem('adminAuth');
//     if (!adminAuth) navigate('/login');
//   }, []);

//   const [tabValue, setTabValue] = useState(0);
//   const [dogs, setDogs] = useState(mockDogs);
//   const [events, setEvents] = useState(mockEvents);
//   const [volunteers, setVolunteers] = useState([]);

//   // Dog dialog state
//   const [openDogDialog, setOpenDogDialog] = useState(false);
//   const [currentDog, setCurrentDog] = useState({});
//   const [isEditDog, setIsEditDog] = useState(false);

//   // Event dialog state
//   const [openEventDialog, setOpenEventDialog] = useState(false);
//   const [currentEvent, setCurrentEvent] = useState({});
//   const [isEditEvent, setIsEditEvent] = useState(false);

//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

//   // Load volunteers (mock for now)
//   useEffect(() => {
//     // In production: API.get('/api/volunteers').then(res => setVolunteers(res.data));
//     setVolunteers(mockVolunteers);
//   }, []);

//   const handleTabChange = (_, newVal) => setTabValue(newVal);
//   const handleLogout = () => {
//     localStorage.removeItem('adminAuth');
//     navigate('/login');
//   };

//   // --- Dogs handlers ---
//   const openDogForm = dog => {
//     if (dog) {
//       setCurrentDog(dog);
//       setIsEditDog(true);
//     } else {
//       setCurrentDog({ name: '', breed: '', age: '', gender: 'male', status: 'available' });
//       setIsEditDog(false);
//     }
//     setOpenDogDialog(true);
//   };
//   const closeDogForm = () => setOpenDogDialog(false);
//   const saveDog = async () => {
//     try {
//       if (isEditDog) {
//         const res = await API.put(`/api/dogs/${currentDog.id}`, currentDog);
//         setDogs(dogs.map(d => d.id === res.data.id ? res.data : d));
//       } else {
//         const res = await API.post('/api/dogs', currentDog);
//         setDogs([...dogs, res.data]);
//       }
//       setSnackbar({ open: true, message: 'Saved!', severity: 'success' });
//       closeDogForm();
//     } catch {
//       setSnackbar({ open: true, message: 'Error!', severity: 'error' });
//     }
//   };
//   const deleteDog = async id => {
//     await API.delete(`/api/dogs/${id}`);
//     setDogs(dogs.filter(d => d.id !== id));
//     setSnackbar({ open: true, message: 'Deleted!', severity: 'success' });
//   };

//   // --- Events handlers ---
//   const openEventForm = evt => {
//     if (evt) {
//       setCurrentEvent(evt);
//       setIsEditEvent(true);
//     } else {
//       setCurrentEvent({ title: '', date: new Date().toISOString(), location: '' });
//       setIsEditEvent(false);
//     }
//     setOpenEventDialog(true);
//   };
//   const closeEventForm = () => setOpenEventDialog(false);
//   const saveEvent = async () => {
//     try {
//       if (isEditEvent) {
//         const res = await API.put(`/api/events/${currentEvent.id}`, currentEvent);
//         setEvents(events.map(e => e.id === res.data.id ? res.data : e));
//       } else {
//         const res = await API.post('/api/events', currentEvent);
//         setEvents([...events, res.data]);
//       }
//       setSnackbar({ open: true, message: 'Saved!', severity: 'success' });
//       closeEventForm();
//     } catch {
//       setSnackbar({ open: true, message: 'Error!', severity: 'error' });
//     }
//   };
//   const deleteEvent = async id => {
//     await API.delete(`/api/events/${id}`);
//     setEvents(events.filter(e => e.id !== id));
//     setSnackbar({ open: true, message: 'Deleted!', severity: 'success' });
//   };

//   return (
//     <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh' }}>
//       {/* Header */}
//       <Box sx={{ bgcolor: '#ff6b6b', color: 'white', p: 2, display: 'flex', justifyContent: 'space-between' }}>
//         <Typography variant="h4">Admin Dashboard</Typography>
//         <Button onClick={handleLogout} startIcon={<LogoutIcon />} variant="contained" color="secondary">
//           Logout
//         </Button>
//       </Box>

//       <Container maxWidth="lg" sx={{ py: 4 }}>
//         <Card sx={{ mb: 4, boxShadow: 3, borderRadius: 2 }}>
//           <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth">
//             <Tab icon={<PetsIcon />} label="Manage Dogs" />
//             <Tab icon={<EventIcon />} label="Manage Events" />
//             <Tab icon={<PeopleIcon />} label="Manage Volunteers" />
//           </Tabs>

//           {/* Dogs */}
//           <TabPanel value={tabValue} index={0}>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
//               <Typography variant="h5">Available Dogs</Typography>
//               <Button startIcon={<AddIcon />} onClick={() => openDogForm()}>
//                 Add Dog
//               </Button>
//             </Box>
//             <TableContainer component={Paper} sx={{ boxShadow: 2, borderRadius: 1 }}>
//               <Table>
//                 <TableHead sx={{ bgcolor: '#f5f5f5' }}>
//                   <TableRow>
//                     <TableCell>ID</TableCell>
//                     <TableCell>Name</TableCell>
//                     <TableCell>Breed</TableCell>
//                     <TableCell>Age</TableCell>
//                     <TableCell>Status</TableCell>
//                     <TableCell align="right">Actions</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {dogs.map(dog => (
//                     <TableRow key={dog.id} hover>
//                       <TableCell>{dog.id}</TableCell>
//                       <TableCell>{dog.name}</TableCell>
//                       <TableCell>{dog.breed}</TableCell>
//                       <TableCell>{dog.age}</TableCell>
//                       <TableCell>{dog.status}</TableCell>
//                       <TableCell align="right">
//                         <Button size="small" startIcon={<EditIcon />} onClick={() => openDogForm(dog)} sx={{ mr: 1 }}>
//                           Edit
//                         </Button>
//                         <Button size="small" color="error" startIcon={<DeleteIcon />} onClick={() => deleteDog(dog.id)}>
//                           Delete
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </TabPanel>

//           {/* Events */}
//           <TabPanel value={tabValue} index={1}>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
//               <Typography variant="h5">Upcoming Events</Typography>
//               <Button startIcon={<AddIcon />} onClick={() => openEventForm()}>
//                 Add Event
//               </Button>
//             </Box>
//             <TableContainer component={Paper} sx={{ boxShadow: 2, borderRadius: 1 }}>
//               <Table>
//                 <TableHead sx={{ bgcolor: '#f5f5f5' }}>
//                   <TableRow>
//                     <TableCell>ID</TableCell>
//                     <TableCell>Title</TableCell>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Location</TableCell>
//                     <TableCell align="right">Actions</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {events.map(evt => (
//                     <TableRow key={evt.id} hover>
//                       <TableCell>{evt.id}</TableCell>
//                       <TableCell>{evt.title}</TableCell>
//                       <TableCell>{new Date(evt.date).toLocaleString()}</TableCell>
//                       <TableCell>{evt.location}</TableCell>
//                       <TableCell align="right">
//                         <Button size="small" startIcon={<EditIcon />} onClick={() => openEventForm(evt)} sx={{ mr: 1 }}>
//                           Edit
//                         </Button>
//                         <Button size="small" color="error" startIcon={<DeleteIcon />} onClick={() => deleteEvent(evt.id)}>
//                           Delete
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </TabPanel>

//           {/* Volunteers */}
//           <TabPanel value={tabValue} index={2}>
//             <Typography variant="h5" sx={{ mb: 3 }}>Volunteers</Typography>
//             <TableContainer component={Paper} sx={{ boxShadow: 2, borderRadius: 1 }}>
//               <Table>
//                 <TableHead sx={{ bgcolor: '#f5f5f5' }}>
//                   <TableRow>
//                     <TableCell>ID</TableCell>
//                     <TableCell>Name</TableCell>
//                     <TableCell>Email</TableCell>
//                     <TableCell>Availability</TableCell>
//                     <TableCell align="right">Actions</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {volunteers.map(vol => (
//                     <TableRow key={vol.id} hover>
//                       <TableCell>{vol.id}</TableCell>
//                       <TableCell>{vol.name}</TableCell>
//                       <TableCell>{vol.email}</TableCell>
//                       <TableCell>{vol.availability}</TableCell>
//                       <TableCell align="right">
//                         <Button size="small" startIcon={<EditIcon />} sx={{ mr: 1 }}>
//                           Edit
//                         </Button>
//                         <Button size="small" color="error" startIcon={<DeleteIcon />}>
//                           Delete
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </TabPanel>
//         </Card>
//       </Container>

//       {/* Dog Dialog */}
//       <Dialog open={openDogDialog} onClose={closeDogForm} maxWidth="sm" fullWidth>
//         <DialogTitle>{isEditDog ? 'Edit Dog' : 'Add Dog'}</DialogTitle>
//         <DialogContent>
//           <Grid container spacing={2} sx={{ mt: 1 }}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="name"
//                 label="Name"
//                 fullWidth
//                 value={currentDog.name || ''}
//                 onChange={e => setCurrentDog({ ...currentDog, name: e.target.value })}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="breed"
//                 label="Breed"
//                 fullWidth
//                 value={currentDog.breed || ''}
//                 onChange={e => setCurrentDog({ ...currentDog, breed: e.target.value })}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="age"
//                 label="Age"
//                 fullWidth
//                 value={currentDog.age || ''}
//                 onChange={e => setCurrentDog({ ...currentDog, age: e.target.value })}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth>
//                 <InputLabel>Status</InputLabel>
//                 <Select
//                   name="status"
//                   value={currentDog.status || ''}
//                   label="Status"
//                   onChange={e => setCurrentDog({ ...currentDog, status: e.target.value })}
//                 >
//                   <MenuItem value="available">Available</MenuItem>
//                   <MenuItem value="pending">Pending</MenuItem>
//                   <MenuItem value="adopted">Adopted</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//           </Grid>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={closeDogForm}>Cancel</Button>
//           <Button onClick={saveDog} variant="contained">Save</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Event Dialog */}
//       <Dialog open={openEventDialog} onClose={closeEventForm} maxWidth="sm" fullWidth>
//         <DialogTitle>{isEditEvent ? 'Edit Event' : 'Add Event'}</DialogTitle>
//         <DialogContent>
//           <Grid container spacing={2} sx={{ mt: 1 }}>
//             <Grid item xs={12}>
//               <TextField
//                 name="title"
//                 label="Title"
//                 fullWidth
//                 value={currentEvent.title || ''}
//                 onChange={e => setCurrentEvent({ ...currentEvent, title: e.target.value })}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 name="date"
//                 label="Date"
//                 type="datetime-local"
//                 fullWidth
//                 value={currentEvent.date?.slice(0,16) || ''}
//                 onChange={e => setCurrentEvent({ ...currentEvent, date: new Date(e.target.value).toISOString() })}
//                 InputLabelProps={{ shrink: true }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 name="location"
//                 label="Location"
//                 fullWidth
//                 value={currentEvent.location || ''}
//                 onChange={e => setCurrentEvent({ ...currentEvent, location: e.target.value })}
//               />
//             </Grid>
//           </Grid>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={closeEventForm}>Cancel</Button>
//           <Button onClick={saveEvent} variant="contained">Save</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Snackbar */}
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={6000}
//         onClose={() => setSnackbar(s => ({ ...s, open: false }))}
//       >
//         <Alert severity={snackbar.severity} onClose={() => setSnackbar(s => ({ ...s, open: false }))}>
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// }

// // TabPanel helper
// function TabPanel({ children, value, index }) {
//   return (
//     <div role="tabpanel" hidden={value !== index}>
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Tabs,
  Tab,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { API } from '../api';

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) {
      navigate('/admin');
    }
  }, [navigate]);

  const [tabValue, setTabValue] = useState(0);
  const [dogs, setDogs] = useState([]);
  const [events, setEvents] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [donations, setDonations] = useState([]);
  const [totalDonations, setTotalDonations] = useState(0);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  // Fetch routines
  const fetchDogs = async () => {
    try {
      const res = await API.get('/api/dogs');
      setDogs(res.data);
    } catch {
      setSnackbar({ open: true, message: 'Failed to load dogs', severity: 'error' });
    }
  };
  const fetchEvents = async () => {
    try {
      const res = await API.get('/api/events');
      setEvents(res.data);
    } catch {
      setSnackbar({ open: true, message: 'Failed to load events', severity: 'error' });
    }
  };
  const fetchVolunteers = async () => {
    try {
      const res = await API.get('/api/volunteers');
      setVolunteers(res.data);
    } catch {
      setSnackbar({ open: true, message: 'Failed to load volunteers', severity: 'error' });
    }
  };
  const fetchAppointments = async () => {
    try {
      const res = await API.get('/api/appointments');
      const sorted = [...res.data].sort(
        (a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate)
      );
      setAppointments(sorted);
    } catch {
      setSnackbar({ open: true, message: 'Failed to load appointments', severity: 'error' });
    }
  };
  const fetchDonations = async () => {
    try {
      const res = await API.get('/api/donations');
      const sorted = [...res.data]
        .map(d => ({ ...d, iso: d.donationDate.replace(' ', 'T') }))
        .sort((a, b) => new Date(b.iso) - new Date(a.iso));
      setDonations(sorted);
    } catch {
      setSnackbar({ open: true, message: 'Failed to load donations', severity: 'error' });
    }
  };

  useEffect(() => {
    fetchDogs();
    fetchEvents();
    fetchVolunteers();
    fetchAppointments();
    fetchDonations();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  // ——— DOGS CRUD ———
  const [openDogDialog, setOpenDogDialog] = useState(false);
  const [currentDog, setCurrentDog] = useState({});
  const [isEditDog, setIsEditDog] = useState(false);

  function openDogForm(dog = null) {
    if (dog) {
      setCurrentDog(dog);
      setIsEditDog(true);
    } else {
      setCurrentDog({
        name: '',
        breed: '',
        age: '',
        gender: 'male',
        status: 'available',
        size: 'Medium',
        photoUrl: '',
        personality: '',
        description: '',
        medicalInfo: ''
      });
      setIsEditDog(false);
    }
    setOpenDogDialog(true);
  }
  function closeDogForm() {
    setOpenDogDialog(false);
  }
  async function saveDog() {
    try {
      if (isEditDog) {
        await API.put(`/api/dogs/${currentDog.id}`, currentDog);
      } else {
        await API.post('/api/dogs', currentDog);
      }
      setSnackbar({ open: true, message: 'Dog saved', severity: 'success' });
      closeDogForm();
      fetchDogs();
    } catch {
      setSnackbar({ open: true, message: 'Error saving dog', severity: 'error' });
    }
  }
  async function deleteDog(id) {
    try {
      await API.delete(`/api/dogs/${id}`);
      setSnackbar({ open: true, message: 'Dog deleted', severity: 'success' });
      fetchDogs();
    } catch {
      setSnackbar({ open: true, message: 'Error deleting dog', severity: 'error' });
    }
  }

  // ——— EVENTS CRUD ———
  const [openEventDialog, setOpenEventDialog] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({});
  const [isEditEvent, setIsEditEvent] = useState(false);

  function openEventForm(evt = null) {
    if (evt) {
      setCurrentEvent(evt);
      setIsEditEvent(true);
    } else {
      setCurrentEvent({
        title: '',
        date: '',
        location: '',
        description: ''
      });
      setIsEditEvent(false);
    }
    setOpenEventDialog(true);
  }
  function closeEventForm() {
    setOpenEventDialog(false);
  }
  async function saveEvent() {
    try {
      if (isEditEvent) {
        await API.put(`/api/events/${currentEvent.id}`, currentEvent);
      } else {
        await API.post('/api/events', currentEvent);
      }
      setSnackbar({ open: true, message: 'Event saved', severity: 'success' });
      closeEventForm();
      fetchEvents();
    } catch {
      setSnackbar({ open: true, message: 'Error saving event', severity: 'error' });
    }
  }
  async function deleteEvent(id) {
    try {
      await API.delete(`/api/events/${id}`);
      setSnackbar({ open: true, message: 'Event deleted', severity: 'success' });
      fetchEvents();
    } catch {
      setSnackbar({ open: true, message: 'Error deleting event', severity: 'error' });
    }
  }

  return (
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Header */}
      <Box
        sx={{ bgcolor: '#ff6b6b', color: 'white', p: 2, display: 'flex', justifyContent: 'space-between' }}
      >
        <Typography variant="h4">Admin Dashboard</Typography>
        <Button onClick={handleLogout} startIcon={<LogoutIcon />} variant="contained" color="secondary">
          Logout
        </Button>
      </Box>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Card sx={{ mb: 4, boxShadow: 3, borderRadius: 2 }}>
          <Tabs value={tabValue} onChange={(_, v) => setTabValue(v)} variant="fullWidth">
            <Tab icon={<PetsIcon />} label="Dogs" />
            <Tab icon={<EventIcon />} label="Events" />
            <Tab icon={<PeopleIcon />} label="Volunteers" />
            <Tab icon={<ScheduleIcon />} label="Appointments" />
            <Tab icon={<AttachMoneyIcon />} label="Donations" />
          </Tabs>

          {/* Dogs Tab */}
          <TabPanel value={tabValue} index={0}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h5">Dogs</Typography>
              <Button startIcon={<AddIcon />} onClick={() => openDogForm()}>
                Add Dog
              </Button>
            </Box>
            <TableContainer component={Paper} sx={{ boxShadow: 2, borderRadius: 1 }}>
              <Table>
                <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Breed</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Size</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dogs.map(d => (
                    <TableRow key={d.id} hover>
                      <TableCell>{d.id}</TableCell>
                      <TableCell>{d.name}</TableCell>
                      <TableCell>{d.breed}</TableCell>
                      <TableCell>{d.age}</TableCell>
                      <TableCell>{d.size}</TableCell>
                      <TableCell>{d.status}</TableCell>
                      <TableCell align="right">
                        <Button
                          size="small"
                          startIcon={<EditIcon />}
                          onClick={() => openDogForm(d)}
                          sx={{ mr: 1 }}
                        >
                          Edit
                        </Button>
                        <Button
                          size="small"
                          startIcon={<DeleteIcon />}
                          color="error"
                          onClick={() => deleteDog(d.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>

          {/* Events Tab */}
          <TabPanel value={tabValue} index={1}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h5">Events</Typography>
              <Button startIcon={<AddIcon />} onClick={() => openEventForm()}>
                Add Event
              </Button>
            </Box>
            <TableContainer component={Paper} sx={{ boxShadow: 2, borderRadius: 1 }}>
              <Table>
                <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {events.map(e => (
                    <TableRow key={e.id} hover>
                      <TableCell>{e.id}</TableCell>
                      <TableCell>{e.title}</TableCell>
                      <TableCell>{new Date(e.date).toLocaleString()}</TableCell>
                      <TableCell>{e.location}</TableCell>
                      <TableCell>{e.description}</TableCell>
                      <TableCell align="right">
                        <Button
                          size="small"
                          startIcon={<EditIcon />}
                          onClick={() => openEventForm(e)}
                          sx={{ mr: 1 }}
                        >
                          Edit
                        </Button>
                        <Button
                          size="small"
                          startIcon={<DeleteIcon />}
                          color="error"
                          onClick={() => deleteEvent(e.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>

          {/* Volunteers Tab */}
          <TabPanel value={tabValue} index={2}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Volunteers
            </Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 2, borderRadius: 1 }}>
              <Table>
                <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Availability</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {volunteers.map(v => (
                    <TableRow key={v.id} hover>
                      <TableCell>{v.id}</TableCell>
                      <TableCell>{v.name}</TableCell>
                      <TableCell>{v.email}</TableCell>
                      <TableCell>{v.availability}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>

          {/* Appointments Tab */}
          <TabPanel value={tabValue} index={3}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Appointments
            </Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 2, borderRadius: 1 }}>
              <Table>
                <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Dog Name</TableCell>
                    <TableCell>Your Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Date & Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appointments.map(a => (
                    <TableRow key={a.id} hover>
                      <TableCell>{a.id}</TableCell>
                      <TableCell>{a.dogName}</TableCell>
                      <TableCell>{a.name}</TableCell>
                      <TableCell>{a.email}</TableCell>
                      <TableCell>{a.phone}</TableCell>
                      <TableCell>{new Date(a.appointmentDate).toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>

          {/* Donations Tab */}
          <TabPanel value={tabValue} index={4}>
            <Typography variant="h5" sx={{ mb: 3 }}>Donations</Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 2, borderRadius: 1 }}>
              <Table>
                <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Amount (USD)</TableCell>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {donations.map(d => (
                    <TableRow key={d.id} hover>
                      <TableCell>{d.id}</TableCell>
                      <TableCell>{d.name}</TableCell>
                      <TableCell>{d.email}</TableCell>
                      <TableCell>${d.amount.toFixed(2)}</TableCell>
                      <TableCell>
                        {new Date(d.iso).toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ mt: 2, textAlign: 'right' }}>
              <Typography variant="h6">
                Total Donations: $
                {donations
                  .reduce((sum, d) => sum + (parseFloat(d.amount) || 0), 0)
                  .toFixed(2)}
              </Typography>
            </Box>
          </TabPanel>
        </Card>
      </Container>

      {/* Dog Dialog */}
      <Dialog open={openDogDialog} onClose={closeDogForm} maxWidth="sm" fullWidth>
        <DialogTitle>{isEditDog ? 'Edit Dog' : 'Add Dog'}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                value={currentDog.name || ''}
                onChange={e => setCurrentDog({ ...currentDog, name: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Breed"
                value={currentDog.breed || ''}
                onChange={e => setCurrentDog({ ...currentDog, breed: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Age"
                value={currentDog.age || ''}
                onChange={e => setCurrentDog({ ...currentDog, age: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Size</InputLabel>
                <Select
                  value={currentDog.size || ''}
                  label="Size"
                  onChange={e => setCurrentDog({ ...currentDog, size: e.target.value })}
                >
                  <MenuItem value="Small">Small</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Large">Large</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={currentDog.status || ''}
                  label="Status"
                  onChange={e => setCurrentDog({ ...currentDog, status: e.target.value })}
                >
                  <MenuItem value="available">Available</MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="adopted">Adopted</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Photo URL"
                value={currentDog.photoUrl || ''}
                onChange={e => setCurrentDog({ ...currentDog, photoUrl: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Personality"
                helperText="Comma-separated traits"
                value={currentDog.personality || ''}
                onChange={e => setCurrentDog({ ...currentDog, personality: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                value={currentDog.description || ''}
                onChange={e => setCurrentDog({ ...currentDog, description: e.target.value })}
                multiline
                rows={3}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Medical Info"
                value={currentDog.medicalInfo || ''}
                onChange={e => setCurrentDog({ ...currentDog, medicalInfo: e.target.value })}
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDogForm}>Cancel</Button>
          <Button onClick={saveDog} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>

      {/* Event Dialog */}
      <Dialog open={openEventDialog} onClose={closeEventForm} maxWidth="sm" fullWidth>
        <DialogTitle>{isEditEvent ? 'Edit Event' : 'Add Event'}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                label="Title"
                value={currentEvent.title || ''}
                onChange={e => setCurrentEvent({ ...currentEvent, title: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Date & Time"
                type="datetime-local"
                value={(currentEvent.date || '').slice(0, 16)}
                onChange={e => {
                  const iso = new Date(e.target.value).toISOString();
                  setCurrentEvent({ ...currentEvent, date: iso });
                }}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Location"
                value={currentEvent.location || ''}
                onChange={e => setCurrentEvent({ ...currentEvent, location: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                value={currentEvent.description || ''}
                onChange={e => setCurrentEvent({ ...currentEvent, description: e.target.value })}
                multiline
                rows={3}
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEventForm}>Cancel</Button>
          <Button onClick={saveEvent} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(s => ({ ...s, open: false }))}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar(s => ({ ...s, open: false }))}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

// TabPanel helper
function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
