import portfolioData from '@/data/portfolio.json';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 mt-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              © {currentYear} {portfolioData.personal.name}. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-[#00d4ff] hover:bg-[#1a1a1a] rounded-md transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-[#00d4ff] hover:bg-[#1a1a1a] rounded-md transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2 text-gray-400 hover:text-[#00d4ff] hover:bg-[#1a1a1a] rounded-md transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
