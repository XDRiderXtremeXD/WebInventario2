import React, { useState, useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TarjetaProducto from '../Components/TarjetaProductos';
import { tablaStock } from '../Data/Data';

const ITEMS_POR_PAGINA = 12;

const filtrarProductos = (productos, state) => {
  let resultado = productos.filter(
    (p) => state.categorias.length === 0 || state.categorias.includes(p.categoria)
  );
  resultado = resultado.filter(
    (p) => state.match === '' || p.titulo.toLowerCase().includes(state.match.toLowerCase())
  );
  return resultado.filter((p) =>
    state.esStockMayorIgualA ? p.stock >= state.cantidad : p.stock <= state.cantidad
  );
};

const AsideFilter = ({ state, setState }) => {
  const categorias = [];
  tablaStock.forEach((element) => {
    if (!categorias.includes(element.categoria)) categorias.push(element.categoria);
  });

  const Buscar = (e) => setState({ ...state, match: e.target.value });

  const CheckCategoria = (e) => {
    let categoriasFiltradas = [...state.categorias];
    const categoriaSeleccionada = e.target.name;
    if (e.target.checked) {
      if (!categoriasFiltradas.includes(categoriaSeleccionada))
        categoriasFiltradas.push(categoriaSeleccionada);
      setState({ ...state, categorias: categoriasFiltradas });
    } else {
      categoriasFiltradas = categoriasFiltradas.filter((c) => c !== categoriaSeleccionada);
      setState({ ...state, categorias: categoriasFiltradas });
    }
  };

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 88,
        maxHeight: 'calc(100vh - 100px)',
        overflowY: 'auto',
      }}
    >
      <Typography variant="h6" fontWeight={700} gutterBottom>
        Filtros
      </Typography>

      <TextField
        fullWidth
        size="small"
        placeholder="Buscar producto..."
        onChange={Buscar}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          },
        }}
        sx={{ mb: 2 }}
      />

      <Typography variant="subtitle2" fontWeight={600} gutterBottom>
        Categorías
      </Typography>
      <FormGroup sx={{ mb: 2 }}>
        {categorias.map((categoria, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox size="small" id={`cbox${index}`} name={categoria} onChange={CheckCategoria} />
            }
            label={<Typography variant="body2">{categoria}</Typography>}
          />
        ))}
      </FormGroup>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle2" fontWeight={600} gutterBottom>
        Stock
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <Typography variant="caption">Menor o igual</Typography>
        <Switch
          defaultChecked={state.esStockMayorIgualA}
          onChange={(e) => setState({ ...state, esStockMayorIgualA: e.target.checked })}
        />
        <Typography variant="caption">Mayor o igual</Typography>
      </Box>

      <TextField
        fullWidth
        size="small"
        type="number"
        label="Cantidad"
        defaultValue={0}
        onChange={(e) => setState({ ...state, cantidad: Number(e.target.value) })}
      />
    </Box>
  );
};

const TarjetasProductos = ({ productos, setActualiceProducts, actualiceProducts, userId, page, onPageChange }) => {
  const totalPaginas = Math.max(1, Math.ceil(productos.length / ITEMS_POR_PAGINA));
  const paginaActual = Math.min(page, totalPaginas);

  const productosPagina = useMemo(() => {
    const inicio = (paginaActual - 1) * ITEMS_POR_PAGINA;
    return productos.slice(inicio, inicio + ITEMS_POR_PAGINA);
  }, [productos, paginaActual]);

  const desde = productos.length === 0 ? 0 : (paginaActual - 1) * ITEMS_POR_PAGINA + 1;
  const hasta = Math.min(paginaActual * ITEMS_POR_PAGINA, productos.length);

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, minmax(0, 1fr))',
            sm: 'repeat(2, minmax(0, 1fr))',
            lg: 'repeat(3, minmax(0, 1fr))',
            xl: 'repeat(4, minmax(0, 1fr))',
          },
          gap: 2,
          width: '100%',
        }}
      >
        {productosPagina.map((elemento) => (
          <TarjetaProducto
            key={elemento.id}
            img={elemento.imagen}
            nombre={elemento.titulo}
            id={elemento.id}
            stock={elemento.stock}
            descripcion={elemento.descripcion}
            setActualiceProducts={setActualiceProducts}
            actualiceProducts={actualiceProducts}
            userId={userId}
          />
        ))}
      </Box>

      {productos.length === 0 && (
        <Typography variant="body1" color="text.secondary" sx={{ py: 6, textAlign: 'center' }}>
          No se encontraron productos con los filtros aplicados.
        </Typography>
      )}

      {productos.length > 0 && (
        <Box sx={{ mt: 4, width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
              Mostrando {desde}–{hasta} de {productos.length} productos
            </Typography>
            <Pagination
              count={totalPaginas}
              page={paginaActual}
              onChange={(_, value) => {
                onPageChange(value);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              color="primary"
              shape="rounded"
              showFirstButton
              showLastButton
            />
          </Stack>
        </Box>
      )}
    </>
  );
};

const Productos = (props) => {
  const [state, setState] = useState({ match: '', categorias: [], esStockMayorIgualA: true, cantidad: 0 });
  const [actualiceProducts, setActualiceProducts] = useState(tablaStock);
  const [page, setPage] = useState(1);

  const productosFiltrados = useMemo(
    () => filtrarProductos(actualiceProducts, state),
    [actualiceProducts, state]
  );

  useEffect(() => {
    setPage(1);
  }, [state.match, state.categorias, state.esStockMayorIgualA, state.cantidad]);

  useEffect(() => {
    const totalPaginas = Math.max(1, Math.ceil(productosFiltrados.length / ITEMS_POR_PAGINA));
    if (page > totalPaginas) setPage(totalPaginas);
  }, [productosFiltrados.length, page]);

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 0,
          alignItems: 'stretch',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: 280 },
            flexShrink: 0,
            alignSelf: 'stretch',
            mr: { md: 3 },
            mb: { xs: 3, md: 0 },
          }}
        >
          <Paper
            elevation={2}
            sx={{
              p: 2.5,
              borderRadius: 2,
              height: '100%',
              minHeight: { md: 'calc(100vh - 120px)' },
              bgcolor: 'background.paper',
              borderRight: { md: 1 },
              borderColor: 'divider',
            }}
          >
            <AsideFilter state={state} setState={setState} />
          </Paper>
        </Box>

        <Box sx={{ flex: 1, minWidth: 0, width: '100%' }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Catálogo de Productos
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? 's' : ''} encontrado
            {productosFiltrados.length !== 1 ? 's' : ''}
          </Typography>
          <TarjetasProductos
            productos={productosFiltrados}
            setActualiceProducts={setActualiceProducts}
            actualiceProducts={actualiceProducts}
            userId={props.userId}
            page={page}
            onPageChange={setPage}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Productos;
