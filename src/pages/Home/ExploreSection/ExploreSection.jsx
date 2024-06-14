import { useEffect } from "react";
import MainExplore from "./MainExplore";
import Aos from "aos";

const ExploreSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <div
      data-aos="fade-right"
      className="max-w-7xl mx-auto h-[540px] lg:h-[670px] px-3 lg:px-10 flex flex-col lg:flex-row items-center justify-center overflow-hidden gap-5 lg:gap-10 relative my-3"
    >
      <div className="bg-[#f3f9fc] w-full absolute left-0 h-[540px] lg:h-[670px] -z-40"></div>
      <div className="w-2/3 lg:w-1/3 text-center lg:text-left space-y-2 lg:space-y-5 py-5">
        <h1 className="text-lg md:text-2xl lg:text-[40px] font-bold">
          Gaming Controllers...Your Dreams
        </h1>
        <p className="text-[#616161] text-xs md:text-lg">
          Our designer already made a lot of beautiful prototipe of controller
          that inspire you
        </p>
        <button className="font-bold py-2 xl:py-3 text-xs md:text-base lg:text-lg xl:text-xl hover:scale-95 duration-300 px-4 lg:px-10 text-white bg-[#5c2318]">
          Explore More
        </button>
      </div>
      <MainExplore />
    </div>
  );
};

export default ExploreSection;
