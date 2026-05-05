import Orbit from "@/ui/Orbit";

export default function TechStackOrbit() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden   px-6 md:px-16">

      {/* 🟣 LEFT TEXT */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 z-20">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
          My Tech Stack
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg">
          A visual representation of the tools and technologies I use to build modern web applications.
        </p>
      </div>
  <div>
    <Orbit/>
  </div>
 
    </div>
  );
}