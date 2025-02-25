import React, { useState } from 'react'; // useState import edilmeli
import { AppBar, Toolbar, Typography, IconButton, Button, Divider, Box, Drawer, List, ListItem, ListItemText , Modal} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GiftIcon from '@mui/icons-material/CardGiftcard';
import { Link , useNavigate} from 'react-router-dom';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'; // ArrowBackIos import edilmeli
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'; // ArrowForwardIos import edilmeli
import Add from '@mui/icons-material/Add'; // Add import edilmeli
import Remove from '@mui/icons-material/Remove'; // Remove import edilmeli


const Navbar2 = () => {

  const navigate = useNavigate();
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [currentMonth, setCurrentMonth] = useState("Şubat 2025");
  const [selectedDates, setSelectedDates] = useState([]);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const months = ["Ocak 2025", "Şubat 2025", "Mart 2025", "Nisan 2025","Mayıs 2025", "Haziran 2025", "Temmuz 2025", "Ağustos 25", "Eylül 2025", "Ekim 2025", "Kasım 2025", "Aralık 2025"];
  const weekDays = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];
  const [mobileOpen, setMobileOpen] = useState(false);

  // Menü Aç/Kapat Fonksiyonu
  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  const menuItems = [
    { name: 'Hakkımızda', link: '/' },
    { name: 'Odalar & Suitler', link: '/rooms' },
    { name: 'Restoran & Bar', link: '/restaurant' },
    { name: 'Spa & Havuz', link: '/spa' },
    { name: 'Sağlık & Yaşam', link: '/activities' },
    { name: 'İletişim & Rezervasyon', link: '/contact' }
  ];




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
    <Box sx={{ marginBottom: '64px' }}>
      <AppBar 
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: 'rgb(252, 250, 241)',
          color: 'black',
          boxShadow: 0,
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Sol: Menü Ikonu - Mobil İçin */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ color: 'black', display: { xs: 'block', sm: 'none' } }} aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ marginLeft: 1, display: { xs: 'block', sm: 'none' } }}>Menü</Typography>
          </Box>

          {/* Orta: Otel Adı */}
          <Typography
            variant="h6"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '400',
              fontFamily: '__domaine_26cc95, __domaine_Fallback_26cc95',
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
            }}
            component={Link}
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Paloma
          </Typography>

          {/* Sağ: Hediye ve Rezervasyon Butonu */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ color: 'black' }}>
              <GiftIcon />
            </IconButton>

            <Button 
             onClick={()=>setShowCalendarModal(true)}
              variant="contained" 
              sx={{ marginLeft: 2, backgroundColor: 'rgb(35, 56, 44)', color: 'white' }}
            >
              Rezervasyon
            </Button>
          </Box>
        </Toolbar>

        {/* Alt Çizgi */}
        <Divider
          sx={{
            backgroundColor: 'transparent',
            borderBottom: '2px solid black',
            marginLeft: '2%',
            marginRight: '2%',
            transition: 'border-bottom 0.3s ease',
          }}
        />

        {/* Büyük Ekranlar İçin Linkler */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'center',
            padding: 2,
          }}
        >
          {menuItems.map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={item.link}
              sx={{
                fontSize: 'medium',
                color: 'inherit',
                textTransform: 'none',
                marginX: 2,
                '&:hover': {
                  cursor: 'pointer',
                  backgroundColor: 'rgb(35, 56, 44)',
                  color: 'white',
                },
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </AppBar>

      {/* Mobil İçin Drawer (Yan Menü) */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, backgroundColor: 'rgb(252, 250, 241)', height: '100%' }}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem 
                
                key={index} 
                component={Link}
                to={item.link}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>



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

export default Navbar2;
