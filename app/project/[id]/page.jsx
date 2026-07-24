import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsSendPlus, BsArrowLeft, BsCodeSlash, BsLightningCharge } from 'react-icons/bs';
import data from '@/data/project.json';

export default async function ProjectDetail({ params }) {
  // In Next.js 15+, params is a Promise
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const project = data.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden py-12 md:py-24 pb-32">
      
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-0 left-0 md:left-1/4 w-72 h-72 md:w-96 md:h-96 bg-gray-400/10 dark:bg-gray-600/10 rounded-full blur-[80px] md:blur-[120px] -z-10 mix-blend-screen animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 md:right-1/4 w-72 h-72 md:w-96 md:h-96 bg-gray-300/10 dark:bg-gray-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 mix-blend-screen animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

      <div className="w-11/12 max-w-7xl mx-auto relative z-10">
        
        {/* Navigation */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 backdrop-blur-md text-sm font-semibold hover:bg-black/10 dark:hover:bg-white/20 hover:-translate-x-2 transition-all duration-300 mb-12 shadow-sm text-black dark:text-white"
        >
          <BsArrowLeft className="text-lg" /> Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
          
          {/* Left: Project Image */}
          <div className="w-full lg:w-1/2 sticky top-24">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.05)] border border-black/10 dark:border-white/10 group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Inner glass gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-semibold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Preview Gallery
                </span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            
            {/* Header */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-black dark:text-white">
                {project.title}
              </h1>
              
              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-3">
                {project.tool?.map((item, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 rounded-lg text-[11px] sm:text-xs font-semibold tracking-wider uppercase bg-black/5 dark:bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/10 backdrop-blur-md shadow-sm transition-transform hover:scale-105 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Description Card */}
            <div className="bg-white/80 dark:bg-black/60 backdrop-blur-2xl p-8 lg:p-10 rounded-3xl border border-black/10 dark:border-white/10 shadow-lg dark:shadow-2xl">
              <div className="flex items-center gap-4 mb-6 text-black dark:text-white">
                <div className="p-3 bg-black/5 dark:bg-white/10 rounded-xl border border-black/5 dark:border-white/5">
                  <BsCodeSlash className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">About the Project</h2>
              </div>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-lg font-normal">
                {project.description}
              </p>
            </div>

            {/* Challenges Card */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="bg-white/80 dark:bg-black/60 backdrop-blur-2xl p-8 lg:p-10 rounded-3xl border border-black/10 dark:border-white/10 shadow-lg dark:shadow-2xl">
                <div className="flex items-center gap-4 mb-6 text-black dark:text-white">
                  <div className="p-3 bg-black/5 dark:bg-white/10 rounded-xl border border-black/5 dark:border-white/5">
                    <BsLightningCharge className="text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Challenges & Solutions</h2>
                </div>
                <ul className="space-y-6">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex gap-5 text-gray-800 dark:text-gray-200">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-sm font-bold mt-1">
                        {index + 1}
                      </span>
                      <span className="leading-relaxed text-lg font-normal">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="pt-4 pb-10">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-lg overflow-hidden transition-all hover:scale-105 shadow-xl shadow-black/20 dark:shadow-white/20 w-full sm:w-auto border border-black/10 dark:border-white/10"
              >
                <div className="absolute inset-0 bg-white/10 dark:bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10 tracking-wide">Live Preview</span>
                <BsSendPlus className="relative z-10 text-xl group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
