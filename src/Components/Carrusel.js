import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

const imagenes = ['/banner1.png', '/banner2.png', '/banner3.png', '/banner4.png'];

const Carrusel = () => {
  const [indiceImagen, setIndiceImagen] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndiceImagen((prev) => (prev + 1) % imagenes.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 180, sm: 240, md: 300 },
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3,
      }}
    >
      <Fade in={visible} timeout={400}>
        <Box
          component="img"
          src={imagenes[indiceImagen]}
          alt="Banner promocional"
          sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </Fade>
    </Box>
  );
};

export default Carrusel;
