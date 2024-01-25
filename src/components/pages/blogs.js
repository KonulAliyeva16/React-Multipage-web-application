import React, { useContext } from 'react';
import { MainContext } from '../context/MainContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import SectionTitle from './Title/sectionTitle';
import { FaArrowRight } from "react-icons/fa6";
function Blogs() {
  const { blogArr } = useContext(MainContext);

  return (
    <section className="blogs">
      <SectionTitle title={'Blogs'} />
      <div className="container">
      <div className='blog-contain'>
      <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            460: {
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
            blogArr.map(blog => (
              <SwiperSlide key={blog.id}>
                <div className='blog-card'>
                  <div className="blog-img">
                    <img src={blog.image} alt="blog" />
                  </div>
                  <div className="date">
                      <span>{blog.date}</span>
                    </div>
                  <div className="content">
                    <h5 className="title">{blog.title}</h5>
                    <div className="text">
                      <p>{blog.about.length > 120 ? blog.about.substr(0, 120) + ' ...' : blog.about}</p>
                    </div>
                    <Link to={`/blogs/${blog.title}`} className='btn-general active round' >Ətraflı <FaArrowRight /></Link>
                    
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      </div>
    </section>
  )
}

export default Blogs;
