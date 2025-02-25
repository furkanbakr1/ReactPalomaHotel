
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Divider, Box, Modal } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GiftIcon from '@mui/icons-material/CardGiftcard';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowBackIos, ArrowForwardIos, Add, Remove } from "@mui/icons-material";
import { Drawer, List, ListItem, ListItemText } from '@mui/material';



const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [currentMonth, setCurrentMonth] = useState("Şubat 2025");
  const [selectedDates, setSelectedDates] = useState([]);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const months = ["Ocak 2025", "Şubat 2025", "Mart 2025", "Nisan 2025","Mayıs 2025", "Haziran 2025", "Temmuz 2025", "Ağustos 25", "Eylül 2025", "Ekim 2025", "Kasım 2025", "Aralık 2025"];
  const weekDays = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];

  const [mobileOpen, setMobileOpen] = useState(false); // Mobil menüyü kontrol eden state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


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

    const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      const offsetPosition = aboutSection.getBoundingClientRect().top + window.scrollY - 78; // 50 piksel yukarı kaydırma
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  

  const handleScrollToRestoran = () => {
    const restoranSection = document.getElementById("restoran-section");
    if (restoranSection) {
      const offsetPosition = restoranSection.getBoundingClientRect().top + window.scrollY - 210; // Daha fazla yukarı kaydırma
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };


  const handleScrollToRooms = () => {
    const roomsSection = document.getElementById("rooms-section");
    if (roomsSection) {
      const offsetPosition = roomsSection.getBoundingClientRect().top + window.scrollY - 190; // 50 piksel yukarı kaydırma
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToSpa = () => {
    const spaSection = document.getElementById("spa-section");
    if (spaSection) {
      const offsetPosition = spaSection.getBoundingClientRect().top + window.scrollY - 450; // 50 piksel yukarı kaydırma
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToActivites = () => {
    const activitesSection = document.getElementById("activites-section");
    if (activitesSection) {
      const offsetPosition = activitesSection.getBoundingClientRect().top + window.scrollY - 80; // 50 piksel yukarı kaydırma
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
    // Menü aç/kapa fonksiyonu
    const toggleDrawer = (open) => () => {
      setMobileOpen(open);
    };

    // Menüdeki linkler
    const menuItems = [
      { name: 'Hakkımızda', link: '#about-section', scrollHandler: handleScrollToAbout },
      { name: 'Restoran & Bar', link: '#restoran-section', scrollHandler: handleScrollToRestoran },
      { name: 'Odalar & Suitler', link: '#rooms-section', scrollHandler: handleScrollToRooms },
      { name: 'Spa & Havuz', link: '#spa-section', scrollHandler: handleScrollToSpa },
      { name: 'Sağlık & Yaşam', link: '#activites-section', scrollHandler: handleScrollToActivites },
      { name: 'İletişim & Rezervasyon', link: '/contact' }
    ];
    

  return (


    <Box sx={{ marginBottom: '64px' }}>
      <AppBar 
        position="fixed" 
        sx={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: scrolled ? 'rgb(252, 250, 241)' : 'transparent',
          color: scrolled ? 'black' : 'white',
          boxShadow: scrolled ? 2 : 0,
          transition: 'background-color 0.3s ease, color 0.3s ease',
          padding: { xs: '10px', sm: '12px', md: '15px' }
        }}
      >
        <Toolbar sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexDirection: { xs: 'row', sm: 'row' } 
        }}>
          {/* SOL: Mobilde Menü Açma Butonu */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton 
              sx={{ color: scrolled ? 'black' : 'white', display: { xs: 'block', sm: 'none' } }} 
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* ORTA: Otel Adı */}
          <Typography 
            variant="h6" 
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '400',
              fontSize: { xs: '16px', sm: '20px' },
              fontFamily: '__domaine_26cc95, __domaine_Fallback_26cc95',
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer'
            }} 
            component={Link} 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Paloma
          </Typography>

          {/* SAĞ: Hediye ve Rezervasyon Butonu */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ color: scrolled ? 'black' : 'white' }}>
              <GiftIcon />
            </IconButton>
            <Button 
              variant="contained" 
              onClick={()=>setShowCalendarModal(true)}
              sx={{ 
                marginLeft: 2,
                backgroundColor: 'rgb(35, 56, 44)',
                color: 'white',
                fontSize: { xs: '12px', sm: '14px' }
              }}
            >
              Rezervasyon
            </Button>
          </Box>
        </Toolbar>

        {/* ALT ÇİZGİ */}
        <Divider sx={{ 
          backgroundColor: 'transparent', 
          borderBottom: scrolled ? '2px solid black' : '2px solid lightgrey', 
          marginLeft: '2%', 
          marginRight: '2%', 
          transition: 'border-bottom 0.3s ease' 
        }} />

        {/* BÜYÜK EKRANLARDA NORMAL LİNKLER */}
        <Box sx={{ 
            display: { xs: 'none', sm: 'flex' }, 
            justifyContent: 'center', 
            padding: 2
          }}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                component={item.link.startsWith('#') ? 'button' : Link}
                to={item.link.startsWith('#') ? undefined : item.link}
                onClick={() => {
                  if (item.scrollHandler) {
                    item.scrollHandler();
                  }
                }}
                sx={{
                  fontSize: { sm: '14px', md: '16px' },
                  color: 'inherit',
                  textTransform: 'none',
                  marginX: 2,
                  '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: 'rgb(35, 56, 44)',
                    color: 'white',
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

      </AppBar>

      {/* MOBİL MENÜ - Drawer */}
      <Drawer
              anchor="left"
              open={mobileOpen}
              onClose={toggleDrawer(false)}
              sx={{ display: { xs: 'block', sm: 'none' } }}
            >
              <Box sx={{ width: 250, backgroundColor: 'rgb(252, 250, 241)', height: '100%' }}>
                <List>
                  {menuItems.map((item, index) => (
                    <ListItem 
                      button 
                      key={index} 
                      component={item.link.startsWith('#') ? 'button' : Link}
                      to={item.link.startsWith('#') ? undefined : item.link}
                      onClick={() => {
                        setMobileOpen(false);
                        if (item.scrollHandler) {
                          item.scrollHandler();
                        }
                      }}
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

          {/* Günler  */}
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

export default Navbar;
