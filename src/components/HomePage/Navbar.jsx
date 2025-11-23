import React, { useState } from "react";
import { assets } from "../../assets/assets";
import ScrollReading from "./ScrollReading";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
const Navbar = () => {
  const calculatedHeight = ScrollReading();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="py-1 text-yellow-400 font-outfit sticky top-0 left-0 backdrop-blur-lg z-10"
      >
        <div className="flex justify-between md:mx-25 px-5 ">
          <div>
            <img
              src={assets.soumyajit_logo_light}
              alt=""
              className="md:w-10 w-8 ml-10 my-4 cursor-pointer"
            />
          </div>
          <ul className="hidden md:flex justify-around items-center w-lg font-semibold relative">
            <li className="hover:text-white cursor-pointer transition ease-linear duration-100">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="hover:text-white cursor-pointer transition ease-linear duration-100">
              <Link
                to="technologies"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Technologies
              </Link>
            </li>
            <li className="hover:text-white cursor-pointer transition ease-linear duration-100">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li className="hover:text-white cursor-pointer transition ease-linear duration-100">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden flex flex-col items-center bg-opacity-80 py-5 space-y-4 text-white text-lg backdrop-blur-lg z-10"
          >
            <li className="hover:text-yellow-400 cursor-pointer transition ease-linear duration-100">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition ease-linear duration-100">
              <Link
                to="technologies"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Technologies
              </Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition ease-linear duration-100">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li  className="hover:text-yellow-400 cursor-pointer transition ease-linear duration-100">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Contact
            </Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition ease-linear duration-100">
              <Link
                to="connect"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Connect With Me
              </Link>
            </li>
          </motion.ul>
        )}

        <span
          style={{ transform: `translateX(${calculatedHeight - 100}%)` }}
          className="absolute bg-yellow-400 h-0.5 w-full bottom-0"
        ></span>
      </motion.div>
    </>
  );
};

export default Navbar;
