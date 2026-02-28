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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="font-outfit text-3xl m-auto text-center mt-10 text-white"
      >
        Projects
      </motion.p>
      <motion.div
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className=" flex justify-around text-white/50 flex-wrap"
      >
        {[
          {
            title: "Todo APP",
            description: "A simple Todo App to manage tasks efficiently.",
            tech: ["HTML", "CSS", "JavaScript"]
          },
          {
            title: "LMS Website",
            description: "A Learning Management System built with MERN Stack.",
            tech: ["React", "Tailwind", "Node", "Mongo"]
          },
          {
            title: "Food Ordering",
            description: "A Food Ordering App for seamless online orders.",
            tech: ["React", "CSS", "Node", "Mongo"]
          }
        ].map((project) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="border-yellow-400 border md:w-xs w-xs m-10 text-center rounded md:pb-3 hover:bg-yellow-400 hover:text-zinc-800 transition-colors duration-300 z-0 flex md:flex-col justify-between group"
          >
            <div className="relative md:mb-3">
              {/* Image */}
              <img src={assets.dummy} alt="" className="md:w-xs w-40" />

              {/* Overlay div */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-xs bg-opacity-75 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm p-2">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="md:mr-0 mr-2 md:ml-0 ml-1">
              <p className="font-bebas md:text-6xl text-4xl">{project.title}</p>
              <div>
                <ul>
                  {project.tech.map((t) => (
                    <li key={t} className="mx-1 inline-block list-disc md:text-sm text-[13px]">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={() => navigate('/projects')}
          className="bg-yellow-400 px-4 py-2 text-zinc-800 border-none rounded font-semibold outline-none cursor-pointer transition ease-out duration-200">
          Show More
        </motion.button>
      </div>
    </Element>
  );
};

export default Projects;
