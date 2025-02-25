
import React, { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import Navbar2 from '../components/Navbar2';
import BookingSection from '../components/BookingSection';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';

const categories = ['Yemeklerimiz', 'İçeceklerimiz', 'Şeflerimiz'];

const dishes = [
  { id: 1, image: '../src/images/yemek1.jpg', name: 'Trüf Mantarlı Risotto', description: 'İtalyan mutfağının eşsiz lezzeti, trüf mantarı ile harmanlanmış risotto.' },
  { id: 2, image: '../src/images/yemek2.jpg', name: 'Lobster Thermidor', description: 'Tereyağı soslu ıstakoz, Fransız mutfağının klasiklerinden.' },
  { id: 3, image: '../src/images/yemek3.jpg', name: 'Kuzu Karski', description: 'Özel baharatlarla marine edilmiş, közde pişirilmiş yumuşacık kuzu eti.' },
  { id: 4, image: '../src/images/yemek4.jpg', name: 'Somon Carpaccio', description: 'Taze somon dilimleri, narenciye sosuyla mükemmel uyumda.' }
];

const drinks = [
  { id: 1, image: '../src/images/icecek1.jpg', name: 'Şarap Tadımı', description: 'Özel seçilmiş yıllanmış şaraplarımızı keşfedin.' },
  { id: 2, image: '../src/images/icecek2.jpg', name: 'Moleküler Kokteyl', description: 'Kimyasal dokunuşlarla hazırlanmış özel kokteyller.' },
  { id: 3, image: '../src/images/icecek3.jpg', name: 'El Yapımı Kahve', description: 'Taze çekilmiş kahve çekirdekleri ile hazırlanan mükemmel lezzet.' }
];

const chefs = [
  { id: 1, image: '../src/images/chef1.jpg', name: 'Alain Ducasse', description: 'Michelin yıldızlı şefimiz Alain Ducasse, mutfak sanatında bir devrim yaratıyor.' },
  { id: 2, image: '../src/images/chef2.jpg', name: 'Gordon Ramsay', description: 'Dünyaca ünlü şefimiz Ramsay, klasik ve modern mutfağı birleştiriyor.' },
  { id: 3, image: '../src/images/chef3.jpg', name: 'Massimo Bottura', description: 'İtalyan mutfağının dehası, çağdaş yorumlarıyla fark yaratıyor.' }
];

const Restaurant = () => {
  const [selectedCategory, setSelectedCategory] = useState('Yemeklerimiz');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const currentItems = selectedCategory === 'Yemeklerimiz' ? dishes : selectedCategory === 'İçeceklerimiz' ? drinks : chefs;
  const totalItems = currentItems.length;

  const nextItem = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  const prevItem = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);

  return (

    <Box sx={{ backgroundColor: 'rgb(252, 250, 241)', minHeight: '150vh', maxWidth: '100vw', paddingBottom: '20px' }}>
  <Navbar2 />

  {/* Başlık ve Açıklama */}
  <Box sx={{ textAlign: 'center', padding: { xs: '10%', md: '5% 10%' } }}>
    <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '10px', fontSize: { xs: '2rem', md: '3rem' } }}>
      Restoran & Bar
    </Typography>
    <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, color: 'gray', maxWidth: '800px', margin: 'auto' }}>
      Alain Ducasse'ın gastronomik mükemmelliğinin, Versay Sarayı'nın tarihi ihtişamıyla harmanlandığı Grand Contrôle restoranda zamansız bir mutfak yolculuğuna çıkın. Gurme kahvaltılardan mum ışığında ziyafetlere, olağanüstü deneyimi yaşayın.
    </Typography>
  </Box>

  {/* Kategori Seçimi */}
  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: '30px', flexWrap: 'wrap' }}>
    {categories.map((category) => (
      <Button
        key={category}
        variant={selectedCategory === category ? 'contained' : 'outlined'}
        sx={{
          textTransform: 'none',
          fontSize: { xs: '0.9rem', md: '1rem' },
          padding: { xs: '6px 15px', md: '8px 20px' },
          backgroundColor: selectedCategory === category ? 'rgb(35, 56, 44)' : 'transparent',
          color: selectedCategory === category ? '#fff' : 'rgb(35, 56, 44)',
          borderColor: 'rgb(35, 56, 44)',
          '&:hover': {
            backgroundColor: 'rgb(30, 50, 40)',
            color: 'white',
          },
        }}
        onClick={() => { setSelectedCategory(category); setCurrentIndex(0); }}
      >
        {category}
      </Button>
    ))}
  </Box>

  {/* İçerik */}
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' }, padding: { xs: '0 5%', md: '0 10%' } }}>
    <IconButton onClick={prevItem} sx={{ marginRight: { xs: '5px', md: '20px' } }}>
      <ArrowBackIosIcon />
    </IconButton>

    <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
      <img
        src={currentItems[currentIndex].image}
        alt={currentItems[currentIndex].name}
        style={{
          width: '100%',
          maxWidth: { xs: '100%', md: '800px' },
          height: 'auto',
          maxHeight: { xs: '300px', md: '500px' },
          borderRadius: '15px'
        }}
      />
    </Box>

    <IconButton onClick={nextItem} sx={{ marginLeft: { xs: '5px', md: '20px' } }}>
      <ArrowForwardIosIcon />
    </IconButton>

    <Box sx={{ flex: 1, paddingLeft: { xs: '0', md: '40px' }, textAlign: { xs: 'center', md: 'left' } }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>
        {currentItems[currentIndex].name}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: 'gray' }}>
        {currentItems[currentIndex].description}
      </Typography>
    </Box>
  </Box>

  {/* İçerik Alanı 2 (Açıklamalar) */}
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', padding: { xs: '5% 5%', md: '5% 10%' }, marginTop: '50px' }}>
    {/* Sol Tarafta Sabit Başlık */}
    <Box sx={{ flex: 1, position: { md: 'sticky' }, top: '100px', alignSelf: 'flex-start', textAlign: 'left', marginBottom: { xs: '20px', md: '0' } }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px', fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
        Şafaktan Alacakaranlığa ve Ötesine
      </Typography>
    </Box>

    {/* Sağ Tarafta Açıklamalar */}
    <Box sx={{ flex: 2, textAlign: 'left' }}>
      <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: 'gray' }}>
        Güneşli restoranda bize katılın ve güne kendi hızınızda başlayın. Taze pişmiş hamur işleri, sipariş üzerine yapılan yumurtalar, waffle'lar, krepler, taze meyveler, kahve, sıcak çikolata...
      </Typography>

      {/* Açılır/Kapanır İçerik */}
      <Collapse in={expanded}>
        <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: 'gray', marginTop: '10px' }}>
          Pazar günleri, ünlü brunch'ımız arkadaşlarınızı ve ailenizi kutlama ziyafeti için bir araya getiriyor. Brioche, pain au chocolat, yeni pişmiş ekmekler, organik reçeller ve daha fazlası gelmeden önce bir kadeh şampanya tercih edin.
        </Typography>
      </Collapse>

      {/* Aç/Kapat Butonu */}
      <IconButton onClick={() => setExpanded(!expanded)} sx={{ marginTop: '10px' }}>
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
    </Box>
  </Box>

  <BookingSection />
</Box>

  );
};

export default Restaurant;

