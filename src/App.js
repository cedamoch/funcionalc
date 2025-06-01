import logo from './logo.svg'; // Importa el logo (no se usa en este archivo, pero puede ser útil para el encabezado)
import './App.css'; // Importa los estilos CSS globales de la aplicación
import Restaurante from './Componentes/Restaurante'; // Importa el componente Restaurante para mostrar cada restaurante
import FormularioAgregarRestaurante from './Componentes/FormularioAgregarRestaurante'; // Importa el formulario para agregar restaurantes
import { useState } from 'react'; // Importa el hook useState para manejar el estado en el componente App

// Lista inicial de restaurantes, cada uno es un objeto con nombre, dirección, tipo e imagen
const listaRestauranteInicial = [
  {nombre:"Roldos", direccion:"av de la prensa", tipo:"Panaderia", imagen:"https://plus.unsplash.com/premium_photo-1695405363183-e55554168063?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VuJTIwZGlnaXRhbHxlbnwwfHwwfHx8MA%3D%3D"},
  {nombre:"KFC", direccion:"Recreo", tipo:"comidarapida", imagen:"https://www.shutterstock.com/image-illustration/david-street-style-graphic-designtextile-600nw-2265632523.jpg"},
  {nombre:"JuanValdes", direccion:"del maestro", tipo:"cafeteria", imagen:"https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720"}
]

// Componente principal de la aplicación
function App() {
  // Estado para el total de likes de todos los restaurantes
  const [likesTotales, setLikesTotales] = useState(0);
  // Estado para mostrar un mensaje de error si los likes llegan a negativo
  const [mensajeErrorLikes, setMensajeErrorLikes] = useState("");
  // Estado para la lista de restaurantes que se muestran en pantalla
  const [restaurantes, setRestaurantes] = useState(listaRestauranteInicial);

  // Función para aumentar el contador total de likes
  const handlerLikeTotales = () => {
    setLikesTotales(prevState => prevState + 1); // Suma 1 al estado anterior
  }

  // Función para disminuir el contador total de likes (no permite negativos)
  const handlerDislikeTotales = () => {
    setLikesTotales(prevState => {
      if (prevState <= 0) { // Si ya está en 0, muestra mensaje de error y no resta
        setMensajeErrorLikes("No se puede tener likes negativos");
        return prevState; // No cambia el valor
      } else {
        setMensajeErrorLikes(""); // Limpia el mensaje de error si se puede restar
        return prevState - 1; // Resta 1 al estado anterior
      }
    });
  }

  // Función para agregar un nuevo restaurante a la lista
  const agregarRestaurante = (nuevoRestaurante) => {
    setRestaurantes(prev => [...prev, nuevoRestaurante]); // Agrega el nuevo restaurante al final de la lista
  }

  // Renderiza la interfaz de la aplicación
  return (
    <div className="App"> {/* Contenedor principal */}
      <h2>Cantidad total de likes: {likesTotales}</h2> {/* Muestra el total de likes */}
      <h4>{mensajeErrorLikes}</h4> {/* Muestra el mensaje de error si existe */}
      {
        // Recorre la lista de restaurantes y renderiza un componente Restaurante por cada uno
        restaurantes.map((r, idx) => (
          <Restaurante
            key={idx} // Clave única para cada elemento de la lista
            nombre={r.nombre} // Pasa el nombre como prop
            direccion={r.direccion} // Pasa la dirección como prop
            tipo={r.tipo} // Pasa el tipo como prop
            imagen={r.imagen} // Pasa la imagen como prop
            valoracion={r.valoracion} // Pasa la valoración como prop (puede ser undefined)
            onlike={handlerLikeTotales} // Pasa la función para aumentar likes
            handlerDislikeTotales={handlerDislikeTotales} // Pasa la función para disminuir likes
          />
        ))
      }
      {/* Formulario para agregar restaurante */}
      <FormularioAgregarRestaurante onAgregar={agregarRestaurante} />
    </div>
  );
}

export default App; // Exporta el componente principal para que pueda ser usado por ReactDOM
