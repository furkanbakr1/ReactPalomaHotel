  
import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Typography, Button, Divider } from '@mui/material';
import SpaImage from '../images/spa-havuz.jpg'; 
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from 'react-router-dom';

const HomePageSpa = () => {

  const navigate= useNavigate();


  return (
    <Box 
  id="spa-section" 
  sx={{ 
    backgroundColor: 'rgb(252, 250, 241)', 
    minHeight: '100vh', 
    width: '100vw',  
    padding: { xs: '40px 20px', sm: '50px 40px', md: '8% 5%' } 
  }}
>
  <Box 
    sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: { xs: 'column', md: 'row' }, 
      gap: { xs: '30px', md: '0%' }, 
      marginTop: { xs: '0%', md: '-20%' } 
    }}
  >
    
    {/* Sol tarafta büyük resim */}
    <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
      <img 
        loading="lazy"
        src={SpaImage} 
        alt="Spa & Havuz"
        style={{ 
          width: '100%', 
          maxWidth: { xs: '90%', sm: '600px', md: '1100px' }, 
          height: 'auto', 
          borderRadius: '12px', 
          objectFit: 'cover', 
          marginLeft:'-15%'
        }}
      />
    </Box>
    
    {/* Sağ tarafta başlık ve açıklama metni */}
    <Box 
      sx={{ 
        flex: 1, 
        textAlign: { xs: 'center', md: 'left' }, 
        padding: { xs: '20px', sm: '30px', md: '8% 10%' },
        marginTop: { xs: '0%', md: '-5%' }
      }}
    >
      <Typography 
        variant="h3" 
        sx={{ 
          fontSize: { xs: '28px', sm: '32px', md: '40px' }, 
          lineHeight: { xs: '34px', sm: '38px', md: '48px' }, 
          fontFamily: '__domaine_26cc95, __domaine_Fallback_26cc95',
          marginBottom: '20px' 
        }}
      >
        Valmont'un Airelles Spa'sı
      </Typography>

      <Typography 
        variant="body1" 
        sx={{ 
          fontSize: { xs: '16px', sm: '18px', md: '20px' }, 
          lineHeight: { xs: '20px', sm: '22px' }, 
          fontFamily: '__domaine_26cc95, __domaine_Fallback_26cc95', 
          marginBottom: '20px' 
        }}
      >
        Grand Contrôle'nin kalbinde yer alan Airelles Spa by Valmont, sizi Versay ruhuna uygun 
        bir dinginlik ortamında ağırlıyor. Carrara mermerinden yapılmış bir dama tahtasının ortasında, 
        15 metre uzunluğundaki ısıtmalı yüzme havuzu koyu turkuaz mavisi bir renkle parıldıyor.
      </Typography>

      <Typography 
        variant="body1" 
        sx={{ 
          fontSize: { xs: '16px', sm: '18px', md: '20px' }, 
          lineHeight: { xs: '20px', sm: '22px' }, 
          fontFamily: '__domaine_26cc95, __domaine_Fallback_26cc95', 
          marginBottom: '20px' 
        }}
      >
        Grand Contrôle’un büyüleyici atmosferinde eşsiz bir havuz deneyimi sizi bekliyor. 
        Şehrin kalabalığından uzak, huzur dolu bir kaçamak için tasarlanan bu alan, şık ve zarif 
        detayları ile konforu yeniden tanımlıyor.
      </Typography>

      <Button 
        onClick={() => navigate('/spa')}
        variant='outlined' 
        sx={{ 
          borderColor: 'rgb(35, 56, 44)' ,
          color: 'rgb(35, 56, 44)', 
          padding: { xs: '8px 15px', sm: '10px 20px' }, 
          fontSize: { xs: '0.9rem', sm: '1rem' }, 
          fontWeight: 'medium', 
          display: 'flex',
          alignItems: 'center', 
          gap: '8px', 
          fontFamily: '__domaine_26cc95, __domaine_Fallback_26cc95',
          '&:hover': { backgroundColor: 'rgb(28, 46, 36)', color: 'white' }
        }}
      >
        Spa ve Havuzu Keşfedin
        <ArrowOutwardIcon sx={{ fontSize: { xs: '16px', sm: '20px' } }} />
      </Button>
    </Box>
  </Box>
</Box>

  );
};

export default HomePageSpa;
