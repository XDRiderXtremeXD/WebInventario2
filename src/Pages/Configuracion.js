import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { alpha, useTheme } from '@mui/material/styles';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import FormProducto from '../Components/FormProducto';
import ListUsuario from '../Components/ListUsuario';
import { usuarios } from '../Data/Data';

const NAVBAR_OFFSET = 96;

const MENU_ITEMS = [
  { id: 1, label: 'Usuarios', icon: PeopleIcon, masterOnly: true },
  { id: 2, label: 'Productos', icon: InventoryIcon, masterOnly: false },
];

const ConfigSidebar = ({ opcion, setOpcion, activarUsuarios }) => {
  const theme = useTheme();
  const items = MENU_ITEMS.filter((item) => !item.masterOnly || activarUsuarios);

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 2,
        border: 1,
        borderColor: 'divider',
        position: { md: 'sticky' },
        top: { md: NAVBAR_OFFSET },
        bgcolor: 'background.paper',
        p: 1.25,
      }}
    >
      <List disablePadding>
        {items.map((item) => {
          const selected = opcion === item.id;
          const Icon = item.icon;

          return (
            <ListItemButton
              key={item.id}
              selected={selected}
              onClick={() => setOpcion(item.id)}
              sx={{
                borderRadius: 1.5,
                mb: 0.5,
                py: 1.25,
                '&.Mui-selected': {
                  bgcolor: alpha(theme.palette.primary.main, 0.12),
                  color: 'primary.main',
                  '& .MuiListItemIcon-root': { color: 'primary.main' },
                  '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.16) },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Icon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: selected ? 700 : 500 }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Paper>
  );
};

const ConfigMobileNav = ({ opcion, setOpcion, activarUsuarios }) => {
  const items = MENU_ITEMS.filter((item) => !item.masterOnly || activarUsuarios);

  return (
    <Paper elevation={0} sx={{ borderRadius: 2, border: 1, borderColor: 'divider', mb: 2 }}>
      <Tabs
        value={opcion}
        onChange={(_, value) => setOpcion(value)}
        variant="fullWidth"
        textColor="primary"
        indicatorColor="primary"
      >
        {items.map((item) => (
          <Tab
            key={item.id}
            value={item.id}
            label={item.label}
            icon={<item.icon fontSize="small" />}
            iconPosition="start"
            sx={{ minHeight: 48, textTransform: 'none', fontWeight: 600 }}
          />
        ))}
      </Tabs>
    </Paper>
  );
};

const Configuracion = (props) => {
  const [opcion, setOpcion] = useState(2);
  const usuario = usuarios.find((u) => u.id === props.userId);
  const esMaster = usuario?.TipoUsuario === 'Master';

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <ConfigMobileNav opcion={opcion} setOpcion={setOpcion} activarUsuarios={esMaster} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          alignItems: 'flex-start',
        }}
      >
        <Box sx={{ width: { xs: '100%', md: 200 }, flexShrink: 0, display: { xs: 'none', md: 'block' } }}>
          <ConfigSidebar opcion={opcion} setOpcion={setOpcion} activarUsuarios={esMaster} />
        </Box>

        <Box sx={{ flex: 1, minWidth: 0, width: '100%' }}>
          {opcion === 1 && <ListUsuario userId={props.userId} />}
          {opcion === 2 && <FormProducto />}
        </Box>
      </Box>
    </Container>
  );
};

export default Configuracion;
