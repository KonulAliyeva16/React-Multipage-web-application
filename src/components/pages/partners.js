import React, { useContext } from 'react';
import { MainContext } from '../context/MainContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


function Partners() {
  const { partnerArr } = useContext(MainContext)

  return (
    <div>
      <section className="partners">
        <div className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
              1400: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay]}
          >
            {
              partnerArr.map((partner, index) => (
                <SwiperSlide key={index}>
                  <div className="partner-img">
                    <img src={partner} alt="partner" />
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </section>

    </div>
  )
}
export default Partners;
