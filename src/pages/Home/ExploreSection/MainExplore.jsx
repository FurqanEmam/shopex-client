import { useState } from "react";

const MainExplore = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://i.ibb.co/XjwCXP0/pexels-roman-odintsov-12718981-1.jpg",
      tags: "Room",
    },
    {
      img: "https://i.ibb.co/Phynxmf/pexels-artempodrez-7773803.jpg",
      tags: "Room",
    },
    {
      img: "https://i.ibb.co/v1ZTdFK/pexels-eren-li-7241446.jpg",
      tags: "Room",
    },
    {
      img: "https://i.ibb.co/n71sWDg/pexels-polina-tankilevitch-4523000.jpg",
      tags: "Room",
    },
    {
      img: "https://i.ibb.co/9WqPZ0h/pexels-yankrukov-9071681.jpg",
      tags: "Room",
    },

    {
      img: "https://i.ibb.co/WcV9M8L/pexels-roman-odintsov-12718986-1.jpg",
      tags: "Room",
    },
  ];
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );
  return (
    <div>
      <div className="sm:w-2/3 h-[540px] md:h-[670px] flex items-center relative overflow-hidden">
        {/* arrow */}
        <button
          onClick={nextSlider}
          className="absolute flex justify-center items-center right-2 top-1/2 bg-white rounded-full z-50 w-6 h-6 md:w-8 md:h-8 bgWhite "
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="rotate(180)"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
        {/* slider container */}
        <div
          className="ease-linear duration-300 flex gap-[2%]"
          style={{ transform: `translateX(-${currentSlider * 52}%)` }}
        >
          {/* sliders */}
          {sliders.map((slide, inx) => (
            <div
              key={inx}
              className={`${
                currentSlider === inx
                  ? "h-[310px] md:h-[310px] lg:h-[580px] "
                  : "h-[260px] md:h-[280px] lg:h-[480px]"
              } min-w-[50%] bg-black/30 relative duration-200`}
            >
              <img src={slide.img} className="w-full h-full" alt={slide.tags} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainExplore;
