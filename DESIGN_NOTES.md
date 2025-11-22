# Portfolio Design System

## Color Palette

- **Primary Accent**: `#c4ff0e` (Neon Green/Yellow)
- **Secondary Accent**: `#d4ff00` (Bright Yellow)
- **Background**: `#0a0a0a` (Deep Black)
- **Card Background**: `#1a1a1a` (Dark Gray)
- **Border**: `#374151` (Gray-800)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#9ca3af` (Gray-400)

## Design Features

### 1. Dark Theme
- Deep black background (#0a0a0a)
- Dark card backgrounds (#1a1a1a)
- Subtle borders with gray-800
- High contrast text for readability

### 2. Neon Accents
- Bright neon green (#c4ff0e) for CTAs and highlights
- Used sparingly for maximum impact
- Hover effects with neon glow

### 3. Typography
- Inter font family
- Bold headings with large sizes (4xl-6xl)
- Monospace for code snippets
- Clear hierarchy with size and color

### 4. Components

#### Navigation
- Fixed top navigation on desktop
- Floating sidebar with icons on mobile
- Active state with neon accent
- Smooth transitions

#### Cards
- Dark background with subtle borders
- Hover effect: border changes to neon green
- Rounded corners (8px)
- Padding: 24-32px

#### Buttons
- Primary: Neon green background, black text
- Hover: Slightly brighter yellow
- Icon integration with gap animation
- Rounded corners

#### Code Blocks
- Syntax highlighting with color-coded tokens
- Dark background (#1a1a1a)
- Monospace font
- Scrollable for long content

### 5. Layout

#### Hero Section
- Two-column grid on desktop
- Left: Content (title, bio, code block, CTA)
- Right: Stats grid (2x2)
- Accent blur elements for depth

#### Content Pages
- Max-width container (7xl)
- Generous padding and spacing
- Grid layouts for cards
- Responsive breakpoints

### 6. Interactions
- Smooth transitions (all properties)
- Hover effects on cards and links
- Scale transforms on icons
- Color changes on hover

### 7. Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Sidebar navigation on mobile
- Stacked layouts on small screens

## Page-Specific Features

### Home
- Hero layout with stats
- Code block for services
- Conditional CTA
- Blur accent elements

### About
- Numbered sections (01, 02, 03)
- Skill badges with progress bars
- Timeline for employment/education
- Quick facts sidebar

### Services
- Alternating card colors (neon/dark)
- Icon-based service cards
- Technology tags
- Detailed service descriptions

### Contact
- Two-column layout (form + info)
- Styled form inputs
- Direct contact cards with icons
- Response time and availability info

## Customization

All content is managed through `data/portfolio.json`. Update this file to change:
- Personal information
- Services and skills
- Employment history
- Education and certifications
- Contact details

## Technologies

- **Framework**: Next.js 13 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Language**: TypeScript

## Performance

- Fast page loads with Next.js optimization
- Minimal JavaScript
- CSS-only animations
- Optimized images and assets
