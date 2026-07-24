"use client";
import React from 'react';
import Card from '@/ui/Card';
import data from '@/data/data.json';
import Marquee from 'react-fast-marquee';

const TreeBadge = ({ children }) => {
  return (
    <span className={`
      relative cursor-default
      bg-white/80 dark:bg-black/80 backdrop-blur-xl 
      text-black dark:text-white
      font-bold tracking-wider uppercase
      px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl text-[9px] sm:text-[11px] lg:text-xs shadow-md
      border border-gray-300 dark:border-gray-700
      transition-all duration-300 hover:scale-110 hover:-translate-y-1 z-10 whitespace-nowrap
      hover:shadow-xl hover:border-black dark:hover:border-white
    `}>
      {children}
    </span>
  );
};

const Knowlege = () => {

  const frontendSkills = [

    ["REACT", "NEXT.JS"],
    ["HEROUI", "DAISYUI"],
    ["TAILWIND CSS"]
  ];

  const backendSkills = [
    ["NODE.JS", "EXPRESS"],
    ,
    ["MONGODB"],
    ["BETTER AUTH"]
  ];

  return (
    <div className="w-11/12 mx-auto relative p-5 py-20 flex flex-col xl:flex-row gap-16 items-center">

      {/* Glow Effects */}
      <div className="w-80 h-80 absolute left-10 top-16 -translate-y-1/2 rounded-full blur-3xl opacity-30 bg-secondary animate-pulse pointer-events-none -z-10"></div>
      <div className="w-80 h-80 absolute right-10 top-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-30 bg-accent animate-pulse pointer-events-none -z-10"></div>

      {/* LEFT SIDE: Marquee & Heading */}
      <div className="w-full xl:w-[55%] relative overflow-hidden pb-10">
        <h1 className="text-4xl md:text-5xl dark:text-white font-bold mb-16 text-center xl:text-left">
          What I Know
        </h1>

        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent" />

        <div className="rotate-2 space-y-5">
          <Marquee pauseOnHover={true}>
            <div className="flex gap-6 px-3">
              {data.slice(0, 5).map((item) => (
                <Card key={item.id} data={item} />
              ))}
            </div>
          </Marquee>

          <Marquee direction="right" pauseOnHover={true}>
            <div className="flex gap-6 px-3">
              {data.slice(5, 10).map((item) => (
                <Card key={item.id} data={item} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>

      {/* RIGHT SIDE: Tree Structure */}
      <div className="w-full xl:w-[45%] relative mt-10 xl:mt-0">

        {/* UNIFIED LAYOUT (Tree by Position for Mobile & Desktop) */}
        <div className="relative w-full h-[450px]">

          {/* --- Connecting Lines --- */}
          {/* Central Trunk from Root */}
          <div className="absolute top-[2rem] left-1/2 -translate-x-1/2 w-[2px] h-[3rem] bg-gradient-to-b from-gray-400 to-gray-300 dark:from-white dark:to-gray-500 z-0"></div>

          {/* Horizontal Split */}
          <div className="absolute top-[5rem] left-1/4 w-1/2 h-[2px] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-500 dark:via-white dark:to-gray-500 z-0"></div>

          {/* Left Trunk */}
          <div className="absolute top-[5rem] left-1/4 -translate-x-1/2 w-[2px] h-[16rem] bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-500 dark:to-transparent z-0"></div>

          {/* Right Trunk */}
          <div className="absolute top-[5rem] left-3/4 -translate-x-1/2 w-[2px] h-[16rem] bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-500 dark:to-transparent z-0"></div>

          {/* Subtle Center Divider */}

          {/* --- Root Button --- */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-black/90 dark:bg-white/90 backdrop-blur-md text-white dark:text-black font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-xl border border-gray-700 dark:border-gray-300 tracking-widest text-[10px] sm:text-sm cursor-default hover:scale-105 transition-transform duration-300 whitespace-nowrap">
              MY SKILLS
            </div>
          </div>

          {/* --- LEFT BRANCH BADGES (Frontend) --- */}
          {frontendSkills.map((skills, index) => (
            <div key={`f-${index}`} className="absolute left-1/4 -translate-x-1/2 flex gap-2 sm:gap-3 z-10" style={{ top: `${8 + (index * 7)}rem` }}>
              {skills.map((skill) => (
                <TreeBadge key={skill}>{skill}</TreeBadge>
              ))}
            </div>
          ))}

          {/* --- RIGHT BRANCH BADGES (Backend) --- */}
          {backendSkills.map((skills, index) => (
            <div key={`b-${index}`} className="absolute left-3/4 -translate-x-1/2 flex gap-2 sm:gap-3 z-10" style={{ top: `${8 + (index * 3)}rem` }}>
              {skills.map((skill) => (
                <TreeBadge key={skill}>{skill}</TreeBadge>
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Knowlege;