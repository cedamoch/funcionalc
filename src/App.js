import './App.css';
import FormularioAgregarRestaurante from './Componentes/FormularioAgregarRestaurante';
import Inicio from './Componentes/Inicio';
import ListaRestaurantes from './Componentes/ListaRestaurantes';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const listaRestauranteInicial = [
  {nombre:"Roldos", direccion:"av de la prensa", tipo:"Panaderia", imagen:"https://plus.unsplash.com/premium_photo-1695405363183-e55554168063?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VuJTIwZGlnaXRhbHxlbnwwfHwwfHx8MA%3D%3D"},
  {nombre:"KFC", direccion:"Recreo", tipo:"comidarapida", imagen:"https://www.shutterstock.com/image-illustration/david-street-style-graphic-designtextile-600nw-2265632523.jpg"},
  {nombre:"JuanValdes", direccion:"del maestro", tipo:"cafeteria", imagen:"https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720"}
];


function App() {
  const [restaurantes, setRestaurantes] = useState(listaRestauranteInicial);
  // Función para agregar un nuevo restaurante a la lista
  const agregarRestaurante = (nuevoRestaurante) => {
    setRestaurantes(prev => [...prev, nuevoRestaurante]);
  };




  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/home"} element={<Inicio />} />
          <Route path={"/Restaurantes"} element={<ListaRestaurantes restaurantes={restaurantes} />} />
          <Route path={"/AgregarRestaurante"} element={<FormularioAgregarRestaurante onAgregar={agregarRestaurante}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
