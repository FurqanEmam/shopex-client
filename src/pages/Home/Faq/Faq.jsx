import Aos from "aos";
import VerticalAccordion from "../VerticalAccordion/VerticalAccordion";
import { useEffect } from "react";
const Faq = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
      mirror: true,
    });
  });
  return (
    <div data-aos="flip-right" className="max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-jura">
          Frequently Asked Question...
        </h1>
      </div>
      <div>
        <VerticalAccordion />
      </div>
    </div>
  );
};

export default Faq;
