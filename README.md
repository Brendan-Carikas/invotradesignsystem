# Invotra Design System

## Overview

This repository contains the Invotra Design System, a comprehensive UI toolkit and component library for building consistent, accessible, and beautiful interfaces across Invotra applications. The design system includes conversational design tools, bot persona management, and other components to support Invotra's digital workplace solutions.

## Features

- **Conversational Design Tools**: Create and manage bot personas, conversation flows, and human handoff scenarios
- **Component Library**: A collection of reusable UI components built with shadcn/ui
- **Design Tokens**: Consistent design variables for colors, typography, spacing, etc.
- **Accessibility**: Components designed with accessibility in mind
- **Documentation**: Usage guidelines and examples

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or Bun package manager

### Installation

```sh
# Clone the repository
git clone https://github.com/Brendan-Carikas/invotradesignsystem.git

# Navigate to the project directory
cd invotradesignsystem

# Install dependencies
npm install
# or if using Bun
bun install

# Start the development server
npm run dev
# or
bun run dev
```

## Project Structure

- `/src/components` - Reusable UI components
- `/src/pages` - Application pages and routes
- `/src/types` - TypeScript type definitions
- `/src/lib` - Utility functions and services (Supabase, Firebase, etc.)
- `/src/contexts` - React context providers
- `/src/hooks` - Custom React hooks

## Technologies

This project is built with:

- **Vite**: Fast, modern frontend build tool
- **React**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Reusable component library
- **Supabase**: Backend as a Service for database and authentication
- **Firebase**: Hosting and additional services
- **React Router**: Client-side routing

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Deployment

The application can be deployed using Firebase Hosting:

```sh
# Build the application
npm run build

# Deploy to Firebase
firebase deploy
```

## Contributing

Please follow the existing code style and component patterns when contributing to this project. Make sure all components are accessible and well-documented.
