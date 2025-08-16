# Akash Agrawal - Fullstack Developer Portfolio

A modern, responsive portfolio website built with React, Material-UI, and Tailwind CSS, showcasing my skills and experience as a Fullstack Developer.

## 🚀 Features

- **Modern Design**: Clean, professional, and visually appealing UI
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Theme**: Toggle between dark and light themes
- **Smooth Animations**: Framer Motion animations and AOS scroll animations
- **Interactive Components**: Engaging user experience with hover effects
- **Fast Performance**: Optimized for speed and SEO
- **Modern Tech Stack**: Built with latest web technologies

## 🛠️ Technologies Used

### Frontend
- **React.js** - Modern JavaScript library for building user interfaces
- **Material-UI (MUI)** - React component library for faster development
- **Tailwind CSS** - Utility-first CSS framework for custom designs
- **Redux Toolkit** - State management for theme and portfolio data
- **Framer Motion** - Animation library for React
- **AOS (Animate On Scroll)** - Scroll animations

### Development Tools
- **Create React App** - React application boilerplate
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing tool
- **Autoprefixer** - CSS vendor prefixing

## 🏗️ Project Structure

```
Portfolio/
├── public/
│   ├── index.html          # Main HTML file
│   └── ...
├── src/
│   ├── components/         # React components
│   │   ├── Hero/          # Landing section
│   │   ├── Navbar/        # Navigation component
│   │   ├── About/         # About section
│   │   ├── Skills/        # Skills showcase
│   │   ├── Experience/    # Work experience
│   │   ├── Projects/      # Project portfolio
│   │   ├── Achievements/  # Accomplishments
│   │   ├── Contact/       # Contact form
│   │   ├── Footer/        # Footer component
│   │   ├── ParticleBackground/ # Animated background
│   │   └── ThemeToggle/   # Dark/light theme toggle
│   ├── store/             # Redux store
│   │   ├── store.js       # Main store configuration
│   │   ├── themeSlice.js  # Theme state management
│   │   └── portfolioSlice.js # Portfolio data management
│   ├── App.js             # Main app component
│   ├── index.js           # App entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
└── README.md             # Project documentation
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/akash-agrawal/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder.

## 📋 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 🎨 Customization

### Theme Colors
Edit `src/store/themeSlice.js` to customize the color scheme:

```javascript
const initialState = {
  mode: 'dark',
  primaryColor: '#2196f3',    // Blue
  secondaryColor: '#e91e63',  // Pink
};
```

### Portfolio Data
Update your personal information in `src/store/portfolioSlice.js`:

```javascript
personalInfo: {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  // ... other details
}
```

### Tailwind Configuration
Modify `tailwind.config.js` to customize the design system:

```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    },
    // Add other customizations
  }
}
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Mobile phones** (320px and up)
- **Tablets** (768px and up)
- **Desktops** (1024px and up)
- **Large screens** (1200px and up)

## ⚡ Performance Optimizations

- **Code splitting** with React.lazy() for components
- **Image optimization** with proper formats and lazy loading
- **CSS optimization** with Tailwind's purge feature
- **Bundle optimization** with Create React App's built-in optimizations
- **SEO optimization** with proper meta tags and semantic HTML

## 🎯 Skills Demonstrated

This portfolio showcases proficiency in:

### Frontend Development
- Modern React patterns (Hooks, Context, Redux)
- Component composition and reusability
- State management with Redux Toolkit
- Responsive design principles
- CSS-in-JS and utility-first CSS

### JavaScript/ES6+
- Arrow functions and destructuring
- Async/await and Promises
- Modern array methods
- Template literals
- Modules and imports

### UI/UX Design
- Material Design principles
- Smooth animations and transitions
- Accessibility best practices
- User-centered design

### Development Tools
- Git version control
- NPM package management
- Webpack bundling
- ESLint code quality

## 🌟 Features Overview

### Hero Section
- Animated typing effect
- Gradient text animations
- Social media links
- Call-to-action buttons

### Skills Section
- Interactive skill cards
- Technology logos
- Proficiency indicators
- Categorized skill sets

### Experience Timeline
- Professional work history
- Achievement highlights
- Technology stack used
- Interactive timeline design

### Project Showcase
- Project cards with hover effects
- Live demo links
- GitHub repository links
- Technology stack badges

### Contact Form
- Form validation
- Responsive design
- Success/error messaging
- Email integration ready

## 🚀 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure custom domain (optional)

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow the prompts

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 📞 Contact

**Akash Agrawal**
- Email: agrawalakash.develop@gmail.com
- Phone: +91 7899598657
- LinkedIn: [Profile](https://linkedin.com/in/akash-agrawal)
- GitHub: [Profile](https://github.com/akash-agrawal)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Material-UI** team for the excellent component library
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **React** team for the amazing library
- **Create React App** for the boilerplate

---

**Built with ❤️ by Akash Agrawal** 