# Night Coders - Professional Web Development Agency

This repository contains the website for Night Coders, a professional web development agency offering a range of digital services including web development, mobile app development, design services, and AI solutions.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js, TypeScript, and Payload CMS
- **Portfolio Showcase**: Gallery of our past projects and case studies
- **Service Catalog**: Comprehensive list of our digital services
- **Blog Platform**: Articles and insights about technology and development
- **Contact Form**: Easy way for potential clients to reach out
- **Store Section**: Digital products and services available for purchase
- **Responsive Design**: Fully optimized for all devices and screen sizes
- **Admin Dashboard**: Content management system for easy updates

## 💻 Technology Stack

- **Frontend**: Next.js (App Router), TypeScript, TailwindCSS, shadcn/ui components
- **Backend**: Payload CMS, Node.js
- **Database**: Supports MongoDB or PostgreSQL
- **Deployment**: Docker support, optimized for various hosting platforms

## 🔧 Development

### Prerequisites

- Node.js 18+ and npm/pnpm
- MongoDB or PostgreSQL (depending on configuration)

### Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Copy the environment variables:
   ```bash
   cp .env.example .env
   ```
4. Start the development server:
   ```bash
   pnpm dev
   ```
5. Open http://localhost:3000 in your browser

### Environment Variables

The following environment variables are required:

```
PAYLOAD_SECRET=your-secret-key
MONGODB_URI=your-mongodb-uri
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
```

See `.env.example` for all available configuration options.

## 📦 Building for Production

To build the project for production:

```bash
pnpm build
pnpm start
```

## 🐳 Docker

The project includes Docker support for containerized deployment:

```bash
docker-compose up
```

## 🔍 Core Functionality

- **Dynamic Page Builder**: Create custom pages with a flexible layout system
- **Blog Management**: Write, edit, and publish articles with categories
- **Portfolio Management**: Showcase projects with detailed case studies
- **Services Management**: List and update service offerings
- **User Authentication**: Secure admin access
- **SEO Optimization**: Built-in SEO tools for better visibility
- **Media Management**: Upload and organize images and other media

## 🌐 Structure

- `/src/app` - Next.js application
- `/src/collections` - Payload CMS collections
- `/src/blocks` - Reusable content blocks
- `/src/components` - React components
- `/src/heros` - Hero section components
- `/public` - Static assets

## 📝 License

© Night Coders. All rights reserved.

## 📞 Contact

For any questions or inquiries about our services, please reach out through our contact form on the website.