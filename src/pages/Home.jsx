

import React from 'react';
import { Box } from '@mui/material';
import otel from '../images/otel4.jpg'; 
import Navbar from '../components/Navbar';
import BookingSection from '../components/BookingSection';
import About from './About';
import Rooms from './Rooms'
import HomePageRestoran from './homePageRestoran';
import HomePageRooms from './HomePageRooms';
import HomePageSpa from './HomePageSpa';
import HomePageActivites from './HomePageActivities';
import Footer from '../components/Footer'

const Home = () => (
  <Box
  sx={{
    flexDirection: { xs: 'column', sm: 'column', md: 'row' },
    padding: { xs: '0px 0px', sm: '40px 20px', md: '0px' },
    maxWidth: '100vw',
    minHeight: '100vh',
    
    overflowX: 'hidden', 
  }}
>
  {/* Arka plan resmi */}
  <Box 
    sx={{
      
      position: 'fixed',  
      top: 0,  
      left: 0,  
      width: '100%',  
      minHeight: { xs: '100%', sm: '110%', md: '120%' },  
      backgroundImage: `url(${otel})`,  
      backgroundSize: 'cover',  
      backgroundPosition: 'center',  
      backgroundAttachment: 'fixed',  
      zIndex: -1, 
    }} 
  />

  <Navbar /> 

  {/* İçerik */}
  <Box 
    sx={{
      position: 'relative', 
      top: { xs: '10%', sm: '15%', md: '20%' },  
      left: { xs: '0%', sm: '0%', md: '15%' },  
      right: { xs: '5%', sm: '10%', md: '15%' },  
      color: 'white', 
      zIndex: 1, 
      
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: { xs: '60vh', sm: '70vh', md: '80vh' }, 
      textAlign: 'center', 
    }}
  >
   
  </Box>

  
  <About />
  <HomePageRestoran />
  <HomePageRooms />
  <HomePageSpa />
  <HomePageActivites />

 
  <BookingSection />
  <Footer/>
</Box>

);

export default Home;
