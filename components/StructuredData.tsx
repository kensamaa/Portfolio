import portfolioData from '@/data/portfolio.json';

export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: portfolioData.personal.name,
    jobTitle: portfolioData.personal.title,
    url: 'https://yourportfolio.com',
    email: portfolioData.personal.email,
    telephone: portfolioData.personal.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Casablanca',
      addressCountry: 'Morocco',
    },
    sameAs: [
      portfolioData.personal.linkedin,
      portfolioData.personal.github,
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Capgemini',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'EMSI',
    },
    knowsAbout: [
      'Software Engineering',
      'Fullstack Development',
      '.NET Development',
      'React',
      'Angular',
      'Microservices Architecture',
      'Clean Architecture',
      'Azure Cloud Services',
      'DevOps',
      'CI/CD',
      'Docker',
      'MongoDB',
      'PostgreSQL',
      'SOLID Principles',
      'CQRS',
      'Domain-Driven Design',
      'Unit Testing',
      'SCRUM',
      'Agile Methodologies',
    ],
    hasCredential: portfolioData.about.certifications.map((cert) => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert,
    })),
  };

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${portfolioData.personal.name} - Software Development Services`,
    description: portfolioData.services.intro,
    provider: {
      '@type': 'Person',
      name: portfolioData.personal.name,
    },
    areaServed: 'Worldwide',
    serviceType: portfolioData.services.expectations,
    url: 'https://yourportfolio.com/services',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${portfolioData.personal.name} Portfolio`,
    url: 'https://yourportfolio.com',
    description: portfolioData.home.bio,
    author: {
      '@type': 'Person',
      name: portfolioData.personal.name,
    },
    inLanguage: 'en-US',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
