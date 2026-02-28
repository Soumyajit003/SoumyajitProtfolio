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
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 20,
          duration: 1, 
          delay: 0.1 
        }}
        className="py-1 text-yellow-400 font-outfit sticky top-0 left-0 backdrop-blur-lg z-10"
      >
        <div className="flex justify-between md:mx-25 px-5 ">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <img
              src={assets.soumyajit_logo_light}
              alt=""
              className="md:w-10 w-8 ml-10 my-4 cursor-pointer"
            />
          </motion.div>
          <motion.ul 
            variants={{
              visible: { 
                transition: { 
                  staggerChildren: 0.1,
                  delayChildren: 0.4
                } 
              }
            }}
            initial="hidden"
            animate="visible"
            className="hidden md:flex justify-around items-center w-lg font-semibold relative"
          >
            {[
              { to: "home", label: "Home" },
              { to: "technologies", label: "Technologies" },
              { to: "projects", label: "Projects" },
              { to: "contact", label: "Contact" }
            ].map((item) => (
              <motion.li 
                key={item.to}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.1, color: "#fff" }}
                className="cursor-pointer transition ease-linear duration-100"
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden flex flex-col items-center bg-opacity-80 py-5 space-y-4 text-white text-lg backdrop-blur-lg z-10 overflow-hidden"
          >
            {[
              { to: "home", label: "Home" },
              { to: "technologies", label: "Technologies" },
              { to: "projects", label: "Projects" },
              { to: "contact", label: "Contact" },
              { to: "connect", label: "Connect With Me" }
            ].map((item) => (
              <motion.li 
                key={item.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hover:text-yellow-400 cursor-pointer transition ease-linear duration-100"
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}

        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: calculatedHeight / 100 }}
          style={{ originX: 0 }}
          className="absolute bg-yellow-400 h-0.5 w-full bottom-0"
        ></motion.span>
      </motion.div>
    </>
  );
};

export default Navbar;
