# Invotra Design System

## Overview

The Invotra Design System is a comprehensive UI library and design system built with React, TypeScript, and Vite. It provides a collection of reusable components, design tokens, and patterns to create consistent and accessible user interfaces for Invotra applications.

## Features

- **Component Library**: A rich set of UI components built with React and Tailwind CSS
- **Design Tokens**: Consistent design variables for colors, typography, spacing, etc.
- **Interactive Documentation**: Live examples and usage guidelines
- **Conversation Analysis**: AI-powered conversation analysis tools using OpenAI
- **Email Templates**: Customizable email templates for various use cases
- **Application Shells**: Ready-to-use layout templates for different application types

## Technology Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI
- **State Management**: React Query
- **Routing**: React Router
- **APIs**: OpenAI, Supabase
- **Hosting**: Firebase

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```sh
# Step 1: Clone the repository
git clone https://github.com/Brendan-Carikas/invotradesignsystem.git

# Step 2: Navigate to the project directory
cd invotradesignsystem

# Step 3: Install dependencies
npm install

# Step 4: Start the development server with auto-reloading and an instant preview
npm run dev
```

### Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_OPENAI_API_KEY=your-openai-api-key
OPENAI_API_KEY=your-openai-api-key

VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.firebaseapp.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id

VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Note: A `.env.example` file is provided as a template.

## Development

```sh
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run typecheck
```

## Deployment

The project is configured for Firebase hosting deployment:

```sh
# Deploy to Firebase hosting
firebase deploy --only hosting
```

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React contexts
│   ├── data/           # Sample data and constants
│   ├── lib/            # Utility functions and API clients
│   ├── pages/          # Page components
│   └── styles/         # Global styles
├── .env.example        # Example environment variables
└── vite.config.ts      # Vite configuration
```

## Contributing

1. Create a new branch from `develop`
2. Make your changes
3. Submit a pull request to the `develop` branch

## License

Proprietary - All rights reserved
