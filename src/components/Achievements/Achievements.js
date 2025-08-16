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
  Newspaper, 
  Code, 
  EmojiEvents, 
  TrendingUp,
  People,
  WorkspacePremium,
  Star
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Achievements = () => {
  const { mode } = useSelector((state) => state.theme);
  const { achievements } = useSelector((state) => state.portfolio);

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

  const getIconComponent = (iconName) => {
    const iconMap = {
      newsletter: <Newspaper />,
      code: <Code />,
      trophy: <EmojiEvents />,
      medal: <WorkspacePremium />
    };
    return iconMap[iconName] || <Star />;
  };

  const getCategoryColor = (category) => {
    const colorMap = {
      'Content Creation': {
        color: 'blue',
        gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        bg: mode === 'dark' ? '#1e40af' : '#dbeafe',
        text: mode === 'dark' ? '#93c5fd' : '#1d4ed8'
      },
      'Programming': {
        color: 'green',
        gradient: 'linear-gradient(135deg, #10b981, #059669)',
        bg: mode === 'dark' ? '#059669' : '#dcfce7',
        text: mode === 'dark' ? '#6ee7b7' : '#059669'
      },
      'Platform Recognition': {
        color: 'purple',
        gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        bg: mode === 'dark' ? '#7c3aed' : '#f3e8ff',
        text: mode === 'dark' ? '#c4b5fd' : '#7c3aed'
      },
      'Academic': {
        color: 'orange',
        gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
        bg: mode === 'dark' ? '#ea580c' : '#fed7aa',
        text: mode === 'dark' ? '#fdba74' : '#ea580c'
      }
    };
    return colorMap[category] || colorMap['Programming'];
  };

  const statsData = [
    {
      number: '1800+',
      label: 'Newsletter Subscribers',
      icon: <People />,
      color: 'blue'
    },
    {
      number: '600+',
      label: 'Problems Solved',
      icon: <Code />,
      color: 'green'
    },
    {
      number: '40+',
      label: 'Platform Badges',
      icon: <EmojiEvents />,
      color: 'purple'
    },
    {
      number: '200+',
      label: 'Day Streak',
      icon: <TrendingUp />,
      color: 'orange'
    }
  ];

  const getStatsColor = (color) => {
    const colorMap = {
      blue: {
        bg: mode === 'dark' ? '#1e3a8a' : '#dbeafe',
        text: mode === 'dark' ? '#60a5fa' : '#2563eb',
        icon: mode === 'dark' ? '#3b82f6' : '#1d4ed8'
      },
      green: {
        bg: mode === 'dark' ? '#14532d' : '#dcfce7',
        text: mode === 'dark' ? '#34d399' : '#059669',
        icon: mode === 'dark' ? '#10b981' : '#047857'
      },
      purple: {
        bg: mode === 'dark' ? '#581c87' : '#f3e8ff',
        text: mode === 'dark' ? '#a78bfa' : '#7c3aed',
        icon: mode === 'dark' ? '#8b5cf6' : '#6d28d9'
      },
      orange: {
        bg: mode === 'dark' ? '#9a3412' : '#fed7aa',
        text: mode === 'dark' ? '#fb923c' : '#ea580c',
        icon: mode === 'dark' ? '#f97316' : '#c2410c'
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
              Achievements & Recognition
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
              Celebrating milestones in my development journey and continuous learning
            </Typography>
          </motion.div>

          {/* Statistics Row */}
          <motion.div variants={itemVariants} className="mb-16">
            <Grid container spacing={4}>
              {statsData.map((stat, index) => {
                const colorStyles = getStatsColor(stat.color);
                return (
                  <Grid item xs={6} md={3} key={index}>
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card 
                        className={`text-center card-hover ${
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
                          <Box 
                            className={`mb-4 inline-flex p-4 rounded-full`}
                            sx={{ backgroundColor: colorStyles.bg }}
                          >
                            <Box sx={{ color: colorStyles.icon }}>
                              {stat.icon}
                            </Box>
                          </Box>
                          <Typography 
                            variant="h3" 
                            className="font-bold mb-2"
                            sx={{ color: colorStyles.text }}
                          >
                            {stat.number}
                          </Typography>
                          <Typography 
                            variant="body1" 
                            className={`${
                              mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}
                          >
                            {stat.label}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                );
              })}
            </Grid>
          </motion.div>

          {/* Achievements Grid */}
          <Grid container spacing={4}>
            {achievements.map((achievement, index) => {
              const categoryStyles = getCategoryColor(achievement.category);
              
              return (
                <Grid item xs={12} md={6} key={achievement.id}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card 
                      className={`h-full achievement-card ${
                        mode === 'dark' ? 'bg-gray-700' : 'bg-white'
                      }`}
                      data-aos="fade-up"
                      data-aos-delay={index * 150}
                      sx={{
                        backgroundColor: mode === 'dark' ? '#374151' : '#ffffff',
                        border: mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        position: 'relative',
                        '&:hover': {
                          boxShadow: mode === 'dark' 
                            ? '0 20px 40px rgba(0, 0, 0, 0.3)' 
                            : `0 20px 40px ${categoryStyles.text}20`,
                        }
                      }}
                    >
                      {/* Header with Gradient */}
                      <Box 
                        sx={{
                          background: categoryStyles.gradient,
                          height: '80px',
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0 24px'
                        }}
                      >
                        <Box className="flex items-center">
                          <Avatar
                            sx={{
                              width: 48,
                              height: 48,
                              backgroundColor: 'rgba(255, 255, 255, 0.2)',
                              marginRight: 2
                            }}
                          >
                            {getIconComponent(achievement.icon)}
                          </Avatar>
                          <Typography 
                            variant="h6" 
                            className="text-white font-semibold"
                          >
                            {achievement.category}
                          </Typography>
                        </Box>
                        
                        {/* Achievement badge */}
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Star className="text-white" fontSize="small" />
                        </Box>
                      </Box>

                      <CardContent className="p-6">
                        <Typography 
                          variant="h5" 
                          className={`mb-4 font-bold ${
                            mode === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {achievement.title}
                        </Typography>
                        
                        <Typography 
                          variant="body1" 
                          className={`leading-relaxed ${
                            mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          {achievement.link ? (
                            <span>
                              {achievement.description.split('"The Engineering Playbook"')[0]}
                              <a 
                                href={achievement.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: categoryStyles.text,
                                  textDecoration: 'underline',
                                  fontWeight: 600,
                                  cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                                onMouseLeave={(e) => e.target.style.opacity = '1'}
                              >
                                "The Engineering Playbook"
                              </a>
                              {achievement.description.split('"The Engineering Playbook"')[1]}
                            </span>
                          ) : (
                            achievement.description
                          )}
                        </Typography>

                        {/* Category chip at bottom */}
                        <Box className="mt-4">
                          <Chip 
                            label={achievement.category}
                            size="small"
                            sx={{
                              backgroundColor: categoryStyles.bg,
                              color: categoryStyles.text,
                              fontWeight: 600,
                              border: `1px solid ${categoryStyles.text}30`
                            }}
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>


        </motion.div>
      </Container>
    </Box>
  );
};

export default Achievements; 