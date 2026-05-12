import harelImage from "@/assets/icons/harel.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-white rounded-full overflow-hidden shadow-lg flex items-center justify-center">
              <img
                src={harelImage}
                alt="Harel Asaraf"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Harel Asaraf
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
            Full-Stack Developer
          </h2>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            Your business deserves a website that actually works for you.
            <br />
            <br />
            Web apps and mobile apps -- delivered fast.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Book a call
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-block"
            >
              <i className="fas fa-arrow-up-right-from-square"></i> View my Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
