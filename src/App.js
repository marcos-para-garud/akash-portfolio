import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { setCurrentSection } from './store/portfolioSlice';

function App() {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);
  const { currentSection } = useSelector((state) => state.portfolio);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          if (currentSection !== sections[i]) {
            dispatch(setCurrentSection(sections[i]));
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection, dispatch]);

  return (
    <Router>
      <Box 
        className={`min-h-screen transition-all duration-300 ${
          mode === 'dark' 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
        }`}
      >
        <ParticleBackground />
        <Navbar />
        <ThemeToggle />
        
        <main>
          <section id="hero">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="skills">
            <Skills />
          </section>
          
          <section id="experience">
            <Experience />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="achievements">
            <Achievements />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
        
        <Footer />
      </Box>
    </Router>
  );
}

export default App; 