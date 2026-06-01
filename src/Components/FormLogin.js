import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import { usuarios } from '../Data/Data';
import { useNavigate } from 'react-router-dom';
import Alertas from '../Auxiliar/Alertas';

const FormLogin = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.userId !== null) navigate('/inicio');
  }, [props.userId, navigate]);

  function VerificarLogin(e) {
    e.preventDefault();
    const correo = e.target['correo'].value;
    const password = e.target['password'].value;
    const usuario = usuarios.find((u) => u.Email === correo && u.password === password);

    if (usuario !== undefined) props.setUserId(usuario.id);
    else Alertas({ tipo: 'error', frase: 'Correo o contraseña no valido' });
  }

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 65px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://png.pngtree.com/background/20230612/original/pngtree-warehouses-with-lots-of-boxes-in-the-middle-picture-image_3182349.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        p: 2,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 440,
          bgcolor: 'secondary.main',
          color: 'white',
          borderRadius: 3,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
          <Avatar sx={{ bgcolor: 'primary.main', mb: 1 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" fontWeight={700}>
            Iniciar Sesión
          </Typography>
          <Typography variant="body2" color="grey.400">
            Ingresa tus credenciales para continuar
          </Typography>
        </Box>

        <Box component="form" onSubmit={VerificarLogin} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            id="correo"
            name="correo"
            label="Correo electrónico"
            type="email"
            required
            fullWidth
            variant="outlined"
            InputLabelProps={{ sx: { color: 'grey.400' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': { borderColor: 'grey.600' },
                '&:hover fieldset': { borderColor: 'primary.main' },
              },
            }}
          />
          <TextField
            id="password"
            name="password"
            label="Contraseña"
            type="password"
            required
            fullWidth
            variant="outlined"
            InputLabelProps={{ sx: { color: 'grey.400' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': { borderColor: 'grey.600' },
                '&:hover fieldset': { borderColor: 'primary.main' },
              },
            }}
          />
          <Button type="submit" variant="contained" size="large" fullWidth sx={{ mt: 1, py: 1.5 }}>
            Ingresar
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default FormLogin;
