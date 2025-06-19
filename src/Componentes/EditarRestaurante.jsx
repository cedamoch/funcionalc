import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./Restaurante.css";

function EditarRestaurante( {restaurantes, onActualizar}) {
  const { id } = useParams(); // Obtiene el id de la URL
  const [form, setForm] = useState({
    nombre: "",
    direccion: "",
    tipo: "",
    imagen: "",
    valoracion: ""
  });

  // Carga los datos del restaurante a editar
    useEffect(() => {
        const restaurante = restaurantes.find(r => String(r.id) === String(id));
        if (restaurante) {
            setForm(restaurante);
        } else {
            // Si no está en el estado, puedes hacer un fetch opcional aquí
            // axios.get(`http://localhost:3000/restaurante/${id}`).then(res => setForm(res.data));
        }
    }, [id, restaurantes]);

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Envía la actualización
    const handleSubmit = (e) => {
        e.preventDefault();// Previene el comportamiento por defecto del formulario (recargar la página)
        onActualizar(id, form); // Llama a la función onActualizar (del padre) para actualizar el restaurante
        setForm({ // Limpia el formulario después de agregar
            nombre: "",
            direccion: "",
            tipo: "",
            imagen: "",
            valoracion:""
        });
    };

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

export default EditarRestaurante;