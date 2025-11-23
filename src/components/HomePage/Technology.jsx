import React from "react";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";
import { Element } from "react-scroll";

const Technology = () => {
  return (
    <Element className="md:mx-25 mx-10 border-b border-b-zinc-600 cursor-default" name="technologies">
      <motion.p
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: 100}}
        transition={{ duration: 0.5 }}
        className=" text-white text-3xl m-auto md:text-center mt-10 font-outfit"
      >
        Technologies
      </motion.p>
      <div className=" grid auto-cols-fr my-15">
        {/* Frontend */}
        <div className="md:flex justify-around mb-10">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className=" md:w-xs font-bebas text-5xl text-white font-bold md:mb-0 mb-7"
          >
            <p className="">Frontend</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="md:w-lg md:grid md:grid-cols-3 gap-3 grid grid-cols-2"
          >
            <div className="flex items-center gap-3 md:w-10 w-7">
              <img src={assets.html} alt="" className="" />
              <p className=" text-white font-josefin md:text-xl">HTML</p>
            </div>
            <div className="flex items-center gap-3 md:w-10 w-7">
              <img src={assets.css} alt="" />
              <p className=" text-white font-josefin md:text-xl">CSS</p>
            </div>
            <div className="flex items-center gap-3 md:w-10 w-7">
              <img src={assets.reactpng} alt="" />
              <p className=" text-white font-josefin md:text-xl">React</p>
            </div>
            <div className="flex items-center gap-3 md:w-10 w-7">
              <img src={assets.tailwind} alt="" />
              <p className=" text-white font-josefin md:text-xl">Tailwind</p>
            </div>
            <div className="flex items-center gap-3 md:w-10 w-7">
              <img src={assets.js} alt="" />
              <p className=" text-white font-josefin md:text-xl">Javascript</p>
            </div>
            <div className="flex items-center gap-3 md:w-10 w-7">
              <img src={assets.typescript} alt="" />
              <p className=" text-white font-josefin md:text-xl">Typescript</p>
            </div>
            <div className="flex items-center gap-3 md:w-10 w-7">
              <img src={assets.frammer} alt="" />
              <p className=" text-white font-josefin md:text-xl">Frammer</p>
            </div>
          </motion.div>
        </div>
        {/* Backend */}
        <div className="md:flex justify-around my-10">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className=" w-xs font-bebas text-5xl text-white font-bold md:mb-0 mb-7"
          >
            <p>Backend</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className=" md:w-lg md:grid md:grid-cols-3 gap-3 grid grid-cols-2"
          >
            <div className="flex items-center gap-3 md:w-10 w-7">
              <img src={assets.node} alt="" />
              <p className=" text-white font-josefin md:text-xl">Node.Js</p>
            </div>
            <div className="flex items-center gap-3 md:w-10 w-7">
              <img src={assets.express} alt="" />
              <p className=" text-white font-josefin md:text-xl">Express.Js</p>
            </div>
          </motion.div>
        </div>
        {/* Database */}
        <div className="md:flex justify-around my-10">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="w-xs font-bebas text-5xl text-white font-bold md:mb-0 mb-7"
          >
            <p>Database</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className=" md:w-lg md:grid md:grid-cols-3 gap-3 grid grid-cols-2"
          >
            <div className="flex items-center gap-3 md:w-10 w-7">
              <img src={assets.mongo} alt="" />
              <p className=" text-white font-josefin md:text-xl">MongoDB</p>
            </div>
            <div className="flex items-center gap-3 md:w-10 w-7">
              <img src={assets.mysql} alt="" />
              <p className=" text-white font-josefin md:text-xl">MySQL</p>
            </div>
          </motion.div>
        </div>
        {/* Languages */}
        <div className="md:flex justify-around my-10">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className=" w-xs font-bebas text-5xl text-white font-bold md:mb-0 mb-7"
          >
            <p>Languages</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className=" md:w-lg md:grid md:grid-cols-3 gap-3 grid grid-cols-2"
          >
            <div className="flex items-center gap-3 md:w-10 w-7">
              <img src={assets.java} alt="" />
              <p className=" text-white font-josefin md:text-xl">Java</p>
            </div>
            <div className="flex items-center gap-3 md:w-10 w-7">
              <img src={assets.cpp} alt="" />
              <p className=" text-white font-josefin md:text-xl">C++</p>
            </div>
            <div className="flex items-center gap-3 md:w-10 w-7">
              <img src={assets.c} alt="" />
              <p className=" text-white font-josefin md:text-xl">C</p>
            </div>
          </motion.div>
        </div>
        {/* Tools */}
        <div className="md:flex justify-around my-10">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="w-xs font-bebas text-5xl text-white font-bold md:mb-0 mb-7"
          >
            <p>Tools</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className=" md:w-lg md:grid md:grid-cols-3 gap-3 grid grid-cols-2"
          >
            <div className="flex items-center gap-3 md:w-10 w-7">
              <img src={assets.git} alt="" />
              <p className=" text-white font-josefin md:text-xl">Git</p>
            </div>
            <div className="flex items-center gap-3 md:w-10 w-7">
              <img src={assets.github} alt="" />
              <p className=" text-white font-josefin md:text-xl">Github</p>
            </div>
            <div className="flex items-center gap-3 md:w-10 w-7">
              <img src={assets.aws} alt="" />
              <p className=" text-white font-josefin md:text-xl">AWS</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default Technology;
