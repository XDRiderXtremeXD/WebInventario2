import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import { usuarios } from '../Data/Data';
import { v4 as uuidv4 } from 'uuid';
import Alertas from '../Auxiliar/Alertas';

const FormUsuario = (props) => {
  function generarContrasenna(longitud = 12) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let contrasenna = '';
    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      contrasenna += caracteres[indice];
    }
    return contrasenna;
  }

  function CrearUsuario(e) {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const correo = e.target.correo.value;
    const telefono = e.target.telefono.value;
    const direccion = e.target.direccion.value;
    const dni = e.target.dni.value;
    const tipoUsuario = e.target.tipoUsuario.value;
    const id = uuidv4();
    const password = generarContrasenna(8);

    if (nombre.length < 4) {
      Alertas({ tipo: 'error', frase: 'El nombre debe tener como minimo 4 caracteres' });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
      Alertas({ tipo: 'error', frase: 'Ingrese un correo electrónico válido.' });
      return;
    }

    if (
      ((telefono.length !== 7 && telefono.length !== 9) ||
        (telefono.length === 7 && !/^[2456]/.test(telefono)) ||
        (telefono.length === 9 && !/^9/.test(telefono))) &&
      /^[0-9]*$/.test(telefono)
    ) {
      Alertas({
        tipo: 'error',
        frase: 'El teléfono debe tener 7 dígitos y comenzar con 2, 4, 5 o 6, o tener 9 dígitos y comenzar con 9.',
      });
      return;
    }

    if (direccion.length < 10) {
      Alertas({ tipo: 'error', frase: 'La direccion debe tener como minimo 10 caracteres' });
      return;
    }

    if (dni.length !== 8 || !/^[0-9,$]*$/.test(dni)) {
      Alertas({ tipo: 'error', frase: 'DNI tiene que tener 8 digitos numericos.' });
      return;
    }

    if (usuarios.some((usuario) => usuario.Email === correo)) {
      Alertas({ tipo: 'error', frase: 'Error: email ya registrado' });
    } else {
      usuarios.push({
        id,
        Nombre: nombre,
        Email: correo,
        DNI: dni,
        TipoUsuario: tipoUsuario,
        password,
        direccion,
        telefono,
      });
      props.setUsers(usuarios);
      Alertas({ tipo: 'ok', frase: 'Usuario  Agregado' });
      console.log({ password });
      props.cerrar();
    }
  }

  return (
    <Dialog open onClose={props.cerrar} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        Añadir Usuario
        <IconButton onClick={props.cerrar} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Box component="form" onSubmit={CrearUsuario}>
        <DialogContent dividers sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField name="nombre" label="Nombre y Apellido" required fullWidth />
          <TextField name="correo" label="Correo" type="email" required fullWidth />
          <TextField name="telefono" label="Teléfono" required fullWidth />
          <TextField name="direccion" label="Dirección" required fullWidth />
          <TextField name="dni" label="DNI" required fullWidth inputProps={{ maxLength: 8 }} />
          <TextField select name="tipoUsuario" label="Tipo de usuario" defaultValue="User" fullWidth>
            <MenuItem value="User">User</MenuItem>
            <MenuItem value="Master">Master</MenuItem>
          </TextField>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={props.cerrar}>Cancelar</Button>
          <Button type="submit" variant="contained">
            Guardar
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default FormUsuario;
