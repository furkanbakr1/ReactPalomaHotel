import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Rooms from './pages/Rooms'
import Restaurant from './pages/Restaurant'
import Spa from './pages/Spa';
import Activities from './pages/Activities';
import ScrollToTop from './components/ScrollToTop'
import RoomSelection from './pages/RoomSelection';
import Pay from './pages/Pay';


const App = () => (
  <Router>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/spa" element={<Spa />} />
      <Route path='/activities' element={<Activities/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path='/roomSelection' element={<RoomSelection/>} />
      <Route path='/pay' element={<Pay/>} />
    </Routes>
  </Router>

  
);

export default App;
