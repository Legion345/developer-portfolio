import sovrnCoaching from "@/assets/images/sovrn-project.png";
import contractorHero from "@/assets/images/contractor-hero-project.png";
import movieAppImage from "@/assets/images/movie-app.png";
import sababaNightsImage from "@/assets/images/sababanights.png";
import textBasedAdventureImage from "@/assets/images/text-based-adventure.png";
import westernImage from "@/assets/images/2dwestern.png";
import sobrietySevenImage from "@/assets/images/sobriety-seven.png";
import arduinoCarImage from "@/assets/images/arduino-car.png";

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
    description:
      "SOVRN Coaching is a business and personal development coaching program founded by Sabastian. Built off the back of a highly successful telecom sales career, SOVRN offers enrollment into a coaching program that includes biweekly coaching calls, live Q&As, a private community, in-person events, and access to Sabastian's personal business blueprint. It's designed for entrepreneurs and salespeople looking to level up their mindset and grow their business",
    technologies: ["Java", "Spring Boot", "Gradle"],
    liveUrl: undefined,
  },
  {
    id: "2",
    slug: "contractor-hero",
    title: "Contractor Hero",
    category: "Web Development",
    image: contractorHero,
    description:
      "Contractor Hero is a licensed general building contractor based in Sacramento, California. With a commitment to quality craftsmanship and dependable service, they take on a wide range of construction projects for both homeowners and businesses across the state — bringing professionalism and expertise to every job they touch.",
    technologies: ["Java", "Postman", "Spring Boot", "Gradle"],
    liveUrl: undefined,
  },
  {
    id: "3",
    slug: "movie-app",
    title: "Movie App - Mobile",
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
    slug: "arduino-car",
    title: "Arduino Car - (Personal project)",
    category: "Hardware / IoT",
    image: arduinoCarImage,
    description:
      "Designed and built an Arduino Uno–based obstacle-avoiding robot that autonomously detects objects in its path, stops and reverses to create clearance, scans left and right to assess distances, and dynamically turns toward the direction with the most open space for efficient navigation.",
    technologies: ["C++", "Makefile", "Arduino UNO"],
    githubUrl: "https://github.com/Legion345/arduino-car",
  },
  {
    id: "6",
    slug: "dungeon-crawler",
    title: "Dungeon Crawler Prototype",
    category: "Game",
    image: textBasedAdventureImage,
    description:
      "A lightweight RPG prototype built in Java using standard library tools. The project focuses on clean, responsive command-line interaction and a reliable game-state loop, showing how core gameplay systems can be implemented without external frameworks.",
    technologies: ["Java"],
    githubUrl: "https://github.com/Legion345/Text-based-adventure",
  },
  {
    id: "7",
    slug: "sobriety-seven",
    title: "Sobriety Seven - Mobile",
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
  {
    id: "8",
    slug: "2d-adventure",
    title: "2D Adventure Game - (Personal project)",
    category: "Game",
    image: westernImage,
    description:
      "A Java-based western adventure game featuring a custom 60 FPS game loop, sprite-based animations, and WASD character controls. Built with Java Swing and Gradle, implementing an entity-component architecture with double-buffered rendering for smooth gameplay. Demonstrates core game development principles including delta-time synchronization, event-driven input handling, and efficient resource management",
    technologies: ["Java", "Gradle", "GIMP"],
    githubUrl: "https://github.com/Legion345/2dAdventure",
  },
];

/** Find a project by its URL slug, or undefined if none matches. */
export function getProjectBySlug(
  slug: string | undefined,
): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
