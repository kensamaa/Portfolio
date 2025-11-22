'use client';

import { useState } from 'react';
import portfolioData from '@/data/portfolio.json';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      details: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#00d4ff] text-sm font-mono mb-4">
            <span className="text-white">&gt;</span> Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Contact</span> <span className="text-[#00d4ff]">Me</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            {portfolioData.contact.invitation}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-md focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent text-white placeholder-gray-600"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-md focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent text-white placeholder-gray-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-md focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent text-white placeholder-gray-600"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">
                      What services do you need? *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-md focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent text-white"
                    >
                      <option value="">Select a service</option>
                      {portfolioData.contact.serviceOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-400 mb-2">
                    Anticipated Budget
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="e.g., $5,000 - $10,000"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-md focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent text-white placeholder-gray-600"
                  />
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-gray-400 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    rows={6}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, and timeline..."
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-md focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent text-white placeholder-gray-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00d4ff] text-black px-6 py-4 rounded-md font-semibold hover:bg-[#00b8e6] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6">Direct Contact</h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="flex items-start gap-3 p-3 rounded-md hover:bg-[#0a0a0a] transition-colors group"
                >
                  <Mail className="text-[#00d4ff] mt-1 group-hover:scale-110 transition-transform" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">EMAIL</p>
                    <p className="text-white break-all">{portfolioData.personal.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="flex items-start gap-3 p-3 rounded-md hover:bg-[#0a0a0a] transition-colors group"
                >
                  <Phone className="text-[#00d4ff] mt-1 group-hover:scale-110 transition-transform" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">PHONE</p>
                    <p className="text-white">{portfolioData.personal.phone}</p>
                  </div>
                </a>

                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-md hover:bg-[#0a0a0a] transition-colors group"
                >
                  <Linkedin className="text-[#00d4ff] mt-1 group-hover:scale-110 transition-transform" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">LINKEDIN</p>
                    <p className="text-white break-all">View Profile</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3">
                  <MapPin className="text-[#00d4ff] mt-1" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">LOCATION</p>
                    <p className="text-white">{portfolioData.personal.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-[#00d4ff]">Response Time</h3>
              <p className="text-sm text-gray-400">
                I typically respond within <span className="text-white font-semibold">24 hours</span> on business days. For urgent inquiries, please call directly.
              </p>
            </div>

            {/* Availability */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-[#00d4ff]">Availability</h3>
              <p className="text-sm text-gray-400">
                Currently <span className="text-[#00d4ff] font-semibold">accepting new projects</span> for Q1 2025. Book a consultation to discuss your requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
