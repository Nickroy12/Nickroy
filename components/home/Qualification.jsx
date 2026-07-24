'use client'

import React from "react";

import { motion } from "framer-motion";

const qualifications = [
  {
    exam: "B.A (Honours)",
    institute: "Govt Titumir College",
    year: "Running.....",
    board: "",
  },
  {
    exam: "HSC",
    institute: "Nawab Habibullah Model School and College",
    year: "2022",
    board: "Dhaka",
  },
  {
    exam: "SSC",
    institute: "Haji College",
    year: "2020",
    board: "Dhaka",
  },
];

const QualificationPage = () => {
  return (
    <motion.div initial={{opacity:0 , y: 80}} whileInView={{opacity:1 ,y:0}} transition={{ duration: 2 }}    viewport={{ once: true }} className="w-11/12 md:w-10/12 mx-auto py-10 relative">
      {/* Glow Effects */}
      <div className="w-80 h-80 absolute left-10 top-16 -translate-y-1/2 rounded-full blur-3xl opacity-30 bg-secondary animate-pulse pointer-events-none -z-10"></div>
      <div className="w-80 h-80 absolute right-10 top-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-30 bg-accent animate-pulse pointer-events-none -z-10"></div>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
         Qualification
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-base-200">
            <tr>
              <th>Examination Name</th>
              <th>Institution Name</th>
              <th>Passed Year</th>
              <th>Board</th>
            </tr>
          </thead>

          <tbody>
            {qualifications.map((item, index) => (
              <tr key={index} className="hover">
                <th>{item.exam}</th>
                <td>{item.institute}</td>
                <td>{item.year}</td>
                <td>{item.board}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="grid grid-cols-2 justify-center gap-4 md:hidden">
        {qualifications.map((item, index) => (
          <div
            key={index}
            className=" rounded-xl p-4 shadow-sm bg-base-100"
          >
            <h3 className="text-lg font-bold mb-3">{item.exam}</h3>

            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Institution:</span>{" "}
                {item.institute}
              </p>

              <p>
                <span className="font-semibold">Passed Year:</span>{" "}
                {item.year}
              </p>

              <p>
                <span className="font-semibold">Board:</span> {item.board}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default QualificationPage;