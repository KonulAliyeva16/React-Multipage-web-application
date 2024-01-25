import React, { useContext } from 'react'
import { MainContext } from '../../context/MainContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import SectionTitle from '../Title/sectionTitle';

function Restaurants() {
  const {RestaurantFilial} = useContext(MainContext);
  return (
    <div>
      <section className="filial">
        <SectionTitle title={'Restaurants'} />
        <div className="container">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              280: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay]}
          >
            {
              RestaurantFilial.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link to={`/restaurants/${item.path}`} className='filial-card'>
                    <div className="filial-img">
                      <img src={item.image} alt="filial" />
                    </div>
                    <div className='filial-name'>
                      <span>{item.title}</span>
                    </div>
                  </Link>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default Restaurants;
