import React from 'react';
import { assets } from '../../assets/assets';
import { motion } from 'motion/react';
import { Element } from "react-scroll";

const Hero = () => {

  return (
    <>
    <Element name='home' className='flex cursor-default flex-col md:flex-row justify-around text-white font-outfit mx-5 md:mx-25 border-b border-b-zinc-600 items-center'>
        {/* Left div */}
        <div className='w-full md:w-lg flex items-center text-center md:text-left'>
          <div>
            <motion.p className='text-4xl md:text-5xl font-extrabold mb-6 md:mb-10 text-white' 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}>
              Hello I am <span className='text-5xl md:text-7xl text-yellow-400'>Soumyajit</span>
            </motion.p>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className='text-sm md:text-base px-4 md:px-0'>
                 I am a passionate Full-Stack Web Developer. I specialize in building modern, scalable, and user-friendly web applications using the latest technologies. From intuitive front-end designs to robust back-end architectures, I craft seamless digital experiences. Let's create something amazing together!
            </motion.p>
            <motion.button
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              onClick={()=>(location.href=(assets.resume))}
              className='bg-yellow-400 px-4 py-2 text-zinc-800 border-none rounded mt-6 md:mt-10  font-semibold outline-none cursor-pointer hover:bg-white transition ease-out duration-200 '>
              Resume
            </motion.button>
          </div>
        </div>
        {/* Right div */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='w-full md:w-lg flex justify-center md:justify-end mt-8 md:mt-0'>
          <img src={assets.my_photo_2} alt='' className='w-60 md:w-lg rounded-lg'/>
        </motion.div>
      </Element>
    </>
  );
};

export default Hero;