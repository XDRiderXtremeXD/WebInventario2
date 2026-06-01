import React, { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';
import Tabla from '../Components/Tabla';
import { tablaMovimiento } from '../Data/Data';

const Registros = () => {
  const [busqueda, setBusqueda] = useState('');
  const [tipoMovimiento, setTipoMovimiento] = useState('Todos');

  const registrosFiltrados = useMemo(() => {
    let data = [...tablaMovimiento].reverse();

    if (tipoMovimiento !== 'Todos') {
      data = data.filter((r) => r.tipoMovimiento === tipoMovimiento);
    }

    if (busqueda.trim()) {
      const q = busqueda.toLowerCase();
      data = data.filter(
        (r) =>
          r.titulo.toLowerCase().includes(q) ||
          r.proveedor.toLowerCase().includes(q) ||
          String(r.id_producto).includes(q)
      );
    }

    return data;
  }, [busqueda, tipoMovimiento]);

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Typography variant="h5" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <HistoryIcon color="primary" />
        Registro de Movimientos
      </Typography>

      <Paper elevation={2} sx={{ p: 1.25, borderRadius: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
          <TextField
            size="small"
            placeholder="Buscar por producto, proveedor o ID..."
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
            label="Tipo de movimiento"
            value={tipoMovimiento}
            onChange={(e) => setTipoMovimiento(e.target.value)}
            sx={{ minWidth: 180 }}
          >
            <MenuItem value="Todos">Todos</MenuItem>
            <MenuItem value="Entrada">Entrada</MenuItem>
            <MenuItem value="Salida">Salida</MenuItem>
          </TextField>
        </Box>
      </Paper>

      <Tabla
        atributos={['id_producto', 'imagen', 'titulo', 'tipoMovimiento', 'cantidad', 'usuario_registro', 'proveedor']}
        tabla={registrosFiltrados}
        paginado
        paginationKey={`${busqueda}-${tipoMovimiento}`}
      />
    </Container>
  );
};

export default Registros;
