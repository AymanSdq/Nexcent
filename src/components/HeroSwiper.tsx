import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/swiper-bundle.css"

import {Pagination } from "swiper/modules"; // Import modules if needed

const HeroSwiper = () => {
    return (
        <>
        <Swiper pagination={{ dynamicBullets: true, }} modules={[Pagination]} className="mySwiper w-full ">
            <SwiperSlide>
                <div className="w-full flex md:flex-row flex-col max-md:gap-6 items-center md:px-24 px-16 md:py-24 py-16 ">
                    <div className="md:w-2/3 w-full md:flex-end float-end flex flex-col gap-6">
                        <h1 className="md:text-[64px] md:leading-[76px] leading-[56px] text-5xl font-semibold">Lessons and insights <br className="hidden md:flex" /> <span className="text-[#4CAF4F]">from  8 years</span></h1>
                        <p className="text-sm text-gray-400">Where to grow your business as a photographer: site or social media?</p>
                        <button className="text-white py-3 w-[130px] bg-[#4CAF4F] rounded-sm">Register</button>
                    </div>
                    <div className="md:w-1/3 w-full ">
                        <img src="/Illustration.svg" alt="Illustration" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full flex md:flex-row flex-col max-md:gap-6 items-center md:px-24 px-16 md:py-24 py-16 ">
                    <div className="md:w-2/3 w-full md:flex-end float-end flex flex-col gap-6">
                        <h1 className="md:text-[64px] md:leading-[76px] leading-[56px] text-5xl font-semibold">Lessons and insights <br className="hidden md:flex" /> <span className="text-[#4CAF4F]">from  8 years</span></h1>
                        <p className="text-sm text-gray-400">Where to grow your business as a photographer: site or social media?</p>
                        <button className="text-white py-3 w-[130px] bg-[#4CAF4F] rounded-sm">Register</button>
                    </div>
                    <div className="md:w-1/3 w-full ">
                        <img src="/Illustration.svg" alt="Illustration" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full flex md:flex-row flex-col max-md:gap-6 items-center md:px-24 px-16 md:py-24 py-16 ">
                    <div className="md:w-2/3 w-full md:flex-end float-end flex flex-col gap-6">
                        <h1 className="md:text-[64px] md:leading-[76px] leading-[56px] text-5xl font-semibold">Lessons and insights <br className="hidden md:flex" /> <span className="text-[#4CAF4F]">from  8 years</span></h1>
                        <p className="text-sm text-gray-400">Where to grow your business as a photographer: site or social media?</p>
                        <button className="text-white py-3 w-[130px] bg-[#4CAF4F] rounded-sm">Register</button>
                    </div>
                    <div className="md:w-1/3 w-full ">
                        <img src="/Illustration.svg" alt="Illustration" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </>
    );
};

export default HeroSwiper;
