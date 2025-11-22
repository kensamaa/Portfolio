# Professional Portfolio Website

A minimalistic, fast-loading personal portfolio website built with Next.js 13, TypeScript, and Tailwind CSS.

## Features

- **Clean, Text-Focused Design**: Minimalistic layout inspired by modern developer portfolios
- **Fully Responsive**: Mobile-first design that works on all devices
- **Fast Loading**: Optimized for performance with Next.js
- **SEO-Friendly**: Built-in metadata and OpenGraph support
- **Easy Customization**: All content managed through a single JSON file
- **Client-Side Routing**: Smooth navigation between pages
- **Dark Mode Support**: Automatic dark mode based on system preferences

## Pages

- **Home (/)**: Introduction, bio, services overview, and call-to-action
- **About (/about)**: Detailed information about skills, experience, education, and philosophy
- **Services (/services)**: Comprehensive list of services and technologies
- **Contact (/contact)**: Contact form and direct contact information

## Customization

All portfolio content is stored in `data/portfolio.json`. Simply edit this file to update:

- Personal information (name, title, location, contact details)
- Bio and professional summary
- Services offered
- Specializations and technologies
- Employment history
- Education and certifications
- Contact form options

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. Your site will be live in minutes!

### Environment Variables

No environment variables are required for basic functionality. If you integrate a contact form backend, add your API keys to `.env.local`:

```env
NEXT_PUBLIC_CONTACT_API_URL=your_api_url
```

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel

## Project Structure

```
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   └── Footer.tsx
├── data/
│   └── portfolio.json
├── lib/
│   └── utils.ts
└── public/
```

## Customization Guide

### Updating Personal Information

Edit `data/portfolio.json`:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com",
    ...
  }
}
```

### Changing Colors

Edit `tailwind.config.ts` to customize the color scheme.

### Adding New Pages

1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Update `components/Navigation.tsx` to include the new page

## License

MIT License - feel free to use this template for your own portfolio!

## Support

For issues or questions, please open an issue on GitHub.
