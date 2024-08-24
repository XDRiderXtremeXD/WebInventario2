import { useState } from 'react';
import './App.css';
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

const App = () => {

  const [userId, setUserId] = useState(null);
  return (
    <Router>
      {userId !== null && <NavBar userId={userId} desloguear={() => setUserId(null)} />}
      <Routes>
        {userId !== null && <Route path="/inicio" element={<Inicio />} />}
        {userId !== null && <Route path="/configuracion" element={<Configuracion userId={userId}/>} />}
        {userId !== null && <Route path="/productos" element={<Productos userId={userId}/>} />}
        {userId !== null && <Route path="/registros" element={<Registros/>} />}
        <Route path="/Login" element={<FormLogin userId={userId} setUserId={setUserId} />}/>
        <Route exact path="/" element={<Home/>} />
        <Route path="*" element={<PaginaNoValida/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;