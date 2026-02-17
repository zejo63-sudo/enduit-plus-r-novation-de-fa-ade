# Enduit Plus - Rénovation de Façade

[aureliabutton]

## Project Overview

**Enduit Plus** is a professional, visually stunning one-page website designed for a facade renovation company. This project serves as a high-conversion digital business card and lead generation tool, featuring a modern design with a sticky navigation bar, smooth scrolling, and interactive elements.

The application is built with a focus on visual excellence, utilizing a yellow and dark gray color palette to create a trustworthy and professional brand identity. It includes sections for services, a gallery of realizations, client testimonials, and a functional quote estimation form.

## Key Features

- **Stunning Hero Section**: High-impact visual introduction with bold typography and clear Call-to-Action (CTA).
- **Service Showcase**: Detailed grid layout highlighting core services like facade cleaning, painting, and insulation (ITE).
- **Interactive Gallery**: Before/After transformations displayed in a responsive grid.
- **Trust-Building Testimonials**: Section dedicated to client reviews to establish credibility.
- **Quote Estimation Form**: Fully functional form with real-time validation using Zod and React Hook Form.
- **Responsive Design**: Flawless experience across mobile, tablet, and desktop devices.
- **Smooth Animations**: Powered by Framer Motion for a polished user experience.

## Technology Stack

This project is built using a modern, high-performance stack:

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS, clsx, tailwind-merge
- **UI Components**: Shadcn UI (Radix Primitives)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Runtime**: Cloudflare Workers (Hono)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.0.0 or higher)
- Node.js (v18 or higher recommended for compatibility)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd enduit-plus-facade
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start the development server**
   ```bash
   bun run dev
   ```

The application will be available at `http://localhost:3000`.

## Development

### Project Structure

- `src/`: Main source code for the frontend application.
  - `components/`: Reusable UI components and layout elements.
  - `pages/`: Page components (Single Page Application structure).
  - `lib/`: Utility functions and configurations.
- `worker/`: Cloudflare Worker backend logic (Hono).

### Scripts

- `bun run dev`: Start the local development server.
- `bun run build`: Build the application for production.
- `bun run preview`: Preview the production build locally.
- `bun run lint`: Run ESLint to check for code quality issues.
- `bun run cf-typegen`: Generate types for Cloudflare bindings.

## Deployment

This project is configured for seamless deployment to Cloudflare Workers.

[aureliabutton]

### Manual Deployment

1. **Build the project**
   ```bash
   bun run build
   ```

2. **Deploy to Cloudflare**
   ```bash
   bun run deploy
   ```

Ensure you have your `wrangler.jsonc` configured correctly with your Cloudflare account details.

## License

This project is proprietary and confidential. Unauthorized copying of this file, via any medium is strictly prohibited.