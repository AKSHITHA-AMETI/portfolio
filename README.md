# My Professional Portfolio

A modern, responsive portfolio website built with React and Vite.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive layout
- 🚀 Fast performance with Vite
- 🎨 Built-in CSS support (no extra setup needed!)
- 📧 Contact section
- 📋 Projects showcase
- 📄 Resume integration

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **CSS** - Native styling (handled by Vite)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd Portfolio
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

### Building for Production

```bash
npm run build
```

This generates optimized files in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Portfolio/
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/            # CSS files (Vite handles these!)
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Projects.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.jsx            # Main App component
│   ├── App.css
│   ├── index.css
│   └── main.jsx           # Entry point
├── public/                # Static assets
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## Customization

- Update navigation links in [src/components/Header.jsx](src/components/Header.jsx)
- Modify hero content in [src/components/Hero.jsx](src/components/Hero.jsx)
- Add your skills and bio in [src/components/About.jsx](src/components/About.jsx)
- Update projects array in [src/components/Projects.jsx](src/components/Projects.jsx)
- Add your contact information in [src/components/Contact.jsx](src/components/Contact.jsx)

## Next Steps

1. Update your resume path in [src/components/About.jsx](src/components/About.jsx)
2. Add your projects with links and descriptions
3. Update contact information (email, GitHub, LinkedIn, Twitter)
4. Customize colors and fonts as needed
5. Deploy to your hosting platform

## License

This project is open source and available under the MIT License.
