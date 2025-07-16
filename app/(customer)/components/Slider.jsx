"use client";

import Link from "next/link";
import "swiper/css";
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { sliderInfo } from "@/assets/assets";
import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="mb-8 overflow-hidden">
      <div>
        <div>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            speed={500}
            autoplay={{
              delay: 4000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,

            }}
            pagination={{ clickable: true }}
          >
            {sliderInfo.map(
              ({
                id,
                offer,
                headline,
                primaryButton,
                secondaryButton,
                image,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className="bg-[#E6E9F2] py-8 px-8 sm:px-20 rounded-xl flex flex-col-reverse gap-8 lg:gap-14 md:flex-row items-center h-[32rem] lg:h-96">
                      <div className="">
                        <p className="text-orange-600">{offer}</p>
                        <h2 className="text-2xl text-gray-700 md:text-[2rem] lg:text-[2.5rem] leading-[48px] font-bold mb-6 ">
                          {headline}
                        </h2>
                        <div className="flex gap-8 items-center ">
                          <Link href="/shop">
                            <button className="px-10 py-2.5 rounded-4xl cursor-pointer bg-orange-600 hover:brightness-90 text-white font-semibold">
                              {primaryButton}
                            </button>
                          </Link>
                          <Link href="">
                            <button className="group flex gap-1.5 items-center cursor-pointer text-gray-700">
                              <p>{secondaryButton}</p>
                              <FaArrowRight className=" group-hover:translate-x-1.5 duration-150 text-1xl text-gray-600" />
                            </button>
                          </Link>
                        </div>
                      </div>
                      <figure className="">
                        <Image
                          src={image}
                          width={400}
                          height={400}
                          alt="slide-1"
                          className="w-40 sm:w-52 md:max-w-72"
                        />
                      </figure>
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
