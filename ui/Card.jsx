import Image from "next/image";
import React from "react";

const Card = ({ data }) => {
  return (
    <div
      className="group relative h-40 w-40 rounded-xl overflow-visible
      bg-gradient-to-r
      dark:from-gray-700 dark:to-slate-500
      hover:to-indigo-100/40 dark:hover:to-slate-400
      transition-all duration-500"
    >
      {/* Glow */}
      <div
        className="absolute -top-5 left-0 w-full h-full scale-[0.8] blur-lg
        bg-gradient-to-r from-gray-300 to-gray-800
        dark:from-gray-600 dark:to-slate-400
        opacity-70 group-hover:opacity-100
        transition-all duration-500"
      />

      {/* Card Content */}
      <div
        className="relative flex flex-col items-center justify-center w-full h-full rounded-xl
        bg-white dark:bg-neutral-900 text-black dark:text-white
        transition-transform duration-500 ease-out
        cursor-pointer will-change-transform"
      >
        <Image
          src={data.image}
          width={60}
          height={60}
          alt="data"
          className="grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <h2>{data.technology}</h2>
      </div>
    </div>
  );
};

export default Card;