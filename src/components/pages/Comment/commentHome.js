import React, { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SectionTitle from '../Title/sectionTitle';
import { FaStar } from "react-icons/fa6";
function CommentHome() {
    const { commentArr } = useContext(MainContext);

    return (
        <div>
            <div className='container my-5'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                {
                    commentArr.map((person, index) => (
                        <SwiperSlide key={index}>
                            <div class="comment-card">
                                <div class="user">
                                    <div class="user-img">
                                        <img src={person.img} alt="user-img" />
                                    </div>
                                    <div class="rating-stars">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    </div>
                                </div>
                                <div class="comment">
                                    <p>{person.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </div>
    )
}

export default CommentHome;
