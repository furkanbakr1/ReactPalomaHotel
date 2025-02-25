import React, { useState } from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import Navbar2 from '../components/Navbar2';
import BookingSection from '../components/BookingSection';
import fitnessImage from '../images/fitness.jpg';
import yogaImage from '../images/yoga.jpg';
import travelImage from '../images/gezi.jpg';

const Activities = () => {
    return (
        <Box sx={{ backgroundColor: 'rgb(252, 250, 241)', minHeight: '100vh', maxWidth: '100vw', paddingBottom: '20px' }}>
            <Navbar2 />
            
            {/* Başlık ve Açıklama */}
            <Box sx={{ textAlign: 'center', padding: '5% 10%' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
                    Sağlık & Yaşam
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
                    Sağlığınızı ve yaşam kalitenizi artırmak için tasarlanmış fitness, yoga ve kültürel aktivitelerle kendinizi yenileyin.
                </Typography>
            </Box>


        {/* Fitness Bölümü */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: { xs: 'column', md: 'row' }, padding: '8% 5%',marginTop:'-3%' }}>       
        
        {/* solda resim */}
        <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
          <img 
            src={fitnessImage} 
            alt="fitness"
            style={{ width: '100%', maxWidth: '1000px', height: 'auto', borderRadius: '2px' }}
          />
        </Box>
        
        {/* Sağ tarafta başlık ve açıklama metni */}
        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, padding: '8% 5%', marginTop:'-5%'}}>
          <Typography variant="h3" sx={{ fontSize: '40px', lineHeight: '48px',fontFamily: '__domaine_26cc95, __domaine_Fallback_26cc95',marginBottom:'20px' }}>
          Fitness ve Sağlık
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '20px', lineHeight: '22px',fontFamily: '__domaine_26cc95, __domaine_Fallback_26cc95', marginBottom:'20px' }}>
          Son teknoloji Technogym kardiyo ve ağırlık antrenman ekipmanlarıyla donatılmış Fitness alanımız formunuzu korumanıza olanak tanır. İsteğiniz üzerine, hedeflerinize ulaşmanıza yardımcı olmak için kişiselleştirilmiş seanslarda bir spor koçu size eşlik edecektir. Kendinize yeniden bağlanmak için biraz zaman mı arıyorsunuz? Rahatlatıcı bir seans için koçlarımızdan biriyle yoga dersi ayırtın. 
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '20px', lineHeight: '22px',fontFamily: '__domaine_26cc95, __domaine_Fallback_26cc95', marginBottom:'20px' }}>
          Airelles Spa by Valmont'ta mutlak rahatlama deneyimini yaşayın. Canlandırıcı masajlar ve Versay ruhuna uygun öğle yemeğinin yanı sıra, seçkimizden birini seçerek rahatlamanın tadını çıkarın. Pazartesiden cumaya, dış müşterilerimize açıktır.
          </Typography>

        </Box>
      </Box>




            {/* Programlar Tablosu */}
            <Box sx={{ padding: '2% 20%' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>Programlar</Typography>
                <Divider />
                <Grid container spacing={1} sx={{ marginTop: '20px' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body2">Mekan Saatleri</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body2">• Yüzme Havuzu Saatleri</Typography>
                        <Typography variant="body2">• Sabah 8:00 • Akşam 23:45</Typography>
                        <Typography variant="body2">• Sauna Saatleri</Typography>
                        <Typography variant="body2">• Sabah 8:00 • Akşam 23:45</Typography>
                    </Grid>
                </Grid>
                <Divider sx={{ marginY: '20px' }} />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body2">Aktiviteler Saatleri</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body2">• Yoga Saatleri</Typography>
                        <Typography variant="body2">• Su Sporları Saatleri</Typography>
                        <Typography variant="body2">• Gezi Saatleri</Typography>
                        <Typography variant="body2">• Disco Saatleri</Typography>
                    </Grid>
                </Grid>
                <Divider sx={{ marginY: '20px' }} />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body2">Yemek Saatleri</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body2">• Sabah</Typography>
                        <Typography variant="body2">• Öğle</Typography>
                        <Typography variant="body2">• Akşam</Typography>
                    </Grid>
                </Grid>
            </Box>
            

        {/* Yoga kısmı */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: { xs: 'column', md: 'row' }, padding: '8% 5%',marginTop:'-5%' }}>
        
        {/* Sol tarafta büyük resim */}
        <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
          <img 
            src={yogaImage} 
            alt="yoga"
            style={{ width: '100%', maxWidth: '1000px', height: 'auto', borderRadius: '2px' }}
          />
        </Box>
        
        {/* Sağ tarafta başlık ve açıklama metni */}
        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, padding: '8% 5%', marginTop:'%'}}>
          <Typography variant="h3" sx={{ fontSize: '40px', lineHeight: '48px',fontFamily: '__domaine_26cc95, __domaine_Fallback_26cc95',marginBottom:'20px' }}>
            Yoga ile Farkındalık
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '20px', lineHeight: '22px',fontFamily: '__domaine_26cc95, __domaine_Fallback_26cc95', marginBottom:'20px' }}>
          Yoga, bedeni, zihni ve ruhu dengelemeye yardımcı olan binlerce yıllık bir disiplindir. Fiziksel hareketler, nefes teknikleri ve meditasyonun birleşimiyle stres seviyesini azaltırken esnekliği ve dayanıklılığı artırır. Günlük hayatta karşılaşılan zihinsel ve fiziksel yorgunlukları atmanın en etkili yollarından biri olan yoga, aynı zamanda bedeni güçlendirerek postürü düzeltir ve genel sağlığı iyileştirir. Düzenli yoga pratiği, daha sakin bir zihin yapısına ulaşmayı sağlarken, odaklanma yeteneğini de geliştirir.
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '20px', lineHeight: '22px',fontFamily: '__domaine_26cc95, __domaine_Fallback_26cc95', marginBottom:'20px' }}>
          Açık havada veya huzurlu bir ortamda yapılan yoga seansları, doğanın enerjisini hissetmenize ve içsel huzurunuzu bulmanıza yardımcı olur. Deneyimli eğitmenler eşliğinde gerçekleştirilen seanslarla hem yeni başlayanlar hem de ileri seviye katılımcılar için uygun pratikler sunulur. Sabah güneşiyle birlikte yapılan hafif yoga hareketleri güne enerjik bir başlangıç yapmanızı sağlarken, gün sonunda yapılan gevşeme seansları ise tüm stresinizden arınmanıza yardımcı olur. Yoga, beden ve zihin uyumunu yakalamak isteyen herkes için mükemmel bir deneyim sunar.
          </Typography>

        </Box>
      </Box>



        {/* Gezi kısmı */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: { xs: 'column', md: 'row' }, padding: '8% 5%',marginTop:'-15%' }}>
        

        
        {/* üst tarafta başlık ve açıklama metni */}
        <Box sx={{ flex: 2, textAlign: { xs: 'center', md: 'center' }, padding: '8% 5%', marginTop:'%'}}>
          <Typography variant="h3" sx={{ fontSize: '40px', lineHeight: '48px',fontFamily: '__domaine_26cc95, __domaine_Fallback_26cc95',marginBottom:'20px' }}>
            Kültürel Geziler
            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Camera%20with%20Flash.png" alt="Camera with Flash" width="40" height="40" style={{marginLeft:'5px'}}/>
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '20px', lineHeight: '22px',fontFamily: '__domaine_26cc95, __domaine_Fallback_26cc95', marginBottom:'20px' }}>
          Kültürel geziler, bir bölgenin tarihini, sanatını ve yaşam tarzını keşfetmenin en keyifli yollarından biridir. Seyahat etmek yalnızca yeni yerler görmek değil, aynı zamanda farklı kültürleri anlamak, geçmişin izlerini takip etmek ve gelenekleri deneyimlemek anlamına gelir. Tarihi yapılar, müzeler, antik kentler ve yerel pazarlar, geçmişin ve bugünün iç içe geçtiği eşsiz alanlardır. Rehberler eşliğinde gerçekleştirilen kültürel geziler, gezginlere derinlemesine bilgi sunarak ziyaret edilen yerleri daha anlamlı hale getirir. Böylece, bir taş duvarın ardında saklı bir medeniyetin hikayesini, bir sarayın ihtişamının ardındaki tarihi ve bir kentin sokaklarında yankılanan geçmişin seslerini keşfetme fırsatı doğar.
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '20px', lineHeight: '22px',fontFamily: '__domaine_26cc95, __domaine_Fallback_26cc95', marginBottom:'20px' }}>
          Bu tür geziler yalnızca tarih ve sanatla sınırlı kalmaz; aynı zamanda yerel mutfağı deneyimlemek, el sanatlarını keşfetmek ve halkın günlük yaşamına dahil olmak için de harika bir fırsattır. Bir kültürün ruhunu en iyi şekilde hissetmek için yerel halkla iletişim kurmak, geleneksel etkinliklere katılmak ve bölgenin doğal güzelliklerini görmek büyük önem taşır. İster bir şehrin dar sokaklarında kaybolmak, ister bir köyde geleneksel el sanatlarını öğrenmek olsun, kültürel geziler her zaman unutulmaz deneyimler sunar ve insanı hem zihinsel hem de ruhsal anlamda zenginleştirir.
          </Typography>


        {/* alt tarafta büyük resim */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img 
            src={travelImage} 
            alt="travel"
            style={{ width: '100%', maxWidth: '1000px', height: 'auto', borderRadius: '2px' }}
          />
        </Box>
        </Box>
      </Box>



                  
            <BookingSection />
        </Box>
    );
}

export default Activities;