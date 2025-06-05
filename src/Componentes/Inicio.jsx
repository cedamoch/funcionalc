import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Inicio() {
  const navigate = useNavigate();

  const handleIrLista = () => {
    navigate('/Restaurantes');
  };

  const handleIrFormulario = () => {
    navigate('/AgregarRestaurante');
  };

  return (
    <>
      <h1>Bienvenidos</h1>
      <Link to="/Restaurantes">ListaRestaurantes</Link><br /><br />
      <Link to="/AgregarRestaurante">Formulario agregar restaurante</Link><br /><br />
      <button onClick={handleIrLista}>Ir a Lista Restaurantes</button><br /><br />
      <button onClick={handleIrFormulario}>Ir al Formulario de Registro</button>
    </>
  );
}

export default Inicio;