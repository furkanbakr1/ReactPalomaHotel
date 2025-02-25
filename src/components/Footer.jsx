import React from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
  return (
    <Box sx={{ 
      backgroundColor: 'rgb(35, 56, 44)', 
      color: 'white', 
      padding: '40px 20px', 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' }, 
      justifyContent: 'space-between',
      alignItems: { xs: 'center', md: 'flex-start' },
      textAlign: { xs: 'center', md: 'left' },
      flexWrap: 'wrap',
      zIndex:'0'
    }}>
      {/* Sol Kısım - Hakkımda */}
      <Box sx={{ flex: 1, minWidth: '300px', padding: '20px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>Otel Projesi</Typography>
        <Typography variant="body1">Furkan Bakır | Frontend Developer</Typography>
        <Typography variant="body1" sx={{ marginTop: '10px' }}>Ege Üniversitesi Bilgisayar Programcılığı Mezunu</Typography>
        <Typography variant="body1" sx={{ marginTop: '10px' }}>Bu proje, örnek bir fronted projedir.</Typography>
        <Typography variant="body2" sx={{ marginTop: '20px', fontStyle: 'italic' }}>@ Kullanım hakları Paloma Otele aittir.</Typography>
      </Box>


      {/* Orta Kısım - İletişim */}
      <Box sx={{ flex: 1, minWidth: '300px', padding: '20px', marginTop: { xs: '30px', md: '0px' } }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>İletişim</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <IconButton href="https://www.instagram.com/furkan.bak1r/" target="_blank" sx={{ color: 'white' }}>
            <InstagramIcon />
          </IconButton>
          <Typography variant="body1"><a style={{textDecoration:'none',color:'white'}} href="https://www.instagram.com/furkan.bak1r/">Instagram</a></Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
          <IconButton href="https://www.linkedin.com/in/furkanbakr1/" target="_blank" sx={{ color: 'white' }}>
            <LinkedInIcon />
          </IconButton>
          <Typography variant="body1"><a style={{textDecoration:'none',color:'white'}} href="https://www.linkedin.com/in/furkanbakr1/">Linkedin</a></Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
          <IconButton href="https://github.com/furkanbakr1" target="_blank" sx={{ color: 'white' }}>
            <GitHubIcon />
          </IconButton>
          <Typography   variant="body1"> <a style={{textDecoration:'none',color:'white'}} href="https://github.com">GitHub</a></Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
          <IconButton  sx={{ color: 'white' }}>
            <EmailIcon />
          </IconButton>
          <Typography   variant="body1">furkanbakr1@gmail.com</Typography>
        </Box>
      </Box>



      {/* Sağ Kısım - Önerileriniz İçin */}
      <Box sx={{ flex: 1, minWidth: '300px', padding: '20px', marginTop: { xs: '30px', md: '0px' }  , marginBottom:'55px'}}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>Önerileriniz İçin</Typography>
        <TextField 
          fullWidth 
          label="Email Adresiniz" 
          variant="outlined" 
          sx={{ backgroundColor: 'white', borderRadius: '5px', marginBottom: '10px' }}
        />
        <TextField 
          fullWidth 
          label="Mesajınız" 
          variant="outlined" 
          multiline 
          rows={3} 
          sx={{ backgroundColor: 'white', borderRadius: '5px', marginBottom: '10px' }}
        />
        <Button variant="contained" sx={{ backgroundColor: 'white', color: 'rgb(35, 56, 44)', fontWeight: 'bold' }}>
          Gönder
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
