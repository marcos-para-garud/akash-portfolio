import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const ParticleBackground = () => {
  const { mode } = useSelector((state) => state.theme);

  return (
    <Box className="particles fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full ${
            mode === 'dark' ? 'bg-blue-400' : 'bg-blue-300'
          } opacity-20`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </Box>
  );
};

export default ParticleBackground; 