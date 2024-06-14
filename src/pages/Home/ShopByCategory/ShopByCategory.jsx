import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ShopByCategory = () => {
  return (
    <>
      <div>
        <h1
          className="text-3xl font-bold font-jura ms-8
      py-6"
        >
          Category
        </h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        Pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-5 shadow-lg dark:bg-[#f0e9e9]">
            <img
              width={400}
              height={300}
              className="h-[300px] w-full rounded-lg bg-red-700 object-cover"
              src="https://i.ibb.co/374m9VL/pexels-lanophotography-194511.jpg"
              alt="card navigate ui"
            />
            <button className="w-full rounded-lg bg-red-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-red-900 sm:text-sm md:text-base">
              Add to Cart
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-5 shadow-lg dark:bg-[#f0e9e9]">
            <img
              width={400}
              height={300}
              className="h-[300px] w-full rounded-lg bg-red-700 object-cover"
              src="https://i.ibb.co/vHHW14C/2149829136.jpg"
              alt="card navigate ui"
            />
            <button className="w-full rounded-lg bg-red-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-red-900 sm:text-sm md:text-base">
              Add to Cart
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-5 shadow-lg dark:bg-[#f0e9e9]">
            <img
              width={400}
              height={300}
              className="h-[300px] w-full rounded-lg bg-red-700 object-cover"
              src="https://i.ibb.co/vHHW14C/2149829136.jpg"
              alt="card navigate ui"
            />
            <button className="w-full rounded-lg bg-red-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-red-900 sm:text-sm md:text-base">
              Add to Cart
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-5 shadow-lg dark:bg-[#f0e9e9]">
            <img
              width={400}
              height={300}
              className="h-[300px] w-full rounded-lg bg-red-700 object-cover"
              src="https://i.ibb.co/vHHW14C/2149829136.jpg"
              alt="card navigate ui"
            />
            <button className="w-full rounded-lg bg-red-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-red-900 sm:text-sm md:text-base">
              Add to Cart
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-5 shadow-lg dark:bg-[#f0e9e9]">
            <img
              width={400}
              height={300}
              className="h-[300px] w-full rounded-lg bg-red-700 object-cover"
              src="https://i.ibb.co/vHHW14C/2149829136.jpg"
              alt="card navigate ui"
            />
            <button className="w-full rounded-lg bg-red-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-red-900 sm:text-sm md:text-base">
              Add to Cart
            </button>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlide components as needed */}
      </Swiper>
    </>
  );
};

export default ShopByCategory;
