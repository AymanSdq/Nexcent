import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // ✅ Correct import
import "swiper/css/navigation"; // ✅ Correct import
import "swiper/css/pagination"; // ✅ Correct import

import { Navigation, Pagination } from "swiper/modules"; // Import modules if needed

const HeroSwiper = () => {
    return (
        <>
        <Swiper
            pagination={{
            dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-full "
        >
            <SwiperSlide>
                <div className="w-full flex items-center px-24 py-24 ">
                    <div className="w-2/3 text-[44px] flex-start flex">
                        <h1>Lessons and insights from 8 years</h1>
                    </div>
                    <div className="w-1/3 ">
                        <img src="/Illustration.svg" alt="Illustration" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
        </>
    );
};

export default HeroSwiper;
