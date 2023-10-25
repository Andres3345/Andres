import React from 'react'
import reciclaje from "../img/reciclaje.png";
import "../agendas.css";

const agendas = () => {
  return (
    <div className='first'>
        <div className='divT'>
        <h2 className='titulo2'>⭐Bienvenidos a nuestra sección de Agendas⭐</h2>
        </div>
        <div className='padre'>
            <div className='carta1'>
              <h2 className='titulo'>Personalizadas</h2>
              <button className='compra'>COMPRAR!</button>

            </div>
            <div className='carta2'>
            <h2 className='titulo'>Agenda Docente</h2>
             <button className='compra'>COMPRAR!</button>
            </div>
            <div className='carta3'>
            <h2 className='titulo'>Agenda de Cocina</h2>
            <button className='compra'>COMPRAR!</button>
            </div>
        </div>
        <div className='padre'>
            <div className='carta4'>
              <h2 className='titulo'>Estudiantil</h2>
              <button className='compra'>COMPRAR!</button>
            </div>
            <div className='carta5'>
            <h2 className='titulo'>Emprendedora</h2>
            <button className='compra'>COMPRAR!</button>
            </div>
            <div className='carta6'>
            <h2 className='titulo'>Diaria</h2>
            <button className='compra'>COMPRAR!</button>
            </div>
        </div>
        <div className="flayer">
          <img className="fl-img" src={reciclaje} alt="" />
          <div>
          <h1>Ayudamos al Medio Ambiente</h1>
          <h2>Ademas de bonitas, todas nuestras agendas y cuadernos estan realizados con papel reciclado, ayudando
          así a cuidar el ambiente.</h2></div>
        </div>
        </div>
    
  )
}

export default agendas