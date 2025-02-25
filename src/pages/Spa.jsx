import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2'
import BookingSection from '../components/BookingSection'
import { Box, Typography } from '@mui/material';
import spaImage1 from '../images/spa1.jpg';
import spaImage2 from '../images/spa2.jpg';
import spaImage3 from '../images/spa3.jpg';
import spaImage4 from '../images/spa4.jpg';
import spaImage5 from '../images/spa3.jpg';

const SpaHavuzPage = () => {
  return (
    <Box sx={{ backgroundColor: 'rgb(252, 250, 241)', minHeight: '325vh', maxWidth: '100vw', textAlign: 'center', padding: '10% 2%' }}>

        <Navbar2/>

      {/* Sayfa Başlığı */}
      <Typography variant="h3" sx={{ display:'flex',alignItems:'center',justifyContent:'center',fontSize: '40px', fontWeight: 'bold', marginBottom: '20px' }}>
        Valmont'un Airelles Spa'sı
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', marginBottom: '50px' }}>
        Paris'e çok yakın olan Airelles Spa, Versay'ın kalbinde size kraliyet sağlık deneyimi vadediyor. Enerjinizi yeniden kazanmak için ayrıcalıklı bir ortamda lüks, özel bakım ve ritüellerin tadını çıkarın.
      </Typography>
      
      {/* Bölüm 1 - Sol Yazı, Sağ Resim */}
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: '30px', marginBottom: '50px' }}>
        <Box sx={{ flex: 1, textAlign: 'left' }}>
          <Typography variant="h4" sx={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '15px' }}>
            Duyusal bir yolculuk yaşayın
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '18px' }}>
            Airelles Spa by Valmont'un kapılarından içeri girerek kendinizi huzur dolu bir limana bırakın. Yumuşak ışıklandırmalı, heykeller ve elle çizilmiş fresklerle süslenmiş, dingin mekanlar sizi karşılıyor. Muhteşem 15 metre uzunluğundaki yüzme havuzunun kenarında, zümrüt rengindeki koltuklarda dinlenin. Carrara mermer dama tahtası zemini sizi, görkemli Versay Sarayı'na saygı duruşunda bulunularak doğrudan Sarayın Mermer Avlusu'ndan esinlenen lüks saunamıza ve hamamımıza götürür.
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <img src={spaImage1} alt="Spa" style={{ width: '90%', borderRadius: '5px' }} />
        </Box>
      </Box>

      {/* Bölüm 2 - Sağ Yazı, Sol Resim */}
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column-reverse', md: 'row' }, gap: '30px', marginBottom: '50px' }}>
        <Box sx={{ flex: 1 }}>
          <img src={spaImage2} alt="Spa" style={{ width: '100%', borderRadius: '5px' }} />
        </Box>
        <Box sx={{ flex: 1, textAlign: 'left' }}>
          <Typography variant="h4" sx={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '15px' }}>
            Lüks Spa ve Hamam Deneyimi
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '18px' }}>
            Versay'daki Airelles Spa'da, hem geleneksel hem de modern spa ritüelleriyle kendinizi ödüllendirin. Hamamın sıcak taşları üzerinde gevşeyin ve suyun rahatlatıcı etkisiyle huzurun tadını çıkarın.
          </Typography>
        </Box>
      </Box>

       
      {/* Bölüm 3 - Sol Yazı, Sağ Resim */}
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: '30px', marginBottom: '50px' }}>
        <Box sx={{ flex: 1, textAlign: 'left' }}>
          <Typography variant="h4" sx={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '15px' }}>
            Duyusal bir yolculuk yaşayın
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '18px' }}>
            Airelles Spa by Valmont'un kapılarından içeri girerek kendinizi huzur dolu bir limana bırakın. Yumuşak ışıklandırmalı, heykeller ve elle çizilmiş fresklerle süslenmiş, dingin mekanlar sizi karşılıyor. Muhteşem 15 metre uzunluğundaki yüzme havuzunun kenarında, zümrüt rengindeki koltuklarda dinlenin. Carrara mermer dama tahtası zemini sizi, görkemli Versay Sarayı'na saygı duruşunda bulunularak doğrudan Sarayın Mermer Avlusu'ndan esinlenen lüks saunamıza ve hamamımıza götürür.
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <img src={spaImage3} alt="Spa" style={{ width: '100%', borderRadius: '5px' }} />
        </Box>
      </Box>


      
      {/* Bölüm 4 - Sağ Yazı, Sol Resim */}
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column-reverse', md: 'row' }, gap: '20px', marginBottom: '50px', padding:'2%' }}>
        <Box sx={{ flex: 1 }}>
          <img src={spaImage4} alt="Spa" style={{ width: '100%', borderRadius: '5px' }} />
        </Box>
        <Box sx={{ flex: 1, textAlign: 'left' }}>
          <Typography variant="h4" sx={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '15px' }}>
            Lüks Sauna Deneyimi
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '18px' }}>
          Sauna, yüzyıllardır rahatlama ve sağlık için kullanılan bir gelenektir. Vücudu ısıtarak kan dolaşımını hızlandırır, toksinlerin ter yoluyla atılmasını sağlar ve kasları gevşeterek derin bir rahatlama hissi sunar. Versay'daki Airelles Spa'daki lüks saunamız, Carrara mermeriyle kaplı şık tasarımı ve sıcaklık dengesiyle, hem bedensel hem de zihinsel bir yenilenme sunar. Geleneksel buhar banyosunun huzur verici etkisini deneyimleyerek kendinizi şımartabilir, günlük stresinizden arınarak tazelenmiş hissedebilirsiniz.evşeyin ve suyun rahatlatıcı etkisiyle huzurun tadını çıkarın.
          </Typography>
        </Box>
      </Box>



      {/* Bölüm 5 - Ortada Büyük Resim */}
      <Box sx={{ textAlign: 'center', marginBottom: '50px' }}>
        <img src={spaImage3} alt="Spa" style={{ width: '100%', borderRadius: '5px' }} />
      </Box>
      <Typography variant="h4" sx={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '15px' }}>
        Kendinizi Özel Hissedin
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
        Airelles Spa'da geçireceğiniz her an, benzersiz bir rahatlama ve huzur deneyimi sunar. Özel masaj ve bakım terapileri ile vücudunuzu ve zihninizi tazeleyin.
      </Typography>




      <BookingSection/>
    </Box>
  );
};

export default SpaHavuzPage;
