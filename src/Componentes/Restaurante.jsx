import React, {useState} from "react";
import "./Restaurante.css"; // Asegúrate de tener un archivo CSS para estilos

const Restaurante = (props)=>{
    const{nombre, direccion, tipo, imagen, onlike, handlerDislikeTotales} =props;
    //const [likes, setLikes] = useState(0);
    //const [dislikes, setDislikes] = useState(0);
    const [preferencia, setPreferencia] = useState(
        {
            likes: 0,
            dislikes: 0
        }
    );

    
    /*const handlerLike = () =>{
        //setLikes(likes+1);
        setLikes(prevState =>{
            return(prevState + 1);
        }

        );
    }*/

    /*const handlerDislike = () => {
        setDislikes((prevState) => {
            return (prevState - 1);
        });
    }*/

    //TRABAJANDO CON OBJETOS
   const handlerLike = () => {
        setPreferencia((prevState) => {
            return {
                ...prevState,
                likes: prevState.likes + 1
            };
            
        });
        onlike();//llamar funcion que viene de App.js 
    }

    const likes = preferencia.likes;
    const dislikes = preferencia.dislikes;
    
    const handlerDislike = () => {
        setPreferencia((prevState) => {
            return {
                ...prevState,
                dislikes: prevState.dislikes - 1
            };
        });
        handlerDislikeTotales();//llamar funcion que viene de App.js
    }

    
        return(
        <div>
            <h1>{nombre}</h1>
            <h3>{direccion}</h3>
            <h4>{tipo}</h4>
            <img src={imagen}/>
            <h4>likes: {likes}</h4>
            {<button onClick={handlerLike}>Like</button>}
            <h4>dislike: {dislikes}</h4>
            {<button onClick={handlerDislike}>Dislike</button>}
            {/* //crea un formulario que tenga un titulo "Crear Restaurante", labels de nombre, direccion, tipo (es un comboboc), reputacion y un boton Ingresar Restaurante */}
            <div>
                <form>
                <h2>Crear Restaurante</h2>
                <label>Nombre:</label>
                <input type="text" placeholder="Nombre del restaurante" />
                <br />
                <label>Dirección:</label>
                <input type="text" placeholder="Dirección del restaurante" />
                <br />
                <label>Tipo:</label>
                <select>
                    <option value="Panadería">Panadería</option>
                    <option value="Comida Rápida">Comida Rápida</option>
                    <option value="Cafetería">Cafetería</option>
                </select>
                <br />
                <label>Reputación:</label>
                <input type="number" min="1" max="5" placeholder="Reputación del restaurante" />
                <br />
                <button type="submit">Ingresar Restaurante</button>
                </form>
            </div>
            
        </div>);
}
export default Restaurante;