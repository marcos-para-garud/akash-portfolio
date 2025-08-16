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
  LinearProgress
} from '@mui/material';
import { 
  Code, 
  Storage, 
  CloudQueue, 
  Build, 
  GroupWork,
  Web,
  DataUsage,
  Security,
  Speed,
  Devices
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Skills = () => {
  const { mode } = useSelector((state) => state.theme);
  const { skills } = useSelector((state) => state.portfolio);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code />,
      skills: skills.languagesFrameworks,
      color: "blue",
      bgColor: mode === 'dark' ? '#1e3a8a' : '#dbeafe'
    },
    {
      title: "Databases & Technologies", 
      icon: <Storage />,
      skills: skills.databasesTechnologies,
      color: "green",
      bgColor: mode === 'dark' ? '#14532d' : '#dcfce7'
    },
    {
      title: "Microservices & Payments",
      icon: <CloudQueue />,
      skills: skills.microservicesPayments,
      color: "purple",
      bgColor: mode === 'dark' ? '#581c87' : '#f3e8ff'
    },
    {
      title: "DevOps & CI/CD",
      icon: <Build />,
      skills: skills.devopsCICD,
      color: "orange",
      bgColor: mode === 'dark' ? '#9a3412' : '#fed7aa'
    },
    {
      title: "Agile Tools & Practices",
      icon: <GroupWork />,
      skills: skills.agileTools,
      color: "pink",
      bgColor: mode === 'dark' ? '#be185d' : '#fce7f3'
    }
  ];

  const getColorClass = (color, element = 'text') => {
    const colorMap = {
      blue: {
        text: mode === 'dark' ? 'text-blue-400' : 'text-blue-600',
        bg: mode === 'dark' ? 'bg-blue-900' : 'bg-blue-100',
        chip: mode === 'dark' ? '#1e40af' : '#3b82f6',
        chipText: mode === 'dark' ? '#93c5fd' : '#ffffff'
      },
      green: {
        text: mode === 'dark' ? 'text-green-400' : 'text-green-600',
        bg: mode === 'dark' ? 'bg-green-900' : 'bg-green-100',
        chip: mode === 'dark' ? '#166534' : '#10b981',
        chipText: mode === 'dark' ? '#86efac' : '#ffffff'
      },
      purple: {
        text: mode === 'dark' ? 'text-purple-400' : 'text-purple-600',
        bg: mode === 'dark' ? 'bg-purple-900' : 'bg-purple-100',
        chip: mode === 'dark' ? '#7c2d12' : '#8b5cf6',
        chipText: mode === 'dark' ? '#c4b5fd' : '#ffffff'
      },
      orange: {
        text: mode === 'dark' ? 'text-orange-400' : 'text-orange-600',
        bg: mode === 'dark' ? 'bg-orange-900' : 'bg-orange-100',
        chip: mode === 'dark' ? '#c2410c' : '#f97316',
        chipText: mode === 'dark' ? '#fed7aa' : '#ffffff'
      },
      pink: {
        text: mode === 'dark' ? 'text-pink-400' : 'text-pink-600',
        bg: mode === 'dark' ? 'bg-pink-900' : 'bg-pink-100',
        chip: mode === 'dark' ? '#be185d' : '#ec4899',
        chipText: mode === 'dark' ? '#f9a8d4' : '#ffffff'
      }
    };
    return colorMap[color]?.[element] || '';
  };

  const featuredSkills = [
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "JavaScript", level: 95, category: "Language" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "Express.js", level: 85, category: "Framework" },
    { name: "Redux Toolkit", level: 75, category: "State Management" }
  ];

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
              Skills & Expertise
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
              Technical expertise in modern web development technologies and best practices
            </Typography>
          </motion.div>

          {/* Featured Skills with Progress Bars */}
          <motion.div variants={itemVariants} className="mb-16">
            <Typography 
              variant="h4" 
              className={`text-center mb-12 font-semibold ${
                mode === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              data-aos="fade-up"
            >
              Core Competencies
            </Typography>

            <Grid container spacing={4}>
              {featuredSkills.map((skill, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div variants={itemVariants}>
                    <Box 
                      className="mb-6"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <Box className="flex justify-between items-center mb-2">
                        <Typography 
                          variant="h6" 
                          className={`font-semibold ${
                            mode === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {skill.name}
                        </Typography>
                        <Chip 
                          label={skill.category}
                          size="small"
                          sx={{
                            backgroundColor: mode === 'dark' ? '#374151' : '#f3f4f6',
                            color: mode === 'dark' ? '#d1d5db' : '#374151',
                          }}
                        />
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: mode === 'dark' ? '#374151' : '#e5e7eb',
                          '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(90deg, #2563eb, #8b5cf6)',
                            borderRadius: 4,
                          }
                        }}
                      />
                      <Typography 
                        variant="body2" 
                        className={`mt-1 text-right ${
                          mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}
                      >
                        {skill.level}%
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Skills Categories */}
          <motion.div variants={itemVariants}>
            <Typography 
              variant="h4" 
              className={`text-center mb-12 font-semibold ${
                mode === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              data-aos="fade-up"
            >
              Technology Stack
            </Typography>

            <Grid container spacing={4}>
              {skillCategories.map((category, categoryIndex) => (
                <Grid item xs={12} md={6} lg={4} key={categoryIndex}>
                  <motion.div variants={itemVariants}>
                    <Card 
                      className={`h-full card-hover ${
                        mode === 'dark' ? 'bg-gray-800' : 'bg-white'
                      }`}
                      data-aos="fade-up"
                      data-aos-delay={categoryIndex * 100}
                      sx={{
                        backgroundColor: mode === 'dark' ? '#1f2937' : '#ffffff',
                        border: mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                        minHeight: '300px',
                      }}
                    >
                      <CardContent className="p-6">
                        {/* Category Header */}
                        <Box className="flex items-center mb-6">
                          <Box 
                            className={`mr-4 p-3 rounded-full ${getColorClass(category.color, 'bg')}`}
                          >
                            <Box className={getColorClass(category.color, 'text')}>
                              {category.icon}
                            </Box>
                          </Box>
                          <Typography 
                            variant="h6" 
                            className={`font-semibold ${
                              mode === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {category.title}
                          </Typography>
                        </Box>

                        {/* Skills List */}
                        <Box className="flex flex-wrap gap-2">
                          {category.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skillIndex}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Chip
                                label={skill}
                                className="skill-item mb-2"
                                sx={{
                                  backgroundColor: getColorClass(category.color, 'chip'),
                                  color: getColorClass(category.color, 'chipText'),
                                  fontWeight: 500,
                                  fontSize: '0.875rem',
                                  '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: mode === 'dark' 
                                      ? '0 4px 12px rgba(0, 0, 0, 0.3)' 
                                      : '0 4px 12px rgba(0, 0, 0, 0.15)',
                                  }
                                }}
                              />
                            </motion.div>
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Additional Skills Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <Typography 
              variant="h4" 
              className={`text-center mb-8 font-semibold ${
                mode === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              data-aos="fade-up"
            >
              Additional Expertise
            </Typography>

            <Grid container spacing={4}>
              {[
                { icon: <Web />, title: "Responsive Design", desc: "Mobile-first, cross-browser compatibility" },
                { icon: <DataUsage />, title: "API Development", desc: "RESTful services, GraphQL, microservices" },
                { icon: <Security />, title: "Security", desc: "JWT authentication, data validation, HTTPS" },
                { icon: <Speed />, title: "Performance", desc: "Code optimization, caching, lazy loading" },
                { icon: <Devices />, title: "Testing", desc: "Unit testing, integration testing, E2E testing" },
                { icon: <CloudQueue />, title: "Cloud Services", desc: "Deployment, scaling, monitoring" }
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div variants={itemVariants}>
                    <Box 
                      className={`text-center p-6 rounded-lg border ${
                        mode === 'dark' 
                          ? 'border-gray-700 bg-gray-800' 
                          : 'border-gray-200 bg-gray-50'
                      }`}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <Box 
                        className={`inline-flex p-3 rounded-full mb-4 ${
                          mode === 'dark' ? 'bg-gray-700' : 'bg-white'
                        }`}
                      >
                        <Box className={`${mode === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                          {item.icon}
                        </Box>
                      </Box>
                      <Typography 
                        variant="h6" 
                        className={`mb-2 font-semibold ${
                          mode === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {item.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        className={`${
                          mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
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

export default Skills; 