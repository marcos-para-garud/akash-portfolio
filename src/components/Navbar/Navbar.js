import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { setCurrentSection } from '../../store/portfolioSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { mode } = useSelector((state) => state.theme);
  const { currentSection, personalInfo } = useSelector((state) => state.portfolio);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', section: 'hero' },
    { label: 'About', section: 'about' },
    { label: 'Skills', section: 'skills' },
    { label: 'Experience', section: 'experience' },
    { label: 'Projects', section: 'projects' },
    { label: 'Achievements', section: 'achievements' },
    { label: 'Contact', section: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      dispatch(setCurrentSection(sectionId));
    }
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      className={`${mode === 'dark' ? 'bg-gray-900' : 'bg-white'} h-full`}
    >
      <Box className="p-4">
        <Typography variant="h6" className="gradient-text font-bold text-center mb-4">
          {personalInfo.name}
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.section} disablePadding>
            <ListItemButton
              onClick={() => scrollToSection(item.section)}
              className={`mx-2 rounded-lg transition-all duration-300 ${
                currentSection === item.section
                  ? mode === 'dark'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-100 text-blue-600'
                  : mode === 'dark'
                  ? 'text-gray-300 hover:bg-gray-800'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ListItemText 
                primary={item.label} 
                className="text-center font-medium"
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={isScrolled ? 4 : 0}
        className={`transition-all duration-300 ${
          isScrolled
            ? mode === 'dark'
              ? 'bg-gray-900/95 backdrop-blur-md'
              : 'bg-white/95 backdrop-blur-md'
            : 'bg-transparent'
        }`}
        sx={{
          backgroundColor: isScrolled
            ? mode === 'dark'
              ? 'rgba(17, 24, 39, 0.95)'
              : 'rgba(255, 255, 255, 0.95)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled 
            ? `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
            : 'none',
        }}
      >
        <Toolbar className="px-4 lg:px-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-grow"
          >
            <Typography
              variant="h5"
              className="gradient-text font-bold cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              {personalInfo.name.split(' ')[0]}
            </Typography>
          </motion.div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-1"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.section}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Button
                    onClick={() => scrollToSection(item.section)}
                    className={`mx-1 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      currentSection === item.section
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : mode === 'dark'
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                    sx={{
                      textTransform: 'none',
                      borderRadius: '25px',
                      minWidth: 'auto',
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={`${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}
              >
                <Menu />
              </IconButton>
            </motion.div>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            backgroundColor: mode === 'dark' ? '#111827' : '#ffffff',
          },
        }}
      >
        <Box className="flex justify-end p-4">
          <IconButton
            onClick={handleDrawerToggle}
            className={`${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}
          >
            <Close />
          </IconButton>
        </Box>
        {drawer}
      </Drawer>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar; 