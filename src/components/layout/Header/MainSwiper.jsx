import React,{ useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from 'swiper/modules';
import { MainContext } from '../../context/MainContext';

 function MainSwiper() {
 const {swiperImage} = useContext(MainContext)
 
  return (
    <div className="banner-swiper-container">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
         {
          swiperImage.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="banner-img" style={{ backgroundImage: `url(${image})` }}>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      
    </div>
  )
}


export default MainSwiper;
