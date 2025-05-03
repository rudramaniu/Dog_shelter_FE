// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { NavLink, useNavigate } from 'react-router-dom';

// export default function Navbar() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem('adminToken');

//   const handleLogout = () => {
//     localStorage.removeItem('adminToken');
//     navigate('/');
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Dog Adoption NGO
//         </Typography>
//         {['/', '/about', '/adopt', '/volunteer', '/donate', '/events', '/contact'].map(path => (
//           <Button key={path} color="inherit" component={NavLink} to={path} sx={{ ml: 1 }}>
//             {path === '/' ? 'Home' : path.slice(1).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
//           </Button>
//         ))}
//         {token ? (
//           <Button color="inherit" onClick={handleLogout}>Logout</Button>
//         ) : (
//           <Button color="inherit" component={NavLink} to="/admin">Admin Login</Button>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }


import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container
} from '@mui/material';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('adminAuth');
  

  const links = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Adopt', path: '/adopt' },
    { label: 'Volunteer', path: '/volunteer' },
    { label: 'Donate', path: '/donate' },
    { label: 'Events', path: '/events' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  return (
    <AppBar position="static" elevation={2} sx={{ bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            sx={{
              color: '#ff6b6b',
              fontWeight: 'bold',
              flexGrow: 1,
              textTransform: 'uppercase'
            }}
          >
            Paws & Hearts Shelter
          </Typography>

          {links.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <Button
                key={path}
                component={NavLink}
                to={path}
                sx={{
                  mx: 1,
                  textTransform: 'none',
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: isActive ? '#ff6b6b' : '#555',
                  borderBottom: isActive
                    ? '2px solid #ff6b6b'
                    : '2px solid transparent',
                  borderRadius: 0,
                  '&:hover': {
                    color: '#ff6b6b',
                    backgroundColor: 'transparent'
                  }
                }}
              >
                {label}
              </Button>
            );
          })}

          {1 &&  (
            <Button
              component={NavLink}
              to="/admin"
              sx={{
                ml: 2,
                textTransform: 'none',
                bgcolor: '#ff6b6b',
                color: 'white',
                '&:hover': { bgcolor: '#ff5252' }
              }}
            >
              Admin Portal
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
