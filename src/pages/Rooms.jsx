import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, IconButton, Drawer, Divider, CardContent, Modal,} from '@mui/material';
import Navbar2 from '../components/Navbar2';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ArrowBackIos } from '@mui/icons-material';
import { ArrowForwardIos } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BookingSection from '../components/BookingSection'
import { Add, Remove } from '@mui/icons-material';





const handleMonthChange = (direction) => {
  const currentIndex = months.indexOf(currentMonth);
  if (direction === "next" && currentIndex < months.length - 1) {
    setCurrentMonth(months[currentIndex + 1]);
  } else if (direction === "prev" && currentIndex > 0) {
    setCurrentMonth(months[currentIndex - 1]);
  }
};

const handleDateSelection = (date) => {
  if (selectedDates.length === 2) {
    setSelectedDates([date]);
  } else {
    setSelectedDates([...selectedDates, date].sort());
  }
};

const handleConfirm = () => {
  navigate('/roomSelection', {
    state: { selectedDates, adults, children }
  });
};


const roomData = [
    { id: 1, images: ['../public/images/oda1.jpg', '../src/images/oda1-2.jpg'], title: 'Deluxe Oda', description: 'Modern konfor ve lüks bir araya geliyor.', capacity: '2 pax, 50m²', details: 'Cheminée d\'époque, ciel de lit, 1 salle de bain (baignoire + douche ; double vasque), WC séparés (lave-mains), sol : parquet en point de Hongrie. Sanitaires : pierre St Maximin et cabochons en marbres noir. Vue Château', services: 'Le petit-déjeuner signé Alain Ducasse, le Goûter royal, le mini-bar gourmand et bio, un accès au Spa Valmont, le service de majordome personnel et le service de blanchisserie standard offert sur une sélection d\'articles.', experience: 'Visite exclusive du Château de Versailles, du domaine du Trianon. Accès illimité aux jardins de l\'Orangerie, au Spa Valmont et à notre flotte de voiturettes de golf.', pets: 'Un accueil royal leur est réservé, comprenant : un lit douillet, des friandises, un menu personnalisé, des cadeaux surprises et bien plus encore.', contact: '+33(0)1 85 36 05 50 | reservation.legrandcontrole@airelles.com' },
    { id: 2, images: ['../src/images/oda2.jpg', '../src/images/oda2-2.jpg'], title: 'King Süit', description: 'Benzersiz konfor ve eşsiz manzaralar sunan geniş bir süit.', capacity: '4 pax, 80m²', details: 'Geniş oturma alanı, özel balkon, 2 adet çift kişilik yatak, 2 banyo (banyo + duş), ahşap zemin, klasik dekorasyon.', services: 'Ücretsiz kahvaltı, minibar, özel banyo ürünleri, kişisel hizmet, oda servisi.', experience: 'Özel terasta kahvaltı, otel içi spa kullanımı, kişisel asistan hizmeti.', pets: 'Evcil hayvanlar kabul edilir, özel yemek menüsü ve yatak sağlanır.', contact: '+33(0)1 85 36 05 51 | reservation.king@airelles.com' },
    { id: 3, images: ['../src/images/oda3.jpg', '../src/images/oda3-2.jpg'], title: 'Aile Odası', description: 'Aileler için özel tasarlanmış geniş ve konforlu bir alan.', capacity: '3 pax, 60m²', details: '2 yatak odası, 1 banyo (banyo + duş), çocuk dostu mobilyalar, geniş oturma alanı.', services: 'Çocuklara özel aktiviteler, ücretsiz kahvaltı, minibar.', experience: 'Özel çocuk oyun alanı, aile rehberli turlar.', pets: 'Evcil hayvan dostu, ekstra hizmetler mevcut.', contact: '+33(0)1 85 36 05 52 | reservation.family@airelles.com' },
    { id: 4, images: ['../src/images/oda4.jpg', '../src/images/oda4-2.jpg'], title: 'Standart Oda', capacity: '2 Kişilik', beds: '2 Tek Kişilik Yatak', details: 'Cheminée d\'époque, ciel de lit, 1 salle de bain (baignoire + douche ; double vasque), WC séparés (lave-mains), sol : parquet en point de Hongrie. Sanitaires : pierre St Maximin et cabochons en marbres noir. Vue Château', services: 'Le petit-déjeuner signé Alain Ducasse, le Goûter royal, le mini-bar gourmand et bio, un accès au Spa Valmont, le service de majordome personnel et le service de blanchisserie standard offert sur une sélection d\'articles.', experience: 'Visite exclusive du Château de Versailles, du domaine du Trianon. Accès illimité aux jardins de l\'Orangerie, au Spa Valmont et à notre flotte de voiturettes de golf.', pets: 'Un accueil royal leur est réservé, comprenant : un lit douillet, des friandises, un menu personnalisé, des cadeaux surprises et bien plus encore.', contact: '+33(0)1 85 36 05 50 | reservation.legrandcontrole@airelles.com' },
    { id: 5, images: ['../src/images/oda5.jpg', '../src/images/oda5-2.jpg'], title: 'Junior Süit', capacity: '2 Kişilik', beds: '1 Büyük Yatak', details: 'Cheminée d\'époque, ciel de lit, 1 salle de bain (baignoire + douche ; double vasque), WC séparés (lave-mains), sol : parquet en point de Hongrie. Sanitaires : pierre St Maximin et cabochons en marbres noir. Vue Château', services: 'Le petit-déjeuner signé Alain Ducasse, le Goûter royal, le mini-bar gourmand et bio, un accès au Spa Valmont, le service de majordome personnel et le service de blanchisserie standard offert sur une sélection d\'articles.', experience: 'Visite exclusive du Château de Versailles, du domaine du Trianon. Accès illimité aux jardins de l\'Orangerie, au Spa Valmont et à notre flotte de voiturettes de golf.', pets: 'Un accueil royal leur est réservé, comprenant : un lit douillet, des friandises, un menu personnalisé, des cadeaux surprises et bien plus encore.', contact: '+33(0)1 85 36 05 50 | reservation.legrandcontrole@airelles.com' },
    { id: 6, images: ['../src/images/oda6.jpg', '../src/images/oda6-2.jpg'], title: 'Luxury Süit', capacity: '4 Kişilik', beds: '2 Büyük Yatak', details: 'Cheminée d\'époque, ciel de lit, 1 salle de bain (baignoire + douche ; double vasque), WC séparés (lave-mains), sol : parquet en point de Hongrie. Sanitaires : pierre St Maximin et cabochons en marbres noir. Vue Château', services: 'Le petit-déjeuner signé Alain Ducasse, le Goûter royal, le mini-bar gourmand et bio, un accès au Spa Valmont, le service de majordome personnel et le service de blanchisserie standard offert sur une sélection d\'articles.', experience: 'Visite exclusive du Château de Versailles, du domaine du Trianon. Accès illimité aux jardins de l\'Orangerie, au Spa Valmont et à notre flotte de voiturettes de golf.', pets: 'Un accueil royal leur est réservé, comprenant : un lit douillet, des friandises, un menu personnalisé, des cadeaux surprises et bien plus encore.', contact: '+33(0)1 85 36 05 50 | reservation.legrandcontrole@airelles.com' },
    { id: 7, images: ['../src/images/oda7.jpg', '../src/images/oda7-2.jpg'], title: 'Panoramik Oda', capacity: '2 Kişilik', beds: '1 King Yatak', details: 'Cheminée d\'époque, ciel de lit, 1 salle de bain (baignoire + douche ; double vasque), WC séparés (lave-mains), sol : parquet en point de Hongrie. Sanitaires : pierre St Maximin et cabochons en marbres noir. Vue Château', services: 'Le petit-déjeuner signé Alain Ducasse, le Goûter royal, le mini-bar gourmand et bio, un accès au Spa Valmont, le service de majordome personnel et le service de blanchisserie standard offert sur une sélection d\'articles.', experience: 'Visite exclusive du Château de Versailles, du domaine du Trianon. Accès illimité aux jardins de l\'Orangerie, au Spa Valmont et à notre flotte de voiturettes de golf.', pets: 'Un accueil royal leur est réservé, comprenant : un lit douillet, des friandises, un menu personnalisé, des cadeaux surprises et bien plus encore.', contact: '+33(0)1 85 36 05 50 | reservation.legrandcontrole@airelles.com' },
    { id: 8, images: ['../src/images/oda8.jpg', '../src/images/oda8-2.jpg'], title: 'Çatı Katı Odası', capacity: '2 Kişilik', beds: '1 Çift Kişilik Yatak', details: 'Cheminée d\'époque, ciel de lit, 1 salle de bain (baignoire + douche ; double vasque), WC séparés (lave-mains), sol : parquet en point de Hongrie. Sanitaires : pierre St Maximin et cabochons en marbres noir. Vue Château', services: 'Le petit-déjeuner signé Alain Ducasse, le Goûter royal, le mini-bar gourmand et bio, un accès au Spa Valmont, le service de majordome personnel et le service de blanchisserie standard offert sur une sélection d\'articles.', experience: 'Visite exclusive du Château de Versailles, du domaine du Trianon. Accès illimité aux jardins de l\'Orangerie, au Spa Valmont et à notre flotte de voiturettes de golf.', pets: 'Un accueil royal leur est réservé, comprenant : un lit douillet, des friandises, un menu personnalisé, des cadeaux surprises et bien plus encore.', contact: '+33(0)1 85 36 05 50 | reservation.legrandcontrole@airelles.com' },
    { id: 9, images: ['../src/images/oda9.jpg', '../src/images/oda9-2.jpg'], title: 'Bungalov Oda', capacity: '3 Kişilik', beds: '1 Büyük Yatak + 1 Tek Kişilik', details: 'Cheminée d\'époque, ciel de lit, 1 salle de bain (baignoire + douche ; double vasque), WC séparés (lave-mains), sol : parquet en point de Hongrie. Sanitaires : pierre St Maximin et cabochons en marbres noir. Vue Château', services: 'Le petit-déjeuner signé Alain Ducasse, le Goûter royal, le mini-bar gourmand et bio, un accès au Spa Valmont, le service de majordome personnel et le service de blanchisserie standard offert sur une sélection d\'articles.', experience: 'Visite exclusive du Château de Versailles, du domaine du Trianon. Accès illimité aux jardins de l\'Orangerie, au Spa Valmont et à notre flotte de voiturettes de golf.', pets: 'Un accueil royal leur est réservé, comprenant : un lit douillet, des friandises, un menu personnalisé, des cadeaux surprises et bien plus encore.', contact: '+33(0)1 85 36 05 50 | reservation.legrandcontrole@airelles.com' },
  ];

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [currentMonth, setCurrentMonth] = useState("Şubat 2025");
  const [selectedDates, setSelectedDates] = useState([]);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const months = ["Ocak 2025", "Şubat 2025", "Mart 2025", "Nisan 2025","Mayıs 2025", "Haziran 2025", "Temmuz 2025", "Ağustos 25", "Eylül 2025", "Ekim 2025", "Kasım 2025", "Aralık 2025"];
  const weekDays = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];
  const navigate = useNavigate();

  const openDrawer = (room) => {
    setSelectedRoom(room);
    setCurrentImageIndex(0);
    setDrawerOpen(true);
  };

  const changeImage = (direction) => {
    setCurrentImageIndex((prevIndex) => {
      const totalImages = selectedRoom.images.length;
      return direction === 'next' ? (prevIndex + 1) % totalImages : (prevIndex - 1 + totalImages) % totalImages;
    });
  };

  return (
    <Box sx={{ backgroundColor: 'rgb(252, 250, 241)', minHeight: '100vh', maxWidth: '100vw', paddingBottom: '20px' }}>
      <Navbar2 />
      <Box sx={{ textAlign: 'center', padding: '8% 20px', paddingBottom:'1px' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Odalar ve Suitler
        </Typography>
        <Typography variant='body2'sx={{  marginBottom: '10px',fontStyle: 'italic' }} >
         ayrıntıları için üstüne tıklayınız!
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center" sx={{ padding: '10px 10%', backgroundColor:'rgb(252, 250, 241)', boxShadow:'none' }}>
        {roomData.map((room) => (
          <Grid item xs={12} sm={6} md={4} key={room.id}>
            <Card 
              sx={{ 
                position: 'relative', 
                borderRadius: '15px', 
                backgroundColor: 'rgb(252, 250, 241)', 
                overflow: 'hidden', 
                width: '90%', 
                cursor: 'pointer',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.05)' }
              }}
              onClick={() => openDrawer(room)}
            >
              <CardMedia
                component="img"
                image={room.images[0]}
                alt={room.title}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
                <CardContent sx={{ textAlign: 'center', padding: '10px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{room.title}</Typography>
                <Typography variant="body2" sx={{ color: 'gray', marginTop: '5px' }}>{room.capacity}</Typography>
                </CardContent>

            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)} sx={{ width: '60%' }}>
        {selectedRoom && (
          <Box sx={{ width: '60vw', padding: 3, position: 'relative', backgroundColor: 'rgb(252, 250, 241)' }}>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{
                position: 'absolute',
                top: 10,
                right: 10,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.2)' }
              }}
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '50px', }}>{selectedRoom.title}</Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '15px', fontStyle: 'italic' }}>{selectedRoom.description}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              
              <IconButton onClick={() => changeImage('prev')}>
                <ArrowBackIosIcon />
              </IconButton>

              <CardMedia
                component="img"
                image={selectedRoom.images[currentImageIndex]}
                alt={selectedRoom.title}
                sx={{ borderRadius: '10px', width: '80%', height: 'auto' }}
              />
              
              <IconButton onClick={() => changeImage('next')}>
                <ArrowForwardIosIcon />
              </IconButton>

            </Box>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="body1"><strong>Informations pratiques</strong></Typography>
            <Typography variant="body2">{selectedRoom.capacity}</Typography>
            <Divider sx={{ marginY: 1 }} />
            <Typography variant="body1"><strong>Détails de la Chambre</strong></Typography>
            <Typography variant="body2">{selectedRoom.details}</Typography>
            <Divider sx={{ marginY: 1 }} />
            <Typography variant="body1"><strong>Services inclus</strong></Typography>
            <Typography variant="body2">{selectedRoom.services}</Typography>
            <Divider sx={{ marginY: 1 }} />
            <Typography variant="body1"><strong>Expérience exclusive</strong></Typography>
            <Typography variant="body2">{selectedRoom.experience}</Typography>
            <Divider sx={{ marginY: 1 }} />
            <Typography variant="body1"><strong>Accueil des animaux</strong></Typography>
            <Typography variant="body2">{selectedRoom.pets}</Typography>
            <Divider sx={{ marginY: 1 }} />
            <Typography variant="body1"><strong>Contact</strong></Typography>
            <Typography variant="body2">{selectedRoom.contact}</Typography>
            <Button
                variant="contained"
                sx={{
                    marginTop: 2,
                    backgroundColor: 'rgb(35, 56, 44)',
                    color: 'white',
                    padding: '10px 50px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    display: 'block',
                    width: '100%',
                    
                    '&:hover': { backgroundColor: 'rgb(28, 46, 36)' }
                }}
                onClick={()=>setShowCalendarModal(true)}
                >
                Rezervasyon Yap
                </Button>


          </Box>
        )}
      </Drawer>


      <BookingSection/>



      
      <Modal open={showCalendarModal} onClose={() => setShowCalendarModal(false)} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box 
          sx={{ 
            backgroundColor: "rgba(35,56,44,1)", 
            color: '#fff', 
            width: { xs: '90%', sm: '75%', md: '60%' }, 
            height: { xs: '70vh', sm: '60vh', md: '75vh' }, 
            zIndex: '30', 
            padding: { xs: '30px 10px', sm: '40px 20px', md: '50px' }, 
            borderRadius: 3, 
            boxShadow: 24, 
            textAlign: "center"
          }}
        >
          {/* Ay Seçimi */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 5 }}>
            <Typography variant="h5" sx={{ color: "white", fontSize: { xs: '14px', sm: '18px' } }}>
              <IconButton onClick={() => handleMonthChange("prev")}> <ArrowBackIos sx={{ color: "white" }} /> </IconButton>
              {currentMonth}
              <IconButton onClick={() => handleMonthChange("next")}> <ArrowForwardIos sx={{ color: "white" }} /> </IconButton>
            </Typography>
          </Box>

          {/* Günler Grid */}
          <Box 
            sx={{ 
              display: "grid", 
              gridTemplateColumns: { xs: "repeat(7, minmax(30px, 1fr))", sm: "repeat(7, 1fr)" }, 
              gap: 0.5, 
              color: "white", 
              padding: "5px" 
            }}
          >
            {weekDays.map((day) => (
              <Typography 
                key={day} 
                variant="body1" 
                sx={{ fontWeight: "bold", fontSize: { xs: '10px', sm: '14px' }, textAlign: "center" }}
              >
                {day}
              </Typography>
            ))}

            {[...Array(30).keys()].map((n) => (
              <Button 
                key={n} 
                onClick={() => handleDateSelection(n + 1)} 
                sx={{ 
                  color: "white", 
                  fontSize: { xs: '10px', sm: '14px' }, 
                  minWidth: "30px", 
                  padding: { xs: "4px", sm: "6px" }, 
                  textAlign: "center"
                }}
              >
                {n + 1}
              </Button>
            ))}
          </Box>

          {/* Yetişkin ve Çocuk Sayısı Seçimi */}
          <Box sx={{ padding: 3, borderRadius: 3, marginTop: 3, color: "white" }}>
            <Typography variant="h6" sx={{ fontSize: { xs: "14px", sm: "18px" } }}>Yetişkin Sayısı</Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, marginBottom: 2 }}>
              <IconButton onClick={() => setAdults(Math.max(1, adults - 1))}><Remove sx={{ color: "white" }} /></IconButton>
              <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>{adults}</Typography>
              <IconButton onClick={() => setAdults(adults + 1)}><Add sx={{ color: "white" }} /></IconButton>
            </Box>

            <Typography variant="h6" sx={{ fontSize: { xs: "14px", sm: "18px" } }}>Çocuk Sayısı</Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
              <IconButton onClick={() => setChildren(Math.max(0, children - 1))}><Remove sx={{ color: "white" }} /></IconButton>
              <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>{children}</Typography>
              <IconButton onClick={() => setChildren(children + 1)}><Add sx={{ color: "white" }} /></IconButton>
            </Box>

            <Button variant="contained" sx={{ marginTop: 2, fontSize: { xs: "12px", sm: "16px" } }} onClick={handleConfirm}>
              Onayla
            </Button>
          </Box>
        </Box>
      </Modal>



    </Box>
  );
};

export default Rooms;
