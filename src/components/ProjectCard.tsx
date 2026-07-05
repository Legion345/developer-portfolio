import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  /** Layout-driven extra classes (column spans) from the parent grid. */
  className?: string;
  /** Large cards use a wider image ratio and smaller title. */
  isLarge?: boolean;
};

export function ProjectCard({
  project,
  className = "",
  isLarge = false,
}: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      aria-label={`Show project: ${project.title}`}
      className={`group flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${className}`}
    >
      <img
        src={project.image}
        alt={`Screenshot or thumbnail for ${project.title}`}
        className={`w-full ${
          isLarge ? "aspect-[4/3] lg:aspect-[3/2]" : "aspect-[4/3]"
        } object-cover transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none`}
      />

      <div className={`flex flex-1 flex-col ${isLarge ? "lg:p-4 p-5" : "p-5"}`}>
        <h3
          className={`${isLarge ? "lg:text-lg" : "text-xl"} font-semibold text-gray-900 mb-2`}
        >
          {project.title}
        </h3>

        {/* Label slot: category slides up to reveal "Show project" on hover (desktop).
            On touch there is no hover, so the category stays visible and the whole
            card is tappable. */}
        <div className="relative mt-auto h-6 overflow-hidden text-sm">
          <span className="block text-gray-500 transition-transform duration-300 ease-out group-hover:-translate-y-full motion-reduce:transition-none">
            {project.category}
          </span>
          <span
            aria-hidden="true"
            className="absolute inset-0 flex translate-y-full items-center font-medium text-blue-600 transition-transform duration-300 ease-out group-hover:translate-y-0 motion-reduce:transition-none"
          >
            Show project &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
