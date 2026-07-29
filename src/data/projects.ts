import sovrnCoaching from "@/assets/images/sovrn-project.png";
import contractorHero from "@/assets/images/contractor-hero-project.png";
import movieAppImage from "@/assets/images/movie-app.png";
import sababaNightsImage from "@/assets/images/sababanights.png";
import sobrietySevenImage from "@/assets/images/sobriety-seven.png";

export type Project = {
  id: string;
  /** Stable URL segment used by the /projects/:slug route. */
  slug: string;
  title: string;
  /** Short label shown on the landing card (slides away to reveal "Show project"). */
  category: string;
  image: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "sovrn-coaching",
    title: "SOVRN Coaching",
    category: "Web Development",
    image: sovrnCoaching,
    description: "Web Development abc, 123, abc-123",
    technologies: ["Java", "Spring Boot", "Gradle"],
    githubUrl: "https://github.com/Legion345/springboot-restapi",
    liveurl: undefined,
  },
  {
    id: "2",
    slug: "contractor-hero",
    title: "Contractor Hero",
    category: "Web Development",
    image: contractorHero,
    description: "Web Development",
    technologies: ["Java", "Postman", "Spring Boot", "Gradle"],
    githubUrl: "https://github.com/Legion345/settling-scores/tree/master",
  },
  {
    id: "3",
    slug: "movie-app",
    title: "Movie App",
    category: "Mobile App",
    image: movieAppImage,
    description:
      "The app allows users to browse trending movies, search through thousands of titles, and track search analytics in real-time, providing an engaging way to discover and explore the world of cinema.",
    technologies: [
      "TypeScript",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "Appwrite",
      "Vite",
    ],
    githubUrl: "https://github.com/Legion345/movie_app",
  },
  {
    id: "4",
    slug: "sababa-nights",
    title: "Sababa Nights Dancing",
    category: "Web Development",
    image: sababaNightsImage,
    description:
      "Sababa Nights brings dancers together through a vibrant mix of Israeli and popular styles. It unlocks a unique dance experience built on creative choreography, intentional community, and events that keep people coming back",
    technologies: [
      "TypeScript",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Vite",
      "HTML",
    ],
    liveUrl: "https://www.sababanights.com",
  },
  {
    id: "5",
    slug: "sobriety-seven",
    title: "Sobriety Seven",
    category: "Mobile App",
    image: sobrietySevenImage,
    description:
      "A transformative social training platform helping women rethink alcohol from the ground up. Through guided coursework, community support, and practical behavior-change tools, members build clarity, confidence, and sustainable new habits.",
    technologies: [
      "TypeScript",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "Clerk",
      "Arcjet",
      "Cloudinary",
      "MongoDB",
    ],
    githubUrl: "https://github.com/Legion345/movie_app",
  },
];

/** Find a project by its URL slug, or undefined if none matches. */
export function getProjectBySlug(
  slug: string | undefined,
): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
