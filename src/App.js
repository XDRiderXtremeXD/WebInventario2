import './App.css';
import Footer from './Components/Footer';
import Inicio from './Components/Inicio';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="Contenedor">
      <NavBar/>
      <Inicio/>
      <Footer/>
    </div>
  );
}

export default App;
