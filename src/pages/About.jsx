
import React from 'react';
import Navbar from '../components/Navbar';
import { Box, IconButton, Typography, Divider } from '@mui/material';
import aboutImage from '../images/about.jpg'; 

const About = () => {
  return (
    <Box 
  id="about-section" 
  sx={{ 
    backgroundColor: 'rgb(252, 250, 241)', 
    minHeight: '120vh', 
    width: '100vw',
    padding: { xs: '30px 10px', sm: '40px 20px', md: '5% 5%' }, 
    marginBottom:'7%'
  }}
>
  {/* Hakkımızda İçeriği */}
  <Box 
    sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' }, 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100%', 
      gap: { xs: '20px', md: '50px' }, 
      textAlign: { xs: 'center', md: 'left' } 
    }}
  >

    {/* Sol: Hakkımızda Metni */}
    <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, padding: { xs: '10px', sm: '20px', md: '20px' } }}>
      <Typography 
        variant="h3" 
        sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '400',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, 
          fontFamily: '__domaine_26cc95, __domaine_Fallback_26cc95',
          color: 'rgb(24, 23, 23)', 
          mb: 2 
        }}
      >
        Hakkımızda
      </Typography>

      {/* Paragraflar */}
      {[
        {
          icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Hotel.png",
          text: "Paloma Otel olarak konfor ve lüksü bir araya getiriyoruz. Mükemmel hizmet kalitemiz ve benzersiz deneyimlerimizle misafirlerimize unutulmaz bir konaklama sunuyoruz. Tatiliniz veya iş seyahatiniz boyunca en iyi konforu yaşayın!"
        },
        {
          icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Luggage.png",
          text: "Avec sa collection de Maisons d’exception et ses destinations iconiques, Airelles vous invite à découvrir l’émotion du voyage, sans cesse réinventée. Ici, l’attention et la générosité sont au cœur de nos valeurs."
        },
        {
          icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Mantelpiece%20Clock.png",
          text: "Depuis les sommets des Alpes au Château de Versailles, du soleil de Saint-Tropez aux jardins suspendus de Gordes, Airelles révèle l’extraordinaire de chacune de ses destinations."
        },
        {
          icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Umbrella%20on%20Ground.png",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium nam aliquam, eum omnis vel praesentium nulla repellat doloremque dolores earum, quia quibusdam nisi voluptates iusto corrupti amet debitis rerum."
        }
      ].map((item, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <img 
            src={item.icon} 
            alt="Icon" 
            width="40" 
            height="40" 
            style={{ marginRight: { xs: '0', sm: '10px' }, marginBottom: { xs: '10px', sm: '0' } }} 
          />
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1rem', sm: '1.2rem' }, 
              color: 'rgb(50, 50, 50)', 
              maxWidth: '600px' 
            }}
          >
            {item.text}
          </Typography>
        </Box>
      ))}

    </Box>

    {/* Sağ: Resim */}
    <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img 
        src={aboutImage} 
        alt="Hakkımızda" 
        style={{ 
          width: '75%',
          maxWidth: { xs: '90%', sm: '600px', md: '300px' },  
          aspectRatio: '3/2', 
          borderRadius: '12px',
          objectFit: 'cover'  
        }}  
      />
    </Box>
  </Box>
</Box>

        
   

  );
};

export default About;




