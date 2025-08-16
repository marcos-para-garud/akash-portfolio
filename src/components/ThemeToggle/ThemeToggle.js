import React from 'react';
import { IconButton, Box } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../store/themeSlice';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <Box className="fixed top-20 right-4 z-50">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <IconButton
          onClick={handleToggle}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
            mode === 'dark'
              ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
              : 'bg-white text-gray-800 hover:bg-gray-100'
          }`}
          sx={{
            backdropFilter: 'blur(10px)',
            border: mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
          }}
        >
          {mode === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>
      </motion.div>
    </Box>
  );
};

export default ThemeToggle; 