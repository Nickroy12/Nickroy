"use client";

import Image from "next/image";
import mypic from "@/public/nickroy.png";
import Link from "next/link";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";
// import Orbit from "@/ui/Orbit"; // remove if not using

const About = () => {
  const handleDownload = () => {
    const url =
      "https://drive.google.com/uc?export=download&id=1dXpQhbUHa7NdUPgYpSTN1r08ulYbK6Y8";

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Nick_Roy_CV.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="lg:relative w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row items-center gap-10 py-10">

      {/* Image Section */}
      <div className="flex justify-center items-center w-full md:w-1/2">
        <Image
          src={mypic}
          alt="nick"
          className="drop-shadow-2xl rounded-xl"
        />
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col space-y-5 text-center md:text-left md:w-1/2 z-10">

        <h2 className="text-4xl font-bold">About Me</h2>

        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
          Hey there! I'm Nick Roy, a passionate and creative web designer and
          developer. As a student of the ever-evolving digital world, I am
          deeply committed to crafting visually stunning and user-friendly
          websites that leave a lasting impact.
        </p>

        {/* Buttons + Socials */}
        <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-2 rounded-full 
            bg-gradient-to-r from-gray-400 via-white to-slate-300 
            text-black shadow-lg 
            hover:scale-105 transition-all duration-300"
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
      </div>
    </div>
  );
};

export default About;