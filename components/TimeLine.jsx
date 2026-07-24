import Orbit from "@/ui/Orbit";

export default function TechStackOrbit() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden relative px-6 md:px-16">
      {/* Glow Effects */}
      <div className="w-80 h-80 absolute left-10 top-16 -translate-y-1/2 rounded-full blur-3xl opacity-30 bg-secondary animate-pulse pointer-events-none -z-10"></div>
      <div className="w-80 h-80 absolute right-10 top-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-30 bg-accent animate-pulse pointer-events-none -z-10"></div>

      {/* 🟣 LEFT TEXT */}
      <div className="  flex flex-col gap-4 z-20">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
         My Hobby
        </h1>
<p className="text-gray-600 dark:text-gray-300 text-lg max-w-xl">
  My hobbies reflect the curiosity and creativity that influence both my personal life and professional work.
</p>
     <div className="flex gap-3">
         <button className="btn-sm btn">Reading Books</button>
         <button className="btn-sm btn">Outing</button>
         <button className="btn-sm btn">Coding</button>
         <button className="btn-sm btn">Thinking</button>
     </div>
      </div>
  <div>
    <Orbit/>
  </div>
 
    </div>
  );
}