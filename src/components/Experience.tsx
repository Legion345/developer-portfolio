import streetSoundImage from '@/assets/images/street-sound-society.png'
import sobrietySevenImage from '@/assets/images/sobriety-seven.png'
import harelImage from '@/assets/images/harel.jpg'

export function Experience() {
  // Sample experience data for demonstration
  const sampleExperience = [
    {
      _id: "1",
      company: "Sobriety Seven, Inc",
      position: "Full-Stack Engineer",
      startDate: "2025-06",
      endDate: undefined,
      description: "Built scalable app architecture and databases for 10+ features, developed responsive real-time social media frontends, secured backends with API rate limiting, integrated Clerk for seamless authentication, and optimized queries for faster profile and feed loads.",
      technologies: ["React", "React Native", "Node.js", "TypeScript", "JavaScript", "Tailwind CSS"], 
      logo: sobrietySevenImage,
      order: 1 }, 
    { _id: "2",
      company: "Street Sound Society",
      position: "Embedded Systems Engineer",
      startDate: "2025-01",
      endDate: "2025-06",
      description: "Developed C++ code for a relay ensuring proper activation and hardware integration, troubleshot and resolved voltage conversion issues for reliable retractable microphone operation in real-time applications, and conducted QA testing to identify and fix functionality issues enhancing system reliability and performance.",
      technologies: ["Arduino", "C++", "Microprocessors"],
      logo: streetSoundImage,
      order: 2
    },
    {
      _id: "3",
      company: "Freelance",
      position: "Software Engineer",
      startDate: "2023-01",
      endDate: "2025-01",
      description: "Collaborated with a senior developer/founder to create solutions in their startup on hardware component reliability.",
      technologies: ["C++", "Makefile", "Arduino"],
      logo: harelImage,
      order: 3
    },
  ];

  const displayExperience = sampleExperience;

  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>

          {displayExperience
            .sort((a, b) => a.order - b.order)
            .map((exp, index) => (
              <div key={exp._id} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        {exp.logo && (
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-14 h-14 mr-3"
                          />
                        )}
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {exp.position}
                          </h3>
                          <h4 className="text-lg text-blue-600 font-medium">
                            {exp.company}
                          </h4>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">
                        {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                      </p>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}


