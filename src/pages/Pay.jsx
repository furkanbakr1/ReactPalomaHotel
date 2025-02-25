import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import { Box, Typography, Divider, Card, CardMedia, TextField, Button } from '@mui/material';


const Pay = () => {
  const location = useLocation();
  const { selectedDates, adults, children, selectedRoom } = location.state || {};
  const handleClick = () => {
    alert('Ödemeniz başarıyla alındı!');
  };
  return (
    <Box
  sx={{
    backgroundColor: 'rgb(252, 250, 241)',
    minHeight: '100vh',
    maxWidth: '100vw',
    paddingBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
>
  <Navbar2 />

  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '95%', md: '80%' }, 
      marginTop: { xs: '10%', md: '7%' },
      gap: { xs: '20px', md: '40px' }, 
      flexDirection: { xs: 'column', md: 'row' }, 
    }}
  >
    {/* Sol taraf - Seçilen Bilgiler */}
    <Box
      sx={{
        flex: 1,
        textAlign: 'center',
        padding: { xs: '15px', md: '20px' },
        borderRadius: '10px',
        width: '100%',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#333',
          fontSize: { xs: '1.2rem', md: '1.5rem' }, 
        }}
      >
        Rezervasyon Bilgileri
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '10px', fontSize: { xs: '0.9rem', md: '1rem' } }}>
        <strong>Gün Aralığı:</strong> {selectedDates?.[0]} - {selectedDates?.[1]}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '10px', fontSize: { xs: '0.9rem', md: '1rem' } }}>
        <strong>Kişi Sayısı:</strong> {adults} Yetişkin, {children} Çocuk
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '10px', fontSize: { xs: '0.9rem', md: '1rem' } }}>
        <strong>Seçilen Oda:</strong> {selectedRoom?.name}
      </Typography>
      {selectedRoom && (
        <CardMedia
          component="img"
          image={selectedRoom.images[0]}
          alt={selectedRoom.name}
          sx={{
            borderRadius: '10px',
            width: '100%',
            maxWidth: { xs: '280px', md: '100%' }, 
            marginTop: '10px',
          }}
        />
      )}
    </Box>

    {/* Orta Çizgi */}
    <Divider
      orientation="vertical"
      flexItem
      sx={{
        display: { xs: 'none', md: 'block' }, 
        height: '700px',
        backgroundColor: '#333',
      }}
    />

    {/* Sağ taraf - Ödeme Formu */}
    <Box
      sx={{
        flex: 1,
        textAlign: 'center',
        backgroundColor: 'white',
        padding: { xs: '20px', md: '2%' },
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.9)',
        width: '100%',
        maxWidth: { xs: '300px', md: '100%' }, 
        height: 'auto',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#333',
          fontSize: { xs: '1.2rem', md: '1.5rem' }, 
        }}
      >
        Ödeme Bilgileri
      </Typography>

      <TextField
        fullWidth
        label="Kart Sahibi Adı"
        variant="outlined"
        sx={{ marginBottom: '15px', fontSize: { xs: '0.8rem', md: '1rem' } }}
      />
      <TextField
        fullWidth
        label="Kart Numarası"
        variant="outlined"
        sx={{ marginBottom: '15px', fontSize: { xs: '0.8rem', md: '1rem' } }}
      />
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '10px', marginBottom: '15px' }}>
        <TextField
          fullWidth
          label="Son Kullanma Tarihi"
          variant="outlined"
          sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}
        />
        <TextField
          fullWidth
          label="CVV"
          variant="outlined"
          sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}
        />
      </Box>

      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          backgroundColor: '#00796b',
          color: 'white',
          width: '100%',
          fontSize: { xs: '0.9rem', md: '1rem' },
          padding: { xs: '8px', md: '10px' },
        }}
      >
        Ödemeyi Tamamla
      </Button>
    </Box>



  </Box>
</Box>

  );
};

export default Pay;
