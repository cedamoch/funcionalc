import { useState } from 'react';
import Restaurante from './Restaurante';
import FormularioAgregarRestaurante from './FormularioAgregarRestaurante';

// Lista inicial de restaurantes
const listaRestauranteInicial = [
  {nombre:"Roldos", direccion:"av de la prensa", tipo:"Panaderia", imagen:"https://plus.unsplash.com/premium_photo-1695405363183-e55554168063?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VuJTIwZGlnaXRhbHxlbnwwfHwwfHx8MA%3D%3D"},
  {nombre:"KFC", direccion:"Recreo", tipo:"comidarapida", imagen:"https://www.shutterstock.com/image-illustration/david-street-style-graphic-designtextile-600nw-2265632523.jpg"},
  {nombre:"JuanValdes", direccion:"del maestro", tipo:"cafeteria", imagen:"https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720"}
];

function ListaRestaurantes() {
  const [likesTotales, setLikesTotales] = useState(0);
  const [mensajeErrorLikes, setMensajeErrorLikes] = useState("");
  const [restaurantes, setRestaurantes] = useState(listaRestauranteInicial);

  // Función para aumentar el contador total de likes
  const handlerLikeTotales = () => {
    setLikesTotales(prevState => prevState + 1);
  };

  // Función para disminuir el contador total de likes (no permite negativos)
  const handlerDislikeTotales = () => {
    setLikesTotales(prevState => {
      if (prevState <= 0) {
        setMensajeErrorLikes("No se puede tener likes negativos");
        return prevState;
      } else {
        setMensajeErrorLikes("");
        return prevState - 1;
      }
    });
  };

  // Función para agregar un nuevo restaurante a la lista
  const agregarRestaurante = (nuevoRestaurante) => {
    setRestaurantes(prev => [...prev, nuevoRestaurante]);
  };

  return (
    <>
      <h2>Cantidad total de likes: {likesTotales}</h2>
      <h4>{mensajeErrorLikes}</h4>
      {restaurantes.map((r, idx) => (
        <Restaurante
          key={idx}
          nombre={r.nombre}
          direccion={r.direccion}
          tipo={r.tipo}
          imagen={r.imagen}
          valoracion={r.valoracion}
          onlike={handlerLikeTotales}
          handlerDislikeTotales={handlerDislikeTotales}
        />
      ))}
      <FormularioAgregarRestaurante onAgregar={agregarRestaurante} />
    </>
  );
}

export default ListaRestaurantes;