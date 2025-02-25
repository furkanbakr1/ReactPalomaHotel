import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import activitesImage from '../images/etkinlik.jpg';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from 'react-router-dom';

const HomePageActivites = () => {
  const navigate = useNavigate();

  return (
    <Box 
      id="activites-section" 
      sx={{ 
        backgroundColor: 'rgb(252, 250, 241)', 
        minHeight: '100vh', 
        width: '100vw',  
        padding: { xs: '40px 20px', sm: '50px 40px', md: '8% 5%'},
        marginTop:'-35%'
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          flexDirection: { xs: 'column', md: 'row-reverse' }, 
          gap: { xs: '30px', md: '5%' }, 
          marginTop: { xs: '0%', md: '-5%' } 
        }}
      >
        
        {/* Sağ tarafta büyük resim */}
        <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
          <img 
            loading="lazy"
            src={activitesImage} 
            alt="Eğlenceli Etkinlikler"
            style={{ 
              width: '100%', 
              maxWidth: '1000px',  
              height: 'auto', 
              borderRadius: '12px', 
              objectFit: 'cover' ,
              paddingRight:'5%'
            }}
          />
        </Box>
        
        {/* Sol tarafta başlık ve açıklama metni */}
        <Box 
          sx={{ 
            flex: 1, 
            textAlign: { xs: 'center', md: 'left' }, 
            padding: { xs: '20px', sm: '30px', md: '5% 0' }
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
            Eğlenceli Etkinlikleri Keşfedin
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
            Saygın anları kutlamak için ikonik bir mekan mı arıyorsunuz? İster samimi ister büyük ölçekli olsun, 
            kutlamalarınıza ev sahipliği yapmak için sembolik bir Evin özelleştirilmesiyle kendinize en üst düzey lüksü sunun. 
            Airelles Château de Versailles size kapılarını açıyor ve konuklarınızı tam bir mahremiyet içinde ağırlamanız için 
            pastoral bir ara için Grand Contrôle'un anahtarlarını veriyor.
          </Typography>

          <Button 
            onClick={() => navigate('/activities')}
            variant='outlined' 
            sx={{ 
              borderColor: 'rgb(35, 56, 44)',
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
            Özel Etkinlikleri Keşfedin
            <ArrowOutwardIcon sx={{ fontSize: { xs: '16px', sm: '20px' } }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePageActivites;
