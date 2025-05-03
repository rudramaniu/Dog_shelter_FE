import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Divider, 
  Paper,
  Avatar,
  Button
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import GroupIcon from '@mui/icons-material/Group';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink, useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function AboutUs() {
  const navigate = useNavigate();

  // Impact statistics
  const impactStats = [
    { value: '50+', label: 'Dogs Rescued' },
    { value: '30+', label: 'Adoptions' },
    { value: '20+', label: 'Medical Treatments' },
    { value: '10+', label: 'Volunteers' }
  ];

  return (
    <Box sx={{ bgcolor: '#f8f9fa' }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '20vh',
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
          About Paws & Hearts
        </Typography>
        <Typography variant="h5" sx={{ maxWidth: 'md', mb: 4 }}>
          More than a shelter - we're a community dedicated to saving lives
        </Typography>
      </Box>

      <Container maxWidth="lg">
        {/* Our Story Section */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 4,
            borderLeft: '4px solid #ff6b6b',
            pl: 2
          }}>
            <PetsIcon sx={{ mr: 1, color: '#ff6b6b' }} />
            <Typography variant="h4" fontWeight="medium">Our Story</Typography>
          </Box>
          
          <Grid container spacing={6} alignItems="center">
            
            <Grid item xs={12} md={6}>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                Paws & Hearts Shelter began in 2023 with a simple mission: to rescue abandoned and 
                homeless dogs and find them loving forever homes. What started as a small operation 
                with just a few kennels has grown into one of the region's most respected dog rescue 
                organizations.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                Our team of dedicated volunteers and staff work tirelessly to ensure every dog receives 
                the care, medical attention, and support they need while they wait for their forever family.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Today, we have helped over 50 dogs find new homes, and we continue to expand our 
                programs to help more animals in need throughout our community.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Our Mission & Values Section */}
        {/* <Box sx={{ mb: 8 }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 4,
            borderLeft: '4px solid #ff6b6b',
            pl: 2
          }}>
            <FavoriteIcon sx={{ mr: 1, color: '#ff6b6b' }} />
            <Typography variant="h4" fontWeight="medium">Our Mission & Values</Typography>
          </Box>
          
          <Paper elevation={0} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom color="#ff6b6b" fontWeight="medium">
              Mission
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
              To rescue, rehabilitate, and rehome dogs in need while educating our community about 
              responsible pet ownership and the importance of animal welfare.
            </Typography>
          </Paper>
          
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ 
                height: '100%', 
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }
              }}>
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: '#ff6b6b',
                  p: 2
                }}>
                  <PetsIcon sx={{ color: 'white', fontSize: 40 }} />
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom fontWeight="medium">
                    Compassion
                  </Typography>
                  <Typography variant="body2">
                    We treat every animal with kindness, respect, and dignity.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ 
                height: '100%', 
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }
              }}>
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: '#ff6b6b',
                  p: 2
                }}>
                  <LocalHospitalIcon sx={{ color: 'white', fontSize: 40 }} />
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom fontWeight="medium">
                    Care
                  </Typography>
                  <Typography variant="body2">
                    We provide the highest standard of medical and behavioral care.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ 
                height: '100%', 
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }
              }}>
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: '#ff6b6b',
                  p: 2
                }}>
                  <VolunteerActivismIcon sx={{ color: 'white', fontSize: 40 }} />
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom fontWeight="medium">
                    Community
                  </Typography>
                  <Typography variant="body2">
                    We foster a community of support for both animals and people.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ 
                height: '100%', 
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }
              }}>
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: '#ff6b6b',
                  p: 2
                }}>
                  <GroupIcon sx={{ color: 'white', fontSize: 40 }} />
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom fontWeight="medium">
                    Education
                  </Typography>
                  <Typography variant="body2">
                    We promote responsible pet ownership through education.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box> */}

        {/* Our Mission & Values Section */}
          {/* Our Mission & Values Section */}
<Box sx={{ mb: 8 }}>
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      mb: 4,
      borderLeft: '4px solid #ff6b6b',
      pl: 2
    }}
  >
    <FavoriteIcon sx={{ mr: 1, color: '#ff6b6b' }} />
    <Typography variant="h4" fontWeight="medium">
      Our Mission & Values
    </Typography>
  </Box>

  <Paper elevation={0} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
    <Typography
      variant="h5"
      gutterBottom
      color="#ff6b6b"
      fontWeight="medium"
    >
      Mission
    </Typography>
    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
      To rescue, rehabilitate, and rehome dogs in need while educating our
      community about responsible pet ownership and the importance of
      animal welfare.
    </Typography>
  </Paper>

  <Box
    component="section"
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 3
    }}
  >
    {[
      {
        icon: <PetsIcon />,
        title: 'Compassion',
        text: 'We treat every animal with kindness, respect, and dignity.'
      },
      {
        icon: <LocalHospitalIcon />,
        title: 'Care',
        text: 'We provide the highest standard of medical and behavioral care.'
      },
      {
        icon: <VolunteerActivismIcon />,
        title: 'Community',
        text: 'We foster a community of support for both animals and people.'
      },
      {
        icon: <GroupIcon />,
        title: 'Education',
        text: 'We promote responsible pet ownership through education.'
      }
    ].map((val, i) => (
      <Paper
        key={i}
        elevation={1}
        sx={{
          width: 320,               // fixed width
          borderRadius: 2,
          overflow: 'hidden',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
          }
        }}
      >
        {/* Accent bar */}
        <Box sx={{ bgcolor: '#ff6b6b', height: 8 }} />

        {/* Icon circle */}
        <Box
          sx={{
            mt: -3,
            mx: 'auto',
            width: 64,
            height: 64,
            bgcolor: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          {React.cloneElement(val.icon, {
            sx: { fontSize: 32, color: '#ff6b6b' }
          })}
        </Box>

        {/* Content */}
        <CardContent>
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            fontWeight="medium"
          >
            {val.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {val.text}
          </Typography>
        </CardContent>
      </Paper>
    ))}
  </Box>
</Box>



        {/* Impact Section */}
        <Box sx={{ mb: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: 6,
              borderRadius: 2,
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/api/placeholder/1200/400")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
              textAlign: 'center'
            }}
          >
            <Typography variant="h4" gutterBottom fontWeight="medium">
              Our Impact
            </Typography>
            <Typography variant="body1" paragraph sx={{ maxWidth: 'md', mx: 'auto', mb: 4 }}>
              Since 2023, we've made a significant difference in our community and in the lives of 50+ of dogs.
            </Typography>
            
            <Grid container spacing={3} justifyContent="center">
              {impactStats.map((stat, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h3" fontWeight="bold" color="#ff6b6b">
                      {stat.value}
                    </Typography>
                    <Typography variant="body1">
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
        
        {/* Join Us CTA Section */}
        <Box sx={{ mb: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: 6,
              borderRadius: 2,
              backgroundImage: 'linear-gradient(to right, #ff9a9e, #fad0c4)',
              color: 'white',
              textAlign: 'center'
            }}
          >
            <Typography variant="h4" gutterBottom fontWeight="medium">
              Join Our Mission
            </Typography>
            <Typography variant="body1" paragraph sx={{ maxWidth: 'md', mx: 'auto', mb: 4 }}>
              We're always looking for passionate volunteers, foster homes, and supporters to help us continue our work. 
              Whether you can donate time, resources, or funds, every contribution makes a difference.
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: '#ff6b6b',
                  '&:hover': { bgcolor: '#f0f0f0' },
                  borderRadius: 2,
                  px: 4
                }}
                onClick={()=>navigate('/volunteer')}
              >
                Volunteer
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                  borderRadius: 2,
                  px: 4
                }}
                onClick={()=>navigate('/donate')}
              >
                Donate
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                  borderRadius: 2,
                  px: 4
                }}
                onClick={()=>navigate('/adopt')}
              >
                Foster
              </Button>
            </Box>
          </Paper>
        </Box>

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