import { useState } from 'react';
import Restaurante from './Restaurante';
import { Link } from 'react-router-dom';
// Lista inicial de restaurantes

function ListaRestaurantes({restaurantes, onEliminar, onActualizar}) {
  const [likesTotales, setLikesTotales] = useState(0);
  const [mensajeErrorLikes, setMensajeErrorLikes] = useState("");

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

  

  return (
    <>
      <h2>Cantidad total de likes: {likesTotales}</h2>
      <h4>{mensajeErrorLikes}</h4>
      {/* 
        Verifica que restaurantes exista y no sea null/undefined.
        Si es así, recorre el arreglo de restaurantes y por cada uno renderiza un componente Restaurante.
      */}
      {restaurantes && restaurantes.map((r) => (
        <Restaurante
          key={r.id} // Clave única para que React identifique cada elemento de la lista
          id={r.id} // Id del restaurante para eliminar o actualizar
          nombre={r.nombre} // Nombre del restaurante
          direccion={r.direccion} // Dirección del restaurante
          tipo={r.tipo} // Tipo de restaurante
          imagen={r.imagen} // URL de la imagen
          valoracion={r.valoracion} // Valoración del restaurante
          onlike={handlerLikeTotales} // Función para aumentar el contador global de likes
          handlerDislikeTotales={handlerDislikeTotales} // Función para disminuir el contador global de likes
          onEliminar={() => onEliminar(r.id)} // Función para eliminar el restaurante, pasando su id
          onActualizar={onActualizar} // Función para actualizar el restaurante (si se implementa edición)
        />
      ))}
      {/* <FormularioAgregarRestaurante onAgregar={agregarRestaurante} /> */}
      <Link to="/home">Inicio</Link><br /><br />
      
    </>
  );
}

export default ListaRestaurantes;