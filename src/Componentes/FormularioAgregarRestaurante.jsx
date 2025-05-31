import React, { useState } from "react";
import "./Restaurante.css";

function FormularioAgregarRestaurante({ onAgregar }) {
    const [form, setForm] = useState({
        nombre: "",
        direccion: "",
        tipo: "",
        imagen: "",
        valoracion: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.nombre && form.direccion && form.tipo && form.valoracion) {
            onAgregar({
                ...form,
                imagen: form.imagen || "https://via.placeholder.com/150"
            });
            setForm({
                nombre: "",
                direccion: "",
                tipo: "",
                imagen: "",
                valoracion: ""
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: "30px", background: "#fffbe6", padding: "20px", borderRadius: "10px" }}>
            <h2>Agregar Restaurante</h2>
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
            <button type="submit">Agregar</button>
        </form>
    );
}

export { FormularioAgregarRestaurante };
export default FormularioAgregarRestaurante;