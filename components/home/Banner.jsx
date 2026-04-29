import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPaperclip } from "react-icons/fa6";
import avatar from "@/public/avatar.gif"

const Banner = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base-100 text-base-content transition-colors duration-500"
    >
      {/* Grid Background */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[linear-gradient(rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.12)_1px,transparent_1px)]
          dark:bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      ></div>

      {/* Glow Effects */}
      <div className="w-80 h-80 absolute left-10 top-16 -translate-y-1/2 rounded-full blur-3xl opacity-30 bg-secondary animate-pulse"></div>

      <div className="w-80 h-80 absolute right-10 top-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-30 bg-accent animate-pulse"></div>

      {/* Main Content */}
      <div className="container mx-auto p-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
          {/* Left Side */}
          <div className="flex flex-col space-y-5 text-center md:text-left">
            <span className="badge badge-primary px-4 py-3 text-white animate-bounce w-fit mx-auto md:mx-0">
              Hi I am
            </span>

            <h1 className="text-5xl md:text-8xl font-bold">
              Nick Roy
            </h1>

            <p className="max-w-2xl opacity-70">
              NixLab is my dream. It is not just a digital agency. It will be a
              lab of ideas—where creativity is born, skills are refined, and
              dreams are transformed into reality.
            </p>

            <div className="flex gap-6 justify-center md:justify-start">
              <Link href="/">
                <button className="btn btn-outline gap-2 group">
                  <FaPaperclip className="opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  Connect
                </button>
              </Link>

              <Link href="/">
                <button className="btn btn-outline gap-2 group">
                  <FaPaperclip className="opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  Hire Me
                </button>
              </Link>
            </div>

            <div className="animate-bounce text-2xl mt-6">
              ↓
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center">
                  <Image src={avatar} width={540} className="lg:absolute bottom-0" height={540} alt="avatar" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;