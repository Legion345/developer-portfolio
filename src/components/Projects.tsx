import restapiImage from '@/assets/images/restapi.png'
import settlingScoresImage from '@/assets/images/settling-scores.png'
import movieAppImage from '@/assets/images/movie-app.png'
import sababaNightsImage from '@/assets/images/sababanights.png'

export function Projects() {
  // Projects data for demonstration
  const myProjects = [
    {
      _id: "1",
      title: "Meetup Groups REST API",
      image: restapiImage,
      description:"The Meetup Groups REST API is a Spring Boot application designed to help discover and manage technology meetup groups. This API provides endpoints to browse technology meetup groups organized by city and technology focus, making it easy to find and connect with local tech communities.",
      technologies: ["Java", "Spring Boot", "Gradle"],
      githubUrl: "https://github.com/Legion345/springboot-restapi",
      // liveUrl: "https://ecommerce-demo.com",
      featured: true,
      order: 1
    },
    {
      _id: "2",
      title: "Settling Scores App - REST API",
      image: settlingScoresImage,
      description: "A collaborative task management REST API with real-time updates, and to settle any differences between two parties.",
      technologies: ["Java", "Postman", "Spring Boot", "Gradle"],
      githubUrl: "https://github.com/Legion345/settling-scores/tree/master",
      // liveUrl: "https://taskmanager-demo.com",
      featured: true,
      order: 2
    },
    {
      _id: "3",
      title: "Movie App - Mobile",
      image: movieAppImage,
      description: "The app allows users to browse trending movies, search through thousands of titles, and track search analytics in real-time, providing an engaging way to discover and explore the world of cinema.",
      technologies: ["TypeScript", "React Native", "Expo", "Tailwind CSS", "Appwrite", "Vite"],
      githubUrl: "https://github.com/Legion345/movie_app",
      // liveUrl: "https://weather-demo.com",
      featured: false,
      order: 3
    },
    {
      _id: "4",
      title: "Sababa Nights Dancing - Web Development",
      image: sababaNightsImage,
      description: "Sababa Nights Dancing mixes styles of Israeli Dancing and many other popular styles of dancing with creativity. It goes one step further with a team that is passionate that implements a feeling of community from the services provided. Connectivity at work from session locations and event planning with a people-centred focus.",
      technologies: ["TypeScript", "JavaScript", "React", "Tailwind CSS", "Vite", "HTML"],
      githubUrl: "https://github.com/Legion345/sababanights-website",
      // liveUrl: "https://weather-demo.com",
      featured: false,
      order: 4
    },
   /* {
      _id: "5",
      title: "arduino car",
      image: "placeholder",
      description: "placeholder",
      technologies: ["C++", "Makefile", "Arduino UNO"],
      githubUrl: "https://github.com/Legion345/arduino-car",
      // liveUrl: "https://weather-demo.com",
      featured: false,
      order: 5
    },
    {
      _id: "6",
      title: "text based adventure",
      image: "placeholder",
      description: "placeholder",
      technologies: ["Java"],
      githubUrl: "https://github.com/Legion345/Text-based-adventure",
      // liveUrl: "https://weather-demo.com",
      featured: false,
      order: 6
    },
    {
      _id: "7",
      title: "Sobriety Seven",
      image: "placeholder",
      description: "placeholder",
      technologies: ["TypeScript", "React Native", "Expo", "Tailwind CSS", "Clerk", "Arcjet", "Cloudinary", "MongoDB"],
      githubUrl: "https://github.com/Legion345/movie_app",
      // liveUrl: "https://weather-demo.com",
      featured: false,
      order: 7
    },
    {
      _id: "8",
      title: "2D Adventure Game",
      image: "placeholder",
      description: "placeholder",
      technologies: ["Java", "Gradle", "GIMP"],
      githubUrl: "https://github.com/Legion345/2dAdventure",
      // liveUrl: "https://weather-demo.com",
      featured: false,
      order: 8 
    },*/
  ];

  const displayProjects = myProjects;

  const isLargeCard = (index: number): boolean => {
    // Large cards are at indices 3, 6, 9, etc. (every 3rd card after first 3)
    if (index < 3) return false;
    const positionAfterFirstRow = index - 3;
    return positionAfterFirstRow % 3 === 0;
  };

  const getCardClasses = (index: number): string => {
    // Mobile: all cards single column
    let classes = "col-span-1";

    // Tablet: all cards single column
    classes += " md:col-span-1";

    // Desktop: First row has 3 cards (each 2 cols), then asymmetric layout
    if (index < 3) {
      // First 3 cards: span 2 columns each (2+2+2 = 6 columns total = 3 cards)
      classes += " lg:col-span-2";
    } else {
      // After first 3: large cards span 4 columns (2/3 width), normal cards span 2 columns (1/3 width)
      const isLarge = isLargeCard(index);
      classes += isLarge ? " lg:col-span-4" : " lg:col-span-2";
    }

    return classes;
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
        </div>

       
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        {displayProjects.map((project, index) => {
          const isLarge = isLargeCard(index);
          return (
          <div
            key={project._id}
            className={`${getCardClasses(index)} bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow`}
          >
            {/*  Image section */}
            {project.image ? (
              <img
                src={project.image}
                alt={`Screenshot or thumbnail for ${project.title}`}
                className={`w-full ${isLarge ? 'lg:h-72' : 'h-48'} ${project._id === "2" ? "object-contain bg-gray-50" : "object-cover"} `}
              />
            ) : (
              <div className={`${isLarge ? 'lg:h-72' : 'h-48'} bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center`}>
                <div className="text-white text-7xl font-bold opacity-20">
                  {project.title.charAt(0)}
                </div>
              </div>
            )}
              <div className={isLarge ? 'lg:p-4 p-6' : 'p-6'}>
                <h3 className={`${isLarge ? 'lg:text-lg' : 'text-xl'} font-semibold text-gray-900 mb-2`}>
                  {project.title}
                </h3>

                <p className={`text-gray-600 mb-4 ${isLarge ? 'lg:text-xs lg:leading-snug' : 'text-sm'} leading-relaxed`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
