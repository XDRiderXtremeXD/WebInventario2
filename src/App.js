import { useState } from 'react';
import Box from '@mui/material/Box';
import Footer from './Components/Footer';
import FormLogin from './Components/FormLogin';
import NavBar from './Components/NavBar';
import Configuracion from './Pages/Configuracion';
import Inicio from './Pages/Inicio';
import Productos from './Pages/Productos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PaginaNoValida from './Pages/PaginaNoValida';
import Registros from './Pages/Registros';
import { usuarios } from './Data/Data';

const App = () => {
  const [userId, setUserId] = useState(null);
  const usuario = usuarios.find((u) => u.id === userId);

  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {userId !== null && <NavBar userId={userId} desloguear={() => setUserId(null)} />}
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            {userId !== null && <Route path="/inicio" element={<Inicio userId={userId} />} />}
            {userId !== null && usuario?.TipoUsuario === 'Master' && (
              <Route path="/configuracion" element={<Configuracion userId={userId} />} />
            )}
            {userId !== null && <Route path="/productos" element={<Productos userId={userId} />} />}
            {userId !== null && <Route path="/registros" element={<Registros />} />}
            <Route path="/Login" element={<FormLogin userId={userId} setUserId={setUserId} />} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<PaginaNoValida />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
