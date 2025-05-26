import React, {useState} from "react";

const Restaurante = (props)=>{
     const{nombre, direccion, tipo, imagen } =props;
     const [likes, setLikes] = useState(0);
     const handlerLike = () =>{
        setLikes(likes+1);
    }
        return(
        <div>
            <h1>{nombre}</h1>
            <h3>{direccion}</h3>
            <h4>{tipo}</h4>
            <img src={imagen}/>
            <h4>{likes}</h4>
            {<button onClick={handlerLike}>Like</button>}
        </div>);
}
export default Restaurante;