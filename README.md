# Fireminds Website

A modern, responsive React website for Fireminds - a CMO-as-a-Service company.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Clickable mission cards and smooth scrolling navigation
- **SEO Optimized**: Complete meta tags and Open Graph integration
- **Performance**: Built with Vite for fast loading and development

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Google Fonts (Inter)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd fireminds-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect this as a Vite project
4. Deploy with default settings

### Other Platforms

This is a standard Vite React app and can be deployed to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## Project Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── index.css        # Global styles and Tailwind imports
└── vite-env.d.ts    # Vite type definitions
```

## Customization

### Styling
- Primary styles are in `src/index.css`
- Custom animations and effects are defined there
- Colors and spacing follow Tailwind CSS conventions

### Content
- All content is in `src/App.tsx`
- Mission data is stored in the `missions` object
- Easy to modify text, add new sections, or update contact information

## License

© 2025 Fireminds. All rights reserved.