# Migrator Frontend

Official website and documentation for Migrator - a lightweight CLI tool that brings Django-like migrations to FastAPI and Flask.

## About Migrator

Migrator simplifies database migrations for Python web applications. Built on top of Alembic, it provides an intuitive, Django-inspired interface for managing database schema changes in FastAPI and Flask projects.

## Features

- 🚀 Zero configuration setup
- ⚡ FastAPI and Flask support
- 🔧 Powered by Alembic
- 📝 Simple CLI commands
- 🎨 Modern, responsive design
- 📱 Mobile-friendly interface

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **State Management**: TanStack Query

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd migrator-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # Reusable components
│   ├── ui/        # shadcn/ui components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   └── Footer.tsx
├── pages/         # Route pages
│   ├── Index.tsx
│   ├── Blog.tsx
│   ├── Documentation.tsx
│   ├── About.tsx
│   └── NotFound.tsx
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── App.tsx        # Main application component
```

## Design System

- **Font**: Grenze (serif)
- **Monospace**: JetBrains Mono
- **Colors**: Dark theme with cyan/purple gradients
- **Primary**: Cyan (#00D9FF)
- **Secondary**: Purple (#B366FF)
- **Accent**: Green (#00FF94)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License

## Links

- [GitHub Repository](https://github.com/Adelodunpeter25/migrator)
- [PyPI Package](https://pypi.org/project/migrator-cli)
- [Documentation](https://migrator-cli.dev/docs)

---

Built with ❤️ for the Python community

