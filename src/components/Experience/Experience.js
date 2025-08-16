import React from 'react';
import { useSelector } from 'react-redux';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent,
  Chip,
  Avatar,
  Divider
} from '@mui/material';
import { 
  Work, 
  TrendingUp, 
  Code,
  CheckCircle,
  BusinessCenter
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Experience = () => {
  const { mode } = useSelector((state) => state.theme);
  const { experience } = useSelector((state) => state.portfolio);

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

  const getCompanyColor = (index) => {
    const colors = ['blue', 'purple', 'green', 'orange'];
    return colors[index % colors.length];
  };

  const getColorStyles = (color) => {
    const colorMap = {
      blue: {
        dot: mode === 'dark' ? '#3b82f6' : '#2563eb',
        gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        chipBg: mode === 'dark' ? '#1e40af' : '#3b82f6',
        chipText: '#ffffff'
      },
      purple: {
        dot: mode === 'dark' ? '#8b5cf6' : '#7c3aed',
        gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        chipBg: mode === 'dark' ? '#7c3aed' : '#8b5cf6',
        chipText: '#ffffff'
      },
      green: {
        dot: mode === 'dark' ? '#10b981' : '#059669',
        gradient: 'linear-gradient(135deg, #10b981, #059669)',
        chipBg: mode === 'dark' ? '#059669' : '#10b981',
        chipText: '#ffffff'
      },
      orange: {
        dot: mode === 'dark' ? '#f97316' : '#ea580c',
        gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
        chipBg: mode === 'dark' ? '#ea580c' : '#f97316',
        chipText: '#ffffff'
      }
    };
    return colorMap[color];
  };

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
              Professional Experience
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
              My journey as a software developer, building scalable solutions and driving innovation
            </Typography>
          </motion.div>

          {/* Experience Summary */}
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <Typography 
              variant="h5" 
              className={`font-medium ${
                mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Total Experience - ~2 years
            </Typography>
          </motion.div>

          {/* Custom Timeline */}
          <motion.div variants={itemVariants}>
            <Box className="relative">
              {/* Timeline Line */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: '24px', md: '50%' },
                  top: 0,
                  bottom: 0,
                  width: '4px',
                  background: mode === 'dark' 
                    ? 'linear-gradient(to bottom, #374151, #6b7280)' 
                    : 'linear-gradient(to bottom, #d1d5db, #9ca3af)',
                  transform: { xs: 'none', md: 'translateX(-2px)' },
                  zIndex: 1
                }}
              />

              {experience.map((exp, index) => {
                const color = getCompanyColor(index);
                const colorStyles = getColorStyles(color);
                
                return (
                  <Box key={exp.id} className="relative mb-12">
                    {/* Timeline Dot */}
                    <Avatar
                      sx={{
                        position: 'absolute',
                        left: { xs: '8px', md: '50%' },
                        top: '24px',
                        transform: { xs: 'none', md: 'translateX(-50%)' },
                        background: colorStyles.gradient,
                        width: 64,
                        height: 64,
                        boxShadow: `0 4px 20px ${colorStyles.dot}40`,
                        zIndex: 2
                      }}
                    >
                      <Work sx={{ color: 'white', fontSize: '1.5rem' }} />
                    </Avatar>

                    {/* Experience Card */}
                    <motion.div
                      variants={itemVariants}
                      data-aos="fade-left"
                      data-aos-delay={index * 200}
                    >
                      <Box 
                        className={`ml-20 md:ml-0 ${
                          index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                        }`}
                        sx={{ maxWidth: { md: '50%' } }}
                      >
                        <Card 
                          className={`card-hover ${
                            mode === 'dark' ? 'bg-gray-700' : 'bg-white'
                          }`}
                          sx={{
                            backgroundColor: mode === 'dark' ? '#374151' : '#ffffff',
                            border: mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                            borderRadius: '16px'
                          }}
                        >
                          <CardContent className="p-6">
                            {/* Header */}
                            <Box className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                              <Box>
                                <Typography 
                                  variant="h5" 
                                  className={`font-bold mb-1 ${
                                    mode === 'dark' ? 'text-white' : 'text-gray-900'
                                  }`}
                                >
                                  {exp.title}
                                </Typography>
                                <Box className="flex items-center mb-2">
                                  <BusinessCenter 
                                    className={`mr-2 ${
                                      mode === 'dark' ? 'text-blue-400' : 'text-blue-600'
                                    }`} 
                                    fontSize="small"
                                  />
                                  <Typography 
                                    variant="h6" 
                                    className={`${
                                      mode === 'dark' ? 'text-blue-400' : 'text-blue-600'
                                    }`}
                                  >
                                    {exp.company}
                                  </Typography>
                                </Box>
                              </Box>
                              <Chip 
                                label={exp.duration}
                                sx={{
                                  background: colorStyles.gradient,
                                  color: 'white',
                                  fontWeight: 600,
                                  fontSize: '0.875rem',
                                  alignSelf: 'flex-start'
                                }}
                              />
                            </Box>

                            {/* Achievements */}
                            <Box className="mb-6">
                              <Typography 
                                variant="h6" 
                                className={`mb-4 font-semibold flex items-center ${
                                  mode === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}
                              >
                                <TrendingUp className="mr-2" fontSize="small" />
                                Key Achievements
                              </Typography>
                              
                              <Box className="space-y-3">
                                {exp.achievements.map((achievement, achIndex) => (
                                  <motion.div
                                    key={achIndex}
                                    variants={itemVariants}
                                    className="flex items-start"
                                  >
                                    <CheckCircle 
                                      sx={{ 
                                        color: colorStyles.dot,
                                        fontSize: '1.2rem',
                                        marginRight: 2,
                                        marginTop: 0.5,
                                        flexShrink: 0
                                      }} 
                                    />
                                    <Typography 
                                      variant="body1" 
                                      className={`${
                                        mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                      }`}
                                    >
                                      {achievement}
                                    </Typography>
                                  </motion.div>
                                ))}
                              </Box>
                            </Box>

                            <Divider className="mb-6" />

                            {/* Tech Stack */}
                            <Box>
                              <Typography 
                                variant="h6" 
                                className={`mb-3 font-semibold flex items-center ${
                                  mode === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}
                              >
                                <Code className="mr-2" fontSize="small" />
                                Technologies Used
                              </Typography>
                              
                              <Box className="flex flex-wrap gap-2">
                                {exp.techStack.map((tech, techIndex) => (
                                  <motion.div
                                    key={techIndex}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <Chip
                                      label={tech}
                                      size="small"
                                      sx={{
                                        backgroundColor: mode === 'dark' ? '#4b5563' : '#f3f4f6',
                                        color: mode === 'dark' ? '#e5e7eb' : '#374151',
                                        fontSize: '0.8rem',
                                        fontWeight: 500,
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
                        </Card>
                      </Box>
                    </motion.div>
                  </Box>
                );
              })}
            </Box>
          </motion.div>


        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience; 