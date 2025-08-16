import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent,
  IconButton,
  Divider,
  Snackbar,
  Alert
} from '@mui/material';
import { 
  Email, 
  Phone, 
  LinkedIn, 
  GitHub,
  Code
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Contact = () => {
  const { mode } = useSelector((state) => state.theme);
  const { personalInfo } = useSelector((state) => state.portfolio);
  
  const [showCopied, setShowCopied] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  const handleCopyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(type);
      setShowCopied(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
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

  const contactMethods = [
    {
      icon: <Email />,
      title: 'Email',
      value: personalInfo.email,
      action: () => handleCopyToClipboard(personalInfo.email, 'Email'),
      color: 'blue'
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: personalInfo.phone,
      action: () => handleCopyToClipboard(personalInfo.phone, 'Phone number'),
      color: 'green'
    }
  ];

  const socialLinks = [
    {
      icon: <LinkedIn />,
      name: 'LinkedIn',
      url: personalInfo.linkedin,
      color: '#0e76a8'
    },
    {
      icon: <GitHub />,
      name: 'GitHub',
      url: personalInfo.github,
      color: mode === 'dark' ? '#f3f4f6' : '#111827'
    },
    {
      icon: <Code />,
      name: 'Code360',
      url: personalInfo.codeStudio,
      color: '#7c3aed'
    }
  ];

  const getMethodColor = (color) => {
    const colorMap = {
      blue: {
        bg: mode === 'dark' ? '#1e40af' : '#dbeafe',
        text: mode === 'dark' ? '#60a5fa' : '#1d4ed8',
        icon: mode === 'dark' ? '#3b82f6' : '#2563eb'
      },
      green: {
        bg: mode === 'dark' ? '#059669' : '#dcfce7',
        text: mode === 'dark' ? '#34d399' : '#047857',
        icon: mode === 'dark' ? '#10b981' : '#059669'
      },
      purple: {
        bg: mode === 'dark' ? '#7c3aed' : '#f3e8ff',
        text: mode === 'dark' ? '#a78bfa' : '#6d28d9',
        icon: mode === 'dark' ? '#8b5cf6' : '#7c3aed'
      }
    };
    return colorMap[color];
  };

  return (
    <Box
      id="contact"
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
              Let's Connect
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
              I'm always excited to discuss new opportunities, collaborations, or just have a great conversation about technology
            </Typography>
          </motion.div>

          {/* Contact Information - Centered */}
          <Box className="flex justify-center">
            <Box sx={{ maxWidth: '600px', width: '100%' }}>
              <motion.div variants={itemVariants}>
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
                      className={`mb-6 font-bold text-center ${
                        mode === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Get in Touch
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      className={`mb-8 text-lg text-center ${
                        mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      Feel free to reach out for collaborations, opportunities, or just to say hello!
                    </Typography>

                    {/* Contact Methods */}
                    <Box className="space-y-6 mb-8">
                      {contactMethods.map((method, index) => {
                        const colorStyles = getMethodColor(method.color);
                        return (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Box 
                              className={`flex items-center p-4 rounded-lg cursor-pointer transition-all ${
                                method.action ? 'hover:shadow-lg' : ''
                              }`}
                              onClick={() => method.action && method.action()}
                              sx={{
                                backgroundColor: mode === 'dark' ? '#374151' : '#f9fafb',
                                border: mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                                '&:hover': method.action ? {
                                  backgroundColor: colorStyles.bg,
                                  borderColor: colorStyles.icon,
                                } : {}
                              }}
                            >
                              <Box 
                                className="mr-4 p-3 rounded-full"
                                sx={{ backgroundColor: colorStyles.bg }}
                              >
                                <Box sx={{ color: colorStyles.icon }}>
                                  {method.icon}
                                </Box>
                              </Box>
                              <Box>
                                <Typography 
                                  variant="h6" 
                                  className={`font-semibold ${
                                    mode === 'dark' ? 'text-white' : 'text-gray-900'
                                  }`}
                                >
                                  {method.title}
                                </Typography>
                                <Typography 
                                  variant="body2" 
                                  className={`${
                                    mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                  }`}
                                >
                                  {method.value}
                                </Typography>
                              </Box>
                            </Box>
                          </motion.div>
                        );
                      })}
                    </Box>

                    <Divider className="my-6" />

                    {/* Social Links */}
                    <Typography 
                      variant="h6" 
                      className={`mb-4 font-semibold text-center ${
                        mode === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Find me online
                    </Typography>
                    
                    <Box className="flex gap-4 justify-center">
                      {socialLinks.map((social, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <IconButton
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              backgroundColor: mode === 'dark' ? '#374151' : '#f3f4f6',
                              color: social.color,
                              width: 56,
                              height: 56,
                              '&:hover': {
                                backgroundColor: social.color,
                                color: 'white',
                                transform: 'scale(1.1)',
                              }
                            }}
                          >
                            {social.icon}
                          </IconButton>
                        </motion.div>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          </Box>


        </motion.div>
      </Container>

      {/* Copy Success Notification */}
      <Snackbar
        open={showCopied}
        autoHideDuration={3000}
        onClose={() => setShowCopied(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowCopied(false)} 
          severity="success" 
          sx={{ 
            width: '100%',
            backgroundColor: mode === 'dark' ? '#065f46' : '#d1fae5',
            color: mode === 'dark' ? '#34d399' : '#065f46',
          }}
        >
          {copiedText} copied to clipboard! 📋
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 