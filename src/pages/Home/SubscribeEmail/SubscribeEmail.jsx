import Aos from "aos";
import { useEffect } from "react";
import { MdMarkEmailUnread } from "react-icons/md";
const SubscribeEmail = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <div
      data-aos="fade-in"
      className="max-w-7xl mx-auto lg:flex items-center lg:justify-around "
    >
      <div className="flex items-center">
        <div>
          <MdMarkEmailUnread className="w-11 h-auto mx-4" />
        </div>
        <div>
          <h1 className="font-jura font-bold text-2xl">Let’s Keep in Touch</h1>
          <p className="font-jura font-semibold text-xl">
            Sign up for exclusive deals, new arrivals, and more.
          </p>
        </div>
      </div>
      <div>
        <div className="relative w-max rounded-lg">
          <input
            className="peer rounded-lg border border-[#a82323] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
            type="text"
            placeholder=""
            id="navigate_ui_input_33"
          />
          <label
            className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-red-400 dark:peer-focus:bg-[#0F172A]"
            htmlFor="navigate_ui_input_33"
          >
            Email
          </label>
        </div>
      </div>
    </div>
  );
};

export default SubscribeEmail;
