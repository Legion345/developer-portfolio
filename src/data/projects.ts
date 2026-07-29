import sovrnCoaching from "@/assets/images/sovrn-coaching-dir/sovrn-project.png";
import sovrnPhilosophy from "@/assets/images/sovrn-coaching-dir/sovrn-philosophy.png";
import sovrnBlueprint from "@/assets/images/sovrn-coaching-dir/sovrn-blueprint.png";
import sovrnTestimonials from "@/assets/images/sovrn-coaching-dir/sovrn-testimonials.png";
import sovrnEnrollment from "@/assets/images/sovrn-coaching-dir/sovrn-enrollment.png";
import contractorHero from "@/assets/images/contractor-hero-dir/contractor-hero-project.png";
import contractorHeroServices from "@/assets/images/contractor-hero-dir/contractor-hero-services.png";
import contractorHeroWhy from "@/assets/images/contractor-hero-dir/contractor-hero-why.png";
import contractorHeroWhere from "@/assets/images/contractor-hero-dir/contractor-hero-where.png";
import contractorHeroFAQ from "@/assets/images/contractor-hero-dir/contractor-hero-faq.png";
import contractorHeroContact from "@/assets/images/contractor-hero-dir/contractor-hero-contact.png";
import moonrayinteriors from "@/assets/images/moon-ray-dir/moon-ray-interiors.png";
import moonrayservices from "@/assets/images/moon-ray-dir/moon-ray-services.png";
import moonrayportfolio from "@/assets/images/moon-ray-dir/moon-ray-portfolio.png";
import moonrayabout from "@/assets/images/moon-ray-dir/moon-ray-about.png";
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
  /** Additional gallery images shown on the detail page, after the primary `image`. */
  images?: string[];
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
    images: [
      sovrnPhilosophy,
      sovrnBlueprint,
      sovrnTestimonials,
      sovrnEnrollment,
    ],
    description:
      "SOVRN Coaching is a business and personal development coaching program founded by Sabastian. Built off the back of a highly successful telecom sales career, SOVRN offers enrollment into a coaching program that includes biweekly coaching calls, live Q&As, a private community, in-person events, and access to Sabastian's personal business blueprint. It's designed for entrepreneurs and salespeople looking to level up their mindset and grow their business",
    technologies: [
      "TypeScript",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "Appwrite",
      "Vite",
    ],
    liveUrl: undefined,
  },
  {
    id: "2",
    slug: "contractor-hero",
    title: "Contractor Hero",
    category: "Web Development",
    image: contractorHero,
    images: [
      contractorHeroServices,
      contractorHeroWhy,
      contractorHeroWhere,
      contractorHeroFAQ,
      contractorHeroContact,
    ],
    description:
      "Contractor Hero is a licensed general building contractor based in Sacramento, California. With a commitment to quality craftsmanship and dependable service, they take on a wide range of construction projects for both homeowners and businesses across the state — bringing professionalism and expertise to every job they touch.",
    technologies: [
      "TypeScript",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "Appwrite",
      "Vite",
    ],
    liveUrl: undefined,
  },
  {
    id: "3",
    slug: "moon-ray-interiors",
    title: "Moon Ray Interiors",
    category: "Web Development",
    image: moonrayinteriors,
    images: [moonrayservices, moonrayportfolio, moonrayabout],
    description:
      "Moon Ray Interiors is a California-based interior design studio known for crafting serene, sunlit spaces that balance modern simplicity with organic warmth. From full home transformations to single-room refreshes, they bring a curated eye and a collaborative approach to every project, helping clients turn their space into a true reflection of how they want to live.",
    technologies: [
      "TypeScript",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "Appwrite",
      "Vite",
    ],
    liveUrl: "https://www.moonrayinteriors.com",
  },
  {
    id: "4",
    slug: "sababa-nights",
    title: "Sababa Nights Dancing",
    category: "Web Development",
    image: sababaNightsImage,
    images: [placeholder, placeholder],
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
    id: "7",
    slug: "sobriety-seven",
    title: "Sobriety Seven",
    category: "Mobile App",
    image: sobrietySevenImage,
    images: [placeholder, placeholder],
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
