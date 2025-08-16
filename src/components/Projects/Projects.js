import React from 'react';
import { useSelector } from 'react-redux';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  CardActions,
  Chip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  GitHub, 
  Launch,
  Code,
  CheckCircle,
  Star,
  FiberManualRecord
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Projects = () => {
  const { mode } = useSelector((state) => state.theme);
  const { projects } = useSelector((state) => state.portfolio);

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

  const getProjectColor = (index) => {
    const colors = ['blue', 'purple', 'green', 'orange', 'pink', 'indigo'];
    return colors[index % colors.length];
  };

  const getColorStyles = (color) => {
    const colorMap = {
      blue: {
        gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        chipBg: mode === 'dark' ? '#1e40af' : '#3b82f6',
        chipText: '#ffffff',
        accent: mode === 'dark' ? '#60a5fa' : '#2563eb'
      },
      purple: {
        gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        chipBg: mode === 'dark' ? '#7c3aed' : '#8b5cf6',
        chipText: '#ffffff',
        accent: mode === 'dark' ? '#a78bfa' : '#7c3aed'
      },
      green: {
        gradient: 'linear-gradient(135deg, #10b981, #059669)',
        chipBg: mode === 'dark' ? '#059669' : '#10b981',
        chipText: '#ffffff',
        accent: mode === 'dark' ? '#34d399' : '#059669'
      },
      orange: {
        gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
        chipBg: mode === 'dark' ? '#ea580c' : '#f97316',
        chipText: '#ffffff',
        accent: mode === 'dark' ? '#fb923c' : '#ea580c'
      },
      pink: {
        gradient: 'linear-gradient(135deg, #ec4899, #be185d)',
        chipBg: mode === 'dark' ? '#be185d' : '#ec4899',
        chipText: '#ffffff',
        accent: mode === 'dark' ? '#f472b6' : '#be185d'
      },
      indigo: {
        gradient: 'linear-gradient(135deg, #6366f1, #4f46e5)',
        chipBg: mode === 'dark' ? '#4f46e5' : '#6366f1',
        chipText: '#ffffff',
        accent: mode === 'dark' ? '#818cf8' : '#4f46e5'
      }
    };
    return colorMap[color];
  };

  return (
    <Box
      className={`py-20 ${
        mode === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Typography 
              variant="h2" 
              className={`mb-4 font-bold section-title ${
                mode === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              data-aos="fade-up"
            >
              Featured Projects
            </Typography>
            <Typography 
              variant="h6" 
              className={`max-w-2xl ${
                mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
              sx={{ 
                marginLeft: 'auto', 
                marginRight: 'auto', 
                textAlign: 'center' 
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Showcase of my development projects and technical achievements that demonstrate my skills and passion for innovation
            </Typography>
          </motion.div>

          {/* Projects Grid */}
          <Grid container spacing={4}>
            {projects.map((project, index) => {
              const color = getProjectColor(index);
              const colorStyles = getColorStyles(color);
              
              return (
                <Grid item xs={12} lg={6} key={project.id}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card 
                      className={`h-full project-card ${
                        mode === 'dark' ? 'bg-gray-800' : 'bg-white'
                      }`}
                      data-aos="fade-up"
                      data-aos-delay={index * 200}
                      sx={{
                        backgroundColor: mode === 'dark' ? '#1f2937' : '#ffffff',
                        border: mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        position: 'relative',
                        minHeight: '600px',
                        '&:hover': {
                          boxShadow: mode === 'dark' 
                            ? `0 20px 40px rgba(0, 0, 0, 0.3)` 
                            : `0 20px 40px ${colorStyles.accent}20`,
                        }
                      }}
                    >
                      {/* Project Header with Gradient */}
                      <Box 
                        sx={{
                          background: colorStyles.gradient,
                          height: '120px',
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Typography 
                          variant="h4" 
                          className="text-white font-bold text-center"
                        >
                          {project.title}
                        </Typography>
                        
                        {/* Corner accent */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Star className="text-white" />
                        </Box>
                      </Box>

                      <CardContent className="p-6 flex-1">
                        {/* Subtitle */}
                        <Typography 
                          variant="h6" 
                          className={`mb-4 font-semibold ${
                            mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}
                          style={{ color: colorStyles.accent }}
                        >
                          {project.subtitle}
                        </Typography>

                        {/* Description */}
                        <Typography 
                          variant="body1" 
                          className={`mb-6 leading-relaxed ${
                            mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          {project.description}
                        </Typography>

                        {/* Features */}
                        <Box className="mb-6">
                          <Typography 
                            variant="h6" 
                            className={`mb-3 font-semibold flex items-center ${
                              mode === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            <CheckCircle 
                              className="mr-2" 
                              fontSize="small"
                              style={{ color: colorStyles.accent }}
                            />
                            Key Features
                          </Typography>
                          
                          <List dense>
                            {project.features.map((feature, featureIndex) => (
                              <ListItem key={featureIndex} className="px-0 py-1">
                                <ListItemIcon sx={{ minWidth: '32px' }}>
                                  <FiberManualRecord 
                                    sx={{ 
                                      fontSize: '8px',
                                      color: colorStyles.accent
                                    }} 
                                  />
                                </ListItemIcon>
                                <ListItemText 
                                  primary={
                                    <Typography 
                                      variant="body2" 
                                      className={`${
                                        mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                      }`}
                                    >
                                      {feature}
                                    </Typography>
                                  }
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Box>

                        {/* Tech Stack */}
                        <Box className="mb-6">
                          <Typography 
                            variant="h6" 
                            className={`mb-3 font-semibold flex items-center ${
                              mode === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            <Code 
                              className="mr-2" 
                              fontSize="small"
                              style={{ color: colorStyles.accent }}
                            />
                            Technologies
                          </Typography>
                          
                          <Box className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, techIndex) => (
                              <motion.div
                                key={techIndex}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Chip
                                  label={tech}
                                  size="small"
                                  sx={{
                                    backgroundColor: mode === 'dark' ? '#374151' : '#f3f4f6',
                                    color: mode === 'dark' ? '#e5e7eb' : '#374151',
                                    fontSize: '0.75rem',
                                    fontWeight: 500,
                                    border: `1px solid ${colorStyles.accent}30`,
                                    '&:hover': {
                                      backgroundColor: colorStyles.chipBg,
                                      color: colorStyles.chipText,
                                      transform: 'scale(1.05)',
                                    }
                                  }}
                                />
                              </motion.div>
                            ))}
                          </Box>
                        </Box>
                      </CardContent>

                      {/* Action Buttons */}
                      <CardActions className="p-6 pt-0">
                        <Box className="flex gap-3 w-full">
                          <Button
                            variant="contained"
                            startIcon={<GitHub />}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              background: colorStyles.gradient,
                              color: 'white',
                              borderRadius: '25px',
                              textTransform: 'none',
                              fontWeight: 600,
                              flex: 1,
                              '&:hover': {
                                background: colorStyles.gradient,
                                transform: 'translateY(-2px)',
                                boxShadow: `0 8px 20px ${colorStyles.accent}40`,
                              }
                            }}
                          >
                            View Code
                          </Button>
                          
                          {project.liveDemo && (
                            <Button
                              variant="outlined"
                              startIcon={<Launch />}
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                borderColor: colorStyles.accent,
                                color: colorStyles.accent,
                                borderRadius: '25px',
                                textTransform: 'none',
                                fontWeight: 600,
                                flex: 1,
                                '&:hover': {
                                  backgroundColor: colorStyles.accent,
                                  color: 'white',
                                  transform: 'translateY(-2px)',
                                }
                              }}
                            >
                              Live Demo
                            </Button>
                          )}
                        </Box>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Card 
              className={`${
                mode === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
              sx={{
                backgroundColor: mode === 'dark' ? '#1f2937' : '#ffffff',
                border: mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
              }}
              data-aos="fade-up"
            >
              <CardContent className="p-8">
                <Typography 
                  variant="h4" 
                  className={`mb-4 font-bold ${
                    mode === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Interested in My Work?
                </Typography>
                
                <Typography 
                  variant="body1" 
                  className={`mb-6 text-lg ${
                    mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  These projects represent just a glimpse of my capabilities. I'm always working on new and exciting projects that push the boundaries of web development.
                </Typography>

                <Box className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<GitHub />}
                    href="https://github.com/marcos-para-garud"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                      color: 'white',
                      borderRadius: '25px',
                      textTransform: 'none',
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
                      }
                    }}
                  >
                    View All Projects on GitHub
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    sx={{
                      borderColor: mode === 'dark' ? '#60a5fa' : '#2563eb',
                      color: mode === 'dark' ? '#60a5fa' : '#2563eb',
                      borderRadius: '25px',
                      textTransform: 'none',
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        backgroundColor: mode === 'dark' ? '#60a5fa' : '#2563eb',
                        color: mode === 'dark' ? '#111827' : 'white',
                        transform: 'translateY(-2px)',
                      }
                    }}
                  >
                    Let's Collaborate
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 