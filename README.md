# CryptoWaffle Links Hub

A modern Next.js application serving as a centralized hub for all CryptoWaffle content and social media links. Features interactive 3D flip cards, AI-powered greetings, and a clean, responsive design.

## Features

- **Interactive 3D Flip Cards**: Showcase team members (CryptoSI and The Financial Navigator) with animated flip cards revealing social media links
- **AI-Powered Greetings**: Personalized greetings using Google AI Genkit based on time of day and location
- **YouTube Channel Integration**: Dynamic display of YouTube channels with embedded content
- **Responsive Design**: Built with Tailwind CSS and Radix UI components for optimal viewing on all devices
- **Modern UI**: Clean, professional interface with subtle animations and hover effects

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives
- **AI Integration**: Google AI Genkit for dynamic greetings
- **Icons**: Lucide React icons
- **Deployment**: Firebase hosting ready

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
# Add your Google AI API key and other required variables
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:9002](http://localhost:9002) in your browser

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run genkit:dev` - Start Genkit AI development server
- `npm run genkit:watch` - Start Genkit AI with file watching

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── icons/          # Custom icon components
│   ├── flip-card.tsx   # 3D flip card component
│   └── ...
├── ai/                 # AI integration and flows
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## Key Components

- **FlipCard**: Interactive 3D flip cards for team member profiles
- **LinkCard**: Organized display of grouped links
- **YouTubeChannels**: Dynamic YouTube channel integration
- **Greeting**: AI-powered personalized greetings

## Deployment

The app is configured for Firebase hosting with the included `apphosting.yaml` configuration. It can also be deployed using Docker with the provided `Dockerfile` and `docker-compose.yml`.
