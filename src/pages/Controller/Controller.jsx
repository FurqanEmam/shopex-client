import React, { useEffect } from "react";
import ControllerCard from "./ControllerCard";
import Aos from "aos";

const Controller = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      mirror: true,
      once: false,
    });
  });
  const controllers = [
    {
      id: 1,
      imgUrl:
        "https://eu.dareu.com/cdn/shop/files/1712727969792.jpg?v=1712735453&width=1000",
      ControllerName: "Pro Gaming Controller",
      ControllerPrice: "$49.99",
    },
    {
      id: 2,
      imgUrl:
        "https://eu.dareu.com/cdn/shop/files/0005_H105-__231016_3000-3000__-6_217.png?v=1712735453&width=1000",
      ControllerName: "Elite Wireless Controller",
      ControllerPrice: "$89.99",
    },
    {
      id: 3,
      imgUrl:
        "https://eu.dareu.com/cdn/shop/files/9d3c5aa7b778dc8ef726bf28fe20c53.jpg?v=1715076306&width=1000",
      ControllerName: "Classic Controller",
      ControllerPrice: "$29.99",
    },
  ];
  return (
    <div>
      <div data-aos="flip-right" className="relative">
        <img
          src="https://eu.dareu.com/cdn/shop/files/Controller.jpg"
          alt="Controller"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4">
          <h1 className="text-4xl font-bold mb-4">Game Controller</h1>
          <p className="text-xl">
            Experience the ultimate control and precision with our
            top-of-the-line game controllers.
          </p>
        </div>
      </div>
      <div data-aos="flip-left" className="max-w-7xl mx-auto p-7 lg:flex gap-4">
        {controllers.map((controller) => (
          <ControllerCard
            key={controller.id}
            controller={controller}
          ></ControllerCard>
        ))}
      </div>
    </div>
  );
};

export default Controller;
