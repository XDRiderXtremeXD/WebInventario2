import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 65px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(https://png.pngtree.com/background/20230612/original/pngtree-warehouses-with-lots-of-boxes-in-the-middle-picture-image_3182349.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <WarehouseIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>
          Excalibur Storage
        </Typography>
        <Typography variant="h6" sx={{ color: 'grey.300', mb: 4 }}>
          Sistema de gestión de inventario
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/Login')}
          sx={{
            px: 5,
            py: 1.5,
            fontSize: '1.1rem',
            boxShadow: '0 0 20px rgba(185,3,15,0.5)',
          }}
        >
          Entrar a la aplicación
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
