import Link from 'next/link';
import portfolioData from '@/data/portfolio.json';
import type { Metadata } from 'next';
import { ArrowRight, Code2, Database, Brain, Cloud } from 'lucide-react';

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | About Me`,
  description: portfolioData.about.bio,
};

const techIcons: Record<string, any> = {
  Backend: Code2,
  'Frontend & Mobile': Code2,
  'ML/AI': Brain,
  Other: Cloud,
};

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#00d4ff] text-sm font-mono mb-4">
            <span className="text-white">&gt;</span> {portfolioData.personal.name}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">About</span> <span className="text-[#00d4ff]">Me</span>
          </h1>
        </div>

        {/* CTA Banner */}
        <div className="mb-16 p-8 bg-[#1a1a1a] border border-gray-800 rounded-lg">
          <p className="text-xl text-gray-300 mb-6">
            {portfolioData.about.callToAction}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#00d4ff] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#00b8e6] transition-all"
          >
            Let's Connect
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Specializations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            I'm Specialized in
            <span className="text-[#00d4ff] ml-2">&lt;Backend /&gt;</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Backend */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-[#00d4ff] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-[#00d4ff]" size={24} />
                <h3 className="text-xl font-semibold">Backend Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.about.specializations.backend.map((tech, index) => (
                  <span key={index} className="skill-badge">
                    {tech}
                    <div className="progress-bar w-16">
                      <div className="progress-fill" style={{ width: '85%' }} />
                    </div>
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-[#00d4ff] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-[#00d4ff]" size={24} />
                <h3 className="text-xl font-semibold">Frontend & Mobile Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.about.specializations.frontend.map((tech, index) => (
                  <span key={index} className="skill-badge">
                    {tech}
                    <div className="progress-bar w-16">
                      <div className="progress-fill" style={{ width: '90%' }} />
                    </div>
                  </span>
                ))}
              </div>
            </div>

            {/* ML/AI */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-[#00d4ff] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="text-[#00d4ff]" size={24} />
                <h3 className="text-xl font-semibold">ML/AI</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.about.specializations.mlAi.map((tech, index) => (
                  <span key={index} className="skill-badge">
                    {tech}
                    <div className="progress-bar w-16">
                      <div className="progress-fill" style={{ width: '80%' }} />
                    </div>
                  </span>
                ))}
              </div>
            </div>

            {/* Other */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-[#00d4ff] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="text-[#00d4ff]" size={24} />
                <h3 className="text-xl font-semibold">Other Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.about.specializations.other.map((tech, index) => (
                  <span key={index} className="skill-badge">
                    {tech}
                    <div className="progress-bar w-16">
                      <div className="progress-fill" style={{ width: '75%' }} />
                    </div>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-[#00d4ff]">01.</span> About me
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {portfolioData.about.bio}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-[#00d4ff]">02.</span> Interests and Hobbies
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {portfolioData.about.interests}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-[#00d4ff]">03.</span> Technical Philosophy
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {portfolioData.about.philosophy}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-[#00d4ff]">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-500">Location:</span>
                  <p className="text-white">{portfolioData.personal.location}</p>
                </div>
                <div>
                  <span className="text-gray-500">Experience:</span>
                  <p className="text-white">{portfolioData.personal.yearsOfExperience}+ years</p>
                </div>
                <div>
                  <span className="text-gray-500">Email:</span>
                  <p className="text-white break-all">{portfolioData.personal.email}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Employment History */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Employment History</h2>
          <div className="space-y-6">
            {portfolioData.about.employment.map((job, index) => (
              <div key={index} className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-[#00d4ff] transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {job.company}
                  </h3>
                  <span className="text-sm text-[#00d4ff]">{job.period}</span>
                </div>
                <p className="text-gray-400 mb-2">{job.position}</p>
                <p className="text-gray-500 text-sm">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            {portfolioData.about.education.map((edu, index) => (
              <div key={index} className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-[#00d4ff] transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {edu.institution}
                  </h3>
                  <span className="text-sm text-[#00d4ff]">{edu.period}</span>
                </div>
                <p className="text-gray-400 mb-2">{edu.degree}</p>
                <p className="text-gray-500 text-sm">Focus: {edu.focus}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioData.about.certifications.map((cert, index) => (
              <div key={index} className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 hover:border-[#00d4ff] transition-colors">
                <p className="text-gray-300">{cert}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
