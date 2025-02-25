
import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Typography, Button, Divider } from '@mui/material';
import restoranImage from '../images/oda3.jpg';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from 'react-router-dom';

const HomePageRooms = () => {

  const navigate = useNavigate();

  return (
<Box 
  id="rooms-section" 
  sx={{ 
    backgroundColor: 'rgb(252, 250, 241)', 
    minHeight: '120vh', 
    width: '100vw',  
    marginTop:'-20%',
    
    padding: { xs: '40px 20px', sm: '50px 40px', md: '0% 10%' } 
  }}
>
  <Box 
    sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: { xs: 'column', md: 'row-reverse' }, 
      gap: { xs: '30px', md: '0%' }, 
    }}
  >
    
    {/* Sağ tarafta büyük resim */}
    <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
      <img 
        loading="lazy"
        src={restoranImage} 
        alt="Odalar ve Suitler"
        style={{ 
          width:'1000px',
          maxWidth: { xs: '90%', sm: '600px', md: '1000px' }, 
          height: '600px', 
          borderRadius: '12px', 
          objectFit: 'cover', 
          
        }}
      />
    </Box>
    
    {/* Sol tarafta başlık ve açıklama metni */}
    <Box 
      sx={{ 
        flex: 1, 
        textAlign: { xs: 'center', md: 'left' }, 
        padding: { xs: '20px', sm: '30px', md: '0px' },
        marginLeft:"-4%"
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
        Odalar ve Suitleri Keşfedin
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
        Orijinal ruhuna en büyük saygı gösterilerek restore edilen Le Grand Contrôle, 
        zarafeti ve 18. yüzyılın özgünlüğünü muhteşem bir şekilde bir araya getiriyor. 
        Özenle seçilmiş dönem mobilyaları ve kumaşları, 13 oda ve süitimizin modern konforuyla uyum içinde harmanlanıyor.
      </Typography>

      <Button 
        onClick={() => navigate('/rooms')}
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
        Odalar ve Suitleri Keşfedin
        <ArrowOutwardIcon sx={{ fontSize: { xs: '16px', sm: '20px' } }} />
      </Button>
    </Box>
  </Box>
</Box>


  );
};

export default HomePageRooms;
