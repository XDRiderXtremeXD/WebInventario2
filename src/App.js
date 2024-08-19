import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Configuracion from './Pages/Configuracion';
import Inicio from './Pages/Inicio';
import Productos from './Pages/Productos';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="*" element={<h1>En construccion</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;