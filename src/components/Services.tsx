export function Services() {
  const BrowserIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
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

  const MobileIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
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
      title: "Web App",
      subtitle: "For business that need a clean online presence fast.",
      price: "$1,500",
      timeline: "Delivered in 7-10 days",
      includes: [
        "Clean, mobile-responsive design",
        "Contact form or lead capture",
        "Deployed and ready to go live",
        "One revision round",
      ],
      featured: false,
    },
    {
      icon: <MobileIcon />,
      title: "Mobile App MVP",
      subtitle: "For founders who need a working app to show real users.",
      price: "$3,500",
      timeline: "Delivered in 3-4 weeks",
      includes: [
        "React Native, iOS + Android",
        "Core feature set built out",
        "Deployed to TestFlight",
        "One revision round",
      ],
      featured: true,
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
            Fixed price. Fixed timeline. No surprises.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className={`bg-white rounded-lg shadow-lg p-6 flex flex-col hover:shadow-xl transition-shadow ${
                service.featured ? "border-2 border-blue-600" : ""
              }`}
            >
              {service.featured && (
                <span className="self-start text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-800 mb-4">
                  Most requested
                </span>
              )}

              <div className="text-blue-600 mb-3">{service.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-5">{service.subtitle}</p>

              <p className="text-2xl font-bold text-gray-900 mb-1">
                {service.price}
              </p>
              <p className="text-xs text-gray-500 mb-5">{service.timeline}</p>

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

              <a
                href="#contact"
                className={`text-center py-3 rounded-lg text-sm font-semibold transition-colors ${
                  service.featured
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                    : "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                Book a call
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
