import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'motion/react'
import { Element } from "react-scroll";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_l42z7jb', 'template_2tig7bl', form.current, {
        publicKey: 'jEZkhixSA8_AR84En',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Element name='contact' className=' font-outfit md:mx-25 mx-10 mt-10 border-b border-b-zinc-600'>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className='font-outfit text-3xl m-auto text-center my-10 text-white cursor-default'>Get in Touch</motion.p>
      <motion.form
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        ref={form} onSubmit={sendEmail} className='flex flex-col md:w-xl m-auto'>
        <motion.input
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          type="text" name="name" required className=' outline-none border border-yellow-400 bg-white/5 focus:bg-white/20 rounded placeholder:text-zinc-500 focus:placeholder:text-zinc-200 px-3 py-1 text-white focus:border-white transition-all duration-300 my-2' placeholder='Name' />
        <motion.input
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          type="email" name="email" required className=' outline-none border border-yellow-400 bg-white/5 focus:bg-white/20 rounded placeholder:text-zinc-500 focus:placeholder:text-zinc-200 px-3 py-1 text-white focus:border-white transition-all duration-300 my-2 ' placeholder='Email' />
        <motion.textarea
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          name="message" rows={5} required className=' outline-none border border-yellow-400 bg-white/5 focus:bg-white/20 rounded placeholder:text-zinc-500 focus:placeholder:text-zinc-200 px-3 py-1 text-white focus:border-white transition-all duration-300 my-2' placeholder='Write message' />
        <motion.input
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
          }}
          whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          type="submit" value="Send" className='bg-yellow-400 px-4 py-2 text-zinc-800 border-none rounded font-semibold outline-none cursor-pointer transition ease-out duration-200 w-25 m-auto mt-2 mb-10' />
      </motion.form>
    </Element>
  );
};


export default Contact