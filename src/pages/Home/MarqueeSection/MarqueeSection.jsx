import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <div className="max-w-7xl mx-auto  bg-red-700">
      <Marquee>
        <div className="flex justify-between gap-5 font-jura text-white font-bold my-3">
          <p>PRICE MATCHING</p>
          <p>45-DAY RETURN WINDOW</p>
          <p>2-YEAR WARRANTY</p>
          <p>FLEXIBLE PAYMENT OPTIONS</p>
          <p>ROUTE PACKAGE PROTECTION</p>
          <p>LIMITED EDITION PRODUCTS</p>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
