import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigationLink = (
    <>
      <li className="hover:bg-red-500 hover:duration-1000 ">
        <Link to="/">HOME</Link>
      </li>
      <li className="hover:bg-red-500 hover:duration-1000">
        <Link to="/blogs" href="">
          BLOGS
        </Link>
      </li>
      <li className="hover:bg-red-500 hover:duration-1000 ">
        <Link to="/games">GAMES</Link>
      </li>

      <li className="hover:bg-red-500 hover:duration-1000 ">
        <Link to="controller">CONTROLLER</Link>
      </li>
      <li className="hover:bg-red-500 hover:duration-1000 ">
        <Link to="/download">DOWNLOAD</Link>
      </li>
    </>
  );
  return (
    <div className="font-jura max-w-7xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-2xl"
            >
              {navigationLink}
            </ul>
          </div>
          <img
            src="https://www.svgrepo.com/show/7034/game-controller.svg"
            alt=""
            className="w-9"
          />
          <p className="btn btn-ghost text-4xl">ShopeX</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-2xl font-bold">
            {navigationLink}
          </ul>
        </div>

        <div className="navbar-end">
          <Link
            to="/signin"
            className="group relative z-50 h-14 w-32 overflow-hidden border-y-4 border-green-300 bg-black text-xl text-white font-bold duration-500 text-center"
          >
            <p className="text-center">Sign In</p>
            <span className="absolute inset-0 z-10 flex items-center justify-center text-black opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-1000 font-bold">
              ShopeX
            </span>
            <span className="absolute inset-0 -translate-y-full bg-green-300 group-hover:translate-y-0 group-hover:duration-1000"></span>
            <span className="absolute inset-0 translate-y-full bg-red-500 group-hover:translate-y-0 group-hover:duration-1000"></span>
            <span className="absolute inset-0 translate-x-full bg-sky-300 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span>
            <span className="absolute inset-0 -translate-x-full bg-green-300 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
