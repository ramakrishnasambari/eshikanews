import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Categories',
      links: [
        { label: 'Technology', href: '/category/technology' },
        { label: 'Business', href: '/category/business' },
        { label: 'Politics', href: '/category/politics' },
        { label: 'Sports', href: '/category/sports' },
        { label: 'Entertainment', href: '/category/entertainment' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Advertise', href: '/advertise' },
        { label: 'Submit News', href: '/submit' },
        { label: 'Feedback', href: '/feedback' },
        { label: 'Report Issue', href: '/report' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: LinkedIn, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'grey.900',
        color: 'white',
        mt: 'auto',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {/* Newsletter Signup */}
          <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
              Eshika News
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: 'grey.300' }}>
              Stay updated with the latest news and insights. Subscribe to our newsletter for daily updates delivered to your inbox.
            </Typography>
            <Box component="form" sx={{ display: 'flex', gap: 1 }}>
              <TextField
                size="small"
                placeholder="Enter your email"
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'grey.600',
                    },
                    '&:hover fieldset': {
                      borderColor: 'primary.main',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'grey.400',
                    opacity: 1,
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ px: 3 }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <Box sx={{ flex: '1 1 200px', minWidth: 0 }} key={section.title}>
              <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                {section.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {section.links.map((link) => (
                  <Box component="li" key={link.label} sx={{ mb: 1 }}>
                    <Link
                      href={link.href}
                      sx={{
                        color: 'grey.300',
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}

          {/* Contact Information */}
          <Box sx={{ flex: '1 1 200px', minWidth: 0 }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
              Contact
            </Typography>
            <Box sx={{ color: 'grey.300' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Email sx={{ mr: 1, fontSize: 'small' }} />
                <Typography variant="body2">info@eshikanews.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Phone sx={{ mr: 1, fontSize: 'small' }} />
                <Typography variant="body2">+1 (555) 123-4567</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationOn sx={{ mr: 1, fontSize: 'small' }} />
                <Typography variant="body2">New York, NY 10001</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 4, borderColor: 'grey.700' }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'grey.400' }}>
            © {currentYear} Eshika News. All rights reserved.
          </Typography>

          {/* Social Links */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'grey.400',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'rgba(214, 51, 132, 0.1)',
                  },
                }}
              >
                <social.icon />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 