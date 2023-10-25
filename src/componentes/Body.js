import React from 'react';
import agenda from '../img/agenda.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


const Body = () => {
  const scrollToElementByClass = (className) => {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container-lg d-flex align-items-center justify-content-center">
      <div className="card mx-auto mt-3 text-bg-danger" style={{ maxWidth: '18rem', maxHeight: '400px' }}>
        <img src={agenda} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title d-flex align-items-center justify-content-center">ORGANIZATE!🔥</h5>
          <p className="card-text">
            Todas tus actividades organizadas de la mejor manera, con nuestras agendas, podrás hacerlo de manera
            práctica y bonita.
          </p>
          <button
            className="btn btn-dark d-flex justify-content-center"
            style={{ width: '100%' }}
            onClick={() => scrollToElementByClass('first')}
          >
            VAMOS!!!
          </button>
        </div>
      </div>

      <div className="card mx-auto mt-3 text-bg-danger" style={{ maxWidth: '18rem', maxHeight: '400px' }}>
        <img src={agenda} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title d-flex align-items-center justify-content-center">TOMA NOTA!💯</h5>
          <p className="card-text">
            Lleva tus apuntes y todas tus notas de la facultad en nuestros cuadernos o personaliza el tuyo completamente
            a tu gusto.
          </p>
          <button
            className="btn btn-dark d-flex justify-content-center"
            style={{ width: '100%' }}
            onClick={() => scrollToElementByClass('firstC')}
          >
            VAMOS!!!
          </button>
        </div>
      </div>

      <div className="card mx-auto mt-3 text-bg-danger" style={{ maxWidth: '18rem', maxHeight: '400px' }}>
        <img src={agenda} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title d-flex align-items-center justify-content-center">EXPRESATE!🌲</h5>
          <p className="card-text">
            Escritos, dibujos y todo lo que tu inspiración demuestre, Killing te da una forma divertida y ecológica para
            volcar tus ideas.
          </p>
          <button
            className="btn btn-dark d-flex align-items-center justify-content-center"
            style={{ width: '100%' }}
            onClick={() => scrollToElementByClass('first')}
          >
            VAMOS!!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
