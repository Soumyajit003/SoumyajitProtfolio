import React from "react";
import { assets, myProjects } from "../../assets/assets";
import { motion } from "motion/react";
import { useNavigate } from 'react-router-dom';
import { Element } from "react-scroll";


const Projects = () => {

  const navigate = useNavigate();

  return (
    <Element name="projects" className=" md:mx-25 mx-10 border-b border-b-zinc-600 pb-10 cursor-default">
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="font-outfit text-3xl m-auto text-center mt-10 text-white"
      >
        Projects
      </motion.p>
      <div className=" flex justify-around text-white/50 flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="border-yellow-400 border md:w-xs w-xs m-10 text-center rounded md:pb-3 hover:bg-yellow-400 hover:text-zinc-800 hover:scale-105 transition-all duration-200 z-0 flex md:flex-col justify-between group"
        >
          <div className="relative md:mb-3">
            {/* Image */}
            <img src={assets.dummy} alt="" className="md:w-xs w-40" />

            {/* Overlay div (Initially hidden) */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xs bg-opacity-75 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm p-2">
                A simple Todo App to manage tasks efficiently.
              </p>
            </div>
          </div>

          <div className="md:mr-0 mr-2 md:ml-0 ml-1">
            <p className="font-bebas md:text-6xl text-4xl">Todo APP</p>
            <div>
              <ul>
                <li className="mx-1 inline-block list-disc md:text-sm text-[13px]">
                  HTML
                </li>
                <li className="mx-1 inline-block list-disc md:text-sm text-[13px]">
                  CSS
                </li>
                <li className="mx-1 inline-block list-disc md:text-sm text-[13px]">
                  JavaScript
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="border-yellow-400 border md:w-xs w-xs m-10 text-center rounded md:pb-3 hover:bg-yellow-400 hover:text-zinc-800 hover:scale-105 transition-all duration-200 z-0 flex md:flex-col justify-between group"
        >
          <div className="relative md:mb-3">
            {/* Image */}
            <img src={assets.dummy} alt="" className="md:w-xs w-40" />

            {/* Overlay div */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xs bg-opacity-75 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm p-2">
                A Learning Management System built with MERN Stack.
              </p>
            </div>
          </div>

          <div className="md:mr-0 mr-2 md:ml-0 ml-1">
            <p className="font-bebas md:text-6xl text-4xl">LMS Website</p>
            <div>
              <ul>
                <li className="mx-1 inline-block list-disc md:text-sm text-[13px]">
                  React
                </li>
                <li className="mx-1 inline-block list-disc md:text-sm text-[13px]">
                  Tailwind
                </li>
                <li className="mx-1 inline-block list-disc md:text-sm text-[13px]">
                  Node
                </li>
                <li className="mx-1 inline-block list-disc md:text-sm text-[13px]">
                  Mongo
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="border-yellow-400 border md:w-xs w-xs m-10 text-center rounded md:pb-3 hover:bg-yellow-400 hover:text-zinc-800 hover:scale-105 transition-all duration-200 z-0 flex md:flex-col justify-between group"
        >
          <div className="relative md:mb-3">
            {/* Image */}
            <img src={assets.dummy} alt="" className="md:w-xs w-40" />

            {/* Overlay div */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xs bg-opacity-75 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm p-2">
                A Food Ordering App for seamless online orders.
              </p>
            </div>
          </div>

          <div className="md:mr-0 mr-2 md:ml-0 ml-1">
            <p className="font-bebas md:text-6xl text-4xl">Food Ordering</p>
            <div>
              <ul>
                <li className="mx-1 inline-block list-disc md:text-sm text-[13px]">
                  React
                </li>
                <li className="mx-1 inline-block list-disc md:text-sm text-[13px]">
                  CSS
                </li>
                <li className="mx-1 inline-block list-disc md:text-sm text-[13px]">
                  Node
                </li>
                <li className="mx-1 inline-block list-disc md:text-sm text-[13px]">
                  Mongo
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="text-center">
        <motion.button 
        onClick={()=>navigate('/projects')}
        className="bg-yellow-400 px-4 py-2 text-zinc-800 border-none rounded font-semibold outline-none cursor-pointer hover:bg-white transition ease-out duration-200">
          Show More
        </motion.button>
      </div>
    </Element>
  );
};

export default Projects;
