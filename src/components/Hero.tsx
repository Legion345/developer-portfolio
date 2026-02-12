import harelImage from '@/assets/icons/harel.jpg'

export function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
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
            Software Engineer, Backend & App Developer
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              I was always fascinated by technology & its endless possibilities. I spent hours tinkering with gadgets, breaking them open, and trying to understand how they worked.
              <br/><br/>
              Now, I build software. With plenty of experience spanning 4 years and contributions in open source, I'm the guy to count on.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Book a call
            </button>
            <a
              href="https://drive.google.com/file/d/171IXipWnaunwplucln2LphbrY434umlQ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-block"
            >
              <i className="fas fa-arrow-up-right-from-square"></i> View resume
            </a>
          </div>
         </div>
      </div>
    </section>
  );
}
