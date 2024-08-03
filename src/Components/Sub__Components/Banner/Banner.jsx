import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Banner.css';

import { Pagination , Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <>
          
          <section id='test'>
          <Swiper 
                loop={true} 
                 
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: '.pagination-container',
                    clickable: true,
                }}
                
                modules={[Pagination,Autoplay]} className="mySwiper">


                <SwiperSlide className='parent_slider' style={{ backgroundImage:'url(public/banner/1.png)' }}>
                   <div className="container">
                     <h4>Mega Sale</h4>
                     <h2>Up To 35% Off</h2>
                     <p>Objectively incubate enabled innovation through leveraged mindshare. Competently.</p>
                     <a href="#">Shop Now</a>
                   </div>
                </SwiperSlide>


                <SwiperSlide className='parent_slider' style={{ backgroundImage:'url(public/banner/1.png)' }}>
                   <div className="container">
                     <h1 className='text-light'>02</h1>
                   </div>
                </SwiperSlide>

                
            </Swiper>
            <div className="pagination-container container"></div>
          </section>

        </>
    );
};

export default Banner;