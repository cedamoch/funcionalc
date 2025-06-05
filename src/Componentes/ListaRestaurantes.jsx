import { useState } from 'react';
import Restaurante from './Restaurante';
import { Link } from 'react-router-dom';
// Lista inicial de restaurantes


function ListaRestaurantes({restaurantes}) {
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
      {restaurantes.map((r, idx) => (
        <>
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
          
        </>
      ))}
      {/* <FormularioAgregarRestaurante onAgregar={agregarRestaurante} /> */}
      <Link to="/home">Inicio</Link><br /><br />
    </>
  );
}

export default ListaRestaurantes;