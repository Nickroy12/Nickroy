import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsSendPlus } from "react-icons/bs";

const ProjectCard = ({ site }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 border-dashed border-2 overflow-hidden group relative">

        {/* Full Card Link */}
        <Link href={`/project/${site.id}`} className="absolute inset-0 z-10">
          <span className="sr-only">View Details for {site.title}</span>
        </Link>

        {/* Image + Overlay */}
        <figure className="p-4 relative">
          <Image
            src={site.image}
            width={400}
            height={250}
            alt={site.title}
            className="rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-4 rounded-xl bg-linear-to-b to-gray-900 from-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <div className="card-body">
              <div className="card-actions justify-end mt-4 relative z-20">
                <a
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-neutral"
                >
                  Preview <BsSendPlus />
                </a>
              </div>
              <h2 className="card-title text-white">{site.title}</h2>

              <div className="flex flex-wrap gap-2">
                {site.tool?.map((item, index) => (
                  <span key={index} className="badge text-white badge-outline">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default ProjectCard;