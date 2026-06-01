import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

const TdTabla = ({ keyProp, item }) => {
  if (keyProp === 'imagen') {
    return (
      <TableCell>
        <Avatar src={item[keyProp]} alt={keyProp} variant="rounded" sx={{ width: 48, height: 48 }} />
      </TableCell>
    );
  }

  if (keyProp === 'Accion') {
    const isDelete = item.Accion.icono?.includes('quitar');
    return (
      <TableCell align="center">
        <Tooltip title={isDelete ? 'Eliminar' : 'Agregar stock'}>
          <IconButton
            color={isDelete ? 'error' : 'primary'}
            size="small"
            onClick={() => item.Accion.funcion(item.id)}
          >
            {isDelete ? <PersonRemoveIcon /> : <AddCircleOutlinedIcon />}
          </IconButton>
        </Tooltip>
      </TableCell>
    );
  }

  if (keyProp === 'tipoMovimiento') {
    const isEntrada = item[keyProp] === 'Entrada';
    return (
      <TableCell>
        <Chip
          label={item[keyProp]}
          size="small"
          color={isEntrada ? 'success' : 'warning'}
          variant="outlined"
        />
      </TableCell>
    );
  }

  if (keyProp === 'stock') {
    const stock = item[keyProp];
    return (
      <TableCell>
        <Chip
          label={stock}
          size="small"
          color={stock <= 20 ? 'error' : 'default'}
        />
      </TableCell>
    );
  }

  return <TableCell>{item[keyProp]}</TableCell>;
};

const Tabla = (props) => {
  const paginado = props.paginado ?? false;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(props.rowsPerPage ?? 10);

  function filtrarAtributos(atributos, datos) {
    return datos.map((item) => {
      const nuevoObjeto = {};
      atributos.forEach((atributo) => {
        if (Object.prototype.hasOwnProperty.call(item, atributo)) {
          nuevoObjeto[atributo] = item[atributo];
        }
      });
      return nuevoObjeto;
    });
  }

  const tabla = filtrarAtributos(props.atributos, props.tabla);
  const atributos = props.atributos;

  useEffect(() => {
    setPage(0);
  }, [tabla.length, props.paginationKey]);

  useEffect(() => {
    const maxPage = Math.max(0, Math.ceil(tabla.length / rowsPerPage) - 1);
    if (page > maxPage) setPage(maxPage);
  }, [tabla.length, rowsPerPage, page]);

  const filasVisibles = paginado
    ? tabla.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : tabla;

  return (
    <TableContainer component={Paper} elevation={2} sx={{ borderRadius: 2 }}>
      <Table size="small" stickyHeader>
        {(props.verTitulos === undefined || props.verTitulos) && (
          <TableHead>
            <TableRow>
              {atributos.map((item, index) => (
                <TableCell key={index} sx={{ fontWeight: 700, bgcolor: 'secondary.main', color: 'white' }}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {filasVisibles.map((item, rowIndex) => (
            <TableRow key={rowIndex} hover sx={{ '&:nth-of-type(even)': { bgcolor: 'action.hover' } }}>
              {atributos.map((key, colIndex) => (
                <TdTabla key={colIndex} keyProp={key} item={item} />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {paginado && (
        <TablePagination
          component="div"
          count={tabla.length}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
          rowsPerPageOptions={[5, 10, 25]}
          labelRowsPerPage="Filas por página:"
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
        />
      )}
    </TableContainer>
  );
};

export default Tabla;
