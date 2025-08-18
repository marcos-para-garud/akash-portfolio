import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  IconButton,
  Zoom,
  Tooltip,
  Snackbar,
  Alert
} from '@mui/material';
import { 
  GitHub, 
  LinkedIn, 
  Email, 
  Code,
  KeyboardArrowDown
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Hero = () => {
  const { personalInfo, professionalSummary } = useSelector((state) => state.portfolio);
  const { mode } = useSelector((state) => state.theme);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);
  
  const texts = useMemo(() => [
    'Fullstack Developer',
    'React.js Expert', 
    'Node.js Developer',
    'MERN Stack Developer',
    'Problem Solver'
  ], []);

  const animateText = useCallback(() => {
    const text = texts[currentIndex];
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentIndex, texts]);

  useEffect(() => {
    const cleanup = animateText();
    return cleanup;
  }, [animateText]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setEmailCopied(true);
    } catch (err) {
      console.error('Failed to copy email: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = personalInfo.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setEmailCopied(true);
    }
  };

  const handleCloseSnackbar = () => {
    setEmailCopied(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <Box
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      sx={{
        background: mode === 'dark' 
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <Box className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-10`}
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: mode === 'dark' ? '#3b82f6' : '#2563eb',
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" className="relative z-10">
        <motion.div
          key={mode} // Force re-render when theme changes
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4} alignItems="center">
            {/* Content Section */}
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h6" 
                  data-aos="fade-up"
                  sx={{
                    mb: 4,
                    fontWeight: 500,
                    color: mode === 'dark' ? '#60a5fa' : '#1d4ed8',
                  }}
                >
                  👋 Hello, I'm
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h1" 
                  className="mb-4 font-bold hero-title"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  sx={{
                    color: mode === 'dark' ? '#ffffff' : '#111827',
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2,
                  }}
                >
                  <span 
                    style={{
                      background: mode === 'dark' 
                        ? 'linear-gradient(135deg, #60a5fa, #ec4899, #a855f7)'
                        : 'linear-gradient(135deg, #1d4ed8, #be185d, #7c3aed)',
                      backgroundSize: '200% 200%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'gradient 3s ease infinite',
                    }}
                  >
                    {personalInfo.name}
                  </span>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h2" 
                  data-aos="fade-up"
                  data-aos-delay="200"
                  sx={{
                    mb: 6,
                    fontWeight: 600,
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                    color: mode === 'dark' ? '#60a5fa' : '#1d4ed8',
                    minHeight: '60px',
                  }}
                >
                  {displayText}
                  <span 
                    className="animate-pulse"
                    style={{
                      color: mode === 'dark' ? '#60a5fa' : '#1d4ed8',
                    }}
                  >
                    |
                  </span>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography 
                  variant="body1" 
                  data-aos="fade-up"
                  data-aos-delay="300"
                  sx={{
                    mb: 8,
                    fontSize: '1.125rem',
                    lineHeight: 1.7,
                    maxWidth: '600px',
                    color: mode === 'dark' ? '#d1d5db' : '#374151',
                  }}
                >
                  {professionalSummary}
                </Typography>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants}>
                <Box className="flex flex-wrap gap-4 mb-8" data-aos="fade-up" data-aos-delay="400">
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => scrollToSection('projects')}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontWeight: 600,
                      borderRadius: '25px',
                      background: 'linear-gradient(135deg, #2563eb, #ec4899)',
                      color: 'white',
                      textTransform: 'none',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1d4ed8, #be185d)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)',
                      }
                    }}
                  >
                    View My Work
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => scrollToSection('contact')}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontWeight: 600,
                      borderRadius: '25px',
                      borderWidth: '2px',
                      textTransform: 'none',
                      fontSize: '1rem',
                      borderColor: mode === 'dark' ? '#60a5fa' : '#2563eb',
                      color: mode === 'dark' ? '#60a5fa' : '#2563eb',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: mode === 'dark' ? '#60a5fa' : '#2563eb',
                        color: mode === 'dark' ? '#111827' : 'white',
                        borderColor: mode === 'dark' ? '#60a5fa' : '#2563eb',
                        borderWidth: '2px',
                      }
                    }}
                  >
                    Get In Touch
                  </Button>
                </Box>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <Box className="flex gap-4" data-aos="fade-up" data-aos-delay="500">
                  <Tooltip 
                    title="Click to copy email address"
                    placement="top"
                    arrow
                  >
                    <IconButton
                      onClick={copyEmailToClipboard}
                      sx={{
                        p: 1.5,
                        borderRadius: '50%',
                        transition: 'all 0.3s ease',
                        backgroundColor: mode === 'dark' ? '#374151' : '#ffffff',
                        color: mode === 'dark' ? '#d1d5db' : '#374151',
                        boxShadow: mode === 'dark' ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                          backgroundColor: '#2563eb',
                          color: 'white',
                          transform: 'scale(1.1)',
                        }
                      }}
                    >
                      <Email />
                    </IconButton>
                  </Tooltip>
                  
                  <Tooltip 
                    title="View LinkedIn Profile"
                    placement="top"
                    arrow
                  >
                    <IconButton
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        p: 1.5,
                        borderRadius: '50%',
                        transition: 'all 0.3s ease',
                        backgroundColor: mode === 'dark' ? '#374151' : '#ffffff',
                        color: mode === 'dark' ? '#d1d5db' : '#374151',
                        boxShadow: mode === 'dark' ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                          backgroundColor: '#0e76a8',
                          color: 'white',
                          transform: 'scale(1.1)',
                        }
                      }}
                    >
                      <LinkedIn />
                    </IconButton>
                  </Tooltip>
                  
                  <Tooltip 
                    title="View GitHub Profile"
                    placement="top"
                    arrow
                  >
                    <IconButton
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        p: 1.5,
                        borderRadius: '50%',
                        transition: 'all 0.3s ease',
                        backgroundColor: mode === 'dark' ? '#374151' : '#ffffff',
                        color: mode === 'dark' ? '#d1d5db' : '#374151',
                        boxShadow: mode === 'dark' ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                          backgroundColor: mode === 'dark' ? '#f3f4f6' : '#111827',
                          color: mode === 'dark' ? '#111827' : 'white',
                          transform: 'scale(1.1)',
                        }
                      }}
                    >
                      <GitHub />
                    </IconButton>
                  </Tooltip>
                  
                  <Tooltip 
                    title="View Code360 Profile"
                    placement="top"
                    arrow
                  >
                    <IconButton
                      href={personalInfo.codeStudio}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        p: 1.5,
                        borderRadius: '50%',
                        transition: 'all 0.3s ease',
                        backgroundColor: mode === 'dark' ? '#374151' : '#ffffff',
                        color: mode === 'dark' ? '#d1d5db' : '#374151',
                        boxShadow: mode === 'dark' ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                          backgroundColor: '#7c3aed',
                          color: 'white',
                          transform: 'scale(1.1)',
                        }
                      }}
                    >
                      <Code />
                    </IconButton>
                  </Tooltip>
                </Box>
              </motion.div>
            </Grid>

            {/* Avatar/Image Section */}
            <Grid item xs={12} md={4}>
              <motion.div
                variants={itemVariants}
                className="flex justify-center"
              >
                <Zoom in={true} timeout={1000}>
                  <img 
                    src="/akash-pic.png" 
                    alt="Akash Agrawal"
                    className="floating shadow-2xl"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                    style={{
                      maxWidth: '350px',
                      width: '100%',
                      height: 'auto',
                      borderRadius: '12px'
                    }}
                  />
                </Zoom>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <IconButton
            onClick={() => scrollToSection('about')}
            sx={{
              color: mode === 'dark' ? '#9ca3af' : '#6b7280',
            }}
          >
            <KeyboardArrowDown fontSize="large" />
          </IconButton>
        </motion.div>
      </Container>

      {/* Success Snackbar for Email Copy */}
      <Snackbar
        open={emailCopied}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          sx={{ 
            width: '100%',
            backgroundColor: mode === 'dark' ? '#065f46' : '#d1fae5',
            color: mode === 'dark' ? '#34d399' : '#065f46',
          }}
        >
          📧 Email copied to clipboard: {personalInfo.email}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Hero; 