import React, { useState, useEffect } from 'react';
import Navbar2 from '../components/Navbar2';
import { Box, Typography, TextField, Button, Divider } from '@mui/material';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [coordinates, setCoordinates] = useState({ lat: 41.015137, lng: 28.979530 });
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;


  useEffect(() => {
    if (apiKey) {
      axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: 'İstanbul, Türkiye',
          key: apiKey
        }
      })
      .then(response => {
        if (response.data.results.length > 0) {
          const location = response.data.results[0].geometry.location;
          setCoordinates({ lat: location.lat, lng: location.lng });
        }
      })
      .catch(error => console.error('Konum verisi alınamadı:', error));
    }
  }, [apiKey]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajınız gönderildi!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ backgroundColor: 'rgb(252, 250, 241)', minHeight: '100vh', maxWidth: '100vw', paddingBottom: '20px' }}>
      <Navbar2 />
      
      <Box sx={{ textAlign: 'center', padding: '5% 10%' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          İletişim & Rezervasyon
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto', marginBottom: '40px' }}>
          Bizimle iletişime geçin veya rezervasyonunuzu hızlıca tamamlayın.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', padding: '0% 10%' }}>
        <Box sx={{ flex: 1, textAlign: 'left' , marginTop:'2%',height:'100px'}}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>İletişim Bilgileri</Typography>
          <Typography variant="body1"><strong>Telefon:</strong> +90 555 123 45 67</Typography>
          <Typography variant="body1"><strong>E-posta:</strong> info@otelpaloma.com</Typography>
          <Typography variant="body1"><strong>Adres:</strong> İstanbul, Türkiye</Typography>
        </Box>

        <Box sx={{ flex: 2, textAlign: 'center', }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>Bize Mesaj Gönderin</Typography>
          <Box sx={{ width:'500px',marginLeft:'24%'}}>

         
          <form onSubmit={handleSubmit} >
            <TextField 
              fullWidth 
              label="Adınız" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              sx={{ marginBottom: '15px' }} 
            />
            <TextField 
              fullWidth 
              label="E-Posta" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              sx={{ marginBottom: '15px' }} 
            />
            <TextField 
              fullWidth 
              label="Mesajınız" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              multiline 
              rows={4} 
              sx={{ marginBottom: '15px' }} 
            />
            <Button type="submit" variant="contained" sx={{ backgroundColor: 'rgb(35, 56, 44)', color: 'white' }}>
              Gönder
            </Button>
          </form>
          </Box>
        </Box>
      </Box>
      
      <Divider sx={{ margin: '40px auto', width: '80%' }} />

      <Box sx={{ textAlign: 'center', paddingBottom: '50px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>Konumumuz</Typography>
        {apiKey ? (
          <iframe
            title="Otel Konum"
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${coordinates.lat},${coordinates.lng}`}
            width="80%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        ) : (
          <Typography variant="body1" sx={{ color: 'red' }}>Google Maps API Anahtarı Eksik</Typography>
        )}
      </Box>
    </Box>
  );
}

export default Contact;
