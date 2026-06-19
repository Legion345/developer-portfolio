import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { ExternalLinkIcon, GitHubIcon } from "@/components/icons";
import { getProjectBySlug } from "@/data/projects";

function BackToProjects() {
  return (
    <Link
      to="/#projects"
      className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
    >
      <span aria-hidden="true">&larr;</span> Back to projects
    </Link>
  );
}

export function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Project not found
          </h1>
          <p className="text-gray-600 mb-8">
            We couldn&apos;t find a project at this address.
          </p>
          <BackToProjects />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="mb-8">
          <BackToProjects />
        </div>

        <img
          src={project.image}
          alt={`Screenshot or thumbnail for ${project.title}`}
          className="w-full aspect-[16/9] object-cover rounded-lg shadow-lg mb-8"
        />

        <p className="text-sm font-medium text-blue-600 mb-2">
          {project.category}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {project.title}
        </h1>

        <p className="text-gray-700 leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              <GitHubIcon className="w-5 h-5" />
              View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ExternalLinkIcon className="w-5 h-5" />
              Visit live site
            </a>
          )}
        </div>
      </main>
    </div>
  );
}
