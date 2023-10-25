import React from 'react'
import "../cuadernos.css"

const Cuadernos = () => {
  return (
    <div className="firstC">
        <div className="tc2"><h2 className="tcH2">⭐CUADERNOS Y ANOTADORES⭐</h2></div>
        <div className='padre'>
            <div className='carta1'>
              <h2 className='titulo3'><strong>Cuaderno A-5</strong></h2>
              <button className='compra2'>COMPRAR!</button>

            </div>
            <div className='carta2'>
            <h2 className='titulo3'><strong>Cuaderno A-4</strong></h2>
             <button className='compra2'>COMPRAR!</button>
            </div>
            <div className='carta3'>
            <h2 className='titulo3'><strong>Anotadores</strong></h2>
            <button className='compra2'>COMPRAR!</button>
            </div>
            
        </div>
        <footer className='pie2'>
          <nav className='pie-F2'><strong>CONTACTO: Instagram: @KilingAgendas - WSP: 381-11132123</strong></nav>
        </footer>
    </div>
  )
}

export default Cuadernos