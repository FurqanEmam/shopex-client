import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const FeaturedIn = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="py-6">
      <div className="divider divider-neutral font-jura text-4xl font-bold my-6">
        Featured In
      </div>
      <div className="flex flex-wrap items-center justify-center gap-7">
        <img
          data-aos="fade-up"
          src="https://i.ibb.co/mzndBf7/IGN-logo-1.png"
          alt="IGN"
          className="w-32 md:w-40 lg:w-auto"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="100"
          src="https://i.ibb.co/56LJCW0/The-Verge-New-2022-1.png"
          alt="The Verge"
          className="w-32 md:w-40 lg:w-auto"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="200"
          src="https://i.ibb.co/VB386hp/Tech-Radar-logo-1.png"
          alt="Tech Radar"
          className="w-32 md:w-40 lg:w-auto"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src="https://i.ibb.co/MPpY2qZ/DT-Logo-1.png"
          alt="Digital Trends"
          className="w-32 md:w-40 lg:w-auto"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="400"
          src="https://i.ibb.co/jGBgB9Z/dexerto-logo.png"
          alt="Dexerto"
          className="w-32 md:w-40 lg:w-auto"
        />
      </div>
    </div>
  );
};

export default FeaturedIn;
