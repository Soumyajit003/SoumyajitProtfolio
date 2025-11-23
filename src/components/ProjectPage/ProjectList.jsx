import { motion } from 'framer-motion';
import { myProjects } from '../../assets/assets';
import { useState, useEffect } from 'react';


const ProjectList = () => {
    const [projects, setProjects] = useState([]);
  
    const fetchProjects = () => {
      setProjects(myProjects)
    };
  
    useEffect(() => {
      fetchProjects();
      
    }, []);
  
    return (
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="border-yellow-400 border md:w-xs w-xs m-10 text-center rounded md:pb-3 text-white/50 hover:bg-yellow-400 hover:text-zinc-800 hover:scale-105 transition-all duration-200 z-0 flex md:flex-col justify-between group"
          >
            <div className="relative md:mb-3">
              <img src={project.images} alt={project.name} className="md:w-xs w-40" />
              <div className="absolute inset-0 bg-black/70 backdrop-blur-xs bg-opacity-75 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm p-2">A project about {project.name}.</p>
              </div>
            </div>
            <div className="md:mr-0 mr-2 md:ml-0 ml-1">
              <p className="font-bebas md:text-6xl text-4xl">{project.name}</p>
              <ul>
                {project.technologyuse.map((tech, index) => (
                  <li key={index} className="mx-1 inline-block list-disc md:text-sm text-[13px]">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };
  
  export default ProjectList;