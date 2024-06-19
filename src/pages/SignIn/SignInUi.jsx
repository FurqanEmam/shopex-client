import { useState } from "react";
import { Link } from "react-router-dom";
const SignInUi = () => {
  const [register, setRegister] = useState(false);
  const handleSignUp = (event) => {
    event.preventDefault();
    console.log(event);
    const form = event.target;
    console.log(form);
    const name = form.reg_name.value;
    const email = form.reg_email.value;
    const password = form.reg_password.value;
    console.log(name, email, password);
  };
  return (
    <div className="font-jura font-black">
      <div className="w-80 md:w-96 lg:w-[800px] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl my-7">
        {/*.......... register form .......... */}
        <form
          onSubmit={handleSignUp}
          className={`p-8 w-full ${
            register
              ? "lg:translate-x-0"
              : "lg:-translate-x-full hidden lg:block"
          } duration-500`}
        >
          <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">
            Register
          </h1>
          <div className="space-y-5">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              name="reg_name"
              id="name"
              type="name"
              placeholder="John Doe"
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />
            <label htmlFor="u_email" className="block">
              Email
            </label>
            <input
              name="reg_email"
              id="u_email"
              type="u_email"
              placeholder="example@example.com"
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />
            <label htmlFor="u_password" className="block">
              Password
            </label>
            <input
              name="reg_password"
              id="u_password"
              type="password"
              placeholder=".............."
              min={5}
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />
          </div>
          {/* button type will be submit for handling form submission*/}

          <div className="max-w-full mx-auto">
            <button
              type="submit"
              className="py-2 px-5 mb-4 mx-auto mt-8 font-bold text-xl  shadow-lg before:block before:-left-1 before:-top-1 before:bg-black before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block"
            >
              Sign Up
            </button>
          </div>
          <p className="mb-3 text-center">
            Already have an account?
            <Link
              onClick={() => {
                setRegister(!register);
              }}
              className="underline font-semibold"
            >
              Login
            </Link>
          </p>
          <hr />
          {/* google sign up button */}
          <button
            type="button"
            className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"
          >
            <svg
              viewBox="-0.5 0 48 48"
              version="1.1"
              className="w-6 inline-block mr-3"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>Google-color</title> <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Icons"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Color-"
                    transform="translate(-401.000000, -860.000000)"
                  >
                    <g
                      id="Google"
                      transform="translate(401.000000, 860.000000)"
                    >
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        id="Fill-1"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        id="Fill-2"
                        fill="#EB4335"
                      ></path>
                      <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        id="Fill-3"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        id="Fill-4"
                        fill="#4285F4"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            Continue with Google
          </button>
        </form>
        {/* img */}
        <div
          className={`hidden lg:block absolute w-1/2 h-full top-0 z-50 duration-500 overflow-hidden bg-black/20 ${
            register
              ? "translate-x-full rounded-bl-full duration-500"
              : "rounded-br-full"
          }`}
        >
          <img
            src="https://i.ibb.co/6N2Gtbp/pexels-ucantereyagi-14189711.jpg"
            className="object-cover h-full"
            alt="card navigate ui"
          />
        </div>

        {/*........ login form ........*/}

        <form
          className={`p-8 w-full mr-0 ml-auto duration-500 ${
            register ? "lg:translate-x-full hidden lg:block" : ""
          }`}
        >
          <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Login</h1>
          <div className="space-y-5">
            <label htmlFor="_email" className="block">
              Email
            </label>
            <input
              id="_email"
              type="email"
              placeholder="example@example.com"
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />
            <label htmlFor="_password" className="block">
              Password
            </label>
            <input
              id="_password"
              type="password"
              placeholder=".............."
              min={5}
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />
          </div>
          {/* button type will be submit for handling form submission*/}

          <button
            type="button"
            className="py-2 px-5 mb-4 mx-auto mt-8 font-bold text-xl  shadow-lg before:block before:-left-1 before:-top-1 before:bg-black before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block"
          >
            Submit
          </button>

          <p className="mb-3 text-center">
            Don&apos;t have an account?
            <Link
              onClick={() => {
                setRegister(!register);
              }}
              className="underline font-semibold"
            >
              Register
            </Link>
          </p>
          <hr />
          <button
            type="button"
            className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"
          >
            <svg
              viewBox="-0.5 0 48 48"
              version="1.1"
              className="w-6 inline-block mr-3"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>Google-color</title> <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Icons"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Color-"
                    transform="translate(-401.000000, -860.000000)"
                  >
                    <g
                      id="Google"
                      transform="translate(401.000000, 860.000000)"
                    >
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        id="Fill-1"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        id="Fill-2"
                        fill="#EB4335"
                      ></path>
                      <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        id="Fill-3"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        id="Fill-4"
                        fill="#4285F4"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInUi;
