export function Skills() {
  // Sample skills data for demonstration
  const sampleSkills = [
    // Languages
    { _id: "1", name: "Java", category: "languages", proficiency: 5, order: 1 },
    { _id: "2", name: "C++", category: "languages", proficiency: 4, order: 2 },
    { _id: "3", name: "JavaScript", category: "languages", proficiency: 5, order: 3 },
    { _id: "4", name: "TypeScript", category: "languages", proficiency: 4, order: 4 },
    { _id: "5", name: "Python", category: "languages", proficiency: 4, order: 5 },
    
    // Frameworks
    { _id: "6", name: "Spring Boot", category: "frameworks", proficiency: 5, order: 1 },
    { _id: "7", name: "React Native", category: "frameworks", proficiency: 5, order: 2 },
    { _id: "8", name: "Node.js", category: "frameworks", proficiency: 5, order: 3 },
    { _id: "9", name: "Expo", category: "frameworks", proficiency: 5, order: 4 },
    
    // Tools
    { _id: "10", name: "Git", category: "tools", proficiency: 5, order: 1 },
    { _id: "11", name: "Gradle", category: "tools", proficiency: 5, order: 2 },
    { _id: "12", name: "Linux", category: "tools", proficiency: 5, order: 3 },
    
    // Databases
    { _id: "13", name: "MongoDB", category: "databases", proficiency: 4, order: 1 },
    { _id: "14", name: "MySQL", category: "databases", proficiency: 4, order: 2 },
  ];

  const displaySkills = sampleSkills;

  const groupedSkills = displaySkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof displaySkills>);

  const categoryTitles = {
    languages: "Programming Languages",
    frameworks: "Frameworks & Libraries",
    tools: "Tools & Technologies",
    databases: "Databases"
  };

  const getProficiencyWidth = (proficiency: number) => {
    return `${(proficiency / 5) * 100}%`;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {categoryTitles[category as keyof typeof categoryTitles]}
              </h3>
              
              <div className="space-y-4">
                {categorySkills
                  .sort((a, b) => a.order - b.order)
                  .map((skill) => (
                    <div key={skill._id}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.proficiency}/5
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: getProficiencyWidth(skill.proficiency) }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
