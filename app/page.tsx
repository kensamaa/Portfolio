import Link from 'next/link';
import portfolioData from '@/data/portfolio.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.title} - Portfolio`,
  description: `${portfolioData.home.bio} Specializing in ${portfolioData.home.services.join(', ')}.`,
  openGraph: {
    title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
    description: portfolioData.home.bio,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-[#00d4ff] text-sm font-mono mb-4">
                  <span className="text-white">&gt;</span> {portfolioData.personal.name}
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-[#00d4ff]">{portfolioData.personal.title.split('&')[0]}</span>
                  <span className="text-white"> & {portfolioData.personal.title.split('&')[1]}</span>
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {portfolioData.home.bio}
                </p>
              </div>

              {/* Services Code Block */}
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 opacity-0 animate-fade-in animate-delay-100">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-gray-300">
                    <span className="text-purple-400">const</span> <span className="text-blue-400">services</span> <span className="text-white">=</span> <span className="text-yellow-400">[</span>
                    {portfolioData.home.services.map((service, index) => (
                      <div key={index} className="pl-4">
                        <span className="text-green-400">'{service}'</span>
                        {index < portfolioData.home.services.length - 1 && <span className="text-white">,</span>}
                      </div>
                    ))}
                    <span className="text-yellow-400">];</span>
                  </code>
                </pre>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 font-mono text-sm">
                  <span className="text-purple-400">if</span> (have a project) navigate(<span className="text-green-400">'/contact'</span>)
                </span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#00d4ff] text-black px-8 py-4 rounded-md font-semibold hover:bg-[#00b8e6] transition-all hover:gap-3"
              >
                Get a Free Quote
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            {/* Right Content - Profile Image & Stats */}
            <div className="relative space-y-8">
              {/* Profile Image with Animation */}
              <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-[#00d4ff] to-[#00b8e6] p-1 animate-slide-up">
                <div className="relative w-full h-full bg-[#0a0a0a] rounded-2xl overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-[#00d4ff] hover:scale-105 transition-all opacity-0 animate-fade-in animate-delay-200">
                  <div className="text-4xl font-bold text-[#00d4ff] mb-2">{portfolioData.personal.yearsOfExperience}+</div>
                  <div className="text-sm text-gray-400">Years of Experience</div>
                </div>
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-[#00d4ff] hover:scale-105 transition-all opacity-0 animate-fade-in animate-delay-300">
                  <div className="text-4xl font-bold text-[#00d4ff] mb-2">15+</div>
                  <div className="text-sm text-gray-400">Technologies Mastered</div>
                </div>
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-[#00d4ff] hover:scale-105 transition-all opacity-0 animate-fade-in animate-delay-400">
                  <div className="text-4xl font-bold text-[#00d4ff] mb-2">10+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-[#00d4ff] hover:scale-105 transition-all opacity-0 animate-fade-in animate-delay-400">
                  <div className="text-4xl font-bold text-[#00d4ff] mb-2">3</div>
                  <div className="text-sm text-gray-400">Companies Worked With</div>
                </div>
              </div>

              {/* Accent Element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00d4ff] opacity-10 blur-3xl rounded-full -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#00d4ff] opacity-10 blur-3xl rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
