import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        mt: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: 'secondary.main',
        color: 'white',
      }}
    >
      <Typography variant="body2">Copyright © 2024 Excalibur Storage</Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton
          component="a"
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white' }}
          size="small"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white' }}
          size="small"
        >
          <WhatsAppIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white' }}
          size="small"
        >
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
