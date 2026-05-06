import Orbit from "@/ui/Orbit";

export default function TechStackOrbit() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden   px-6 md:px-16">

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