

        
import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Typography, Button, Divider } from '@mui/material';
import restoranImage from '../images/restoran.jpg'; 
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from 'react-router-dom';

const HomePageRestoran = () => {


  const navigate= useNavigate();


  return (
    <Box 
    id="restoran-section" 
    sx={{ 
      backgroundColor: 'rgb(252, 250, 241)', 
      minHeight: '100vh', 
      width: '100vw',  
      marginTop:'-15%',
      padding: { xs: '50px 20px', sm: '60px 40px', md: '8% 5%' }, 
    }}
  >
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: { xs: '40px', md: '0px' }, 
        marginTop: { xs: '0', md: '-15%' }, 
      }}
    >
      
      {/* Sol tarafta büyük resim */}
      <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
        <img 
          loading='lazy'
          src={restoranImage} 
          alt="Restoran"
          style={{ 
            width: '100%', 
            maxWidth: { xs: '90%', sm: '600px', md: '1000px' }, 
            height: 'auto', 
            borderRadius: '12px', 
            objectFit: 'cover' // Resmin kesilmesini engelliyo
          }}
        />
      </Box>
      
      {/* Sağ tarafta başlık ve açıklama metni */}
      <Box 
        sx={{ 
          flex: 1, 
          textAlign: { xs: 'center', md: 'left' }, 
          padding: { xs: '20px', sm: '30px', md: '8% 10%' }, 
          marginTop: { xs: '0', md: '-5%' }
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
          Alain Ducasse'dan Gerçek Bir Şölen
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
          Grand Contrôle'un seçkin ortamında eşsiz bir gastronomi deneyiminin tadını çıkarın. 
          Yıldızlı Şef Alain Ducasse, Grand Siècle geleneklerini ve Hükümdar'ın en sevdiği yemekleri yeniden yorumluyor.
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
          Zengin kahvaltılardan şık terasta gurme öğle yemeklerine, mum ışığında ziyafetlerden görkemli ziyafetlere... 
          Kendinize unutulmaz bir mutfak yolculuğu yaşatın.
        </Typography>
  
        <Button 
          variant='outlined'
          onClick={() => navigate('/restaurant')} 
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
          Restoranı Keşfedin
          <ArrowOutwardIcon sx={{ fontSize: { xs: '16px', sm: '20px' } }} />
        </Button>
      </Box>
    </Box>
  </Box>
  
  );
};

export default HomePageRestoran;
