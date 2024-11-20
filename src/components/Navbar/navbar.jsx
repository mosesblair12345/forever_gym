import { NavbarMenu } from "../../constants/navMenu";
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import { useState } from "react";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <div>
      <nav>
        <div className="container flex justify-between py-4 items-center">
          {/* Logo section*/}
          <div className="text-xl md:text-2xl flex items-center gap-2 font-bold uppercase hover:cursor-pointer">
            <FaDumbbell />
            <p>Forever</p>
            <p className="text-secondary">Gym</p>
          </div>
          {/* Menu section*/}
          <div className="hidden md:block">
            <ul className="flex gap-6 items-center text-gray-600">
              {NavbarMenu.map((item) => (
                <li
                  key={item.id}
                  className="inline-block py-1 px-3 hover:text-primary cursor-pointer font-semibold"
                >
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Icons section*/}
          <div className="flex items-center gap-4">
            <button className="text-lg md:text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>
            <button className="text-lg md:text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button>
            <button
              className="hover:bg-primary hover:text-white text-primary font-semibold rounded-md border-2
           border-primary px-5  duration-200 hidden md:block"
            >
              Login
            </button>
          </div>
          {/* Mobile Hamburger Menu Section*/}
          <div className="md:hidden" onClick={toggleMenu}>
            <MdMenu className=" text-[26px]" />
          </div>
        </div>
      </nav>
      <AnimatePresence>{menuVisible && <ResponsiveMenu />}</AnimatePresence>
    </div>
  );
};

export default Navbar;
