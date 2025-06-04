import './App.css';
import FormularioAgregarRestaurante from './Componentes/FormularioAgregarRestaurante';
import Inicio from './Componentes/Inicio';
import ListaRestaurantes from './Componentes/ListaRestaurantes';
import Restaurante from './Componentes/Restaurante';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/home"} element={<Inicio />} />
          <Route path={"/Restaurantes"} element={<ListaRestaurantes />} />
          <Route path={"/Agregar Restaurante"} element={<FormularioAgregarRestaurante />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
