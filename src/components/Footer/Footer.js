import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { mode } = useSelector((state) => state.theme);
  const currentYear = new Date().getFullYear();

  return (
    <Box
      className={`py-8 ${
        mode === 'dark' ? 'bg-gray-900' : 'bg-gray-800'
      }`}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="body2" 
          className="text-center text-gray-400"
        >
          © {currentYear} Akash Agrawal. Built with React, Material-UI & Tailwind CSS.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 