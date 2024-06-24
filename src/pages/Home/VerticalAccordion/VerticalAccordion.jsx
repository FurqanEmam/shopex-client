import { useState } from "react";

export default function AccordionWithIndex() {
  // question and answer
  const dataArr = [
    {
      title: "How do I create an account?",
      description:
        'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',
    },
    {
      title: "What is your return policy?",
      description:
        "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",
    },
    {
      title: "Can I change my shipping address?",
      description:
        "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
    },
    {
      title: "Are there any discounts for loyal customers?",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
  ];

  // toggle state and function
  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div className="flex w-full justify-center">
      <div className="max-w-[650px] sm:max-w-[350px] cursor-pointer space-y-6 py-16">
        {/* mapping each accordion  */}
        {dataArr.map((data, idx) => (
          <div
            key={idx}
            onClick={() => handleToggle(idx)}
            className="flex items-center"
          >
            {/* the index div  */}
            <div className="flex size-16 select-none items-center justify-center rounded-md bg-[#cf3732] font-sans text-2xl font-semibold text-white">
              <span>0{idx + 1}</span>
            </div>

            <div className="relative h-[2px] w-10 bg-[#700f0b]">
              <span className="absolute -left-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 border-[#7a1717] bg-white"></span>
              <span className="h-1 w-10 bg-[#8a0c0c]"></span>
              <span
                className={`absolute -right-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 ${
                  isOpen === idx
                    ? "border-[#726435] bg-white delay-100"
                    : "border-transparent"
                }`}
              ></span>
            </div>

            {/* main accordion div  */}
            <div className="text-center">
              <div className="relative max-w-[450px] border-t-[12px] border-[#681515] bg-sky-50 p-3 shadow-md">
                <span className="absolute right-0 top-0 h-0 w-0 border-b-[40px] border-r-[40px] border-b-transparent border-r-[#752020]"></span>
                <h1 className="select-none text-lg text-[#417235]">
                  {data.title}
                </h1>
              </div>
              <div
                className={`grid overflow-hidden text-slate-600 transition-all duration-300 ease-in-out ${
                  isOpen === idx
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="max-w-[450px] bg-[#5e2725] p-6 text-sm text-white">
                    {data.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
