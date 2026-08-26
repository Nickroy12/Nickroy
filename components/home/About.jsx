"use client";

import Image from "next/image";
import mypic from "@/public/nickroy.png";
import Link from "next/link";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";

const About = () => {
  const handleDownload = () => {
    const url =
      "https://drive.google.com/file/d/1HPw451cp9QJq951ha1wBWWHRAOyheHOz/view?usp=sharing";

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Nick_Roy_CV.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="lg:relative w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row items-center gap-10 py-10 relative">
      {/* Glow Effects */}
      <div className="w-80 h-80 absolute left-10 top-16 -translate-y-1/2 rounded-full blur-3xl opacity-30 bg-secondary animate-pulse pointer-events-none -z-10"></div>
      <div className="w-80 h-80 absolute right-10 top-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-30 bg-accent animate-pulse pointer-events-none -z-10"></div>
      {/* Image Section */}
      <div className="flex justify-center items-center w-full md:w-1/2">
        <motion.div initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }} viewport={{ once: true }}>
          <Image
            src={mypic}
            alt="nick"
            className="drop-shadow-2xl rounded-xl"
          />
        </motion.div>

      </div>

      {/* Content Section */}
      <motion.div initial={{ opacity: 0, y: -80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} viewport={{ once: true }} className="relative flex flex-col space-y-5 text-center md:text-left md:w-1/2 z-10">

        <h2 className="text-4xl font-bold">About Me</h2>

        <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg">
          Hey there! I'm Nick Chandra Roy, a passionate Full-Stack Web Developer with a sharp eye for modern design. As a student of the ever-evolving digital world, I am deeply committed to crafting visually stunning, high-performance, and user-friendly web applications. I specialize in the React ecosystem, specifically Next.js and Tailwind CSS, and love bringing complex ideas to life through elegant code and intuitive user interfaces. My goal is to build digital experiences that not only look beautiful but also leave a lasting impact by solving real-world problems seamlessly.
        </p>

        {/* Buttons + Socials */}
        <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-2 rounded-full 
            bg-gradient-to-r from-gray-400 via-white to-slate-300 
            text-black shadow-lg 
            hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Download CV
          </button>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl">
            <Link href="https://www.linkedin.com/in/nickroychandraroy/" target="_blank">
              <TiSocialLinkedin className="hover:text-blue-500 hover:scale-110 transition" />
            </Link>

            <Link href="https://github.com/Nickroy12" target="_blank">
              <FaGithub className="hover:text-gray-800 dark:hover:text-white hover:scale-110 transition" />
            </Link>

            <Link href="https://wa.me/8801918416250" target="_blank">
              <FaWhatsapp className="hover:text-green-500 hover:scale-110 transition" />
            </Link>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default About;
