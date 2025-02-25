

import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Modal, IconButton, Drawer, Card, CardMedia, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
import oda1 from "../images/oda1.jpg";
import oda2 from "../images/oda2.jpg";
import oda3 from "../images/oda3.jpg";

const RoomSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDates = [], adults = 1, children = 0 } = location.state || {};

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const rooms = [
    { id: 1, name: "Deluxe Oda", images: [oda1],title: 'Deluxe Oda', description: 'Modern konfor ve lüks bir araya geliyor.', capacity: '2 pax, 50m²', details: 'Cheminée d\'époque, ciel de lit, 1 salle de bain (baignoire + douche ; double vasque), WC séparés (lave-mains), sol : parquet en point de Hongrie. Sanitaires : pierre St Maximin et cabochons en marbres noir. Vue Château', services: 'Le petit-déjeuner signé Alain Ducasse, le Goûter royal, le mini-bar gourmand et bio, un accès au Spa Valmont, le service de majordome personnel et le service de blanchisserie standard offert sur une sélection d\'articles.', experience: 'Visite exclusive du Château de Versailles, du domaine du Trianon. Accès illimité aux jardins de l\'Orangerie, au Spa Valmont et à notre flotte de voiturettes de golf.', pets: 'Un accueil royal leur est réservé, comprenant : un lit douillet, des friandises, un menu personnalisé, des cadeaux surprises et bien plus encore.', contact: '+33(0)1 85 36 05 50 | reservation.legrandcontrole@airelles.com' },
    { id: 2, name: "Suit Oda", images: [oda2], title: 'Deluxe Oda', description: 'Modern konfor ve lüks bir araya geliyor.', capacity: '2 pax, 50m²', details: 'Cheminée d\'époque, ciel de lit, 1 salle de bain (baignoire + douche ; double vasque), WC séparés (lave-mains), sol : parquet en point de Hongrie. Sanitaires : pierre St Maximin et cabochons en marbres noir. Vue Château', services: 'Le petit-déjeuner signé Alain Ducasse, le Goûter royal, le mini-bar gourmand et bio, un accès au Spa Valmont, le service de majordome personnel et le service de blanchisserie standard offert sur une sélection d\'articles.', experience: 'Visite exclusive du Château de Versailles, du domaine du Trianon. Accès illimité aux jardins de l\'Orangerie, au Spa Valmont et à notre flotte de voiturettes de golf.', pets: 'Un accueil royal leur est réservé, comprenant : un lit douillet, des friandises, un menu personnalisé, des cadeaux surprises et bien plus encore.', contact: '+33(0)1 85 36 05 50 | reservation.legrandcontrole@airelles.com' },
    { id: 3, name: "Aile Odası", images: [oda3], title: 'Deluxe Oda', description: 'Modern konfor ve lüks bir araya geliyor.', capacity: '2 pax, 50m²', details: 'Cheminée d\'époque, ciel de lit, 1 salle de bain (baignoire + douche ; double vasque), WC séparés (lave-mains), sol : parquet en point de Hongrie. Sanitaires : pierre St Maximin et cabochons en marbres noir. Vue Château', services: 'Le petit-déjeuner signé Alain Ducasse, le Goûter royal, le mini-bar gourmand et bio, un accès au Spa Valmont, le service de majordome personnel et le service de blanchisserie standard offert sur une sélection d\'articles.', experience: 'Visite exclusive du Château de Versailles, du domaine du Trianon. Accès illimité aux jardins de l\'Orangerie, au Spa Valmont et à notre flotte de voiturettes de golf.', pets: 'Un accueil royal leur est réservé, comprenant : un lit douillet, des friandises, un menu personnalisé, des cadeaux surprises et bien plus encore.', contact: '+33(0)1 85 36 05 50 | reservation.legrandcontrole@airelles.com' },
  ];

  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
    setCurrentImageIndex(0);
    setDrawerOpen(true);
  };

  const confirmSelection = () => {
    setDrawerOpen(false);
    setConfirmationOpen(true);
    navigate('/pay', { 
      state: { 
        selectedDates, 
        adults, 
        children, 
        selectedRoom 
  }} )
  };

  return (
    <Box sx={{ backgroundColor: 'rgb(252, 250, 241)', minHeight: '150vh', maxWidth: '100vw', padding:'0% 2%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <Navbar2 />
      <Box sx={{ marginTop:'-10%', justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column' }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
          Seçtiğiniz Tarih ve Kişi Bilgisi
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "30px", fontSize: "18px", color: "#555" }}>
          {selectedDates.length > 0 ? `${selectedDates[0]} - ${selectedDates[1]}` : "Tarih seçilmedi"} | {adults} Yetişkin, {children} Çocuk
        </Typography>
      </Box>
      
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "20px", color: "#444", marginTop:'5%' }}>Oda Seçiniz</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
        {rooms.map((room) => (
          <Card key={room.id} sx={{ width: "30%", minHeight:'50%', cursor: "pointer", borderRadius: "12px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.9)" }} 
            onClick={() => handleRoomSelection(room)}>
            <CardMedia component="img" image={room.images[0]} alt={room.name} sx={{ borderRadius: "12px 12px 0 0", minHeight:'90%' }} />
            <Typography variant="body1" sx={{ padding: "15px", fontSize: "16px", textAlign: "center", backgroundColor: "rgb(35, 56, 44)", color:'white', borderRadius: "0 0 12px 12px" }}>
              Detaylı bilgiler için üzerine tıklayınız
            </Typography>
          </Card>
        ))}
      </Box>

      {/* Detaylar */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: '60vw', padding: 8, position: 'relative', backgroundColor: 'rgb(252, 250, 241)' }}>
          <IconButton onClick={() => setDrawerOpen(false)}
            sx={{ position: 'absolute', top: 10, right: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.2)' } }}>
            <CloseIcon />
          </IconButton>
          {selectedRoom && (
            <>
                <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '15px', }}>{selectedRoom.title}</Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '15px', fontStyle: 'italic' }}>{selectedRoom.description}</Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CardMedia component="img" image={selectedRoom.images[currentImageIndex]} alt={selectedRoom.name} 
                    sx={{ borderRadius: '10px', width: '80%', height: 'auto' }} />
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

                <Button variant="contained"
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
                onClick={confirmSelection}
                >Odayı Seç
                </Button>

                </>
            )}
            </Box>
        </Drawer>

        
        {/*  Modal */}
        <Modal open={confirmationOpen} onClose={() => setConfirmationOpen(false)}>
            <Box sx={{ backgroundColor: "white", padding: 4, borderRadius: 3, boxShadow: 24, textAlign: "center", width: "40vw", margin: "auto", marginTop: "15vh", border: "1px solid #ddd" }}>
            <Typography variant="h5" sx={{ color: "#333", marginBottom: "15px" }}>Onaylıyor musunuz?</Typography>
            <Typography variant="body1" sx={{ marginBottom: "20px", color: "#555" }}>
                Tarih: {selectedDates.length > 0 ? `${selectedDates[0]} - ${selectedDates[1]}` : "Tarih seçilmedi"}<br />
                Kişi Sayısı: {adults} Yetişkin, {children} Çocuk<br />
                Oda: {selectedRoom?.name}
            </Typography>
            <Button variant="contained" onClick={confirmSelection}
             sx={{ backgroundColor: "#00796b", color: "white" }}
            >Onaylıyorum
            </Button>
            </Box>
        </Modal>
    </Box>
  );
};

export default RoomSelection;
