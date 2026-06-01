import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import { useNavigate } from 'react-router-dom';

const PaginaNoValida = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const segundero = setTimeout(() => navigate('/Login'), 3000);
    return () => clearTimeout(segundero);
  }, [navigate]);

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 65px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 5,
          textAlign: 'center',
          maxWidth: 520,
          borderRadius: 3,
        }}
      >
        <ErrorOutlinedIcon color="error" sx={{ fontSize: 64, mb: 2 }} />
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Página no disponible
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          La página no existe o no está disponible para tu usuario.
        </Typography>
        <CircularProgress color="primary" sx={{ mb: 2 }} />
        <Typography variant="body2" color="text.secondary">
          Redirigiendo al inicio de sesión en 3 segundos...
        </Typography>
      </Paper>
    </Box>
  );
};

export default PaginaNoValida;
