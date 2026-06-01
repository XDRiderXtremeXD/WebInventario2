import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { proveedores, tablaMovimiento, tablaStock } from '../Data/Data';
import Alertas from '../Auxiliar/Alertas';

const TarjetaProductoModificacion = (props) => {
  const [proveedor_, setProveedor_] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  const GetFechaActual = () => {
    const fecha = new Date();
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const AgregarTablaMovimiento = (movimiento) => {
    const { productoIndice, cantidad: qty, tipoMovimiento, proveedor } = movimiento;
    tablaMovimiento.push({
      id_producto: tablaStock[productoIndice].id,
      imagen: tablaStock[productoIndice].imagen,
      titulo: tablaStock[productoIndice].titulo,
      fecha: GetFechaActual(),
      usuario_registro: props.userId,
      cantidad: qty,
      tipoMovimiento,
      proveedor,
    });
  };

  const Modificar = () => {
    const productoIndice = tablaStock.findIndex((p) => p.id === props.producto.id);
    let stockActual = tablaStock[productoIndice].stock;
    let proveedor = proveedor_;

    if (proveedor === 'Crear Proveedor') {
      proveedor = document.getElementById('nuevoProveedor').value;
      if (proveedor === '' || proveedores.includes(proveedor)) {
        Alertas({ tipo: 'error', frase: 'Digite nuevo proveedor' });
        return;
      }
    }

    if (props.isModalOpenModifyProduct.agregar) {
      if (proveedor === null) {
        Alertas({ tipo: 'error', frase: 'Debes de seleccionar un proveedor' });
        return;
      }
      tablaStock[productoIndice] = {
        ...tablaStock[productoIndice],
        stock: stockActual + cantidad,
        proveedor,
      };
      AgregarTablaMovimiento({ productoIndice, cantidad, tipoMovimiento: 'Entrada', proveedor });
      if (proveedor_ === 'Crear Proveedor') proveedores.push(proveedor);
    } else {
      tablaStock[productoIndice] = { ...tablaStock[productoIndice], stock: stockActual - cantidad };
      AgregarTablaMovimiento({ productoIndice, cantidad, tipoMovimiento: 'Salida', proveedor: null });
    }

    props.setIsModalOpenModifyProduct({ openModal: false, agregar: true });
    props.setActualiceProducts([...tablaStock]);
    Alertas({ tipo: 'ok', frase: 'Productos Actualizados' });
  };

  const esAgregar = props.isModalOpenModifyProduct.agregar;

  return (
    <Dialog
      open={true}
      onClose={() => props.setIsModalOpenModifyProduct({ ...props.isModalOpenModifyProduct, openModal: false })}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar src={props.producto.img} variant="rounded" sx={{ width: 48, height: 48 }} />
          <Box>
            <Typography variant="subtitle1" fontWeight={700}>
              {props.producto.nombre}
            </Typography>
            <Chip label={esAgregar ? 'Agregar stock' : 'Remover stock'} size="small" color={esAgregar ? 'success' : 'warning'} />
          </Box>
        </Box>
        <IconButton
          onClick={() => props.setIsModalOpenModifyProduct({ ...props.isModalOpenModifyProduct, openModal: false })}
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <TextField
          fullWidth
          type="number"
          label="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
          inputProps={{
            min: 1,
            max: !esAgregar ? props.producto.stock : 1000000000,
          }}
          sx={{ mb: 2 }}
        />

        {esAgregar && (
          <>
            <TextField
              select
              fullWidth
              label="Proveedor"
              value={proveedor_ || ''}
              onChange={(e) => setProveedor_(e.target.value)}
              sx={{ mb: 2 }}
            >
              <MenuItem value="">Selecciona Proveedor</MenuItem>
              {proveedores.map((p, index) => (
                <MenuItem key={index} value={p}>
                  {p}
                </MenuItem>
              ))}
              <MenuItem value="Crear Proveedor">Crear Proveedor</MenuItem>
            </TextField>

            {proveedor_ === 'Crear Proveedor' && (
              <TextField fullWidth id="nuevoProveedor" label="Nuevo proveedor" sx={{ mb: 2 }} />
            )}
          </>
        )}
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          onClick={() => props.setIsModalOpenModifyProduct({ ...props.isModalOpenModifyProduct, openModal: false })}
        >
          Cancelar
        </Button>
        <Button variant="contained" onClick={Modificar}>
          Guardar cambios
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TarjetaProductoModificacion;
