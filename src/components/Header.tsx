import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  InputAdornment,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Newspaper as NewspaperIcon,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Technology', path: '/category/technology' },
    { label: 'Business', path: '/category/business' },
    { label: 'Politics', path: '/category/politics' },
    { label: 'Sports', path: '/category/sports' },
    { label: 'Entertainment', path: '/category/entertainment' },
  ];

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h6" color="primary">
          Eshika News
        </Typography>
      </Box>
      <List>
        {navigationItems.map((item) => (
          <ListItem
            key={item.label}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{ color: 'text.primary', textDecoration: 'none' }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" elevation={1} sx={{ backgroundColor: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* Logo and Brand */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Box
                component={Link}
                to="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <NewspaperIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    display: { xs: 'none', sm: 'block' },
                  }}
                >
                  Eshika News
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {navigationItems.slice(1).map((item) => (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    color="inherit"
                    sx={{
                      color: 'text.primary',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Search Bar */}
            <Box
              component="form"
              onSubmit={handleSearch}
              sx={{
                display: 'flex',
                alignItems: 'center',
                minWidth: { xs: 'auto', sm: 300 },
              }}
            >
              <TextField
                size="small"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton type="submit" edge="end">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'divider',
                    },
                  },
                }}
                sx={{ width: { xs: 150, sm: 300 } }}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header; 