import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { categorias, tablaStock } from '../Data/Data';
import { v4 as uuidv4 } from 'uuid';
import Alertas from '../Auxiliar/Alertas';

const FormProducto = () => {
  const [imagen, setImagen] = useState(null);
  const [categoria_, setCategoria_] = useState(null);
  const fileInputRef = useRef(null);

  const CrearProducto = (e) => {
    e.preventDefault();
    const nombre = e.target.nombreProducto.value;
    const descripcion = e.target.descripcion.value;
    const categoria = e.target.categorias.value;
    let categoriaProducto = categoria;

    if (nombre.length === 0) {
      Alertas({ tipo: 'error', frase: 'Debes de digitar el nombre' });
    }

    if (descripcion.length === 0) {
      Alertas({ tipo: 'error', frase: 'Debes de digitar una descripción' });
    }

    if (imagen === null) {
      Alertas({ tipo: 'error', frase: 'Debes seleccionar una imagen' });
      return;
    }
    if (categoria_ === null) {
      Alertas({ tipo: 'error', frase: 'Debes seleccionar una categoria' });
      return;
    }
    if (categoria === 'Crear Categoria') {
      categoriaProducto = e.target.nuevaCategoria.value;
      if (categoriaProducto === '' || categorias.includes(categoriaProducto)) {
        Alertas({ tipo: 'error', frase: 'Debes de digitar una nueva categoria' });
        return;
      }
    }
    if (!tablaStock.some((producto) => producto.titulo === nombre)) {
      tablaStock.push({
        imagen,
        titulo: nombre,
        stock: 0,
        id: uuidv4(),
        categoria: categoriaProducto,
        descripcion,
      });
      if (!categorias.includes(categoriaProducto)) {
        categorias.push(categoriaProducto);
        setCategoria_(categoriaProducto);
      }
      Alertas({ tipo: 'ok', frase: 'Producto Creado' });
    } else {
      Alertas({ tipo: 'error', frase: 'Error: Existe un producto con el mismo nombre' });
    }
  };

  const manejarCambioImagen = (e) => {
    const archivo = e.target.files[0];
    if (archivo) setImagen(URL.createObjectURL(archivo));
  };

  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 2, flexGrow: 1 }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Añadir Producto
      </Typography>

      <Box component="form" onSubmit={CrearProducto} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
        <TextField label="Nombre del producto" name="nombreProducto" required fullWidth />

        <TextField label="Descripción" name="descripcion" required fullWidth multiline rows={3} />

        <TextField
          select
          label="Categoría"
          name="categorias"
          value={categoria_ || ''}
          onChange={(e) => setCategoria_(e.target.value)}
          fullWidth
        >
          <MenuItem value="">Selecciona Categoría</MenuItem>
          {categorias.map((categoria, index) => (
            <MenuItem key={index} value={categoria}>
              {categoria}
            </MenuItem>
          ))}
          <MenuItem value="Crear Categoria">Crear Categoría</MenuItem>
        </TextField>

        {categoria_ === 'Crear Categoria' && (
          <TextField label="Nueva categoría" name="nuevaCategoria" fullWidth />
        )}

        <Box>
          <input
            type="file"
            accept="image/*"
            onChange={manejarCambioImagen}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          <Button
            variant="outlined"
            startIcon={<CloudUploadIcon />}
            onClick={() => fileInputRef.current.click()}
          >
            Escoger Imagen
          </Button>
        </Box>

        {imagen && (
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Vista previa
            </Typography>
            <Box
              component="img"
              src={imagen}
              alt="Vista previa"
              sx={{ maxWidth: 200, maxHeight: 200, borderRadius: 2, objectFit: 'cover' }}
            />
          </Box>
        )}

        <Button type="submit" variant="contained" size="large" sx={{ alignSelf: 'flex-start' }}>
          Crear Producto
        </Button>
      </Box>
    </Paper>
  );
};

export default FormProducto;
