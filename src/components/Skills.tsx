// One entry per category, with the heading lines and the blurb kept together as
// a single unit. Before ffd3f97 this was one entry per skill, grouped at render
// time and joined to a separate `categoryTitles` map through an `as keyof` cast
// — which let the data and the markup drift apart. Keeping them in one object
// makes a category without a title unrepresentable.
const skillCategories = [
  {
    id: "languages",
    line1: "Software",
    line2: "Development",
    description:
      "Experienced in both functional and OOP: Java, C++, Python, JavaScript, TypeScript, HTML & CSS, and Lua.",
  },
  {
    id: "backend",
    line1: "Backend Dev",
    line2: "Springboot, REST API",
    description:
      "Passionate about API design and optimization, with over 4+ years of experience in backend technologies including Java, Spring boot, SQL, and PostgreSQL.",
  },
  {
    id: "mobile",
    line1: "React Native Dev",
    line2: "Android, iOS",
    description:
      "Skilled in developing hybrid mobile apps and cross-platform solutions using the React Native framework.",
  },
] as const;

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-8xl text-center font-bold text-gray-900 mb-4">
            My Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {category.line1}
                <br />
                {category.line2}
              </h3>

              <p className="text-md text-gray-600 leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
