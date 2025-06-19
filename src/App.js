import './App.css';
import FormularioAgregarRestaurante from './Componentes/FormularioAgregarRestaurante';
import Inicio from './Componentes/Inicio';
import ListaRestaurantes from './Componentes/ListaRestaurantes';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Conexion from './Componentes/Conexion';
import axios from 'axios';

function App() {
  const [restaurantes, setRestaurantes] = useState([]);

  // GET: Leer restaurantes al cargar
  useEffect(() => {
    axios.get('http://localhost:3000/restaurante')
      .then(response => setRestaurantes(response.data))
      .catch(error => console.error(error));
  }, []);

  // POST: Agregar restaurante
  const agregarRestaurante = (nuevoRestaurante) => {
    axios.post('http://localhost:3000/restaurante', nuevoRestaurante)
      .then(response => setRestaurantes(prev => [...prev, response.data]))
      .catch(error => console.error(error));
  };

  // DELETE: Eliminar restaurante
  const eliminarRestaurante = (id) => {
    // Llama a la API para eliminar el restaurante con el id proporcionado
    axios.delete(`http://localhost:3000/restaurante/${id}`)// Hace una petición DELETE a la URL con el id del restaurante
      .then(() => setRestaurantes(prev => prev.filter(r => r.id !== id)))// Si la petición fue exitosa, actualiza el estado eliminando el restaurante del array local
      .catch(error => console.error(error));
  };

  // PUT: Actualizar restaurante
 /* const actualizarRestaurante = (id, datosActualizados) => {
    axios.put(`http://localhost:3000/restaurante/${id}`, datosActualizados)
      .then(response => setRestaurantes(prev =>
        prev.map(r => r.id === id ? response.data : r)
      ))
      .catch(error => console.error(error));
  };*/

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/home"} element={<Inicio />} />
          <Route path={"/Servidor"} element={<Conexion />} />
          <Route path={"/Restaurantes"} element={<ListaRestaurantes restaurantes={restaurantes} onEliminar={eliminarRestaurante} />}/>
          <Route path={"/AgregarRestaurante"} element={<FormularioAgregarRestaurante onAgregar={agregarRestaurante} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
