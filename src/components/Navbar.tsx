import logo from "../assets/icons/name-logo.svg";
import openMenu from "../assets/icons/menu.svg";
import closeMenu from "../assets/icons/Close.svg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routePath } from "../utils/helper";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="rounded-[8px] bg-[#FFFFFF] px-4 md:px-8 w-full flex items-center justify-between">
      <Link to={routePath.HOME}>
        <img src={logo} alt="logo" className="w-10 h-10 md:w-20 md:h-20" />
      </Link>
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <img src={closeMenu} alt="Close" className="w-8 h-8" />
        ) : (
          <img src={openMenu} alt="Menu" className="w-8 h-8" />
        )}
      </button>
      <ul
        className={`${
          menuOpen
            ? "flex flex-col bg-white absolute top-12 right-4 z-[2] gap-4  items-center rounded-b-2xl py-4 px-6"
            : "hidden"
        } md:w-auto md:flex md:flex-row md:gap-12 md:items-center md:static md:bg-transparent transition-all duration-300 ease-in-out`}
      >
        <li>
          <Link
            to={routePath.HOME}
            className={`font-sora md:text-lg text-sm font-medium text-[#18373e] ${
              isActive("/")
                ? "text-[#4a9db0] border-b-2 border-b-[#255059]"
                : ""
            }`}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to={routePath.ABOUT_US}
            className={`font-sora text-sm md:text-lg font-medium text-[#18373e] ${
              isActive("/about-us")
                ? "text-[#4a9db0] border-b-2 border-b-[#255059]"
                : ""
            }`}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to={routePath.FAQS}
            className={`font-sora text-sm md:text-lg font-medium text-[#18373e] ${
              isActive("/faqs")
                ? "text-[#4a9db0] border-b-2 border-b-[#255059]"
                : ""
            }`}
          >
            FAQs
          </Link>
        </li>
        <li>
          <Link
            to={routePath.CONTACT_US}
            className={`font-sora text-sm md:text-lg font-medium text-[#18373e] ${
              isActive("/contact-us")
                ? "text-[#4a9db0] border-b-2 border-b-[#255059]"
                : ""
            }`}
          >
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
