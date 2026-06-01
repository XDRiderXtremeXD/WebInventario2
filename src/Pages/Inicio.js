import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabla from '../Components/Tabla';
import GraficaBarras from '../Components/GraficaBarras';
import TarjetaProductoModificacion from '../Components/TarjetaProductoModificacion';
import { tablaMovimiento, tablaStock } from '../Data/Data';
import Carrusel from '../Components/Carrusel';

const Inicio = (props) => {
  const [productClick, setProductClick] = useState({ openModal: false, producto: null, agregar: true });

  function Funcion(e) {
    setProductClick({ openModal: true, agregar: true, producto: { ...e, nombre: e.titulo, img: e.imagen } });
  }

  function productosConMenorStock(cantidad, data) {
    const productosOrdenados = [...data].sort((a, b) => a.stock - b.stock);
    return productosOrdenados.slice(0, cantidad);
  }

  function setActualiceProducts(arreglo) {
    console.log(arreglo);
  }

  let tablaStock2 = productosConMenorStock(10, tablaStock);
  tablaStock2 = tablaStock2.map((producto) => {
    producto['Accion'] = { funcion: () => Funcion(producto), nombre: 'agregar', icono: '/agregarProducto.png' };
    return producto;
  });

  let tablaMovimiento2 = tablaMovimiento.slice(-10).reverse();

  const maximoStockMenor = 20;
  let barrasStockCategoria = [];
  let barrasStockProductosMenoresCategoria = [];
  tablaStock.forEach((element) => {
    if (!barrasStockCategoria.some((item) => item.nombre === element.categoria)) {
      barrasStockCategoria.push({ nombre: element.categoria, cantidad: 0 });
      barrasStockProductosMenoresCategoria.push({ nombre: element.categoria, cantidad: 0 });
    }

    const indiceCategoria = barrasStockCategoria.findIndex((item) => item.nombre === element.categoria);
    barrasStockCategoria[indiceCategoria].cantidad += element.stock;

    if (element.stock < maximoStockMenor)
      barrasStockProductosMenoresCategoria[indiceCategoria].cantidad++;
  });

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Carrusel />
      </Box>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <GraficaBarras titulo="STOCK" barras={barrasStockCategoria} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <GraficaBarras
            titulo={`Productos con Stock Menores a ${maximoStockMenor}`}
            barras={barrasStockProductosMenoresCategoria}
            variant="alert"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom color="text.primary">
            Stock Bajo
          </Typography>
          <Tabla
            tabla={tablaStock2}
            atributos={['imagen', 'titulo', 'categoria', 'stock', 'Accion']}
            verTitulos={true}
          />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom color="text.primary">
            Últimos movimientos
          </Typography>
          <Tabla
            tabla={tablaMovimiento2}
            atributos={['imagen', 'titulo', 'tipoMovimiento', 'cantidad', 'proveedor', 'fecha']}
            verTitulos={true}
          />
        </Grid>
      </Grid>

      {productClick.openModal && (
        <TarjetaProductoModificacion
          isModalOpenModifyProduct={productClick}
          producto={productClick.producto}
          setIsModalOpenModifyProduct={setProductClick}
          setActualiceProducts={setActualiceProducts}
          userId={props.userId}
        />
      )}
    </Container>
  );
};

export default Inicio;
