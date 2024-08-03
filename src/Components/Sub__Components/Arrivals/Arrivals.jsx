import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

const Arrivals = () => {
    return (
        <div>
            <section>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    <div className="caontainer">
                        <SwiperSlide>
                            <div className="card_contains">
                                <img src="https://angfuzsoft.com/html/aytor/assets/img/featured/featured-2-1h.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                    </div>



                  </Swiper>
            </section>
        </div>
    );
};

export default Arrivals;