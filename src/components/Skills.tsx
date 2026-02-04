export function Skills() {
  const mySkills = [
    { _id: "1", category: "languages",
      description: "Experienced in both functional and OOP: Java, C++, Python, JavaScript, TypeScript, HTML & CSS, and Lua.",
      order: 1
    },
    {
      _id: "6",
      category: "backend",
      description: "Passionate about API design and optimization, with over 3+ years of experience in backend technologies including Java, Spring boot, SQL, and PostgreSQL.",
      order: 1
    },
    {
      _id: "10",
      category: "mobile",
      description: "Skilled in developing hybrid mobile apps and cross-platform solutions using the React Native framework.",
      order: 1
    },

  ];

  const displaySkills = mySkills;

  const groupedSkills = displaySkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof displaySkills>);

  const categoryTitles = {
    languages: { line1: "Software", line2: "Development" },
    backend: { line1: "Backend Dev", line2: "Springboot, REST API" },
    mobile: { line1: "React Native Dev", line2: "Android, iOS" },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {categoryTitles[category as keyof typeof categoryTitles].line1}
                <br />
                {categoryTitles[category as keyof typeof categoryTitles].line2}
              </h3>
              
              <div className="space-y-4">
                {categorySkills
                  .sort((a, b) => a.order - b.order)
                  .map((skill) => (
                    <div key={skill._id}>
                      <h4 className="text-base font-semibold text-gray-900 mb-2">
                        {skill.name}
                      </h4>
                      <p className="text-md text-gray-600 leading-relaxed">
                        {skill.description}
                      </p>
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
