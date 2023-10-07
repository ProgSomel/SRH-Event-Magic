import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';





import slide_image_1 from "../../assets/images/img_1.jpg";
import slide_image_2 from "../../assets/images/img_2.jpg";
import slide_image_3 from "../../assets/images/img_3.jpg";
import slide_image_4 from "../../assets/images/img_4.jpg";
import slide_image_5 from "../../assets/images/img_5.jpg";
import slide_image_6 from "../../assets/images/img_6.jpg";

const Gallery = () => {
  return (
    <div className="mt-24 max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-16 " data-aos="zoom-in">
       <h2 className="text-7xl mt-8 italic  font-extralight text-[#6A9C89] mb-16" data-aos="fade-right">A Glimpse into Our Events</h2>
      <Swiper 
        
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50} 
        slidesPerView={3}
        navigation
      pagination={{ clickable: true }}
      
        onSlideChange={()=> console.log("Slide change")}
        onSwiper={(swiper)=> console.log("Swiper change")}
    
    
       
        className="swiper_container"
      >
        <SwiperSlide>
          <img className='w-[100%] h-[250px]' src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[100%] h-[250px]'  src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[100%] h-[250px]' src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[100%] h-[250px]' src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[100%] h-[250px]' src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[100%] h-[250px]' src={slide_image_6} alt="slide_image" />
        </SwiperSlide>

      
      </Swiper>
    </div>
  );
};

export default Gallery;
