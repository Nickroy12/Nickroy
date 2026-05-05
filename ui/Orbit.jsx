'use client';

import React from 'react';
import { OrbitPath, OrbitItem } from 'react-orbit-component';

import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiExpress,  } from "react-icons/si";
import { HiCode } from 'react-icons/hi';


const Orbit = () => {
  return (
    <div>
             {/* 🌀 RIGHT ORBIT */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative min-h-[500px]">

        {/* Glow Background */}
        <div className="absolute inset-0">
          <div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl top-10 left-10 animate-pulse" />
          <div className="absolute w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />
        </div>

        {/* CENTER CORE (Next.js) */}
        <div className="absolute z-10 w-16 h-16 flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black shadow-lg">
         <HiCode  size={28} /> 
        </div>

        {/* 🟡 FRONTEND ORBIT */}
        <OrbitPath type="circle" className="absolute w-64 h-64 rounded-full border border-black/10 dark:border-white/10">
          <OrbitItem className="w-10 h-10 flex items-center justify-center bg-cyan-500 text-white rounded-full">
            <FaReact />
          </OrbitItem>

          <OrbitItem startAngle={180} step={0.2} className="w-10 h-10 flex items-center justify-center bg-sky-500 text-white rounded-full">
            <SiTailwindcss />
          </OrbitItem>
        </OrbitPath>

        {/* 🟢 BACKEND ORBIT */}
        <OrbitPath type="circle" className="absolute w-96 h-96 rounded-full border border-black/10 dark:border-white/10">
          <OrbitItem startAngle={90} step={0.25} className="w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full">
            <FaNodeJs />
          </OrbitItem>

          <OrbitItem startAngle={270} step={0.25} className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full">
            <SiExpress />
          </OrbitItem>
        </OrbitPath>

        {/* 🔵 DATABASE / TOOLS ORBIT */}
        <OrbitPath type="circle" className="absolute w-[28rem] h-[28rem] rounded-full border border-black/10 dark:border-white/10">
          <OrbitItem direction="counter-clockwise" step={0.3} className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full">
            <SiMongodb />
          </OrbitItem>

          <OrbitItem startAngle={200} step={0.3} className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">
            <FaGithub />
          </OrbitItem>

          <OrbitItem startAngle={320} step={0.3} className="w-10 h-10 flex items-center justify-center bg-black text-white dark:bg-white dark:text-black shadow-lg rounded-full">
             <SiNextdotjs  />
          </OrbitItem>
        </OrbitPath>

      </div>
    </div>
  )
}

export default Orbit