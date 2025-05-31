import React, {useState} from "react";
import "./Restaurante.css";

const Restaurante = (props)=>{
    const{nombre, direccion, tipo, imagen, valoracion, onlike, handlerDislikeTotales} =props;
    const [preferencia, setPreferencia] = useState(
        {
            likes: 0,
            dislikes: 0
        }
    );

    const handlerLike = () => {
        setPreferencia((prevState) => ({
            ...prevState,
            likes: prevState.likes + 1
        }));
        onlike();//llamar funcion que viene de App.js 
    }

    const likes = preferencia.likes;
    const dislikes = preferencia.dislikes;
    
    const handlerDislike = () => {
        setPreferencia((prevState) => ({
            ...prevState,
            dislikes: prevState.dislikes - 1
        }));
        handlerDislikeTotales();//llamar funcion que viene de App.js
    }

    
        return(
        <div>
            <div id="restaurante">
                <h1>Nombre: {nombre}</h1>
                <h3>Direccion: {direccion}</h3>
                <h4>Tipo: {tipo}</h4>
                <img src={imagen} alt={nombre}/>
                {valoracion && <h4>Valoración: {valoracion}</h4>}
                <h4>Likes: {likes}</h4>
                <button onClick={handlerLike}>Like</button>
                <h4>Dislike: {dislikes}</h4>
                <button onClick={handlerDislike}>Dislike</button>
            </div>
            
            
        </div>);

}
export default Restaurante;