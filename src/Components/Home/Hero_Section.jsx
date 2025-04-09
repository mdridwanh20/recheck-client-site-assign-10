import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Hero_Section() {
  const [cover, setCover] = useState([]);

  useEffect(() => {
    fetch("CoverSlider.json")
      .then((res) => res.json())
      .then((data) => setCover(data));
  }, []);

  // console.log(cover);

  return (
    <div>
      <div className="">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {cover.map((slide) => (
            <SwiperSlide key={slide.id} className="relative bg-opacity-95">
              <div className="">
                <img src={slide.image} className="w-full h-screen " alt="" />
              </div>

              <div
                 style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }} // Light-dark overlay
                className="absolute px-3 inset-0  flex flex-col items-center justify-center text-center space-y-3 text-gray-200"
              >
                <h1 className="text-3xl font-bold mb-1">{slide.title}</h1>
                <p className="lg:text-lg text-sm lg:w-1/2">
                  {slide.description}
                </p>
                <button className="btn rounded-md h-8 min-h-12 bg-green-600 hover:bg-green-700 font-normal text-lg text-white border-none px-8">
                  Learn More
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
