import React, { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import Tabla from '../Components/Tabla';
import { usuarios } from '../Data/Data';
import FormUsuario from './FormularioUsuario';
import Alertas from '../Auxiliar/Alertas';

const ListUsuario = (props) => {
  const [isModalOpenAddUser, setIsModalOpenAddUser] = useState(false);
  const [users, setUsers] = useState(usuarios);
  const [busqueda, setBusqueda] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('Todos');

  function EliminarUsuario(id) {
    if (props.userId === id) {
      Alertas({ tipo: 'error', frase: 'No puede eliminar su propio usuario' });
      return;
    }
    const usuario = usuarios.find((u) => u.id === id);

    Alertas({
      tipo: 'pregunta',
      frase: 'Deseas eliminar a ' + usuario.Nombre + '?',
      funcionAcepta: () => {
        const indice = usuarios.findIndex((u) => u.id === id);
        usuarios.splice(indice, 1);
        setUsers([...usuarios]);
      },
    });
  }

  const usersFiltrados = useMemo(() => {
    let data = [...users];

    if (tipoUsuario !== 'Todos') {
      data = data.filter((u) => u.TipoUsuario === tipoUsuario);
    }

    if (busqueda.trim()) {
      const q = busqueda.toLowerCase();
      data = data.filter(
        (u) =>
          u.Nombre.toLowerCase().includes(q) ||
          u.Email.toLowerCase().includes(q) ||
          u.DNI.includes(q) ||
          String(u.id).includes(q)
      );
    }

    return data;
  }, [users, busqueda, tipoUsuario]);

  const tabla = useMemo(
    () =>
      usersFiltrados.map((item) => ({
        ...item,
        Accion: {
          funcion: () => EliminarUsuario(item.id),
          nombre: 'eliminar',
          icono: '/quitar-usuario.png',
        },
      })),
    [usersFiltrados]
  );

  return (
    <Paper elevation={2} sx={{ px: 1.25, py: 1.875, borderRadius: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5" fontWeight={700}>
          Usuarios
        </Typography>
        <Button variant="contained" startIcon={<PersonAddIcon />} onClick={() => setIsModalOpenAddUser(true)}>
          Agregar Usuario
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center', mt: 2.5, mb: 2.5 }}>
        <TextField
          size="small"
          placeholder="Buscar por nombre, email, DNI o ID..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          sx={{ flex: 1, minWidth: 220 }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          select
          size="small"
          label="Tipo de usuario"
          value={tipoUsuario}
          onChange={(e) => setTipoUsuario(e.target.value)}
          sx={{ minWidth: 180 }}
        >
          <MenuItem value="Todos">Todos</MenuItem>
          <MenuItem value="Master">Master</MenuItem>
          <MenuItem value="Usuario">Usuario</MenuItem>
        </TextField>
      </Box>

      <Tabla
        clase="tablaListadoUsuarios"
        atributos={['id', 'Nombre', 'Email', 'DNI', 'TipoUsuario', 'Accion']}
        tabla={tabla}
        paginado
        paginationKey={`${busqueda}-${tipoUsuario}`}
      />

      {isModalOpenAddUser && (
        <FormUsuario cerrar={() => setIsModalOpenAddUser(false)} setUsers={setUsers} />
      )}
    </Paper>
  );
};

export default ListUsuario;
