import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const menuItems = [
    { label: 'Inicio', link: 'welcome' },
    { label: 'Objetivos', link: 'objectives' },
    { label: 'Recorrido Virtual', link: 'virtual-tour' },
    { label: 'Módulos', link: 'modules' },
    { label: 'Comics AR', link: 'comics' },
    { label: 'App Móvil', link: 'mobile-app' },
  ];

  return (
    <AppBar  position="fixed" color={darkMode ? 'default' : 'secondary'}  sx={{
      backgroundColor: '#b84081',
      height: '25px', // Altura personalizada
      marginTop: '60px',
      //marginRight: '70px',
      justifyContent: 'center', // Centra verticalmente
    }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          HYDROPLAY
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.link}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
            >
              <Button color="inherit" sx={{ marginLeft: 2 }}>
                {item.label}
              </Button>
            </Link>
          ))}
        </Box>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'flex', md: 'none' } } }
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.label} onClick={handleMenuClose}>
              <Link
                to={item.link}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                {item.label}
              </Link>
            </MenuItem>
          ))}
        </Menu>
       
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
