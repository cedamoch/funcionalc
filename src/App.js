import './App.css';
import FormularioAgregarRestaurante from './Componentes/FormularioAgregarRestaurante';
import Inicio from './Componentes/Inicio';
import ListaRestaurantes from './Componentes/ListaRestaurantes';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Conexion from './Componentes/Conexion';
import axios from 'axios';
import EditarRestaurante from './Componentes/EditarRestaurante';

function App() {
  const [restaurantes, setRestaurantes] = useState([]);//variable de estado que Guarda el valor actual de la lista de restaurantes

  // GET: Leer restaurantes al cargar
  useEffect(() => {
    axios.get('http://localhost:3000/restaurante')
      .then(response => setRestaurantes(response.data))
      .catch(error => console.error('Error al cargar restaurantes: ', error));
  }, []);

  // POST: Agregar restaurante
  const agregarRestaurante = (nuevoRestaurante) => {
    axios.post('http://localhost:3000/restaurante', nuevoRestaurante)
      .then(response => setRestaurantes(prev => [...prev, response.data]))
      .catch(error => console.error('Error al agregar restaurante: ', error));
  };

  // DELETE: Eliminar restaurante
  const eliminarRestaurante = (id) => {
    // Llama a la API para eliminar el restaurante con el id proporcionado
    axios.delete(`http://localhost:3000/restaurante/${id}`)
      .then(() => setRestaurantes(prev => prev.filter(r => r.id !== id)))
      .catch(error => console.error('Error al eliminar restaurante: ', error));
  };

  // PUT: actualizar un restaurante existente
const actualizarRestaurante = (id, datosActualizados) => {
  // Realiza una petición PUT a la API, enviando los datos actualizados del restaurante con el id especificado
  return axios.put(`http://localhost:3000/restaurante/${id}`, datosActualizados)
    // Si la petición es exitosa, actualiza el estado local de restaurantes
    .then(response => {
      // Actualiza el array de restaurantes: reemplaza el restaurante con el id editado por el restaurante actualizado recibido de la respuesta
      setRestaurantes(prev => 
        prev.map(r => r.id === id ? response.data : r) // Si el id coincide, reemplaza por el actualizado; si no, deja el restaurante igual
      );
    })
    // Si ocurre un error, lo muestra en consola
    .catch(error => console.error('Error al actualizar restaurante:', error));
};


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/home"} element={<Inicio />} />
          <Route path={"/Servidor"} element={<Conexion />} />
          <Route path={"/Restaurantes"} element={<ListaRestaurantes restaurantes={restaurantes} onEliminar={eliminarRestaurante} />}/>
          <Route path={"/AgregarRestaurante"} element={<FormularioAgregarRestaurante onAgregar={agregarRestaurante} />}/>
          <Route path={"/EditarRestaurante/:id"} element={<EditarRestaurante restaurantes={restaurantes} onActualizar={actualizarRestaurante}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
