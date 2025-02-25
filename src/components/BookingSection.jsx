
import React, { useState } from 'react';
import { Box, Button, Typography, IconButton, Card, Modal, Divider, Select, MenuItem } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useNavigate } from 'react-router-dom';
import HotelIcon from '@mui/icons-material/Hotel';
import { ArrowBackIos, ArrowForwardIos, Add, Remove } from "@mui/icons-material";

const BookingSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [currentMonth, setCurrentMonth] = useState("Şubat 2025");
  const [selectedDates, setSelectedDates] = useState([]);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const navigate = useNavigate();
  const months = ["Ocak 2025", "Şubat 2025", "Mart 2025", "Nisan 2025", "Mayıs 2025", "Haziran 2025", "Temmuz 2025", "Ağustos 25", "Eylül 2025", "Ekim 2025", "Kasım 2025", "Aralık 2025"];
  const weekDays = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];

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

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: { xs: '8%', sm: '6%', md: '4%' }, 
        backgroundColor: 'rgb(252, 250, 241)',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: { xs: '12px 5px', sm: '16px 8px', md: '24px 10px' }, 
        boxShadow: '0px -2px 10px rgba(0,0,0,0.2)',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: 'rgb(35, 56, 44)',
          color: 'white'
        },
        flexDirection: { xs: 'column', sm: 'column', md:'row' } 
      }}
    >
           <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
        <Typography variant="h6" sx={{ marginRight: { sm: 2, xs: 0 }, fontSize: { xs: '14px', sm: '20px' } }}>
          Rezervasyon
        </Typography>
        <IconButton onClick={() => setShowCalendarModal(true)}>
          <ExpandLessIcon />
        </IconButton>
      </Box>

      <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />



      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' },  }}>
        <IconButton>
          <HotelIcon />
        </IconButton>
        <Typography variant="h6" sx={{ marginRight: { sm: 2, xs: 0 }, fontSize: { xs: '14px', sm: '20px' } }}>Hizmetler</Typography>
        <IconButton onClick={() => setModalOpen(true)}>
          <ExpandLessIcon />
        </IconButton>
      </Box>

            {/* Hizmetler Modal (Ortada Yan Yana İki Büyük Kart) */}
            <Modal open={modalOpen} onClose={() => setModalOpen(false)} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            padding: 2,
            borderRadius: 4,
            boxShadow: 0,
            width: "80vw",
            maxWidth: "1000px",
          }}
        >
          <Card
            sx={{
              flex: 1,
              height: "500px",
              position: "relative",
              backgroundImage: "url('../src/images/odalar.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              cursor: "pointer",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => navigate("/rooms")}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "15px",
              }}
            >
              <Typography variant="h5" fontWeight="bold" color="white">
                Odalar ve Suitler
              </Typography>
            </Box>
          </Card>

          <Card
            sx={{
              flex: 1,
              height: "500px",
              position: "relative",
              backgroundImage: "url('../src/images/spa-havuz.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              cursor: "pointer",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => navigate("/spa")}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "15px",
              }}
            >
              <Typography variant="h5" fontWeight="bold" color="white">
                Spa & Havuz
              </Typography>
            </Box>
          </Card>
        </Box>
      </Modal>



      {/* Takvim ve Kişi Seçimi Modal */}
      <Modal open={showCalendarModal} onClose={() => setShowCalendarModal(false)} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box 
          sx={{ 
            backgroundColor: "rgba(35,56,44,1)", 
            color: '#fff', 
            width: { xs: '90%', sm: '70%', md: '70%' }, 
            height: { xs: '60vh', sm: '50vh', md: '75vh' }, 
            zIndex: '30', 
            padding: { xs: '40px 10px', sm: '82px' }, 
            borderRadius: 3, 
            boxShadow: 24, 
            textAlign: "center" 
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 5 }}>
            <Typography variant="h5" sx={{ color: "white", fontSize: { xs: '14px', sm: '18px' } }}>
              <IconButton onClick={() => handleMonthChange("prev")}> <ArrowBackIos sx={{ color: "white" }} /> </IconButton>
              {currentMonth}
              <IconButton onClick={() => handleMonthChange("next")}> <ArrowForwardIos sx={{ color: "white" }} /> </IconButton>
            </Typography>
          </Box>

          {/* Günlerin Grid Düzeni */}
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

          {/* Kişi Sayısı Seçimi */}
          {selectedDates.length === 2 && (
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
          )}
        </Box>
      </Modal>


      
    </Box>
  );
};

export default BookingSection;



 
