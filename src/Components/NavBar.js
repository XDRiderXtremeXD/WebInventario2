import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';
import InventoryIcon from '@mui/icons-material/Inventory';
import HistoryIcon from '@mui/icons-material/History';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { usuarios } from '../Data/Data';
import Alertas from '../Auxiliar/Alertas';

const navItems = [
  { label: 'Inicio', path: '/inicio', icon: <HomeIcon /> },
  { label: 'Productos', path: '/productos', icon: <InventoryIcon /> },
  { label: 'Registros', path: '/registros', icon: <HistoryIcon /> },
];

const NavBar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const usuario = usuarios.find((u) => u.id === props.userId);

  function desloguearAccion() {
    Alertas({
      tipo: 'pregunta',
      frase: 'Deseas cerrar sesion?',
      funcionAcepta: () => {
        props.desloguear();
        navigate('/Login');
      },
      funcionDeniega: () => {
        Alertas({ tipo: 'info', frase: 'Tu potencial es infinito, atrévete a explorarlo' });
      },
    });
  }

  const items = [
    ...navItems,
    ...(usuario?.TipoUsuario === 'Master'
      ? [{ label: 'Configuración', path: '/configuracion', icon: <SettingsIcon /> }]
      : []),
  ];

  return (
    <AppBar
      position="sticky"
      elevation={4}
      sx={{
        background: 'radial-gradient(circle, #161917 59%, #b9030f 100%)',
        mt: 2,
        mx: { xs: 1, md: 2 },
        borderRadius: 2,
        overflow: 'visible',
      }}
    >
      <Toolbar
        sx={{
          position: 'relative',
          gap: 2,
          minHeight: { xs: 56, sm: 64 },
          overflow: 'visible',
          pl: { xs: 9, sm: 11 },
        }}
      >
        <Box
          component="img"
          src="/logo.png"
          alt="logo"
          sx={{
            position: 'absolute',
            left: { xs: -8, md: -2 },
            top: '50%',
            transform: 'translateY(-50%)',
            height: { xs: 76, sm: 92 },
            width: 'auto',
            zIndex: 2,
            filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.4))',
          }}
        />

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, flexGrow: 1 }}>
          {items.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              startIcon={item.icon}
              sx={{
                color: location.pathname === item.path ? '#ff0011' : 'white',
                fontWeight: location.pathname === item.path ? 700 : 500,
                '&:hover': { textShadow: '0 0 9px rgba(255,212,0,0.8)' },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 0.5, flexGrow: 1, overflowX: 'auto' }}>
          {items.map((item) => (
            <IconButton
              key={item.path}
              component={Link}
              to={item.path}
              sx={{ color: location.pathname === item.path ? '#ff0011' : 'white' }}
              size="small"
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, ml: 'auto' }}>
          <Avatar src="/avatar.png" alt="avatar" sx={{ width: 36, height: 36 }} />
          <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 600 }}>
            {usuario?.Nombre}
          </Typography>
          <Tooltip title="Cerrar sesión">
            <IconButton onClick={desloguearAccion} sx={{ color: 'white' }} size="small">
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
