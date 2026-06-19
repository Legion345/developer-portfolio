import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

// Large cards appear every 3rd position after the first row of 3 (indices 3, 6, …).
function isLargeCard(index: number): boolean {
  return index >= 3 && (index - 3) % 3 === 0;
}

// Mobile/tablet: single column (the grid's md:grid-cols-2 drives the 2-up layout).
// Desktop: large cards span 4 columns (2/3 width); everything else spans 2.
function getCardClasses(index: number): string {
  return `col-span-1 ${isLargeCard(index) ? "lg:col-span-4" : "lg:col-span-2"}`;
}

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-9xl font-bold text-gray-900 mb-4">
            My
            <br />
            Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={getCardClasses(index)}
              isLarge={isLargeCard(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
