import Link from 'next/link';
import portfolioData from '@/data/portfolio.json';
import type { Metadata } from 'next';
import { Brain, TrendingUp, Code, Store, Settings, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | Software Development Services`,
  description: portfolioData.services.intro,
};

const iconMap: Record<string, any> = {
  brain: Brain,
  'trending-up': TrendingUp,
  code: Code,
  store: Store,
  settings: Settings,
};

export default function Services() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#00d4ff] text-sm font-mono mb-4">
            <span className="text-white">&gt;</span> Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">My</span> <span className="text-[#00d4ff]">Expertise</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            {portfolioData.services.intro}
          </p>
        </div>

        {/* Building Scalable Solutions */}
        <section className="mb-16">
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Building Scalable Solutions</h2>
            <p className="text-gray-400 mb-6">
              I specialize in developing robust, scalable software solutions using modern technologies and best practices. From frontend to backend, machine learning to cloud-native applications, I deliver production-ready systems.
            </p>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#00d4ff]">What you can expect</h3>
              <ul className="space-y-2">
                {portfolioData.services.expectations.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#00d4ff] mt-1">→</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technologies I work with</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.services.technologies.backend.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-[#0a0a0a] border border-gray-700 rounded text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.services.technologies.frontend.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-[#0a0a0a] border border-gray-700 rounded text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">ML/AI</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.services.technologies.ml.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-[#0a0a0a] border border-gray-700 rounded text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Cloud/DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.services.technologies.cloudDevOps.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-[#0a0a0a] border border-gray-700 rounded text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Crypto</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.services.technologies.crypto.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-[#0a0a0a] border border-gray-700 rounded text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services - Card Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.services.detailed.map((service, index) => {
              const Icon = iconMap[service.icon] || Code;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-lg border border-gray-800 hover:border-[#00d4ff] transition-all ${
                    isEven ? 'bg-[#00d4ff]' : 'bg-[#1a1a1a]'
                  }`}
                >
                  <div className="p-8">
                    <div className={`mb-6 ${isEven ? 'text-black' : 'text-[#00d4ff]'}`}>
                      <Icon size={48} />
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-4 ${isEven ? 'text-black' : 'text-white'}`}>
                      {service.title}
                    </h3>
                    
                    <p className={`leading-relaxed mb-6 ${isEven ? 'text-gray-900' : 'text-gray-400'}`}>
                      {service.description}
                    </p>

                    {/* Service Details */}
                    {service.title === 'AI & Machine Learning' && (
                      <ul className={`space-y-2 text-sm ${isEven ? 'text-gray-800' : 'text-gray-500'}`}>
                        <li>→ Price forecasting with XGBoost</li>
                        <li>→ Recommendation engines (TensorFlow/PyTorch)</li>
                        <li>→ Serverless API deployment</li>
                      </ul>
                    )}
                    
                    {service.title === 'Crypto Trading Bots' && (
                      <ul className={`space-y-2 text-sm ${isEven ? 'text-gray-800' : 'text-gray-500'}`}>
                        <li>→ Automated strategies for BTC/SEI</li>
                        <li>→ RSI/MACD/ATR indicators</li>
                        <li>→ Backtesting & live execution</li>
                      </ul>
                    )}
                    
                    {service.title === 'Fullstack Web & Mobile' && (
                      <ul className={`space-y-2 text-sm ${isEven ? 'text-gray-800' : 'text-gray-500'}`}>
                        <li>→ React/Next.js frontend</li>
                        <li>→ Python/C# backend</li>
                        <li>→ RESTful APIs</li>
                      </ul>
                    )}
                    
                    {service.title === 'Small Business Tools' && (
                      <ul className={`space-y-2 text-sm ${isEven ? 'text-gray-800' : 'text-gray-500'}`}>
                        <li>→ Multi-tenant platforms</li>
                        <li>→ Inventory/order management</li>
                        <li>→ AI chatbots (RAG via Ollama)</li>
                      </ul>
                    )}
                    
                    {service.title === 'DevOps & Integrations' && (
                      <ul className={`space-y-2 text-sm ${isEven ? 'text-gray-800' : 'text-gray-500'}`}>
                        <li>→ CI/CD pipelines</li>
                        <li>→ Containerization (Docker/K8s)</li>
                        <li>→ Data workflows (Airflow)</li>
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with cutting-edge technology and best practices.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#00d4ff] text-black px-8 py-4 rounded-md font-semibold hover:bg-[#00b8e6] transition-all"
            >
              Get Free Price Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
