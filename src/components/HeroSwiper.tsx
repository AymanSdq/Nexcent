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
                    <div className="w-2/3 flex-end float-end flex flex-col gap-6">
                        <h1 className="text-[64px] leading-[76px] font-semibold">Lessons and insights <br /> <span className="text-[#4CAF4F]">from  8 years</span></h1>
                        <p className="text-sm text-gray-400">Where to grow your business as a photographer: site or social media?</p>
                        <button className="text-white py-3 w-[130px] bg-[#4CAF4F] rounded-sm">Register</button>
                    </div>
                    <div className="w-1/3 ">
                        <img src="/Illustration.svg" alt="Illustration" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full flex items-center px-24 py-24 ">
                    <div className="w-2/3 flex-end float-end flex flex-col gap-6">
                        <h1 className="text-[64px] leading-[76px] font-semibold">Lessons and insights <br /> <span className="text-[#4CAF4F]">from  8 years</span></h1>
                        <p className="text-sm text-gray-400">Where to grow your business as a photographer: site or social media?</p>
                        <button className="text-white py-3 w-[130px] bg-[#4CAF4F] rounded-sm">Register</button>
                    </div>
                    <div className="w-1/3 ">
                        <img src="/Illustration.svg" alt="Illustration" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full flex items-center px-24 py-24 ">
                    <div className="w-2/3 flex-end float-end flex flex-col gap-6">
                        <h1 className="text-[64px] leading-[76px] font-semibold">Lessons and insights <br /> <span className="text-[#4CAF4F]">from  8 years</span></h1>
                        <p className="text-sm text-gray-400">Where to grow your business as a photographer: site or social media?</p>
                        <button className="text-white py-3 w-[130px] bg-[#4CAF4F] rounded-sm">Register</button>
                    </div>
                    <div className="w-1/3 ">
                        <img src="/Illustration.svg" alt="Illustration" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </>
    );
};

export default HeroSwiper;
