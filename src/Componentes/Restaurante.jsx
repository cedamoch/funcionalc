import React, {useState} from "react";

const Restaurante = (props)=>{
    const{nombre, direccion, tipo, imagen, onlike, handlerDislikeTotales, handlerlikeError } =props;
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
        handlerlikeError();//llamar funcion que viene de App.js
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
            <h4>{handlerlikeError}</h4>
        </div>);
}
export default Restaurante;