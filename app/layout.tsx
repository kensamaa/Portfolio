import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import portfolioData from '@/data/portfolio.json';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yourportfolio.com'), // Replace with your actual domain
  title: {
    default: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
    template: `%s | ${portfolioData.personal.name}`,
  },
  description: portfolioData.home.bio,
  keywords: [
    'Amine Abouothmane',
    'Software Engineer',
    'Ingenieur Informatique',
    'Fullstack Developer',
    '.NET Developer',
    'React Developer',
    'Angular Developer',
    'Capgemini',
    'Morocco',
    'Casablanca',
    'Microservices Architecture',
    'Clean Architecture',
    'Azure',
    'DevOps',
    'CI/CD',
    'Docker',
    'MongoDB',
    'PostgreSQL',
    'SOLID Principles',
    'CQRS',
    'DDD',
    'Unit Testing',
    'SCRUM',
    'Agile',
    'Backend Developer',
    'Frontend Developer',
    'API Development',
    'Cloud Solutions',
    'Software Development',
    'Web Development',
  ],
  authors: [{ name: portfolioData.personal.name, url: portfolioData.personal.github }],
  creator: portfolioData.personal.name,
  publisher: portfolioData.personal.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
    description: portfolioData.home.bio,
    siteName: `${portfolioData.personal.name} Portfolio`,
    images: [
      {
        url: '/og-image.jpg', // Create this image
        width: 1200,
        height: 630,
        alt: `${portfolioData.personal.name} - ${portfolioData.personal.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
    description: portfolioData.home.bio,
    creator: '@kensaamaa', // Update with your Twitter handle if you have one
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://yourportfolio.com',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/profile.jpg" as="image" />
        <StructuredData />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
