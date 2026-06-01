import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TarjetaProductoModificacion from './TarjetaProductoModificacion';

const TarjetaProducto = (props) => {
  const [isModalOpenModifyProduct, setIsModalOpenModifyProduct] = useState({ openModal: false, agregar: true });
  const [showDesc, setShowDesc] = useState(false);

  return (
    <Card
      elevation={3}
      sx={{
        width: '100%',
        height: '100%',
        minHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          flexShrink: 0,
          height: 160,
          bgcolor: 'grey.100',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1.5,
          borderBottom: 1,
          borderColor: 'divider',
        }}
        onMouseEnter={() => setShowDesc(true)}
        onMouseLeave={() => setShowDesc(false)}
      >
        <Box
          component="img"
          src={props.img}
          alt={props.nombre}
          sx={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            display: 'block',
          }}
        />
        {showDesc && (
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              bgcolor: 'rgba(0,0,0,0.75)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
            }}
          >
            <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
              {props.descripcion}
            </Typography>
          </Box>
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1, pb: 1, minHeight: 72 }}>
        <Typography variant="subtitle1" fontWeight={600} noWrap>
          {props.nombre}
        </Typography>
        <Chip
          label={`Stock: ${props.stock}`}
          size="small"
          color={props.stock <= 20 ? 'error' : 'default'}
          sx={{ mt: 1 }}
        />
      </CardContent>

      <CardActions sx={{ justifyContent: 'flex-end', pt: 0, mt: 'auto', minHeight: 52 }}>
        <Tooltip title="Agregar stock">
          <IconButton
            color="success"
            onClick={() => setIsModalOpenModifyProduct({ openModal: true, agregar: true })}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Remover stock">
          <IconButton
            color="warning"
            onClick={() => setIsModalOpenModifyProduct({ openModal: true, agregar: false })}
          >
            <RemoveIcon />
          </IconButton>
        </Tooltip>
      </CardActions>

      {isModalOpenModifyProduct.openModal && (
        <TarjetaProductoModificacion
          isModalOpenModifyProduct={isModalOpenModifyProduct}
          producto={props}
          setIsModalOpenModifyProduct={setIsModalOpenModifyProduct}
          setActualiceProducts={props.setActualiceProducts}
          actualiceProducts={props.actualiceProducts}
          userId={props.userId}
        />
      )}
    </Card>
  );
};

export default TarjetaProducto;
