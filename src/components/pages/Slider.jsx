import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide><img className='w-2/3 mx-auto' src="/images/img1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-2/3 mx-auto' src="/images/img2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-2/3 mx-auto' src="/images/img3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-2/3 mx-auto' src="/images/img4.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;

