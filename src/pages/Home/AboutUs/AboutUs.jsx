import Aos from "aos";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      mirror: true,
      once: false,
    });
  }, []);
  return (
    <div data-aos="fade-left" className="max-w-7xl mx-auto">
      <section className="flex min-h-[700px]  w-full items-center justify-center bg-white px-8">
        <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
          <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
            <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-gray-900">
              Who We Are
            </h1>
            <p className="lg:text-lg sm:text-base text-sm text-gray-600">
              At ShopeXian, we’re on a mission to empower all gamers by creating
              custom gear to shape your own unique gaming experience. Engineered
              for elite-level performance and designed for premium
              customization, our peripherals give you the power you demand and
              the sleek aesthetics you deserve.
            </p>
            <div className="flex space-x-4">
              <button className="inline-flex items-center justify-center rounded-md font-jura text-xl font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-red-800 hover:text-white h-10 px-4 py-2 bg-transparent text-green-600">
                Learn More...
              </button>
            </div>
            <p className="text-sm text-gray-500">Trusted by 5000+ Users</p>
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co/3vmbtBZ/pexels-artempodrez-7774033.jpg"
              className="relative md:h-[600px]  sm:h-[500px] h-[300px]  w-[500px] bg-gray-400 rounded-b-full object-cover"
              alt="hero navigate ui"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
