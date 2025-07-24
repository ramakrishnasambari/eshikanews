import React from 'react';
import {
  Box,
  Container,
  Typography,
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
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {/* Contact Information */}
          <Box sx={{ flex: '1 1 300px', minWidth: 0, maxWidth: 400 }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
              Contact
            </Typography>
            <Box sx={{ color: 'grey.300' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Email sx={{ mr: 1, fontSize: 'small' }} />
                <Typography variant="body2">eshikatrainingplacements@gmail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Phone sx={{ mr: 1, fontSize: 'small' }} />
                <Typography variant="body2">+91 9381698652</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationOn sx={{ mr: 1, fontSize: 'small' }} />
                <Typography variant="body2">Jannaram, Mancheriyal, 504205</Typography>
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