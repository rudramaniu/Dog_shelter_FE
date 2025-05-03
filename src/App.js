import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import AdoptADog from './pages/AdoptADog';
import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/adopt" element={<AdoptADog />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/adminDashboard" element={<AdminDashboard />}/>
      </Routes>
    </>
  );
}

export default App;