import React from 'react';
import { useSelector } from 'react-redux';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Chip,
  Avatar
} from '@mui/material';
import { 
  School, 
  Code,
  TrendingUp,
  Group
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const About = () => {
  const { mode } = useSelector((state) => state.theme);
  const { personalInfo, professionalSummary, education } = useSelector((state) => state.portfolio);

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

  const highlights = [
    {
      icon: <Code />,
      title: "Full Stack Expertise",
      description: "Proficient in React, Node.js, and modern JavaScript frameworks"
    },
    {
      icon: <TrendingUp />,
      title: "Performance Optimization", 
      description: "Improved Lighthouse scores from 70 to 95+ and reduced load times by 40%"
    },
    {
      icon: <Group />,
      title: "Agile Collaboration",
      description: "Experienced in sprint planning, Scrum, and working with QA teams"
    }
  ];

  return (
    <Box
      className={`py-20 ${
        mode === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
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
              About Me
            </Typography>
            <Typography 
              variant="h6" 
              className={`${
                mode === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}
              sx={{ 
                marginLeft: 'auto', 
                marginRight: 'auto', 
                textAlign: 'center' 
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Get to know the developer behind the code
            </Typography>
          </motion.div>

          <Grid container spacing={6} alignItems="center">
            {/* Left Side - Avatar and Basic Info */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants} className="text-center">
                <Box className="mb-6" data-aos="zoom-in">
                  <Avatar
                    src="/akash-pic.jpeg"
                    alt="Akash Agrawal"
                    sx={{
                      width: 200,
                      height: 200,
                      margin: '0 auto',
                      backgroundColor: mode === 'dark' ? '#374151' : '#e5e7eb',
                      border: mode === 'dark' 
                        ? '4px solid rgba(96, 165, 250, 0.3)' 
                        : '4px solid rgba(37, 99, 235, 0.3)',
                      fontSize: '4rem',
                      color: mode === 'dark' ? '#60a5fa' : '#2563eb',
                    }}
                  />
                
                </Box>
                
                <Typography 
                  variant="h4" 
                  className={`mb-2 font-bold ${
                    mode === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {personalInfo.name}
                </Typography>
                
                <Typography 
                  variant="h6" 
                  className={`mb-4 ${
                    mode === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {personalInfo.title}
                </Typography>


              </motion.div>
            </Grid>

            {/* Right Side - Professional Summary */}
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h4" 
                  className={`mb-6 font-semibold ${
                    mode === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                  data-aos="fade-up"
                >
                  Professional Summary
                </Typography>
                
                <Typography 
                  variant="body1" 
                  className={`mb-8 text-lg leading-relaxed ${
                    mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {professionalSummary}
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          {/* Highlights Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <Typography 
              variant="h4" 
              className={`text-center mb-12 font-semibold ${
                mode === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              data-aos="fade-up"
            >
              What I Bring to the Table
            </Typography>

            <Grid container spacing={4}>
              {highlights.map((highlight, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div variants={itemVariants}>
                    <Card 
                      className={`h-full card-hover ${
                        mode === 'dark' ? 'bg-gray-700' : 'bg-white'
                      }`}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      sx={{
                        backgroundColor: mode === 'dark' ? '#374151' : '#ffffff',
                        border: mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                      }}
                    >
                      <CardContent className="p-6 text-center">
                        <Box 
                          className={`mb-4 inline-flex p-3 rounded-full ${
                            mode === 'dark' ? 'bg-blue-900' : 'bg-blue-100'
                          }`}
                        >
                          <Box className={`${mode === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                            {highlight.icon}
                          </Box>
                        </Box>
                        
                        <Typography 
                          variant="h6" 
                          className={`mb-3 font-semibold ${
                            mode === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {highlight.title}
                        </Typography>
                        
                        <Typography 
                          variant="body2" 
                          className={`${
                            mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          {highlight.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <Typography 
              variant="h4" 
              className={`text-center mb-12 font-semibold ${
                mode === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              data-aos="fade-up"
            >
              Education & Learning
            </Typography>

            <Grid container spacing={4}>
              {education.map((edu, index) => (
                <Grid item xs={12} md={6} key={edu.id}>
                  <motion.div variants={itemVariants}>
                    <Card 
                      className={`card-hover ${
                        mode === 'dark' ? 'bg-gray-700' : 'bg-white'
                      }`}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      sx={{
                        backgroundColor: mode === 'dark' ? '#374151' : '#ffffff',
                        border: mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                      }}
                    >
                      <CardContent className="p-6">
                        <Box className="flex items-start mb-4">
                          <Box 
                            className={`mr-3 p-2 rounded-full ${
                              mode === 'dark' ? 'bg-purple-900' : 'bg-purple-100'
                            }`}
                          >
                            <School className={`${mode === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
                          </Box>
                          <Box className="flex-1">
                            <Chip 
                              label={edu.type}
                              size="small"
                              className="mb-2"
                              sx={{
                                backgroundColor: mode === 'dark' ? '#4c1d95' : '#ede9fe',
                                color: mode === 'dark' ? '#c4b5fd' : '#6b21a8',
                              }}
                            />
                          </Box>
                        </Box>
                        
                        <Typography 
                          variant="h6" 
                          className={`mb-2 font-semibold ${
                            mode === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {edu.degree}
                        </Typography>
                        
                        <Box className="flex justify-between items-center mb-2">
                          <Typography 
                            variant="body1" 
                            className={`${
                              mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}
                          >
                            {edu.institution}
                          </Typography>
                          
                          {edu.duration && (
                            <Typography 
                              variant="body2" 
                              className={`${
                                mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
                              }`}
                            >
                              {edu.duration}
                            </Typography>
                          )}
                        </Box>
                        
                        {edu.gpa && (
                          <Box className="mt-3">
                            <Chip 
                              label={`GPA: ${edu.gpa}`}
                              size="small"
                              sx={{
                                backgroundColor: mode === 'dark' ? '#065f46' : '#d1fae5',
                                color: mode === 'dark' ? '#34d399' : '#065f46',
                              }}
                            />
                          </Box>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 