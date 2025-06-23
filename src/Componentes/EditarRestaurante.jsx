import React, { useEffect, useState } from "react"; // Importa React y los hooks useEffect y useState para manejar estado y efectos secundarios
import { useParams } from "react-router-dom"; // Importa useParams para obtener parámetros de la URL
import { Link } from 'react-router-dom'; // Importa Link para navegación interna
import "./Restaurante.css"; // Importa los estilos CSS

// Componente funcional para editar un restaurante
function EditarRestaurante({ restaurantes, onActualizar }) {
  const { id } = useParams(); // Obtiene el parámetro 'id' de la URL (el id del restaurante a editar)
  const [form, setForm] = useState({
    nombre: "",      // Campo para el nombre del restaurante
    direccion: "",   // Campo para la dirección
    tipo: "",        // Campo para el tipo de restaurante
    imagen: "",      // Campo para la URL de la imagen
    valoracion: ""   // Campo para la valoración
  });

  // useEffect se ejecuta cuando cambian 'id' o 'restaurantes'
  useEffect(() => {
    //variable local Busca el restaurante a editar en la lista de restaurantes usando el id de la URL
    const restaurante = restaurantes.find(r => String(r.id) === String(id));
    if (restaurante) {
      setForm(restaurante); // Si lo encuentra, llena el formulario con sus datos
    } else {
      // Si no está en el estado, podrías hacer una petición a la API para obtenerlo (comentado aquí)
      // axios.get(`http://localhost:3000/restaurante/${id}`).then(res => setForm(res.data));
    }
  }, [id, restaurantes]); // Dependencias: se ejecuta cuando cambian 'id' o 'restaurantes'

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target; //desestructurar objetos Extrae el nombre y valor del campo modificado
    setForm(prev => ({
      ...prev,         // Mantiene los valores anteriores
      [name]: value    // Actualiza solo el campo modificado
    }));
  };

  // Envía la actualización del restaurante
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)
    onActualizar(id, form); // Llama a la función onActualizar (del padre) para actualizar el restaurante en la base de datos y el estado global
    setForm({ // Limpia el formulario después de actualizar
      nombre: "",
      direccion: "",
      tipo: "",
      imagen: "",
      valoracion: ""
    });
  };

  // Renderiza el formulario de edición
  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "30px", background: "#fffbe6", padding: "20px", borderRadius: "10px" }}>
      <h2>Editar Restaurante</h2>
      <div>
        <label>Nombre: </label>
        <input name="nombre" value={form.nombre} onChange={handleChange} required />
      </div>
      <div>
        <label>Dirección: </label>
        <input name="direccion" value={form.direccion} onChange={handleChange} required />
      </div>
      <div>
        <label>Tipo: </label>
        <select name="tipo" value={form.tipo} onChange={handleChange} required>
          <option value="">Seleccione...</option>
          <option value="Tradicional">Tradicional</option>
          <option value="Comida Rápida">Comida Rápida</option>
          <option value="Parrillada">Parrillada</option>
        </select>
      </div>
      <div>
        <label>Imagen (URL): </label>
        <input name="imagen" value={form.imagen} onChange={handleChange} />
      </div>
      <div>
        <label>Valoración: </label>
        <input name="valoracion" type="number" min="1" max="5" value={form.valoracion} onChange={handleChange} required />
      </div>
      <button type="submit">Guardar Cambios</button><br /><br />
      <Link to="/home">Inicio</Link><br /><br />
      <Link to="/Restaurantes">Lista Restaurantes </Link><br /><br />
    </form>
  );
}

export default EditarRestaurante; // Exporta el componente para su uso en App.js