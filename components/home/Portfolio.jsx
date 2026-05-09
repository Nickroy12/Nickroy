'use client'
import React from "react";
import data from "@/data/project.json";
import ProjectCard from "@/ui/ProjectCard";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
  <motion.div  initial={{opacity:0 , y: -80}} whileInView={{opacity:1 ,y:0}} transition={{ duration: 2 }}    viewport={{ once: true }} className="w-11/12 mx-auto py-10" >
         <h1 className="text-3xl font-bold mb-10">Portfolio</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {data.map((site) => (
        <ProjectCard key={site.id} site={site} />
      ))}
    </div>
  </motion.div>
  );
};

export default Portfolio;