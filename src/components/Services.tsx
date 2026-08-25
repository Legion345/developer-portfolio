export function Services() {
  const BrowserIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <line x1="2" y1="8" x2="22" y2="8" />
      <line x1="6" y1="5.5" x2="6.01" y2="5.5" />
      <line x1="9" y1="5.5" x2="9.01" y2="5.5" />
    </svg>
  );

  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-600 mt-0.5 shrink-0"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const services = [
    {
      icon: <BrowserIcon />,
      title: "Pre-Build",
      subtitle: "The best websites attract attention and inspire action.",
      includes: [
        "Onboarding + integrations",
        "Discovery and strategy",
        "SEO research + audience insights",
        "Design direction",
      ],
    },
    {
      icon: <BrowserIcon />,
      title: "Build",
      subtitle:
        "We guide you through every step—from strategy to launch and continuous growth.",
      includes: [
        "Full content and page design",
        "Development and CRM setup",
        "SEO implementation + tracking",
        "Site launch",
      ],
    },
    {
      icon: <BrowserIcon />,
      title: "Ongoing",
      subtitle:
        "Your website launch isn't the finish line—it's just the start.",
      includes: [
        "Hosting, maintenance, and updates",
        "Reporting and business reviews",
        "CRO and SEO improvements",
        "Always-on support",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <p className="text-sm text-blue-600 uppercase tracking-widest mb-2">
            What I offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Website Matters. The Simple, Impactful Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-5">{service.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-5">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-5">{service.subtitle}</p>

              <hr className="border-gray-200 mb-5" />

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
