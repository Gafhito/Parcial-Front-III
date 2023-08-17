//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import './Card.css';
import React from "react";

function Card({user}) {
  return (
    <div className='card'>
      <div className='card-header'>Hola {user.name}</div>
      <div className='card-body'>
        <p>Sabemos que tu color favorito es</p>
        <p>{user.color}</p>
      </div>
    </div>
  );
}

export default Card;
